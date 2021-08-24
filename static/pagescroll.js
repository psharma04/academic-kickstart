$(window).scroll(function () {
//set scroll position in session storage
if ($(window).scrollTop() > 500)
	sessionStorage.scrollPos = $(window).scrollTop();
});
var init = setTimeout(function(){
//return scroll position in session storage
	 if (sessionStorage.scrollPos > 500){
		$("html").animate({ scrollTop: sessionStorage.scrollPos },2000);
		}
	},1000);
window.onload = init;
