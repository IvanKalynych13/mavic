$(document).ready(function(){
    $('.slider').slick();
});
$(document).ready(function(){
    $('.mobileMenuButtom').click(function(params) {
        $('.mobileButtom,.mobile-menu').toggleClass('Active');
        $('body').toggleClass('lock');
    })
});