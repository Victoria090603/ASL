$(function() {
    if(window.innerWidth <= 991) {
    $('.header-burger').click(function() {
        $('body').toggleClass('open-mobile');
    });
}
});
