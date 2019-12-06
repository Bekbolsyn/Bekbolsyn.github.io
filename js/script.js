$(function(){
	$('.menuToggle').on('click', function(){
		$('.menu').slideToggle(300, function(){
			if($(this).css('display') === 'none'){
					$(this).removeAttr('style')
			}
		});
	});
});



$(".des_item").not(":first").hide();
$(".detail_services .item").click(function() {
	$(".detail_services .item").removeClass("active").eq($(this).index()).addClass("active");
	$(".des_item").hide().eq($(this).index()).fadeIn();
	$(".item p").removeClass("active").eq($(this).index()).addClass("active");
	$(".des_item").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");

	$(document).ready(function(){
    $("nav").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
 
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
 
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({scrollTop: top}, 1500);
    });
});



var tabNav = document.querySelector('.tab-nav');

tabNav.addEventListener('click', function(e) {
  tabNav.classList.toggle('is-active');
  var current = e.target;

  if (current.classList.contains('tab-nav__btn')) {
    var tabNavBtnActive = tabNav.querySelector('.tab-nav__btn.is-active');
    tabNavBtnActive.classList.remove('is-active');
  
    current.classList.add('is-active');
  }

});



$(".face").not(":first").hide();
$(".services .tab-nav__btn").click(function() {
	$(".face").hide().eq($(this).index()).fadeIn();
	$(".face").hide().eq($(this).index()).fadeIn()
}).eq(0).addClass("active");
