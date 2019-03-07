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
if(btnGoToTop){
    btnGoToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scroll({
            behavior: 'smooth',
            top: 0
        });
    });
}

//Fake navbar calculator.
function fakeNavCal(){
    var navbarFake = d.querySelector('.ar-navbar-fake');
    if(navbarFake){
        const navbarRealHeight = navbarFake.previousElementSibling.offsetHeight;
        navbarFake.style.display = 'block';
        navbarFake.style.height = navbarRealHeight + 'px';
    }
};

function initOnload(){
    scrollEffect();
    fakeNavCal();
};

function initResize(){
    scrollEffect();
    fakeNavCal();
};

window.addEventListener('load', initOnload);
window.addEventListener('resize', initResize);