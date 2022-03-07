const showSearch = () => {
    document.getElementById('searchBox').style.display = "inline-block";
    document.getElementById('top-search-ico-close').style.display = "inline-block";
}

const closeSearch = () => {
    document.getElementById('searchBox').style.display = "none";
    document.getElementById('top-search-ico-close').style.display = "none";
}

(function($){
    "use strict";
	jQuery(document).ready(function($){
        $(".products-carousel").owlCarousel({
                margin: 30,
                loop: true,
                dots: true,
                nav: false,
                autoplay: false,
                responsive : {
                    // breakpoint from 0 up
                    0 : {
                        items: 1
                    },
                    // breakpoint from 768 up
                    768 : {
                        items: 2
                    },
                    // breakpoint from 992 up
                    992 : {
                        items: 3
                    }
                }
        });
    });

    jQuery(window).load(function(){
     
        
    });
    
}(jQuery));


