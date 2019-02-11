var d = document;
// Elements.
// Nav Default.
var nd = '.ar-default-navigation .ar-navbar-menu';
var navDefault = d.querySelector(nd);
var navDefaultMenuItem = d.querySelectorAll(nd + ' li.menu-item-has-children');
var navDefaultSubmenu = d.querySelectorAll(nd + ' ul.sub-menu');
//Nav Mobile.
var nm = '.ar-mobile-navigation .ar-navbar-menu';
var navMobile = d.querySelector(nm);
var navMobileMenuItem = d.querySelectorAll(nm + ' li.menu-item-has-children a');
//Toggle Burger.
var toggleBurger = d.getElementById('ar-menu-mobile-toggle');
//arCollapse object.
var c = new arCollapse();
// btn scroll to top.
var btnGoToTop = d.querySelector('.ar-btn--go-top');

// hover navbar default effect.
for (let i = 0; i < navDefaultMenuItem.length; i++) {
    navDefaultMenuItem[i].addEventListener('mouseenter', function(){
        const t = this;
        const submenu = navDefaultMenuItem[i].querySelector('.sub-menu');
        if(submenu){
            submenu.style.display = 'block';
            submenu.classList.add('sub-menu--effect');
            window.setTimeout(function(){
                t.classList.add('miHover');
            }, 20);
        }
    });
    navDefaultMenuItem[i].addEventListener('mouseleave', function(){
        const t = this;
        const submenu = navDefaultMenuItem[i].querySelector('.sub-menu');
        if(submenu){
            submenu.style.display = 'none';
            submenu.classList.remove('sub-menu--effect');
            t.classList.remove('miHover');
        }
    });
};

// onclick collapse nav mobile.
for (let i = 0; i < navMobileMenuItem.length; i++) {
    navMobileMenuItem[i].addEventListener('click', function(){
        const t = this;
        t.classList.toggle('open');
        const submenu = navMobileMenuItem[i].nextElementSibling;
        if(submenu){
            if(t.classList.contains('open')){
                c.expand(submenu);
            }else{
                c.collapse(submenu);
            }
        }
    });
};

// burger collapse menu mobile.
toggleBurger.addEventListener('click', function(){
    this.classList.toggle('ar-menu-burger--opened');
    
    if(navMobile.classList.contains('show')){
        c.collapse(navMobile);
    }else{
        c.expand(navMobile);
    };
});

// Scroll fixed effect.
var lastscroll_gotop = 0;
var lastscroll = 0;
function scrollGoToTop(x){
    const afterBanner = d.querySelector('.ar-banner + .ar-section');
    if(afterBanner){
        const y = x.pageYOffset;
       
        if(y > afterBanner.offsetTop){
            if(y > lastscroll_gotop){
                if(!btnGoToTop.classList.contains('on-scroll-hide'))
                    btnGoToTop.classList.add('on-scroll-hide');
            }else{
                if(btnGoToTop.classList.contains('on-scroll-hide'))
                    btnGoToTop.classList.remove('on-scroll-hide');
            }
            lastscroll_gotop = y;
        }else{
            if(!btnGoToTop.classList.contains('on-scroll-hide'))
                btnGoToTop.classList.add('on-scroll-hide');
        }
    }
};
function scrollEffect(){
    window.onscroll = function(){
        
        scrollGoToTop(this);

        if(this.outerWidth >= 992){
            const y = this.pageYOffset;
            const navbarDefault = d.querySelector('.ar-navbar--default');
            const height = navbarDefault.offsetHeight;
            const navbarDefaultTop = navbarDefault.children[0];

            if(y > height){
                if(y > lastscroll){
                    //console.log('scroll-down');
                    if(!navbarDefaultTop.classList.contains('d-none'))
                        navbarDefaultTop.classList.add('d-none');
                    if(navbarDefault.classList.contains('on-scroll-show'))
                        navbarDefault.classList.remove('on-scroll-show');
                    if(!navbarDefault.classList.contains('on-scroll-hide'))
                        navbarDefault.classList.add('on-scroll-hide');
                }else{
                    //console.log('scroll-up');
                    if(navbarDefault.classList.contains('on-scroll-hide'))
                        navbarDefault.classList.remove('on-scroll-hide');
                    if(!navbarDefault.classList.contains('on-scroll-show'))
                        navbarDefault.classList.add('on-scroll-show');
                }
                lastscroll = y;
            }else if(y < height){
                if(navbarDefaultTop.classList.contains('d-none'))
                    navbarDefaultTop.classList.remove('d-none');
            }    
        }
    };
};

//click scroll top.
btnGoToTop.addEventListener('click', function(e) {
    e.preventDefault();
    window.scroll({
        behavior: 'smooth',
        top: 0
    });
});

//Fake navbar calculator.
function fakeNavCal(){
    var navbarFake = d.querySelector('.ar-navbar-fake');
    if(navbarFake){
        const navbarRealHeight = navbarFake.previousElementSibling.offsetHeight;
        navbarFake.style.display = 'block';
        navbarFake.style.height = navbarRealHeight + 'px';
    }
};

//active plugin owl carousel.
function activeOwlCarousel(){
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

//active plugin revolution.
function activeRevolution(){
    const bannerRevolution = d.querySelectorAll('.ar-banner .tp-banner-container .tp-banner');
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

function initOnload(){
    scrollEffect();
    fakeNavCal();
    activeOwlCarousel();
    activeRevolution();
};

function initResize(){
    scrollEffect();
    fakeNavCal();
};

window.addEventListener('load', initOnload);
window.addEventListener('resize', initResize);