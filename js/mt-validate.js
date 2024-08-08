jQuery.validator.setDefaults({
  // debug: true,
  lang: 'zh_TW',
  errorElement:"p",     
  focusInvalid:true,
  focusCleanup:false,
  errorClass: "error",
  invalidHandler: function(form, validator) {
     var errors = validator.numberOfInvalids();
     if (errors) {                  
     	console.log(validator.errorList[0]);
     	   if(validator.errorList[0].method=="fileCount"){
     	   	 if($("#"+validator.errorList[0].element.id).parent().find("a.btn-xs").length>0){
     	   	   $("#"+validator.errorList[0].element.id).parent().find("a.btn-xs")[0].focus();
     	     }
     	   }else{
     	   	  validator.errorList[0].element.focus();
     	   }
     }
  },
  highlight: function(element) {
  	//console.log(element.type);
    if(element.type =="text" ){
      $(element).closest(".form_content").addClass("error");      
      if($(element).closest(".form_content").find(".form_style").length == 0){
	      if($(element).closest(".form_content").find(".fa-times").length == 0){
		      $(element).closest(".form_content").append("<i class=\"fas fa-times\"></i>");
	      }
	    }else{
	    	if($(element).closest(".form_content").find(".form_style").find(".fa-times").length == 0){
		      $(element).closest(".form_content").find(".form_style").append("<i class=\"fas fa-times\"></i>");
	      }
	    }
    }else if(element.type=="checkbox" || element.type=="radio"){
    	$(element).addClass("error");
      $(element).closest(".form_content").addClass("form-control-danger");    
    }else{                  
    	$(element).addClass("error");
      $(element).closest(".form_content").addClass("form-control-danger");
    }
    //}else if(element.type=="checkbox" || element.type=="radio"){
    //  $(element).closest(".form_content").addClass("form-control-danger");
    //}else if(element.type =="file"){
    //  $(element).closest(".form_content").addClass("form-control-danger");
    //}else if(element.type="hidden" && $(element).attr("id").indexOf("btn-")>=0){
    // 	 $(element).closest(".form_content").addClass("form-control-danger");
    //} 
  },
  unhighlight: function(element) {
    $(element).closest(".form_content").removeClass("error").removeClass("form-control-danger");
	  $(element).closest(".form_content").find(".fa-times:first").remove();
  },
  errorPlacement: function (error, element) {
  	 if(element.hasClass("chosen")){
       error.insertAfter($("#"+$(element).attr("name")+"_chosen"));
     }else if (element.is(':radio')) {
        error.appendTo(element.closest(".form_content"));
     } else if(element.is(':checkbox')){
        error.appendTo(element.closest(".form_content"));
     }else if(element.is(':file')){
     	  error.insertAfter(element.closest(".upload_area"));
     }else if(element.is(':hidden') && $(element).attr("id") && $(element).attr("id").indexOf("btn-")>=0){
     	  error.insertAfter(element.closest(".upload_area"));	  
     }else if (element.attr("type") == 'number') {
		  if(element.closest("div").hasClass("checkbox_grp")){
			 error.appendTo(element.closest("label"));
		  }else{
			 error.appendTo(element.closest(".form_content"));
		  }
     } else{
     	  //console.log($(element));
        error.insertAfter($(element));
     }
   }
});

/***define rule method  ***************************/
//check upload 
$.validator.addMethod("fileCount", function(value, element){
    var cc = $("#"+element.name).val();
    console.log($("#"+element.name).val());
    if(cc==0){
        return false;
    }else{
        return true;
    }
},function(params, element) {
   if(currentLang && currentLang == "zh-tw"){
		return "請上傳檔案";
	}else{
		return "Please upload file";
	 }
});

//check checkbox 
$.validator.addMethod("ruleAtLeast", function(value, element,params){
    var cc = $("input[name='"+element.name+"']:checked").length;
    var limit = params[0];
      if(cc ==0 || cc <limit){
          return false;
      }else{
       return true;
     }
},function(params, element) {
	 var limit = params[0];
   if(currentLang && currentLang == "zh-tw"){
		return "請至少選取"+limit+"個項目";
	}else{
		return "Please select "+limit+" items at least";
	}
});
$.validator.addMethod("ruleAtMost", function(value, element,params){
    var cc = $("input[name='"+element.name+"']:checked").length;
    var limit = params[0];
      if(cc ==0 || cc >limit){
          return false;
      }else{
       return true;
     }
},function(params, element) {
	 var limit = params[0];
   if(currentLang && currentLang == "zh-tw"){
		return "請至多選取"+limit+"個項目";
	}else{
		return "Please select "+limit+" items at most";
	}
});
$.validator.addMethod("ruleExactly", function(value, element,params){
    var cc = $("input[name='"+element.name+"']:checked").length;
    var limit = params[0];
      if(cc !=limit){
        return false;
      }else{
        return true;
     }
},function(params, element) {
	 var limit = params[0];
   if(currentLang && currentLang == "zh-tw"){
		return "請選取"+limit+"個項目";
	}else{
	 return "Please select "+limit+" items";
	}
});

//checkbox checked then text required
$.validator.addMethod("requiredByCheckbox", function(value, element){
	  //input element name = sreason_text
	  //checkbox name=sreason
	  var icheckbox = element.name.split("_")[0];
	  var icvalue = element.name.split("_")[1];
    var cc = $("input[name='"+icheckbox+"'][value='"+icvalue+"']").prop("checked");
      if(cc && $("input[name='"+element.name+"']").val()==""){
        return false;
      }else{
        return true;
     }
},function(params, element) {
   return "必須填寫";
});

$.validator.addMethod("checkPwdRule", function(value, element){
	if(value.match(/[\d]{1,}/) && value.match(/.{8,}/) && value.match(/[A-Z].*[a-z]|[a-z].*[A-Z]/) && value.match(/\W{1,}/)){
		return true;
	}else{
		return false;
	}
},function(params, element) {
	if(currentLang && currentLang == "zh-tw"){
		return "密碼不符";
	}else{
		return "password incorrect";
	}
});