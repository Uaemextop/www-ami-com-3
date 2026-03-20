$(function () {
  // $(window).scroll(onScrollStatus);
  $(window).resize(window_resize);
  window_resize();
  setScrollPage();
  setNav();
  init();

  AOS.init();
});

let DW, DH;

function window_resize() {
  DW = window.innerWidth;
  DH = window.innerHeight;

  // console.log('DW:', DW > 768);
  // if (DW > 768) {
  if (DW > 850) {
    $('.nav_area').css('right', 0);
  } else {
    if (!isNavOpen) {
      $('.nav_area').css('right', '-100%');
      isNavOpen = false;
      setMobileNavClose();
    }
  }
}

// function runNum(id, endNum) {
//   let Cont = {
//       val: 0
//     },
//     NewVal = endNum;

//   TweenLite.to(Cont, 3, {
//     delay: 0.3,
//     val: NewVal,
//     roundProps: "val",
//     onUpdate: function () {
//       $(id).text(Cont.val);
//     }
//   });
// }

function setScrollPage() {

  let scrollVal = $(this).scrollTop();

  let checkScroll = () => {
    if (scrollVal >80) {
      $('.fix_aside').addClass('is_active');
      $('.fix_aside_kvShow').addClass('is_active');
      if (DW >= 768) {
        $('nav').addClass('is_active');
      }
    } else {
      $('.fix_aside').removeClass('is_active');
      $('.fix_aside_kvShow').removeClass('is_active');
      if (DW >= 768) {
        $('nav').removeClass('is_active');
      }
    }
  };


  checkScroll();

  $(window).scroll(() => {
    scrollVal = $(this).scrollTop()
    checkScroll();
  })

  let $scrollTopNow = 0,
    $body = $("html, body");

  function bScroll(tarTop, aniDuration) {
    $body.animate({
      scrollTop: tarTop
    }, aniDuration);
  }

  $('.js_page_scroll').on('click', function (e) {
    // $('.js_page_scroll').removeClass('active');
    // $(this).addClass('active');
    $scrollTopNow = $('html, body').scrollTop();
    let $tar = $(this),
      $tarTop = $($tar.attr('href')).offset().top - (DW >= 768 ? 50 : 0),
      $aniDuration = Math.abs($tarTop - $scrollTopNow) * .6 > 1200 ? 1200 : (Math.abs(
        $tarTop - $scrollTopNow) * .6);
    bScroll($tarTop, $aniDuration);


    e.preventDefault();
    if ($(window).width() <= 768) {
      // $('.nav_area').collapse('hide');
      // console.log($tarTop, $aniDuration)
      $('.nav_area').css('right', '-100%');
      isNavOpen = false;
      setMobileNavClose();
    }
  });

}

function init() {

  // DIGITIMES 個資蒐集聲明

  $('.pr_box-tit').data('_isOpen', false);
  $('.pr_box-tit').on('click', function () {
    let _isOpen = $(this).data('_isOpen');
    console.log('_isOpen:', _isOpen);

    if (_isOpen) {
      $('.pr_box-tit').data('_isOpen', false);
      $('.pr_box-cnt').slideUp();
      $('.pr_box-tit .arr').css('transform', 'rotate(180deg)');

    } else {
      $('.pr_box-tit').data('_isOpen', true);
      $('.pr_box-cnt').slideDown();
      $('.pr_box-tit .arr').css('transform', 'rotate(0deg)');

    }
  });

  //


}

//----------------------------------------NAV

var isNavOpen = false;

function setNav() {


  $('.nav_mobile-btn').on('click', function () {
    if (!isNavOpen) {
      setMobileNavOpen();
    } else {
      setMobileNavClose();
    }
  });
}

function setMobileNavOpen() {
  isNavOpen = true;
  gsap.to('.nav_area', 0.6, {
    css: {
      'right': '0%'
    },
    ease: "power4.inOut"
  });

  gsap.to('.HBLine0', 0.3, {
    y: 7,
    rotation: -135,
    ease: "power2.inOut"
  });
  gsap.to('.HBLine1', 0.3, {
    scaleX: 0,
    ease: "power2.inOut"
  });
  gsap.to('.HBLine2', 0.3, {
    y: -7,
    rotation: 135,
    ease: "power2.inOut"
  });
}

function setMobileNavClose() {
  isNavOpen = false;
  gsap.to('.nav_area', 0.6, {
    css: {
      'right': '-100%'
    },
    ease: "power4.inOut"
  });

  gsap.to('.HBLine0', 0.3, {
    y: 0,
    rotation: 0,
    ease: "power2.inOut"
  });
  gsap.to('.HBLine1', 0.3, {
    scaleX: 1,
    ease: "power2.inOut"
  });
  gsap.to('.HBLine2', 0.3, {
    y: 0,
    rotation: 0,
    ease: "power2.inOut"
  });
}


// -----------------------------------------------------------DateFormat

function DateFormat() {
  return new DateFormat.prototype.init();
}
DateFormat.fn = DateFormat.prototype = {
  _default: {
    formatFn: function (date, pattern) {
      date = date || 0;
      pattern = pattern.length;
      return pattern === 1 ? date : (Math.pow(10, pattern) + date + '').slice(-pattern);
    },
    formatMap: {
      Y: function (d, f) {
        return DateFormat.fn._default.formatFn(d.getFullYear(), f);
      },
      M: function (d, f) {
        return DateFormat.fn._default.formatFn(d.getMonth() + 1, f);
      },
      D: function (d, f) {
        return DateFormat.fn._default.formatFn(d.getDate(), f);
      },
      h: function (d, f) {
        return DateFormat.fn._default.formatFn(d.getHours(), f);
      },
      m: function (d, f) {
        return DateFormat.fn._default.formatFn(d.getMinutes(), f);
      },
      s: function (d, f) {
        return DateFormat.fn._default.formatFn(d.getSeconds(), f);
      },
      w: function (d, f) {
        return d.getDay();
      }
    },
  },
  // 初始化
  init: function () {
    return this;
  },
  // 配置
  config: function (config) {
    for (var name in config) {
      this._default[name] = config[name];
    }
    return this;
  },
  // 格式化
  format: function (date, pattern) {

    date = new Date(date);

    if (/Invalid/i.test(date + '')) {
      console.error('请提供一个合法日期！');
      return;
    }

    var _self = this,
      char = '';

    return pattern.replace(/([YMDhsmw])\1*/g,
      function (format) {
        char = format.charAt();
        return _self._default.formatMap[char] ? _self._default.formatMap[char](date, format) : '';
      });
  }
};

DateFormat.fn.init.prototype = DateFormat.fn;