$(document).ready(function() {
    $('body').scrollspy({target: ".navbar"});
    
    var url = window.location;
                $('ul.nav a[href="'+ url +'"]').parent().addClass('active');
                $('ul.nav a').filter(function() {
                     return this.href == url;
                }).parent().addClass('active');
    
    });
    
    //close the hamburger drop-down menu on click
    $(document).on('click','.navbar-collapse.in',function(e) {
        if( $(e.target).is('a') ) {
            $(this).collapse('hide');
        }
    });
    