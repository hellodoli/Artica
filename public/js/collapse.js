function arCollapse() {
    this.collapse = function(ele){
        const height = ele.offsetHeight;
        ele.style.height =  height + 'px';
        ele.classList.add('collapsing');
    
        window.setTimeout(function(){
            ele.style.height = 0;
        },1);
    
        window.setTimeout(function(){
            ele.classList.remove('show');
            ele.classList.remove('collapsing');
            ele.style.height = null;
        },350);
    },
    this.expand= function(ele){
        ele.style.display = 'block';
        const height = ele.offsetHeight;
        ele.classList.add('collapsing');
    
        window.setTimeout(function(){
            ele.style.height = height + 'px';
        }, 1);
        
        window.setTimeout(function(){
            ele.classList.add('show');
            ele.classList.remove('collapsing');
            ele.style.display = null;
            ele.style.height = null;
        }, 350);
    }
};