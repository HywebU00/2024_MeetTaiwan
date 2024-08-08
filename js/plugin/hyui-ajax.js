(function($) {
	
	//ajax -> url required,  other column has default value
	//
	$.hyajax = function(options) {
		let opts = $.extend({},$.hyajax.defaults,options);
		if(!opts.url){
			console.log("mtajax url empty");
		}else if(typeof opts.data != "object" || opts.data == null){
			console.log("mtajax data empty or not an object")
		}else{
			doMask(); 
			$.ajax({
				 type: opts.type,
				 url: opts.url,
				 contentType:opts.contentType,
				   dataType: opts.dataType,
				   data: JSON.stringify(opts.data),
				 success:function(result){
					if(result.error==1){
						if(typeof opts.handler == 'function'){
							opts.handler(result);	
						}
					}else{
					  PageUtil.error("request error code :"+ result.error+"<br>api:"+result.api +"<br>msg:"+result.msg);
					}
				 },complete: function(){
					closeModal();
				 }, 
				 error:function(msg, error,thrownError){
				   PageUtil.forbidden(msg,error);
				 }
			});
		}
	}
	
	$.hyajax.defaults = {
		url: "",
		data: {},
        type: "POST",
		contentType:"application/json",
		dataType: "json",
		handler: null,
		success:function(result){
			if(result.error==1){
				if(typeof opts.handler == 'function'){
					opts.handler(result);	
				}
			}else{
			  PageUtil.error("request error code :"+ result.error+"<br>api:"+result.api +"<br>msg:"+result.msg);
			}
		},
		complete: function(){
			closeModal();
		}
    };
	
	//set query field
	//format->{"type":"checkbox","data":[{"text":"我是選項一","value":"value1"},...]}
	// or
	//format->{"type":"checkbox", "dataColumn":{"name_field","value_field"},"data":[{"text":"我是選項一","value":"value1"},...]}
	// -> ex. {"type":"checkbox", "dataColumn":{"text":"name.zh-tw","value":"siteID"},"data":[{"name":"我是選項一","siteID":"value1"},...]}
	//add class attr (set class)
	//add ins attr (html insert)
	$.fn.setField = function(info){
		if(!info.type){
			console.log("setField type empty");
		}else if(!Array.isArray(info.data)){
			console.log("setField data is not an array")
		}else{
			let obj = $(this);
			let id = $(this).attr("id").replace("_","");
			let cls = "";
			if(info.class){
				cls = info.class;
			}
			let html = "";
			switch(info.type){
				case "checkbox":{
					info.data.forEach(function(item, index, arr){
						let obj = {text:null,value:null};
						_set_field(info.dataColumn,item,obj);
						if(obj.text != null && obj.value != null){
							//if(index == 0){html += "<input type=\"checkbox\" class=\""+cls+"\" " + "id=\""+id+"\" name=\""+id+"\" value=\""+obj.value+"\"><label class=\""+cls+"\">"+obj.text+"</label>";
							//}else{
							//	html += "<input type=\"checkbox\" class=\""+cls+"\" name=\""+id+"\" value=\""+obj.value+"\"><label class=\""+cls+"\">"+obj.text+"</label>";
							//}
							html += "<input type=\"checkbox\" class=\""+cls+"\" " + "id=\""+id+"_"+obj.value+"\" name=\""+id+"\" value=\""+obj.value+"\" data-dt=\""+obj.text+"\"><label for=\""+id+"_"+obj.value+"\" class=\""+cls+"\">"+obj.text+"</label>";
						}
					});
					break;
				}
				case "select":{
					html = "<select class=\""+cls+"\" id=\""+id+"\" name=\""+id+"\">";
					if(info.note && info.note == 'nAll'){
					}else{
						html += "<option class=\""+cls+"\" value=\"\">全部</option>";
					}
					info.data.forEach(function(item, index, arr){
						let obj = {text:null,value:null};
						_set_field(info.dataColumn,item,obj);
						html += "<option class=\""+cls+"\" value=\""+obj.value+"\">"+obj.text+"</option>";
					});
					html += "</select>";
					break;
				}
			}
			if(html == ''){
			}else if(info.ins){
				switch(info.ins){
					case "html":
						$(this).html(html);
						break;
					case "after":
						$(this).after(html);
						break;
					case "before":
						$(this).before(html);
						break;
					case "prepend":
						$(this).prepend(html);
						break;
					case "append":
						$(this).append(html);
						break;
					default:
						$(this).html(html);
				}
			}else{
				$(this).html(html);
			}
		}
		
	}
	
	function _set_field(dataColumn,item, obj){
		if(dataColumn){
			dataColumn['text'].split('.').forEach(function(t,index){if(index==0){obj.text=item[t]}else{obj.text=obj.text[t]}});
			obj.value = item[dataColumn['value']];
		}else{
			obj.text=item['text'];
			obj.value=item['value'];
		}
	}
	
	
	// dynamic load js
	//['xxx.js','yyy.js']
	//
	$.getScripts = function(scripts, callback) {
		let progress = 0;
		scripts.forEach(function(script) { 
			if(!script.indexOf("v=") !== -1){
				script += "?v=" + Date.now();
			}
			$.getScript(script, function () {
				if (++progress == scripts.length) callback();
			}); 
		});
	}
	
	

})(jQuery);