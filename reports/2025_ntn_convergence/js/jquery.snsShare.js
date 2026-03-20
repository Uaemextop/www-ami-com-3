/*
 * jQuery SNS Share Plugin
 *
 * @author sj
 * @link https://github.com/samejack/SnsShare
 * @copyright Copyright 2014 SJ
 * @version 1.0.0
 * @license Apache License Version 2.0 (https://github.com/samejack/SnsShare/blob/master/LICENSE)
 */
jQuery.fn.snsShare = function (message, url) {

  var getAtagElement, makeMouseClickEvent, types;

  /**
   * Get ths a tag singleton
   * @returns {HTMLElement}
   */
  getAtagElement = function () {
    var element = document.getElementById('share-a-tag');
    if (element === null) {
      element = document.createElement('a');
      element.style = "display: none;";
      element.id = 'share-a-tag';
      element.target = "_blank";
      document.getElementsByTagName('body')[0].appendChild(element);
    }
    return element;
  };

  /**
   * Create a mouse click event
   * @returns {Event}
   */
  makeMouseClickEvent = function () {
    var clickEvent = document.createEvent('MouseEvents');
    clickEvent.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);
    return clickEvent;
  };

  /**
   * Implement SNS types
   * @type {string[]}
   */
  types = ['facebook', 'google+', 'line', 'twitter', 'linkedin'];

  // fix URL
  if (typeof (url) === 'undefined') {
    url = window.location;
  }

  return this.each(function () {
    jQuery(this).click(function () {
      var element, snsType = jQuery(this).attr('data-sns'),
        protocol;
      if (typeof (snsType) === 'string' && jQuery.inArray(snsType, types) !== -1) {
        if (typeof (message) === 'undefined') {
          message = window.location;
        }
        protocol = location.protocol;
        switch (snsType) {
          case 'facebook':
            element = getAtagElement();
            element.href = protocol + '//www.facebook.com/sharer.php?u=' + url + '&t=' + encodeURIComponent(message);
            element.dispatchEvent(makeMouseClickEvent());
            break;
          case 'google+':
            element = getAtagElement();
            element.href = protocol + '//plus.google.com/share?url=' + url;
            element.dispatchEvent(makeMouseClickEvent());
            break;
          case 'line':
            element = getAtagElement();
            // element.href = protocol + '//line.naver.jp/R/msg/text/?' + encodeURIComponent(message) + '%0D%0A' + encodeURIComponent(url);
            element.href = protocol + '//social-plugins.line.me/lineit/share?url=' + encodeURIComponent(url);
            console.log('element.href:', element.href);
            element.dispatchEvent(makeMouseClickEvent());
            break;
          case 'twitter':
            element = getAtagElement();
            element.href = protocol + '//twitter.com/home/?status=' + encodeURIComponent(message + ' ' + url);
            element.dispatchEvent(makeMouseClickEvent());
            break;
          case 'linkedin':
            element = getAtagElement();
            element.href = protocol + '//www.linkedin.com/shareArticle?mini=true&url=' + encodeURIComponent(url) + '&title=' + encodeURIComponent(message);
            element.dispatchEvent(makeMouseClickEvent());
            break;
          default:
            alert('SNS type not found. (' + options + ')');
        }
      } else {
        alert('data-sns attribute not set.');
      }
    });
  });
};