$(window).ready(function(){
//判断必填输入框中是否有内容
	$(".row5>div>form>div>div>input").focusout(function(){//输入框失去焦点时
		if($(this).val()==""){//文本框中未输入时
			$(this).parent().addClass("has-error");
			$(this).attr("placeholder","It must be filled");
		}
		else{
			$(this).parent().removeClass("has-error");
			$(this).parent().addClass("has-success");
		}
	});
//注册账户按钮
	$("#bth-register").click(function(){
		$(this).button('loading');
	});
//判断两次密码是否一致
	$("#password2").focusout(function(){
		var pw2 = $(this).val();
		var pw1 = $("#password1").val();
		if(pw1 != pw2){
			$(".password-info")
			.css("color","red")
			.css("margin-left","15px")
			.html("Password mismatch");//密码不一致
			$("#password1").parent().addClass("has-error");
			$("#password2").parent().addClass("has-error");
		}
		else{
			$(".password-info").html("");
			$("#password1").parent().addClass("has-success");
			$("#password2").parent().addClass("has-success");
		}
	});
//设置生日不能选择当前时间之后	
	$("#birthday").click(function(){
		var date_now = new Date();//得到当前时间
		var year = date_now.getFullYear();//得到当前年份
		//得到当前月份
		//注：js中获取Date中的month时，会比当前月份少一个月，所以这里需要先加一
		//判断当前月份是否小于10，如果小于，那么就在月份的前面加一个 '0' ， 如果大于，就显示当前月份
		var month = date_now.getMonth()+1 < 10 ? "0"+(date_now.getMonth()+1) : (date_now.getMonth()+1);
		//得到当前日,同理，小于10添0
		var date = date_now.getDate() < 10 ? "0"+date_now.getDate() : date_now.getDate();
		//设置input标签的max属性
		$("#birthday").attr("max",year+"-"+month+"-"+date);
	})
//判断电话格式（正则）
	$("#phone").focusout(function(){
		phone = $(this).val();
		var reg = new RegExp("^1[0-9]{10}$","g");
		if(phone.match(reg) == null){
			$(".phone-info")
			.css("color","red")
			.css("margin-left","15px")
			.html("Wrong number");//电话号码有误
			$(this).parent().addClass("has-error");
		}
		else{
			$(".phone-info")
			.html("")
			$(this).parent().addClass("has-success");
		}
	});
//判断邮箱格式（正则）
	$("#email").focusout(function(){
		email = $(this).val();
		var reg = new RegExp("^.+@.+.com$","g");
		if(email.match(reg) == null){
			$(".email-info")
			.css("color","red")
			.css("margin-left","15px")
			.html("Mailbox format error");//邮箱格式有误
			$(this).parent().addClass("has-error");
		}
		else{
			$(".email-info")
			.html("")
			$(this).parent().addClass("has-success");
		}
	});
});