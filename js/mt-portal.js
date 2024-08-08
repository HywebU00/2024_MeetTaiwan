var contextPath = '';

$(function () {
  //2023-永續 page 特別頁
  if ($('.certpage-tw').length > 0 || $('.certpage').length > 0) {
    //slick

    window.addEventListener('load', function () {
      $('.mt-kv-html').append('<div class="control"></div>');
      //slick
      $('.mt-kv-html .kvSlider').slick({
        arrows: true, //左右箭頭
        autoplay: true, //自動播放
        autoplaySpeed: 15000, //自動播放秒數
        dots: true, //顯示圓點
        dotsClass: 'slick-dots', //原點css
        draggable: true, //滑鼠可以拖曳
        infinite: true, //無限輪播
        pauseOnHover: true, //滑鼠移過後暫停自動撥放
        pauseOnDotsHover: false, //滑鼠移過圓點後暫停自動撥放
        rtl: false, //改變輪播方向
        slidesToShow: 1, //一次顯示幾張
        slidesToScroll: 1, //一次輪播幾張
        vertical: false, //改成垂直方向
        lazyLoad: 'ondemand', //lazyLoad
        fade: true, //淡入
        appendArrows: '.control',
        appendDots: '.control',
      });
      $('.mt-kv-html .kvSlider').slick('refresh');

      $('.mt-about .listBox').slick({
        arrows: false, //左右箭頭
        autoplay: true, //自動播放
        autoplaySpeed: 15000, //自動播放秒數
        dots: true, //顯示圓點
        dotsClass: 'slick-dots', //原點css
        draggable: true, //滑鼠可以拖曳
        infinite: true, //無限輪播
        pauseOnHover: true, //滑鼠移過後暫停自動撥放
        pauseOnDotsHover: false, //滑鼠移過圓點後暫停自動撥放
        rtl: false, //改變輪播方向
        slidesToShow: 1, //一次顯示幾張
        slidesToScroll: 1, //一次輪播幾張
        vertical: false, //改成垂直方向
        lazyLoad: 'ondemand', //lazyLoad
        fade: true, //淡入
      });
      $('.mt-about .listBox').slick('refresh');

      $('.mt-kv4').append('<div class="control"></div>');

      $('.mt-kv4 .kvSlider').slick({
        arrows: true, //左右箭頭
        autoplay: true, //自動播放
        autoplaySpeed: 15000, //自動播放秒數
        dots: true, //顯示圓點
        dotsClass: 'slick-dots', //原點css
        draggable: true, //滑鼠可以拖曳
        infinite: true, //無限輪播
        pauseOnHover: true, //滑鼠移過後暫停自動撥放
        pauseOnDotsHover: false, //滑鼠移過圓點後暫停自動撥放
        rtl: false, //改變輪播方向
        slidesToShow: 1, //一次顯示幾張
        slidesToScroll: 1, //一次輪播幾張
        vertical: false, //改成垂直方向
        lazyLoad: 'ondemand', //lazyLoad
        fade: true, //淡入
        appendArrows: '.control',
        appendDots: '.control',
      });

      $('.mt-kv4 .kvSlider').slick('refresh');

      if ($('.mt-topVideo').length > 0) {
        const check = document.querySelector('.mt-topVideo');
        const font = document.querySelector('.mt-topVideo .title');
        const options = {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          threshold: 0.8,
        };
        const callback = (entries, observer) => {
          if (entries[0].isIntersecting && !check.classList.contains('active')) {
            check.classList.add('active');
            font.style.cssText = ' opacity: 1;bottom: 10px';
            // } else {
            //   check.classList.remove('active');
            //   font.style.cssText = ' opacity: 0;bottom: -300px';
          }
        };

        const observer1 = new IntersectionObserver(callback, options);
        observer1.observe(check);
      }
      if ($('.mt-st').length > 0) {
        const count11 = document.querySelector('.mt-st .count1 span');
        const count12 = document.querySelector('.mt-st .count2 span');
        const count13 = document.querySelector('.mt-st .count3 span');
        const count14 = document.querySelector('.mt-st .count4 span');
        const count15 = document.querySelector('.mt-st .count5 span');
        const check1 = document.querySelector('.mt-st ul');
        const options1 = {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          threshold: 0.2,
        };
        const callback1 = (entries, observer) => {
          if (entries[0].isIntersecting && !check1.classList.contains('active')) {
            check1.classList.add('active');
            setTimeout(() => {
              animateNumber(count11, 0, 19, 2000);
              animateNumber(count12, 0, 5, 500);
              animateNumber(count13, 0, 9, 1000);
              animateNumber(count14, 0, 4, 400);
              animateNumber(count15, 0, 1, 100);
            }, 500);
            // } else {
            //   check.classList.remove('active');
            //   count1.innerHTML = 0;
            //   count2.innerHTML = 0;
            //   count3.innerHTML = 0;
            //   count4.innerHTML = 0;
            //   count5.innerHTML = 0;
          }
        };

        const observer1 = new IntersectionObserver(callback1, options1);
        observer1.observe(check1);
      }

      if ($('.mt-sp').length > 0) {
        const count11 = document.querySelector('.mt-sp .count1 span');
        const count12 = document.querySelector('.mt-sp .count2 span');
        const check1 = document.querySelector('.mt-sp .depth');
        const options1 = {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          threshold: 0.2,
        };
        const callback1 = (entries, observer) => {
          if (entries[0].isIntersecting && !check1.classList.contains('active')) {
            check1.classList.add('active');
            setTimeout(() => {
              animateNumber(count11, 0, count11.innerHTML, 2000);
              animateNumber(count12, 0, count12.innerHTML, 2000);
            }, 500);
            // } else {
            //   check.classList.remove('active');
            //   count1.innerHTML = 0;
            //   count2.innerHTML = 0;
            //   count3.innerHTML = 0;
            //   count4.innerHTML = 0;
            //   count5.innerHTML = 0;
          }
        };

        const observer1 = new IntersectionObserver(callback1, options1);
        observer1.observe(check1);
      }
      if ($('.mt-wp').length > 0) {
        const check3 = document.querySelector('.mt-wp');
        const options3 = {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          threshold: 0,
        };
        const callback3 = (entries, observer) => {
          if (entries[0].isIntersecting && !check3.classList.contains('active')) {
            check3.classList.add('active');
          } else {
            check3.classList.remove('active');
          }
        };

        const observer = new IntersectionObserver(callback3, options3);
        observer.observe(check3);
      }

      (function () {
        if ($('.mt-city-top-info').length > 0) {
          let today = new Date();
          // 取得月份（從0開始，所以需要加1）
          let month = today.getMonth() + 1;
          let dTarget = document.querySelector('.mt-city-top-info .listBox .item .info .con .d');
          let mList = document.querySelectorAll('.mt-city-top-info .moreInfo');
          let mListLi = document.querySelectorAll('.mt-city-top-info .moreInfo li');
          let btn = document.querySelector('.mt-city-top-info .listBox .item .info .con button');
          btn.addEventListener('click', function () {
            mList.classList.toggle('active');
          });
          if (month >= 3 && month <= 5) {
            dTarget.innerHTML = mListLi[0].querySelector('.temperature').innerHTML;
          } else if (month >= 6 && month <= 8) {
            dTarget.innerHTML = mListLi[1].querySelector('.temperature').innerHTML;
          } else if (month >= 9 && month <= 11) {
            dTarget.innerHTML = mListLi[2].querySelector('.temperature').innerHTML;
          } else if (month >= 12 && month <= 2) {
            dTarget.innerHTML = mListLi[3].querySelector('.temperature').innerHTML;
          }
        }
      })();
      //city

      if ($('.mt-search2').length > 0) {
        let checkSearch = document.querySelector('.mt-search2 input');
        let searchListLi = document.querySelectorAll('.mt-search2 li li');
        let searchList = document.querySelector('.mt-search2 .list ul');
        let oList = searchList.innerHTML;
        let searchArr = [];
        let newList;

        searchListLi.forEach((e) => {
          searchArr.push(e.innerText);
          newList = [].concat(...searchArr);
        });

        checkSearch.addEventListener('input', function (e) {
          let searchAns = '';
          $('.mt-search2 .list').stop().slideDown('fast');

          if (this.value !== '') {
            let newSearchList = [];
            newList.forEach((value) => (value.toUpperCase().includes(this.value.toUpperCase()) ? newSearchList.push(value) : ''));

            newSearchList.forEach((e) => {
              searchAns += `<li>${e}</li>`;
            });
            searchList.innerHTML = `<li><ul>${searchAns}</ul></li>`;
          } else {
            searchList.innerHTML = oList;
          }
        });

        $('.mt-search2 input')
          .off()
          .on('click', function (e) {
            e.stopPropagation();
            $('.mt-search2 .list').stop().slideDown('fast');
          });

        $('.mt-search2 .list')
          .off()
          .on('click', 'li li', function (e) {
            e.stopPropagation();
            $('.mt-search2 input').val($(this).text());
            $('.mt-search2 .list').stop().slideUp('fast');
            searchList.innerHTML = oList;
          });

        $('.mt-search2 .cleanerBtn')
          .off()
          .on('click', function (e) {
            e.preventDefault();
            $('.mt-search2 input').val('');
          });

        $('body').on('click', function () {
          $('.mt-search2 .list').stop().slideUp('fast');
        });
      }

      if ($('.mt-city-exhibition').length > 0) {
        const exhibitionCheck = document.querySelector('.mt-city-exhibition');
        const exhibitionOptions = {
          root: null,
          rootMargin: '0px 0px 0px 0px',
          threshold: 0,
        };
        const exhibitionCallback = (entries, observer) => {
          if (entries[0].isIntersecting && !exhibitionCheck.classList.contains('active')) {
            exhibitionCheck.classList.add('active');
          } else {
            exhibitionCheck.classList.remove('active');
          }
        };

        const observer1 = new IntersectionObserver(exhibitionCallback, exhibitionOptions);
        observer1.observe(exhibitionCheck);
      }

      if ($('.mt-event').length > 0) {
        $('.mt-event .listBox').slick({
          arrows: true, //左右箭頭
          autoplay: false, //自動播放
          autoplaySpeed: 15000, //自動播放秒數
          dots: false, //顯示圓點
          dotsClass: 'slick-dots', //原點css
          draggable: true, //滑鼠可以拖曳
          infinite: true, //無限輪播
          pauseOnHover: true, //滑鼠移過後暫停自動撥放
          pauseOnDotsHover: false, //滑鼠移過圓點後暫停自動撥放
          rtl: false, //改變輪播方向
          slidesToShow: 4, //一次顯示幾張
          slidesToScroll: 1, //一次輪播幾張
          vertical: false, //改成垂直方向
          lazyLoad: 'ondemand', //lazyLoad
          fade: false, //淡入
          responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 3, //一次顯示幾張
              },
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2, //一次顯示幾張
              },
            },
            {
              breakpoint: 550,
              settings: {
                slidesToShow: 1, //一次顯示幾張
              },
            },
          ],
        });
        $('.mt-event .listBox').slick('refresh');
      }
    });

    //city
    //mt-city-explore 選單
    if ($('.mt-city-explore .exploreNav').length > 0) {
      $(window).on('load resize', function () {
        $('.mt-city-explore .exploreNav li')
          .off()
          .on('click', function () {
            let targetTop = $('.mt-city-explore .listBox .item').eq($(this).index()).offset().top - $('.mt-header').height();
            $(window).scrollTop(targetTop);
          });
      });
    }

    if ($('.mt-city-explore').length > 0) {
      $(window).on('load resize', function () {
        let windowWidth = $(window).width();
        if (windowWidth <= 767) {
          $('.mt-city-explore .item .content').each(function () {
            $(this).find('.picB').appendTo($(this).find('.picBox'));
          });
        } else {
          $('.mt-city-explore .item .content .picBox').each(function () {
            $(this).find('.picB').prependTo($(this).parents('.content'));
          });
        }
      });
    }
    // if ($('.mt-city-exhibition .item .box').length > 1) {
    //   $('.mt-city-exhibition .outListBox').slick({
    //     arrows: true, //左右箭頭
    //     autoplay: false, //自動播放
    //     autoplaySpeed: 15000, //自動播放秒數
    //     dots: false, //顯示圓點
    //     dotsClass: 'slick-dots', //原點css
    //     draggable: true, //滑鼠可以拖曳
    //     infinite: true, //無限輪播
    //     pauseOnHover: true, //滑鼠移過後暫停自動撥放
    //     pauseOnDotsHover: false, //滑鼠移過圓點後暫停自動撥放
    //     rtl: false, //改變輪播方向
    //     slidesToShow: 1, //一次顯示幾張
    //     slidesToScroll: 1, //一次輪播幾張
    //     vertical: false, //改成垂直方向
    //     lazyLoad: 'ondemand', //lazyLoad
    //     fade: true, //淡入
    //   });
    //   $('.kvSlider').slick('refresh');
    // }
    //city
  } else {
    //kv-slick
    $('.kvSlider').slick({
      arrows: true, //左右箭頭
      autoplay: true, //自動播放
      autoplaySpeed: 15000, //自動播放秒數
      dots: true, //顯示圓點
      dotsClass: 'slick-dots', //原點css
      draggable: true, //滑鼠可以拖曳
      infinite: true, //無限輪播
      pauseOnHover: true, //滑鼠移過後暫停自動撥放
      pauseOnDotsHover: false, //滑鼠移過圓點後暫停自動撥放
      rtl: false, //改變輪播方向
      slidesToShow: 1, //一次顯示幾張
      slidesToScroll: 1, //一次輪播幾張
      vertical: false, //改成垂直方向
      lazyLoad: 'ondemand', //lazyLoad
      fade: true, //淡入
    });
    $('.kvSlider').slick('refresh');
  }
  //main-news
  // mt-alert-slider
  $('.alert-container').slick({
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
    lazyLoaded: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1500,
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  if ($('.mt-alert-slider').length > 0) {
    const len = $(this).find($('.alert-item')).length;
    if (len < 2) {
      $('.mt-alert-slider .slick-dots').css('display', 'none');
    }
    //大於 兩筆資料 則按鈕列出現
    else {
      $('.mt-alert-slider .slick-dots').css('display', 'flex');
    }
  }

  // mt-alert-slider
  $('.alert-container2').slick({
    slidesToShow: 1,
    autoplay: false,
    arrows: false,
    lazyLoaded: true,
    dots: true,
    responsive: [
      {
        breakpoint: 1500,
      },
      {
        breakpoint: 575,
        settings: {
          arrows: false,
        },
      },
    ],
  });
  if ($('.mt-alert-slider2').length > 0) {
    const len = $(this).find($('.alert-item')).length;
    if (len < 2) {
      $('.mt-alert-slider .slick-dots').css('display', 'none');
    }
    //大於 兩筆資料 則按鈕列出現
    else {
      $('.mt-alert-slider .slick-dots').css('display', 'flex');
    }
  }

  //event
  //slick
  $('.indexEVENT .eventList').slick({
    slidesToShow: 4,
    autoplay: false,
    arrow: false,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true, //顯示圓點
        },
      },
    ],
  });
  $('.indexEVENT .eventList').slick('refresh');

  //event內頁recommendData
  $('.eventINFO .eventList').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
        },
      },
    ],
  });
  $('.eventINFO .eventList').slick('refresh');

  //epaper
  $('.mt-epaper .epaper').slick({
    slidesToShow: 3,
    autoplay: false,
    arrow: false,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
          autoplay: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true, //顯示圓點
          autoplay: false,
        },
      },
    ],
  });
  $('.mt-epaper .epaper').slick('refresh');

  //photo link
  $(window).on('load resize scroll', function (e) {
    var window_H = $(window).innerHeight();
    var windowTop = $(window).scrollTop();
    $('.mt-slider-pic-left .img-container,.mt-slider-pic-right  .slick-active .img-container').each(function (index, el) {
      var imgTop = Math.floor($(this).offset().top - windowTop - 130);
      if (imgTop < window_H && imgTop > 0) {
        $(this).addClass('effect');
      }
    });
  });
  //slick
  $('.slider-pic-left').slick({
    arrows: true, //左右箭頭
    autoplay: false, //自動播放
    autoplaySpeed: 3000, //自動播放秒數
    dots: true, //顯示圓點
    dotsClass: 'slick-dots', //原點css
    draggable: true, //滑鼠可以拖曳
    infinite: true, //無限輪播
    pauseOnHover: true, //滑鼠移過後暫停自動撥放
    pauseOnDotsHover: false, //滑鼠移過圓點後暫停自動撥放
    rtl: false, //改變輪播方向
    slidesToShow: 1, //一次顯示幾張
    slidesToScroll: 1, //一次輪播幾張
    vertical: false, //改成垂直方向
    lazyLoad: 'ondemand',
    ease: 'ease-out',
    fade: true,
  });
  $('.slider-pic-left').slick('refresh');

  function closeLeftSliderBtn() {
    var len = $('.slider-pic-left .item').length;
    if (len < 2) {
      $('.slider-pic-left .slick-dots').css('display', 'none');
    }
  }
  closeLeftSliderBtn();

  //slick
  $('.slider-pic-right').slick({
    arrows: true, //左右箭頭
    autoplay: false, //自動播放
    autoplaySpeed: 3000, //自動播放秒數
    dots: true, //顯示圓點
    dotsClass: 'slick-dots', //原點css
    draggable: true, //滑鼠可以拖曳
    infinite: true, //無限輪播
    pauseOnHover: true, //滑鼠移過後暫停自動撥放
    pauseOnDotsHover: false, //滑鼠移過圓點後暫停自動撥放
    rtl: false, //改變輪播方向
    slidesToShow: 1, //一次顯示幾張
    slidesToScroll: 1, //一次輪播幾張
    vertical: false, //改成垂直方向
    lazyLoad: 'ondemand',
    ease: 'ease-out',
    fade: true,
  });
  $('.slider-pic-right').slick('refresh');

  function closeRightSliderBtn() {
    var len = $('.slider-pic-right .item').length;
    if (len < 2) {
      $('.slider-pic-right .slick-dots').css('display', 'none');
    }
  }
  closeRightSliderBtn();

  $('.slider-col-2.slider-col-2-pc').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    arrow: false,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $('.slider-col-2.slider-col-2-pc').slick('refresh');

  $('.slider-card.slider-card-pc').slick({
    mobileFirst: true,
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    arrow: true,
    lazyLoaded: true,
    lazyLoad: 'ondemand',
    ease: 'ease',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false,
        },
      },
    ],
  });
  $('.slider-card.slider-card-pc').slick('refresh');

  $(window).bind('scroll', function () {
    if ($(this).scrollTop() > 200) {
      //置頂go to top
      $('.mt-scrollToTop').fadeIn();
    } else {
      //置頂go to top
      $('.mt-scrollToTop').fadeOut();
    }
    if ($(this).scrollTop() > 100) {
      //menu  pageY > 100 header addClass
      $('.mt-header').stop().addClass('sticky');
    } else {
      //menu
      $('.mt-header').stop().removeClass('sticky');
    }
  });
  //kv2 js
  if ($('#skipstep').length > 0) {
    try {
      var skipSlider = document.getElementById('skipstep');
      var skipValues = [document.getElementById('skip-value-lower'), document.getElementById('skip-value-upper')];
      noUiSlider.create(skipSlider, {
        start: [0, 10000],
        connect: true,
        behaviour: 'drag',
        step: 1,
        range: {
          min: 1,
          max: 10000,
        },
        format: {
          from: function (value) {
            return parseInt(value);
          },
          to: function (value) {
            return parseInt(value);
          },
        },
      });
      skipSlider.noUiSlider.on('update', function (values, handle) {
        skipValues[handle].innerHTML = values[handle];
      });
    } catch (e) {
      e; // => ReferenceError
      console.log('noUiSlider is not defined');
    }
  }

  //info images
  if ($('.slider-cp-pics').length > 0) {
    $('.slider-cp-pics').slick({
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      arrow: true,
      lazyLoaded: true,
      lazyLoad: 'ondemand',
      ease: 'ease',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            arrows: false,
          },
        },
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            arrows: false,
          },
        },
      ],
    });
    $('.slider-cp-pics').slick('refresh');
    $('.slider-cp-pics div.item').css('display', '');
  }
  //info recommend data
  if ($('.cp_like_slider').length > 0) {
    $('.cp_like_slider').slick({
      mobileFirst: true,
      dots: false,
      infinite: true,
      speed: 300,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      arrow: true,
      lazyLoaded: true,
      lazyLoad: 'ondemand',
      ease: 'ease',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2.5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
          },
        },
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 1.5,
            slidesToScroll: 1,
            arrows: false,
            autoplay: false,
          },
        },
      ],
    });
    $('.cp_like_slider').slick('refresh');
  }

  //永續slick allmenu
  /* if ($('.greenmiceSlider').length > 0) {
        $('.greenmiceSlider').slick({
			mobileFirst: true,
			dots: false,
			infinite: false,
			speed: 300,
			focusOnSelect: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			autoplay: false,
			arrow: true,
			lazyLoaded: true,
			variableWidth: true,
			lazyLoad: "ondemand",
			ease: "ease",
			responsive: [{
				breakpoint: 1200,
				settings: {
				  slidesToShow: 4,
				  slidesToScroll: 4,
				  arrows: true,
				},
			  },
			  {
				breakpoint: 768,
				settings: {
				  slidesToShow: 3,
				  slidesToScroll: 1,
				  arrows: true,
				},
			  },
			  {
				breakpoint: 200,
				settings: {
				  slidesToShow: 2,
				  slidesToScroll: 1,
				  arrows: true,
				},
			  },
			],
		}); */

  //$(".greenmiceSlider").slick("refresh");

  //}

  //永續slick allmenu
  if ($('.green-zh-tw').length > 0) {
    $('.green-zh-tw').slick({
      mobileFirst: true,
      dots: false,
      infinite: false,
      speed: 300,
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      autoplay: false,
      arrow: true,
      lazyLoaded: true,
      variableWidth: true,
      lazyLoad: 'ondemand',
      ease: 'ease',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    });

    //$(".green-zh-tw").slick("refresh");
  }

  //永續slick allmenu
  if ($('.green-en').length > 0) {
    $('.green-en').slick({
      mobileFirst: true,
      dots: false,
      infinite: true,
      centerMode: true,
      speed: 300,
      focusOnSelect: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: false,
      arrow: true,
      lazyLoaded: true,
      variableWidth: true,
      lazyLoad: 'ondemand',
      ease: 'ease',
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            centerMode: true,
            arrows: true,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: true,
          },
        },
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
          },
        },
      ],
    });

    //$(".green-en").slick("refresh");
  }

  /***************************************/
  /***************************************/
  // fatfooter btn
  $('.toggleBtn').click(function (e) {
    $(this).parent('.container').find('.fatList>li>ul').stop(true, true).slideToggle();
    $(this).stop(true, true).toggleClass('close');
    e.preventDefault();
  });
  /***************************************/
  /***************************************/
  //置頂go to top
  //click event to scroll to top
  $('.mt-scrollToTop').click(function (e) {
    $('html, body').animate(
      {
        scrollTop: 0,
      },
      400,
      'easeOutExpo'
    );
    e.preventDefault();
  });
  $('.mt-scrollToTop').keydown(function (e) {
    e.preventDefault();
  });
  /***************************************/
  /***************************************/
  //cookie accept
  //$('.mt-cookie a.more').off()
  // .click(function(e) {
  //   $('.mt-cookie').stop()
  //   .hide();
  //   e.preventDefault();
  // });
  /***************************************/
  /***************************************/
  //menu
  //sidarbar setting
  $('.mt-header').find('.mt-menu').clone().appendTo('.mt-sidebar .sidebarContent');
  $('.mt-header').find('.mt-nav').clone().appendTo('.mt-sidebar .sidebarContent');
  //menu open sidebar
  var menuStatus = false;
  $('.menuBtn')
    .off()
    .click(function (e) {
      $(this).toggleClass('open');
      if (!menuStatus) {
        $('.mt-sidebar').stop().addClass('menuOpen');
        $('body').stop().addClass('noscroll');
        menuStatus = true;
      } else {
        $('.mt-sidebar').stop().removeClass('menuOpen');
        $('body').stop().removeClass('noscroll');
        menuStatus = false;
      }
      e.preventDefault();
    });
  // click document close mainMenu
  function closeMenu() {
    $('.menuBtn').removeClass('open');
    $('.mt-sidebar').stop().removeClass('menuOpen');
    $('body').stop().removeClass('noscroll');
  }
  $(document.body).click(function (e) {
    if (menuStatus) {
      closeMenu();
      menuStatus = false;
    }
  });
  $('.mt-sidebar,.menuBtn').click(function (e) {
    e.stopPropagation();
  });
  //menu Settings
  var _menu = $('.mt-menu');
  _menu.find('li').has('ul').addClass('hasChild');
  var liHasChild = _menu.find('li.hasChild');
  var liHasChild_level1 = $('.mt-sidebar .mt-menu ul').children('li.hasChild');
  var liHasChild_level2 = $('.mt-sidebar .mt-menu ul ul').children('li.hasChild');
  var liHasChild_level3 = $('.mt-sidebar .mt-menu ul ul ul').children('li.hasChild');
  subMenuWidth = liHasChild.first().children('ul').outerWidth();
  (function ($) {
    function mediaSize() {
      if (window.matchMedia('(min-width: 992px)').matches) {
        // PC
        liHasChild.on({
          mouseenter: function () {
            $(this).children('ul').stop(true, false).fadeIn();
          },
          mouseleave: function () {
            $(this).parent().siblings('ul').hide();
            $(this).children('ul').stop(true, false).fadeOut();
          },
        });
      } else {
        // MOBILE
        // 副選單點出
        liHasChild.off().on('mouseenter,mouseleave');
        liHasChild.on('touchstart', function () {
          $(this).off('mouseenter,mouseleave');
        });
        // 第一層選單
        liHasChild_level1.off().on('click', function (e) {
          e.stopPropagation();
          //$(this).siblings(
          //        'li').find('ul')
          //    .stop(true, true)
          //    .slideUp('600',
          //        'easeOutQuint');
          //$(this).children(
          //    'ul').stop(true,
          //    true).slideDown(
          //    '600',
          //    'easeOutQuint');
        });
        // 第二層選單
        liHasChild_level2.off().on('click', function (e) {
          e.stopPropagation();
          //$(this).siblings(
          //    'li').children(
          //    'ul').stop(true,
          //    true).slideUp(
          //    '600',
          //    'easeOutQuint');
          //$(this).children(
          //    'ul').stop(true,
          //    true).slideDown(
          //    '600',
          //    'easeOutQuint');
        });
        // 第三層選單
        liHasChild_level3.off().on('click', function (e) {
          e.preventDefault();
        });
        // liHasChild.click(function () {
        //     $(this).children('ul').stop(true, false).slideToggle();
        //     $(this).siblings().children('ul').stop(true, false).slideUp();
        // });
      }
    }
    mediaSize();
    window.addEventListener('resize', mediaSize, false);
  })(jQuery);
  //search
  if ($('.searchBtn').length > 0) {
    var searchStatus = false;
    $('.searchBtn')
      .off()
      .click(function (e) {
        if (!searchStatus) {
          $('.mt-search').show();
          $('.mt-search').stop(true, true).addClass('open');
          searchStatus = true;
        }
        e.preventDefault();
      });
    $('.mt-search')
      .find('.close')
      .off()
      .click(function (e) {
        $('.mt-search').stop(true, true).removeClass('open');
        searchStatus = false;
        e.preventDefault();
      });
  }

  //login
  if ($('.loginBtn').length > 0) {
    var searchStatus = false;
    $('.loginBtn')
      .off()
      .click(function (e) {
        if (!searchStatus) {
          $('.mt-signup').stop(true, true).addClass('open').removeClass('close');
          searchStatus = true;
        }
        e.preventDefault();
      });
    $('.mt-signup')
      .find('.close')
      .off()
      .click(function (e) {
        $('.mt-signup').stop(true, true).addClass('close').removeClass('open');
        searchStatus = false;
        e.preventDefault();
      });
  }

  //身分選單
  if ($('.mt-entrance').length > 0) {
    $('.mt-entrance')
      .find('a.close')
      .off()
      .click(function (e) {
        if (!$('.mt-cookie').is(':visible')) {
          $('.mt-entrance').fadeOut('600', 'easeOutQuint');
          $('html, body').animate(
            {
              scrollTop: 0,
            },
            0,
            'easeOutExpo'
          );
          e.preventDefault();
        }
      });
  }

  //language
  if ($('.langBtn').length > 0) {
    var lanStatus = false;
    $('.langBtn')
      .off()
      .click(function (e) {
        if (!lanStatus) {
          $('.languageBlock').stop(true, true).addClass('open').slideDown('600', 'easeOutQuint');
          lanStatus = true;
        } else {
          $('.languageBlock').stop(true, true).removeClass('open').slideUp('600', 'easeOutQuint');
          lanStatus = false;
        }
        e.preventDefault();
      });
    // click document close lang
    function closeLang() {
      $('.languageBlock').stop(true, true).removeClass('open').slideUp('600', 'easeOutQuint');
    }
    $(document.body).click(function (e) {
      if (lanStatus) {
        closeLang();
        lanStatus = false;
      }
    });
    $('.languageBlock ,.langBtn').click(function (e) {
      e.stopPropagation();
    });
  }

  function changeDirection() {
    var screenWidth = $(document).width();
    $('.mt-menu > ul>li')
      .find('.hasChild ul')
      .each(function () {
        if ($(this)[0].getBoundingClientRect().x < 0) {
          //  $(this).parent().removeClass('changePosition')
          $(this).css('left', '100%');
        }
        if ($(this)[0].getBoundingClientRect().right > screenWidth) {
          //  $(this).parent().addClass('changePosition')
          $(this).css('left', '-98%');
        }
      });
  }
  (function ($) {
    function mediaSize() {
      if (window.matchMedia('(min-width: 992px)').matches) {
        // PC
        liHasChild.on({
          mouseenter: function () {
            $(this).children('ul').stop(true, false).fadeIn();
            changeDirection();
          },
          mouseleave: function () {
            $(this).parent().siblings('ul').hide();
            $(this).children('ul').stop(true, false).fadeOut();
          },
        });
      } else {
        // MOBILE
        liHasChild.click(function () {
          $(this).children('ul').stop(true, false).slideToggle();
          $(this).siblings().children('ul').stop(true, false).slideUp();
        });
      }
    }

    mediaSize();
    window.addEventListener('resize', mediaSize, false);
  })(jQuery);

  //menu logo classname 切換
  function logoToggleClassName() {
    if ($('.mt-logo').length != 0) {
      const w = $(window).width();
      if (w < 992) {
        $('.mt-logo').addClass('mt-logo-mobile');
      } else {
        $('.mt-logo').removeClass('mt-logo-mobile');
      }
    }
  }

  $(window).resize(function () {
    logoToggleClassName();
    changeDirection();
  });
  logoToggleClassName();

  //menu 最後一個子選單展開換方向

  if ($('.airport_map').length > 0) {
    if ($('.info').length > 0) {
      $('.airport_map .info ul li')
        .find('a')
        .each(function () {
          $(this).mouseover(function (e) {
            var airpotName = $(this).attr('class');
            $(this)
              .parents('.airport_map')
              .children('.map')
              .find('.' + airpotName)
              .addClass('active');
          });
          $(this).mouseout(function (e) {
            $(this).parents('.airport_map').children('.map').find('.dot').removeClass('active');
          });
        });
    }
  }

  if ($('.mice_data').length > 0) {
    $('.mice_data .item .num span').each(function () {
      var $this = $(this),
        countTo = $(this).attr('name');
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 1500,
          easing: 'linear',
          step: function () {
            $this.text(Math.floor(this.countNum).toLocaleString());
          },
          complete: function () {
            $this.text(this.countNum.toLocaleString());
            //alert('finished');
          },
        }
      );
    });
  }

  if ($('.slider-marquee ul').length > 0) {
    $('.slider-marquee ul').slick({
      slidesToShow: 3,
      centerMode: true,
      pauseOnHover: true,
      slidesToScroll: 1,
      autoplay: true,
      dots: false,
      arrows: false,
      centerMode: true,
      focusOnSelect: true,
      vertical: true,
      speed: 500,
      asNavFor: '.award-img',
    });
  }
  if ($('.award-img').length > 0) {
    $('.award-img').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: '.slider-marquee ul',
    });
  }
});
// function end

$(document).ready(function () {
  if ($('.transport').length > 0) {
    // Variables
    var clickedTab = $('.transport .tabs > .active');
    var tabWrapper = $('.transport .tab__content');
    var activeTab = tabWrapper.find('.active');
    var activeTabHeight = activeTab.outerHeight();
    // Show tab on page load
    activeTab.show();
    // Set height of wrapper on page load
    tabWrapper.height(activeTabHeight);
    $('.transport .tabs > li').on('click', function () {
      // Remove class from active tab
      $('.transport .tabs > li').removeClass('active');
      // Add class active to clicked tab
      $(this).addClass('active');

      // Update clickedTab variable
      clickedTab = $('.transport .tabs .active');
      // fade out active tab
      activeTab.fadeOut(250, function () {
        // Remove active class all tabs
        $('.transport .tab__content > li').removeClass('active');
        $('.transport .tab__content > li').hide();
        $('.transport .tab__content > li').css('opacity', '0');
        // Get index of clicked tab
        var clickedTabIndex = clickedTab.index();
        // Add class active to corresponding tab
        $('.transport .tab__content > li').eq(clickedTabIndex).addClass('active');
        $('.transport .tab__content > li.active').show();
        $('.transport .tab__content > li.active').css('opacity', '1');

        // update new active tab
        activeTab = $('.transport .tab__content > .active');
        // Update variable
        activeTabHeight = activeTab.outerHeight();
        // Animate height of wrapper to new tab height
        tabWrapper
          .stop()
          .delay(50)
          .animate(
            {
              height: activeTabHeight,
            },
            500,
            function () {
              // Fade in active tab
              activeTab.delay(50).fadeIn(250);
            }
          );
      });
    });
  }

  if ($('.mt-city-tab').length > 0) {
    // Variables
    var clickedTab2 = $('.city .tabs > .active');
    var tabWrapper2 = $('.city .tab__content');
    var activeTab2 = tabWrapper2.find('.active');
    var activeTabHeight2 = activeTab2.outerHeight();
    // Show tab on page load
    activeTab2.show();
    // Set height of wrapper on page load
    tabWrapper2.height(activeTabHeight2);
    $('.city .tabs > li').on('click', function () {
      // Remove class from active tab
      $('.city .tabs > li').removeClass('active');
      // Add class active to clicked tab
      $(this).addClass('active');
      // Update clickedTab variable
      clickedTab2 = $('.city .tabs .active');
      // fade out active tab

      activeTab2.fadeOut(250, function () {
        // Remove active class all tabs
        $('.city .tab__content > li').removeClass('active');
        // Get index of clicked tab
        var clickedTabIndex2 = clickedTab2.index();
        // Add class active to corresponding tab
        $('.city .tab__content > li').eq(clickedTabIndex2).addClass('active');
        // update new active tab
        activeTab2 = $('.city .tab__content > .active');
        // Update variable

        activeTabHeight2 = activeTab2.outerHeight();
        // Animate height of wrapper to new tab height
        tabWrapper2
          .stop()
          .delay(50)
          .animate(
            {
              height: activeTabHeight2,
            },
            500,
            function () {
              // Fade in active tab
              activeTab2.delay(50).fadeIn(250);
            }
          );
      });

      if ($(window).width() >= 768) {
        $('.slider-plan .slick-track').css('width', '1080px');
        $('.slider-plan .slick-slide').css('width', '360px');
      }
    });
  }

  /* if ($(".allmenu").length > 0 && $(".greenmiceSlider").length > 0) {
		var greenmiceA = $(".allmenu").attr("data-idx");
		$('.greenmiceSlider').slick('slickGoTo', greenmiceA);
		$(".allmenu").siblings().removeClass("slick-current");
        $(".allmenu").addClass("slick-current"); 
    } */

  if ($('.allmenu').length > 0 && $('.green-zh-tw').length > 0) {
    var greenmiceA = $('.allmenu').attr('data-idx');
    $('.green-zh-tw').slick('slickGoTo', greenmiceA);
    $('.allmenu').siblings().removeClass('slick-current');
    $('.allmenu').addClass('slick-current');
  }
  if ($('.allmenu').length > 0 && $('.green-en').length > 0) {
    var greenmiceA = $('.allmenu').attr('data-idx');
    $('.green-en').slick('slickGoTo', greenmiceA);
    $('.allmenu').siblings().removeClass('slick-current');
    $('.allmenu').addClass('slick-current');
  }
});

class BtnTab {
  constructor(obj) {
    this.name = obj.name.find('.nav').find('.nav-item');
    this.btn = obj.name.find('.nav').find('.nav-item button');
    this.objName = obj.name;
  }
  attrNum() {
    this.objName.find('.nav-link').each(function (idx, item) {
      $(this).attr('data-btn', idx + 1);
    });
    this.objName.find('.tab-pane').each(function (idx, item) {
      $(this).attr('data-tabcontent', idx + 1);
    });
  }
  tabClick() {
    let that = this;
    this.btn.on('click', navTab);
    this.btn.on('keyup', navTab);

    function navTab() {
      $(this).addClass('active');
      $(this).parent().siblings().children().removeClass('active');

      $(this).focus();
      let activeTabBtn = that.name.find('.active');
      let tabContent = $(this).parent().parent().next().children();
      tabContent.each(function (index, item) {
        if (activeTabBtn.attr('data-btn') === $(this).attr('data-tabContent')) {
          $(this).addClass('active');
          $(this).siblings().removeClass('active');
        }
      });
    }
  }
  tabKeydown() {
    $(window).keydown(tabFocus);

    function tabFocus(e) {
      if (e.keyCode === 9) {
        $('.nav-link').focusout(function (e) {
          let navItem = $(this).parent();
          let activeItem = $(this).parent().parent().next().find('.tab-pane.active');
          activeItem.find('a').first().focus();
          activeItem
            .find('a')
            .last()
            .focusout(function (e) {
              navItem.next().find('.nav-link').focus();
            });
        });
      }
    }
  }
  initial() {
    this.attrNum();
    this.tabClick();
    this.tabKeydown();
  }
}

/* $(function () {
       $('.mt-cookie')
         .find('a.more')
         .off()
         .click(function (e) {
           $('.mt-cookie').stop().hide();
           e.preventDefault();
         });
     }); */

function animateNumber(element, start, stop, duration, ease) {
  let startTime = null;
  const isCountdown = start > stop;

  function numberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function animationStep(timestamp) {
    if (!startTime) {
      startTime = timestamp;
    }
    const elapsedTime = timestamp - startTime;
    const progress = elapsedTime / duration;
    let currentValue;
    if (isCountdown) {
      currentValue = Math.floor(start - (start - stop) * progress);
    } else {
      currentValue = Math.floor(start + (stop - start) * progress);
    }
    element.textContent = numberWithCommas(currentValue);
    if (progress < 1) {
      requestAnimationFrame(animationStep);
    } else {
      element.textContent = numberWithCommas(stop);
    }
  }
  requestAnimationFrame(animationStep);
}

/* (function () {
  const preLoad = document.createElement('div');
  const body = document.querySelector('body');
  preLoad.className = 'preLoad';
  body.append(preLoad);
  body.classList.add('noscroll');

  window.addEventListener('load', () => {
    body.classList.remove('noscroll');
    preLoad?.classList.add('loaded');
    AOS.refresh();
  });
})(); */
