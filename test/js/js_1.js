$(document).ready(function(){
//回到顶部
	$(window).scroll(function(){
		if($(window).scrollTop()>450){//屏幕滚动距离超过200时
			$(".back").fadeIn(300);//淡入
			$(".back").css("cursor","pointer");//添加手型属性
		}
		if($(window).scrollTop()<=450){//屏幕滚动距离小于200时
			$(".back").fadeOut(300);//淡出
		}
	});
	$(".back").on("click",function(){//点击回到顶部div时
		$("html,body").animate({//缓慢回到顶部动画
			scrollTop:0		
		},800);
//		return false;//是否需要？
	});
//弹幕
	var color = ["red","green","pink","yellow","blue"];
	$(".box2_btn").on("click",function(){
		var text = $(".box2_text").val();
		if(text.trim().length == 0){//将文本去掉首尾的空格，之后判断长度是否为零
			alert("请输入需要发送的内容！");
		}
		else{
			var randomY = parseInt(Math.random()*100);
			var randomColor = parseInt(Math.random()*color.length);
			//创建<span>text</span>并添加样式和动画
			var span = $("<span></span>").text(text)
			.css("color",color[randomColor])//随机生成颜色
			.css("position","absolute")//相对父div定义位置，需要父div设置position: relative
			.css("left","90%")//刚生成时在最右侧
			.css("top",randomY)//距离顶部距离随机
			.css("font-size","25px")//字的大小
			.animate({left:"10%"},15000,"linear",function(){//添加动画，15秒钟内left从100%变为1%,"linear"使动画匀速
				$(this).remove();//回调函数，span标签动画结束后删除span标签
			});
			//将创建好的span标签添加到页面
			$(".box2_content").append(span);
			//设置文本框的内容为空
			$(".box2_text").val("");
		}
	});
	$(".box2_text").keyup(function(e){//当.box2_text获得焦点且键盘键被松开时
		if(e.keyCode == 13){//判断按下的建是否是回车
			$(".box2_btn").click();
		}
	});
//导航下拉菜单
	$(".mymenu>li").hover(//这里如果选择a标签，那鼠标移出a标签后div又消失了。选择li标签则不会，因为子菜单div也在li标签中
		function(){
			$(this).children("div").fadeIn(200);//fadeIn()或css()或slideDown()
		},
		function(){
			$(this).children("div").fadeOut(200);
		}
	);
//滚动后导航固定
	$(window).scroll(function(){
		if($(window).scrollTop()>$(".top").height()){//滚动距离超过上方元素高度时
			$(".mymenu").attr("id","fixedMenu");
		}
		else{
			$(".mymenu").removeAttr("id");
		}
		
	});
//发送弹幕按钮样式变化
	$(".box2_btn").mousedown(function(){
		$(this).attr("id","box2_btn_down");
	});
	$(".box2_btn").mouseup(function(){
		$(this).removeAttr("id");
	});
//弹幕输入框样式变化
	$(".box2_text").focusin(function(){
		$(this).attr("id","box2_text_focus");
	});
	$(".box2_text").focusout(function(){
		$(this).removeAttr("id");
	});
});