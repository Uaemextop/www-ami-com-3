var $ = jQuery.noConflict();
if ($('.max-roi-calculator').length > 0) {

  const roiInputs = {
    platinum: $('#mrc_group_1_1_input'),
    gold: $('#mrc_group_1_2_input'),
    silver: $('#mrc_group_1_3_input'),
    vendors: $('#mrc_group_1_4_input'),
    breachCost: $('#mrc_group_2_1_input'), // Estimate the cost of a third party breach to your organization (USD)
    annualRev: $('#mrc_group_2_2_input')
  };

  const roIcheckboxes = {
    gdpr: $('#gdpr_checkbox'), // GDPR checkbox
    dora: $('#dora_checkbox'), // DORA checkbox
    nis2: $('#nis2_checkbox') // NIS2 checkbox
  };

  const $supplyChainCheckboxes = $('[id^="supply_chain_"]'); // matches all with id starting with 'supply_chain_'

  const roiHiddenInputs = {
    pmps_t7: parseFloat($('#mrc_pmps_t7').val() || 0),
    gmps_t12: parseFloat($('#mrc_gmps_t12').val() || 0),
    smps_t13: parseFloat($('#mrc_smps_t13').val() || 0),
    upm_s26: parseFloat($('#mrc_upm_s26').val() || 0),
    avd_s28: parseFloat($('#mrc_avd_s28').val() || 0),
    zdaas_s29: parseFloat($('#mrc_zdaas_s29').val() || 0),
    price_slot_v17: parseFloat($('#mrc_price_slot_v17').val() || 0),
    anozdy_aa25: parseFloat($('#mrc_anozdy_aa25').val() || 0),
    cozdq_aa26: parseFloat($('#mrc_cozdq_aa26').val() || 0),
    acpq_ad26: parseFloat($('#mrc_acpq_ad26').val() || 0),
    qrbla_ad27: parseFloat($('#mrc_qrbla_ad27').val() || 0),
    headcount_costs: parseFloat($('#mrc_headcount_costs').val() || 0) // Headcount costs per FTE 150000
  };

  // Log the parsed values for debugging

  // Constants
  const UPM = roiHiddenInputs.upm_s26; // 30000
  const platinumPrice = roiHiddenInputs.pmps_t7; // $1250
  const goldPrice = roiHiddenInputs.gmps_t12; // $635
  const silverPrice = roiHiddenInputs.smps_t13; // $295
  const priceSlot = roiHiddenInputs.price_slot_v17; // 500

  // Output elements
  const outputs = {
    operatingSavings: $('#operatingSavings, #operatingCostSavings, .mrc-iocs'), // Immediate Operating Cost Savings
    maxROI: $('#maxROI'), // Max ROI
    assessmentSavings: $('#assessmentSavings'), // Assessment Cost Reduction (per year)
    headcountCosts: $('#headcountCosts'), // Estimated yearly headcount costs
    efficiency: $('#efficiencyImprovement'), // Supply chain security efficiency improvement
    mitigation: $('#mitigationSavings'), // Potential Risk Mitigation Savings
    breachCost: $('#breachCostOutput'), // Estimated Cost of a Vendor Data Breach
    gdpr: $('#gdprPenalty'), // GDPR Compliance Penalty
    dora: $('#doraPenalty'), // DORA Compliance Penalty
    nis2: $('#nis2Penalty'), // NIS2 Compliance Penalty
    total: $('#totalSavings') // Total Cost Savings
  };

  // Calculation function
  function calculateROI() {
    // Get numeric input values
    const platinumQty = parseFloat(roiInputs.platinum.val().replace(/,/g, '')) || 0;
    const goldQty = parseFloat(roiInputs.gold.val().replace(/,/g, '')) || 0;
    const silverQty = parseFloat(roiInputs.silver.val().replace(/,/g, '')) || 0;
    const thirdPartyVendors = parseFloat(roiInputs.vendors.val().replace(/,/g, '')) || 0;
    const estimateOrgCost = parseFloat(roiInputs.breachCost.val().replace(/,/g, '')) || 0;
    const companyAnnualRev = parseFloat(roiInputs.annualRev.val().replace(/,/g, '')) || 0;
    const gdprValue = roIcheckboxes.gdpr.is(':checked') ? 1 : 0;
    const doraValue = roIcheckboxes.dora.is(':checked') ? 1 : 0;
    const nis2Value = roIcheckboxes.nis2.is(':checked') ? 1 : 0;
    let GDPR = 0;
    let DORA = 0;
    let NIS2 = 0;
    const totalVendorss14 = platinumQty + goldQty + silverQty;

    // --- Max Annual Cost (S22)
    const UPMs26 = silverQty >= 1 ? UPM : 0; // UPM is only applicable if silverQty >= 1
    const platinumCost = platinumQty * platinumPrice;
    const goldCost = goldQty * goldPrice;
    const silverCost = silverQty * silverPrice;
    const totalTierCostU14 = platinumCost + goldCost + silverCost;
    const fullMonitorCost = (platinumQty + goldQty) * priceSlot;
    const fullMonitorUPMCostS19 = fullMonitorCost + UPMs26;
    const maxAnnualCosts22 = totalTierCostU14 + fullMonitorUPMCostS19;

    // --- DIY platform annual price (A + B)
    const diyPlatformPriceS30 = fullMonitorCost + (platinumQty * 1500);

    // --- Cost of FTE
    const costofFTEx25 = (1.5 * platinumQty) + (1 * goldQty) + (0.5 * silverQty);
    const costofFTEs35 = costofFTEx25 * 2.5 * 0.001;
    const costofFTEs38 = costofFTEs35 * roiHiddenInputs.headcount_costs * (
      1 + (
        -0.0233 + (6.91 * 0.00001 * costofFTEx25) + (3.33 * 0.000000001 * costofFTEx25 * costofFTEx25)
      ) / 2
    );

    // DIY platform annual price (S39)
    const diyPlatformAPS25 = (platinumQty * 500) + (goldQty * 500);
    const diyPlatformAPS30 = platinumQty * 1500;
    const SCRI = diyPlatformAPS25 * 0.2;
    const AVD = roiHiddenInputs.avd_s28; // $75000
    const ZDaaS = roiHiddenInputs.zdaas_s29; // $45000
    const questionnaires = platinumQty * 1500;
    const diyPlatformAnnualPriceS39 = diyPlatformAPS25 + UPMs26 + SCRI + AVD + ZDaaS + questionnaires;

    // DIY total cost per year ( S39 + S38)
    const diyTotalCostYearS41 = diyPlatformAnnualPriceS39 + costofFTEs38;
    // Assessment Cost Reduction P26
    const AA25 = roiHiddenInputs.anozdy_aa25 // Average Number of Zero-Days/Year
    const AA26 = roiHiddenInputs.cozdq_aa26 // $15 Cost of zero-day questionnaire
    const AD26 = roiHiddenInputs.acpq_ad26 // $150 Average Cost of Questionnaire
    const AD27 = roiHiddenInputs.qrbla_ad27 / 100 // 30% Questionnaire Reduced by Likelihood Assessment
    const assesmentCostP26 = (thirdPartyVendors * AA25 * AA26) + (totalVendorss14 * AD26 * (1 - AD27)); // $value

    // Max Savings S44 = (S41 - S22)+P26
    // const maxSavingsS44 = Math.max(0, (diyTotalCostYearS41 - maxAnnualCosts22) + assesmentCostP26);
    const maxSavingsS44 = (diyTotalCostYearS41 - maxAnnualCosts22) + assesmentCostP26;

    // Max ROI S45 = (S44/S22)*100
    const maxROIS46 = (maxSavingsS44 / maxAnnualCosts22) * 100;

    // GDPR if((P10*4%)<20000000, 20000000, (4%*P10))
    if (gdprValue === 1) {
      GDPR = (companyAnnualRev * 0.04 < 20000000) ? 20000000 : companyAnnualRev * 0.04;
    }

    // DORA P10*2%
    if (doraValue === 1) {
      DORA = companyAnnualRev * 0.02;
    }

    // NIS2 if((P10*2%)<10000000, 10000000, (2%*P10))
    if (nis2Value === 1) {
      NIS2 = (companyAnnualRev * 0.02 < 10000000) ? 10000000 : companyAnnualRev * 0.02;
    }

    // Total Cost Savings P36 (P25 + P33)
    const potentialSavingsp33 = estimateOrgCost + GDPR + DORA + NIS2;

    const totalCostSavingsP36 = maxSavingsS44 + potentialSavingsp33;

    // --- TOTAL savings minus DIY Cost P37
    const totalSavingsDIYcostP37 = maxAnnualCosts22 > 0 ? totalCostSavingsP36 / maxAnnualCosts22 * 100 : 0;

    // --- Supply Chain Security checkboxes
    let supplyChainUncheckedTotal = 0;
    $supplyChainCheckboxes.each(function () {
      const $checkbox = $(this);
      const isChecked = $checkbox.is(':checked');
      const id = $checkbox.attr('id');
      const value = parseFloat($checkbox.val()) || 0;
      if (!isChecked) {
        supplyChainUncheckedTotal += value;
      }
    });

    // --- HTML Output
    outputs.operatingSavings.text('$' + Math.round(maxSavingsS44).toLocaleString());
    outputs.maxROI.text(Math.round(totalSavingsDIYcostP37) + '%');
    outputs.assessmentSavings.text('$' + Math.round(assesmentCostP26).toLocaleString());
    outputs.headcountCosts.text('$' + Math.round(costofFTEs38).toLocaleString());
    outputs.efficiency.text(supplyChainUncheckedTotal + '%');
    outputs.mitigation.text('$' + Math.round(potentialSavingsp33).toLocaleString());
    outputs.breachCost.text('$' + Math.round(estimateOrgCost).toLocaleString());
    outputs.gdpr.text(GDPR > 0 ? '$' + Math.round(GDPR).toLocaleString() : 'N/A');
    outputs.dora.text(DORA > 0 ? '$' + Math.round(DORA).toLocaleString() : 'N/A');
    outputs.nis2.text(NIS2 > 0 ? '$' + Math.round(NIS2).toLocaleString() : 'N/A');
    outputs.total.text('$' + Math.round(totalCostSavingsP36).toLocaleString());
  }

  // Bind events
  function bindEvents() {
    Object.values(roiInputs).forEach($el => $el.on('input', calculateROI));

    const checkboxFields = [
      ...Object.values(roIcheckboxes),
      ...$supplyChainCheckboxes.toArray().map(el => $(el))
    ];
    checkboxFields.forEach($el => $el.on('change', calculateROI));
  }
  // Bind events
  bindEvents();

  // Run once on page load
  calculateROI();
}

if ($('.max-roi-calculator').length > 0) {
  /* Custom Range Slider */
  function updateSlider($container, value, min, max) {
    const percent = ((value - min) / (max - min)) * 100;
    $container.find('.mrc-range-progress').css('width', percent + '%');
    $container.find('.mrc-range-thumb').css('left', percent + '%');
  }

  $('.mrc-range-wrapper').each(function () {
    const $wrapper = $(this);
    const $slider = $wrapper.find('.mrc-range-container');
    const $input = $wrapper.find('.mrc-range-input');
    const $thumb = $wrapper.find('.mrc-range-thumb');
    const min = parseInt($slider.data('min'));
    const max = parseInt($slider.data('max'));

    // Add error message container if not exists
    let $error = $wrapper.find('.mrc-error');
    if ($error.length === 0) {
      $error = $('<div class="mrc-error" style="display:none; color:red; font-size: 12px;"></div>');
      $input.after($error);
    }

    function validateInput(val) {
      if (isNaN(val) || val < min) {
        $error.text('Minimum value allowed is ' + min).show();
        $input.addClass('error');
        return false;
      } else if (val > max) {
        $error.text('Maximum value allowed is ' + max).show();
        $input.addClass('error');
        return false;
      } else {
        $error.hide();
        $input.removeClass('error');
        return true;
      }
    }

    // Initial setup
    let initialVal = parseInt($input.val(), 10);

    if (isNaN(initialVal) || !validateInput(initialVal)) {
      let correctedVal = isNaN(initialVal) ? min : Math.max(min, Math.min(max, initialVal));
      $input.val(correctedVal);
      updateSlider($slider, correctedVal, min, max);
      // Hide error if we auto-corrected
      $error.hide();
      $input.removeClass('error');
    } else {
      updateSlider($slider, initialVal, min, max);
    }

    $input.on('input', function () {
      let rawVal = $(this).val().replace(/,/g, ''); // Remove commas
      let val = parseInt(rawVal, 10);

      if (!validateInput(val)) return;

      val = Math.max(min, Math.min(max, val));
      updateSlider($slider, val, min, max);
    });

    $input.on('blur', function () {
      let rawVal = $(this).val().replace(/,/g, '');
      let val = parseInt(rawVal, 10);
      if (isNaN(val) || val < min) {
        val = min;
      } else if (val > max) {
        val = max;
      }

      $input.val(val.toLocaleString('en-US')); // format value
      updateSlider($slider, val, min, max);
      validateInput(val);
      syncSensitive();
    });

    // Syncing sensitive vendors with critical vendors
    const $criticalInput = $('#mrc_group_1_1_input');
    const $sensitiveInput = $('#mrc_group_1_4_input');
    let userOverridden = false;

    function syncSensitive() {
      if (!userOverridden) {
        // Defer to ensure formatting is applied
        setTimeout(() => {
          $sensitiveInput.val($criticalInput.val()).trigger('input');
        }, 0);
      }
    }

    $criticalInput.on('input', function () {
      syncSensitive();
    });

    $sensitiveInput.on('input', function () {
      if ($sensitiveInput.val() !== $criticalInput.val()) {
        userOverridden = true;
      }
    });

    $sensitiveInput.on('blur', function () {
      if ($sensitiveInput.val() === '' || $sensitiveInput.val() === $criticalInput.val()) {
        userOverridden = false;
        syncSensitive();
      }
    });

    syncSensitive();

    // Range Slider code started
    // Click on slider to jump
    $slider.on('click', function (e) {
      const offset = $(this).offset().left;
      const width = $(this).width();
      const clickX = e.pageX - offset;
      let percent = clickX / width;
      percent = Math.max(0, Math.min(1, percent));
      const val = Math.round(min + percent * (max - min));
      updateSlider($slider, val, min, max);
      $input.val(val.toLocaleString('en-US')).trigger('input');
    });

    // Drag support (mouse + touch)
    let dragging = false;

    function handleDrag(clientX) {
      const offset = $slider.offset().left;
      const width = $slider.width();
      const dragX = clientX - offset;
      let percent = dragX / width;
      percent = Math.max(0, Math.min(1, percent));
      const val = Math.round(min + percent * (max - min));

      updateSlider($slider, val, min, max);
      $input.val(val.toLocaleString('en-US')).trigger('input');
    }

    // Mouse drag
    $thumb.on('mousedown', function (e) {
      e.preventDefault();
      dragging = true;
      $('body').addClass('no-select');

      $(document).on('mousemove.sliderDrag', function (e) {
        if (!dragging) return;
        handleDrag(e.pageX);
      });

      $(document).on('mouseup.sliderDrag', function () {
        dragging = false;
        $(document).off('.sliderDrag');
        $('body').removeClass('no-select');
      });
    });

    // Touch drag
    $thumb.on('touchstart', function (e) {
      e.preventDefault();
      dragging = true;
      $('body').addClass('no-select');

      $(document).on('touchmove.sliderDrag', function (e) {
        if (!dragging || !e.originalEvent.touches.length) return;
        handleDrag(e.originalEvent.touches[0].pageX);
      });

      $(document).on('touchend.sliderDrag touchcancel.sliderDrag', function () {
        dragging = false;
        $(document).off('.sliderDrag');
        $('body').removeClass('no-select');
      });
    });
  });
  /* Custom Range Slider */

  /* Allow only numbers to input End*/
  const currencyInputs = document.querySelectorAll('.mrc-range-input, .mrc-currency_input');

  currencyInputs.forEach(input => {
    input.addEventListener('input', function () {
      let position = input.selectionStart;
      let rawValue = input.value.replace(/[^0-9]/g, '');

      if (rawValue === '') {
        input.value = '';
        return;
      }

      let formattedValue = Number(rawValue).toLocaleString('en-US');

      input.value = formattedValue;

      // Cursor logic
      let digitsBeforeCursor = rawValue.slice(0, position);
      let newCursorPos = 0;
      let digitIndex = 0;

      for (let i = 0; i < formattedValue.length; i++) {
        if (/\d/.test(formattedValue[i])) {
          digitIndex++;
        }
        if (digitIndex >= digitsBeforeCursor.length) {
          newCursorPos = i + 1;
          break;
        }
      }

      input.setSelectionRange(newCursorPos, newCursorPos);
      input.classList.remove('is-invalid'); // remove warning as user types
    });

    input.addEventListener('blur', function () {
      let rawValue = input.value.replace(/[^0-9]/g, '');

      // Ensure rawValue is valid before parsing
      if (rawValue === '') {
        input.value = '';
        return;
      }

      const min = parseInt(input.dataset.min, 10);
      const max = parseInt(input.dataset.max, 10);

      // Fallback if the value isn't a number (in case of NaN)
      let numericValue = parseInt(rawValue, 10);
      if (isNaN(numericValue)) {
        numericValue = 0; // Fallback to 0 if invalid input
      }

      let isValid = true;
      if (!isNaN(min) && numericValue < min) isValid = false;
      if (!isNaN(max) && numericValue > max) isValid = false;

      if (!isValid) {
        input.classList.add('is-invalid');
      } else {
        input.classList.remove('is-invalid');
        // Set the value after the validation
        setTimeout(() => {
          input.value = numericValue.toLocaleString('en-US');
        }, 10);
      }
    });
    // Error handling for empty input
    input.addEventListener("blur", function () {
      if (input.value.trim() === "") {
        input.classList.add("error");
      } else {
        input.classList.remove("error");
      }
    });
  });
  /* Allow only numbers to input End */

  /* MAX Calculator */
  const scrollBtn = document.querySelector('.mrc-scroll-top-btn');
  if (scrollBtn) {
    scrollBtn.addEventListener('click', function () {
      const target = document.querySelector('.mrc-results-summary-card');
      const header = document.querySelector('.main-header');

      if (target) {
        const headerHeight = header ? header.offsetHeight : 0;
        const y = target.getBoundingClientRect().top + window.pageYOffset - headerHeight;
        window.scrollTo({
          top: y,
          behavior: 'smooth'
        });
      }
    });
  }
  /* MAX Calculator End */

}