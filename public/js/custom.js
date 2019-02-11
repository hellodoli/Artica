(function($){
    "use strict"
    var AT = {};

    /*--------------------
    * owl Slider
    ----------------------*/
    AT.ClientSlide = () => {
        const carousel = document.querySelectorAll('.ar-carousel');
        if(carousel.length){
            const df = {
                loop: true,
                nav: false,
                dots: true,
                speed: 700,
                margin: 0,
                autoplay: true,
                show: 1,
                navText: ['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
            };
        
            for (let i = 0; i < carousel.length; i++) {
                
                var loop = df.loop;
                if(carousel[i].getAttribute('data-owl-loop')){
                    loop = (carousel[i].getAttribute('data-owl-loop') === "true") ? true : false;
                }

                var nav = df.nav;
                if(carousel[i].getAttribute('data-owl-nav')){
                    nav = (carousel[i].getAttribute('data-owl-nav') === "true") ? true : false;
                }

                var dots = df.dots;
                if(carousel[i].getAttribute('data-owl-dots')){
                    dots = (carousel[i].getAttribute('data-owl-dots') === "true") ? true : false;
                }

                var autoplay = df.autoplay;
                if(carousel[i].getAttribute('data-owl-autoplay')){
                    autoplay = (carousel[i].getAttribute('data-owl-autoplay') === "true") ? true : false;
                }

                const speed = parseInt(carousel[i].getAttribute('data-owl-speed')) || df.speed;
                const margin = parseInt(carousel[i].getAttribute('data-owl-margin')) || df.margin;
                const show = parseInt(carousel[i].getAttribute('data-owl-show')) || df.show;
                var showRes = {0: {items: 1}};
                    
                if(show === 2){
                    showRes = {
                        0: {items: 1},
                        768: {items: 2},
                    };
                }else if(show === 3){
                    showRes = {
                        0: {items: 1},
                        768: {items: 2},
                        992: {items: 3}
                    };
                }else if(show > 3){
                    showRes = {
                        0: {items: 1},
                        768: {items: 2},
                        992: {items: 3},
                        1200: show
                    };
                }
        
                const c = carousel[i].children[0];
                $(c).owlCarousel({
                    loop: loop,
                    nav: nav,
                    dots: dots,
                    smartSpeed: speed,
                    margin: margin,
                    navText: df.navText,
                    autoplay: autoplay,
                    responsiveClass: true,
                    responsive: showRes,
                });
            };
        }
    };

    /*--------------------
    * revolution
    ----------------------*/
    AT.ClientBannerRevolution = () =>{
        const bannerRevolution = document.querySelectorAll('.ar-banner .tp-banner-container .tp-banner');
        if(bannerRevolution.length){
            for (let i = 0; i < bannerRevolution.length; i++) {
                const mainSlider = bannerRevolution[i].parentElement.parentElement;
                const strtHeight = mainSlider.dataset.startHeight;
                const slideOverlay = "'"+ mainSlider.dataset.slideOverlay +"'";
                $(bannerRevolution).show().revolution({
                    dottedOverlay: slideOverlay,
                    delay:100000,
                    startwidth:1200,
                    startheight:strtHeight,
                    hideThumbs:600,

                    thumbWidth:80,
                    thumbHeight:50,
                    thumbAmount:5,

                    navigationType:"bullet",
                    navigationArrows:"0",
                    navigationStyle:"preview3",

                    touchenabled:"on",
                    onHoverStop:"off",

                    swipe_velocity: 0.7,
                    swipe_min_touches: 1,
                    swipe_max_touches: 1,
                    drag_block_vertical: false,

                    parallax:"mouse",
                    parallaxBgFreeze:"on",
                    parallaxLevels:[7,4,3,2,5,4,3,2,1,0],

                    keyboardNavigation:"off",

                    navigationHAlign:"center",
                    navigationVAlign:"bottom",
                    navigationHOffset:0,
                    navigationVOffset:50,

                    soloArrowLeftHalign:"left",
                    soloArrowLeftValign:"center",
                    soloArrowLeftHOffset:20,
                    soloArrowLeftVOffset:0,

                    soloArrowRightHalign:"right",
                    soloArrowRightValign:"center",
                    soloArrowRightHOffset:20,
                    soloArrowRightVOffset:0,

                    shadow:0,
                    fullWidth:"on",
                    fullScreen:"off",

                    spinner:"spinner4",

                    stopLoop:"off",
                    stopAfterLoops:-1,
                    stopAtSlide:-1,

                    shuffle:"off",

                    autoHeight:"off",
                    forceFullWidth:"on",

                    hideThumbsOnMobile:"on",
                    hideNavDelayOnMobile:1500,
                    hideBulletsOnMobile:"on",
                    hideArrowsOnMobile:"on",
                    hideThumbsUnderResolution:0,

                    hideSliderAtLimit:0,
                    hideCaptionAtLimit:0,
                    hideAllCaptionAtLilmit:0,
                    startWithSlide:0,
                    videoJsPath:"",
                    fullScreenOffsetContainer: ""
                });
            };
        }
    };

    /*--------------------
    * jquery-ui datetimepicker
    ----------------------*/
    AT.ClientDatePicker = () =>{
        const dp = document.querySelectorAll('.date-picker');
        if(dp.length){
            for (let i = 0; i < dp.length; i++) {
                $(dp[i]).datepicker();
            }
        }
    };

    $(document).ready(function(){
        AT.ClientSlide();
        AT.ClientBannerRevolution();
        AT.ClientDatePicker();
    });

})(jQuery)