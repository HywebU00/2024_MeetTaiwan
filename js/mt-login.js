function beforeLoginInit(){
	$("input,textarea,.select_style").each(function () {
		var $this = $(this);
		if ($this.val() != "") $this.addClass("used");
		else $this.removeClass("used");
	});
	$("input,textarea,.select_style").blur(function () {
		var $this = $(this);
		if ($this.val() != "") $this.addClass("used");
		else $this.removeClass("used");
	});
	$('.password_toggle').each(function (index, el) {
		$(this)
		  .find('.showPassword a')
		  .off()
		  .click(function (e) {
			if ($(this).children('i').hasClass("fa-eye-slash")) {
			  $(this).children('i').removeClass().addClass('fas fa-eye');
			  $(this)
				.parents('.password_toggle')
				.find('input[type="password"]')
				.attr('type', 'text');
			} else {
			  $(this).children('i').removeClass().addClass('fas fa-eye-slash');
			  $(this)
				.parents('.password_toggle')
				.find('input[type="text"]')
				.attr('type', 'password');
			}
			e.preventDefault();
		  });
	  });
}

var memLogin = {
	login_html:"",
	source:""
};

memLogin.bindLogBtn = function(){
	var searchStatus = false;
	$('.loginBtn')
	  .off()
	  .click(function (e) {
		if (!searchStatus) {            	
		  $('.mt-signup').stop(true, true).addClass('open').removeClass('close');
		  searchStatus = true;
		  memLogin.init();
		}
		e.preventDefault();
	  });
	$('.mt-signup')
	  .find('.close')
	  .off()
	  .click(function (e) {
		$('.mt-signup').stop(true, true).addClass('close').removeClass('open');
		$("#n_password").val("");
		$("#n_password").attr("type","text");
		searchStatus = false;
		e.preventDefault();
	  });
}

memLogin.init = function(){
	if(memLogin.login_html == ""){
		return;
	}else{
		$("#login-block").html(memLogin.login_html);
		$("#n_password").attr("type","password");
		beforeLoginInit();
		//let tabLogin = new BtnTab({
		//	name: $('.nav-login'),
		//});
		//tabLogin.initial();
	}
	$("#login-form-nt input").each(function(){
		$(this).val("");
	});
	//$("#login-form-t1")[0].reset();
	//$("#login-form-t2")[0].reset();
	refreshDynaimage();
	
	//$(".nav-login .nav-list button").on("click",function(){
	//	refreshDynaimage();
	//});
	
	let _validator = $("#login-form-nt").validate({
		ignore: ".fr-box *",
		rules:{
			"n_account":{required:true},
			"n_password":{required:true},
			"n_inputCode":{required:true}
		},
		debug:true,
		submitHandler:function(f) {
			doMsg()
			$.ajax({
				 type: "POST",
				 dataType: "json",
				 url: "/" + currentLang + "/m/nonc/login/newLogin.json",
				   data: {
					   "account": $("#n_account").val(),
					   "password": $("#n_password").val(),
					   "dynaCode": $("#n_inputCode").val()
				   },
				 success:function(result){
					if(result.error == 1){
						_login_1();
					}else if(result.error == 2){
						_login_2();
					}else{
						$("#p-error-nl").show();
						$("#p-error-nl").html("<i class=\"fas fa-exclamation-triangle\"></i>" + result.msg);
						$("#n_password").val("");
						closeMsg();
					}
				 },complete: function(){
					 $("#n_inputCode").val("");
					 refreshDynaimage();
				 }, 
				 error:function(msg, error,thrownError){
				   console.log(thrownError);
				 }
			});
		}
	});
	
}

function _login_1(){
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "/" + currentLang + "/m/nonc/login/doLogin.json",
		data: {
		   "account": $("#n_account").val(),
		   "password": $("#n_password").val()
		},
		success:function(result){
			if(result.error == 1){
				if(memLogin.source){
					window.location.href = "/" + currentLang + memLogin.source;
				}else{
					window.location.href = "/" + currentLang + "/member/index.html";
				}
			}else{
				$("#p-error-nl").show();
				$("#p-error-nl").html("<i class=\"fas fa-exclamation-triangle\"></i>" + result.msg);
				$("#n_password").val("");
			}
		},complete: function(){
			 $("#n_inputCode").val("");
			 refreshDynaimage();
			 closeMsg();
		}, 
		error:function(msg, error,thrownError){
			console.log(thrownError);
		}
	});
}

function _login_2(){
	$.ajax({
		type: "POST",
		dataType: "html",
		url: "/" + currentLang + "/m/nonc/login/transferForm.html",
			data: {
				"account": $("#n_account").val(),
				"password": $("#n_password").val()
			},
			success:function(result){
				if(result.indexOf("hasError") > -1){
					$("#p-error-nl").show();
					$("#p-error-nl").html(result);
					$("#n_password").val("");
				}else{
					$("#login-block").html(result);
				}
			},complete: function(){
				$("#n_inputCode").val("");
				refreshDynaimage();
				closeMsg();
			}, 
		error:function(msg, error,thrownError){
			console.log(thrownError);
		}
	});
}

function doLogin(){
	$('.loginBtn').trigger("click");
}

function setLoginSource(url){
	memLogin.source = url;
}

$(document).ready(function(){
	if($(".loginBtn").length > 0){
		if(memLogin.login_html == ""){
			memLogin.login_html = $("#login-block").html();
		}
		memLogin.bindLogBtn();
	}
});


function signup(){
	doMsg();
	$.ajax({
		 type: "GET",
		 dataType: "text",
		 url: "/" + currentLang + "/m/nonc/login/signupForm.html",
		 data: {},
		 success:function(result){
			$("#login-block").html(result);
			memSignup.init();
		 },complete: function(){
			 closeMsg();
		 },
		 error:function(msg, error,thrownError){
		   console.log(msg);
		 }
	});
}

var memSignup = {
	init: function(){
		refreshDynaimage();
		$("#l-privacy").on("click", function(){
			$("#si_submit").html($("#r_text").val());
			$("#si_submit").removeAttr("disabled");
		});
		
		$.validator.addMethod("checkSignupPwd", function(value, element){
			if(($("#si_password").val() == '') || ($("#si_password").val() != $("#si_c_password").val())){
				return false;
			}else{
				return true;
			}
		},function(params, element) {
			if(currentLang == "zh-tw"){
				return "密碼不符";
			}else{
				return "password incorrect";
			}
		});
		
		let _validator = $("#mem-signup-form").validate({
			ignore: ".fr-box *",
			rules:{
				"si_name":{required:true},
				"si_account":{email:true,required:true},
				"si_password":{checkPwdRule:true,required:true},
				"si_c_password":{checkSignupPwd:true},
				"si_country":{required:true},
				"si_lang":{required:true},
				"si_inputCode":{required:true}
			},
			//debug:true,
			submitHandler:function(f) {
				if(!$("#l-privacy-ckb").prop("checked")){
					$("#l-privacy-ckb").attr("style","border: 1px solid #ff3e4d;color: red;");
				}else{
					$("#l-privacy-ckb").attr("style","");
				}
				doMsg();
				$.ajax({
					 type: "POST",
					 dataType: "html",
					 url: "/" + currentLang + "/m/nonc/login/signup.html",
					   data: {
						   "account": $("#mem-signup-form #si_account").val(),
						   "password": $("#mem-signup-form #si_password").val(),
						   "name": $("#mem-signup-form #si_name").val(),
						   "country": $("#mem-signup-form #si_country").val(),
						   "lang": $("#mem-signup-form #si_lang").val(),
						   "dynaCode": $("#mem-signup-form #si_inputCode").val(),
					   },
					 success:function(result){
						if(result.indexOf("fas fa-exclamation-triangle") > -1){
							$("#p-error").show();
							$("#p-error").html(result);
							$("#m_inputCode").val("");
							refreshDynaimage();
						}else{
							$("#login-block").html(result);
						}
					 },complete: function(){
						 closeMsg();
					 },
					 error:function(msg, error,thrownError){
					   $("#p-error").show();
						$("#p-error").html("目前系統連線可能有問題，請您稍後再試，如若有問題請聯繫：mpo@meettaiwan.com");
						$("#m_inputCode").val("");
						refreshDynaimage();
					 }
				});
			}
		});
		
		beforeLoginInit();
		
	},
	close:function(){
		$('.mt-signup').find('.close').trigger('click');
	}
}

var forgetPwd = {
	type:""
};

forgetPwd.initOld = function(){
	forgetPwd.type = "O";
	forgetPwd.doForm();
}
forgetPwd.init = function(){
	forgetPwd.type = "";
	forgetPwd.doForm();
}


forgetPwd.doForm = function(){
	doMsg();
	$.ajax({
		type: "POST",
		dataType: "html",
		url: "/" + currentLang + "/m/nonc/login/forgetPwdForm.html",
		data: {
			"type":forgetPwd.type
		},
		success:function(result){
			$("#login-block").html(result);
			beforeLoginInit();
			$("#fp_inputCode").val("");
			refreshDynaimage();
			
			let _validator = $("#forget-pwd-form").validate({
				ignore: ".fr-box *",
				rules:{
					"fp_account":{required:true},
					"fp_inputCode":{required:true}
				},
				//debug:true,
				submitHandler:function(f) {
					doMsg();
					$.ajax({
						 type: "POST",
						 dataType: "html",
						 url: $("#forget-pwd-form").attr("action"),
						   data: {
							   "account": $("#forget-pwd-form #fp_account").val(),
							   "dynaCode": $("#forget-pwd-form #fp_inputCode").val(),
						   },
						 success:function(result){
							if(result.indexOf("hasError") > -1){
								$("#p-error-pwd").show();
								$("#p-error-pwd").html(result);
								$("#fp_inputCode").val("");
								refreshDynaimage();
							}else{
								$("#login-block").html(result);
								beforeLoginInit();
							}
						 },complete: function(){
							 closeMsg();
						 },
						 error:function(msg, error,thrownError){
						   $("#p-error-pwd").show();
							$("#p-error-pwd").html("error");
							$("#fp_inputCode").val("");
							refreshDynaimage();
						 }
					});
				}
			});
		 },complete: function(){
			 closeMsg();
		 },
		 error:function(msg, error,thrownError){
			console.log("forgetPwdForm:",thrownError);
		 }
	});
}

var transferObj = {};

transferObj.changeEmail = function(){
	$("#ts-block").hide();
	$("#ts-block-change").show();
	beforeLoginInit();
	let _validator = $("#ts-email-form").validate({
		ignore: ".fr-box *",
		rules:{
			"trans-email":{email:true,required:true}
		},
		//debug:true,
		submitHandler:function(f) {
			transferObj.transfer();
		}
	});
}

transferObj.transfer = function(){
	doMsg();
	$.ajax({
		 type: "POST",
		 dataType: "html",
		 url: "/" + currentLang + "/m/nonc/login/tempTransfer.html",
		   data: {
			   "email": $("#ts-email-form #trans-email").val(),
			   "account": $("#ts-email-form #trans-account").val()
		   },
		 success:function(result){
			 if(result.indexOf("hasError") > -1){
				$("#p-error-ta").show();
				$("#p-error-ta").html(result);
			}else{
				$("#login-block").html(result);
			}
		 },complete: function(){
			 closeMsg();
		 },
		 error:function(msg, error,thrownError){
			 console.log(msg);
		 }
	});
}


