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

