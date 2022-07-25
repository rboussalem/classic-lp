$(function (){
	
	$(".nav-item a").on("click",function (){
		$(".nav-item a").removeClass("active");
		$(this).addClass("active");
	});
	
	var headerHeight = $(".header-section").height();
	var navbarHeight = $(".header-navbar").innerHeight();
	var buttonHeight = $(".header-button").outerHeight(true);
	
	
	$(".header-slide,.header-slide .carousel-item").height(headerHeight - navbarHeight - buttonHeight);
	
	
	/*Start Projects section*/
	
	$(".projects ul li").on("click",function (){
		$(this).addClass("active").siblings().removeClass("active");
		
		let boxSelected = $(this).data("project");
		
		if(boxSelected === 'All'){
			$(".projects-img").parent().fadeIn();			
		} else{
			$(".projects-img").parent().hide();
			$(boxSelected).parent().fadeIn();
		}
	});
	
	
	/*End Projects section*/
	
});