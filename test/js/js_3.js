$(window).ready(function(){
	$(".container:nth-of-type(1) .row>div>div>div").hover(
		function(){
			$(this).css("border","1px solid gray").css("background-color","gainsboro");
		},
		function(){
			$(this).css("border","1px solid gainsboro").css("background-color","white");			
		}
	);
	$(".container:nth-of-type(1) li").click(function(){
			$(this).children().fadeIn(1000);
	});
	$(".container:nth-of-type(1) li").hover(
		function(){
			$(this).css("border","1px solid gray");
			$(this).next("li").css("border-top","1px solid gray");
		},
		function(){
			$(this).css("border","1px solid gainsboro");
			$(this).next("li").css("border-top","1px solid gainsboro");
		}
	);
});