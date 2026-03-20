/* Global Inline Layout Enhancer for Marketo Form 1817
 * Mirrors homepage RelatedPosts inline Email | Country | Submit grid everywhere the form appears.
 * Non-destructive: Only activates for #mktoForm_1817; idempotent via data flags.
 * Handles late Country field insertion & prevents duplicate Mkto load if already loaded by block.
 */
(function(){
  var FORM_ID = 1817;
  var MUNCHKIN = '479-ZYW-907';
  var DOMAIN = '//engaged.arm.com';
  var LAYOUT_FLAG = 'mktoInlineFirstRow'; // reuse class + data attribute for detection
  var STYLE_ID = 'mkto-inline-row-styles-global-1817';
  var BREAK_DESK = 880, BREAK_MOB = 600;
  var POLL_MAX = 60, POLL_DELAY = 100; // up to ~6s primary
  var COUNTRY_SELECTOR = '#Country, #Country__c, select[name="Country"], select[name="Country__c"], select[id*="Country"], select[name*="Country"], input[name="Country"], input[name="Country__c"], input[id*="Country"], input[name*="Country"]';
  var DEBUG = false; // set true for console diagnostics

  function q(sel, ctx){ return (ctx||document).querySelector(sel); }
  function qa(sel, ctx){ return Array.prototype.slice.call((ctx||document).querySelectorAll(sel)); }

  function injectStyles(){
    if(document.getElementById(STYLE_ID)) return;
    var css = ''+
      '#mktoForm_'+FORM_ID+' .mktoFormRow.__preInline{display:grid;grid-template-columns:minmax(200px,1fr) auto;gap:10px;align-items:start;width:100%;}' +
      '#mktoForm_'+FORM_ID+' .mktoFormRow.__preInline .mktoFieldDescriptor{margin:0!important;width:auto!important;}' +
      '#mktoForm_'+FORM_ID+' .mktoFormRow.__preInline input.mktoField{width:100%!important;min-width:0;}' +
      '#mktoForm_'+FORM_ID+' .mktoFormRow.__preInline .mktoButtonWrap{margin:0!important;align-self:stretch;display:flex;}' +
      '#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow{display:grid;grid-template-columns:minmax(200px,1fr) minmax(140px,1fr) auto;gap:10px;align-items:start;width:100%;}' +
      '#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow .mktoFieldDescriptor{margin:0!important;width:auto!important;}' +
      '#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow input.mktoField,'+
      '#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow select.mktoField{width:100%!important;min-width:0;}' +
      '#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow .mktoButtonWrap{margin:0!important;align-self:stretch;display:flex;}' +
      '#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow .mktoButton{height:40px;white-space:nowrap;}' +
      '#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow .mktoGutter,'+
      '#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow .mktoOffset{display:none!important;}' +
      '#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow .mktoError{position:static!important;margin-top:4px;transform:none;}' +
      '@media(max-width:'+BREAK_DESK+'px){#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow{grid-template-columns:1fr 1fr;}#mktoForm_'+FORM_ID+' .mktoFormRow.__preInline{grid-template-columns:1fr auto;}}' +
      '@media(max-width:'+BREAK_MOB+'px){#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow{grid-template-columns:1fr;}#mktoForm_'+FORM_ID+' .mktoFormRow.mktoInlineFirstRow .mktoButtonWrap{width:100%;}#mktoForm_'+FORM_ID+' .mktoFormRow.__preInline{grid-template-columns:1fr;}}';
    var style = document.createElement('style'); style.id = STYLE_ID; style.textContent = css; document.head.appendChild(style);
  }

  function moveButton(formEl){
    if(!formEl || formEl.dataset[LAYOUT_FLAG]==='1') return true;
    var firstRow = formEl.querySelector('.mktoFormRow');
    if(!firstRow) return false;
    if(!firstRow.classList.contains('__preInline')) firstRow.classList.add('__preInline');
    var email = formEl.querySelector('#Email');
    var submitBtn = formEl.querySelector('button[type="submit"], .mktoButton');
    if(!email || !submitBtn) return false;
    injectStyles();
    var buttonWrap = submitBtn.closest('.mktoButtonWrap') || submitBtn.parentElement;
    var buttonRow = buttonWrap ? buttonWrap.closest('.mktoFormRow') : null;
    firstRow.querySelectorAll('.mktoClear').forEach(function(c){ c.remove(); });
    firstRow.querySelectorAll('.mktoFieldDescriptor').forEach(function(col){ col.style.margin='0'; col.querySelectorAll('.mktoClear').forEach(function(c){ c.remove(); }); });
    if(buttonWrap && !firstRow.contains(buttonWrap)) firstRow.appendChild(buttonWrap);
    if(buttonRow && buttonRow !== firstRow && !buttonRow.querySelector('.mktoButtonWrap')){ buttonRow.parentElement && buttonRow.parentElement.removeChild(buttonRow); }
    firstRow.classList.add('mktoInlineFirstRow');
    firstRow.classList.remove('__preInline');
    pruneExtraFields(formEl); // hide extraneous descriptors before we finalize layout
    insertCountry(firstRow, formEl); // attempt immediate country placement (may be late)
    formEl.dataset[LAYOUT_FLAG] = '1';
    return true;
  }

  function potentialCountryCandidate(node){
    if(!node) return false;
    if(node.tagName === 'SELECT') return true;
    var id = node.id || ''; var name = node.name || '';
    return /country/i.test(id) || /country/i.test(name);
  }

  function pruneExtraFields(formEl){
    if(!formEl) return false;
    var email = formEl.querySelector('#Email');
    if(!email) return false; // wait for essential field
    var country = formEl.querySelector(COUNTRY_SELECTOR);
    // 1. Hide extra field descriptor columns (legacy approach like 1706) - descriptors may have both mktoFieldDescriptor + mktoFormCol classes
    qa('.mktoFieldDescriptor', formEl).forEach(function(fd){
      // keep email descriptor
      if(fd.contains(email)) return;
      // keep country if present
      if(country && fd.contains(country)) return;
      // if country not yet present, retain anything that might become it
      if(!country){
        var possible = fd.querySelector('select[id*="Country"], select[name*="Country"], input[id*="Country"], input[name*="Country"], select');
        if(potentialCountryCandidate(possible)) return;
      }
      // Hide descriptor (non-destructive removal)
      fd.classList.add('mktoHiddenRow');
      fd.style.display = 'none';
    });
    // 2. Hide entire secondary rows that contain only HtmlText (privacy policy, placeholders) – rows missing essential fields
    qa('.mktoFormRow', formEl).forEach(function(row, idx){
      if(idx === 0) return; // skip first (inline) row
      if(row.contains(email) || (country && row.contains(country))) return; // safety
      // If row has any visible input/select other than hidden fields, keep
      var interactive = row.querySelector('input:not([type="hidden"]), select, textarea, button');
      if(interactive) return;
      var htmlText = row.querySelector('.mktoHtmlText');
      if(htmlText){
        row.classList.add('mktoHiddenRow');
        htmlText.classList.add('mktoHiddenRow');
        row.style.display = 'none';
      }
    });
    return true;
  }

  function insertCountry(firstRow, formEl){
    var country = formEl.querySelector(COUNTRY_SELECTOR);
    if(!country) return false;
    var wrap = country.closest('.mktoFieldDescriptor') || country.closest('.mktoFieldWrap');
    var buttonWrap = firstRow.querySelector('.mktoButtonWrap');
    if(wrap && firstRow && !firstRow.contains(wrap)){
      firstRow.insertBefore(wrap, buttonWrap || null);
      return true;
    }
    return false;
  }

  function watchLateCountry(formEl){
    var firstRow = formEl.querySelector('.mktoInlineFirstRow');
    var attempts = 0; var max = POLL_MAX; // reuse same budget
    (function tick(){
      var inserted = insertCountry(firstRow, formEl);
      if(inserted){ pruneExtraFields(formEl); return; }
      if(++attempts < max) setTimeout(tick, POLL_DELAY);
    })();
    // MutationObserver to catch truly late Country insertion
    try {
      var mo = new MutationObserver(function(){
        if(insertCountry(firstRow, formEl)) { pruneExtraFields(formEl); mo.disconnect(); if(DEBUG) console.log('[Mkto1817] Country detected via mutation observer'); }
      });
      mo.observe(formEl, {childList:true, subtree:true});
    } catch(e){ if(DEBUG) console.log('[Mkto1817] MutationObserver failed', e); }
  }

  function establish(formEl){
    var attempts = 0;
    (function poll(){
      if(moveButton(formEl)) { watchLateCountry(formEl); return; }
      if(++attempts < POLL_MAX) setTimeout(poll, POLL_DELAY);
    })();
  }

  function attachRenderHook(mkForm, formEl){
    try { mkForm.onRender(function(){ setTimeout(function(){ moveButton(formEl); }, 30); }); } catch(e){}
    establish(formEl); // also poll
  }

  function loadMktoIfNeeded(formEl){
    if(formEl.getAttribute('data-loaded')==='1') return; // already loaded
    function actuallyLoad(){
      if(typeof MktoForms2 === 'undefined') return; // still not ready
      if(typeof MktoForms2.setOptions === 'function') {
        MktoForms2.setOptions({ formXDPath : '/rs/'+MUNCHKIN+'/images/marketo-xdframe-relative.html' });
      }
      MktoForms2.loadForm(DOMAIN, MUNCHKIN, FORM_ID, function(form){
        formEl.setAttribute('data-loaded','1');
        try { form.onSuccess(function(values, followUpUrl){ window.location = '/thank-you-blog'; return false; }); } catch(e){}
        attachRenderHook(form, formEl);
      });
    }
    if(typeof MktoForms2 === 'undefined') {
      var existing = document.querySelector('script[src*="forms2.min.js"]');
      if(!existing){
        var s = document.createElement('script');
        s.src = DOMAIN + '/js/forms2/js/forms2.min.js';
        s.onload = actuallyLoad;
        document.head.appendChild(s);
      } else {
        existing.addEventListener('load', actuallyLoad, { once:true });
      }
    } else {
      actuallyLoad();
    }
  }

  function initForm(formEl){
    if(!formEl || formEl.dataset.__inlineEnhancer==='1') return;
    formEl.dataset.__inlineEnhancer = '1';
    // Deduplication: if form already contains a nested SECOND full mktoForm markup due to prior duplicate injection, keep first segment only.
    var innerForms = formEl.querySelectorAll('form#mktoForm_'+FORM_ID+' form#mktoForm_'+FORM_ID);
    if(innerForms.length){
      innerForms.forEach(function(dup){ dup.parentElement && dup.parentElement.removeChild(dup); });
    }
    if(typeof MktoForms2 !== 'undefined' && formEl.children.length && formEl.querySelector('.mktoFormRow')){
      // Already rendered (e.g., homepage after original script). Just enhance.
      moveButton(formEl); // includes pruneExtraFields
      watchLateCountry(formEl); // will attempt late country + re-prune
      return;
    }
    loadMktoIfNeeded(formEl);
  }

  function scan(){
    qa('#mktoForm_'+FORM_ID).forEach(initForm);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', scan); else scan();
  var mo = new MutationObserver(function(){ scan(); });
  mo.observe(document.documentElement, {childList:true, subtree:true});
})();
