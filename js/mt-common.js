function setDataTitle(listID){
	let dlen = $("#"+listID+">thead>tr>th").length;
	$("#"+listID+">tbody>tr").each(function(){
	  	for(var i=0;i<dlen;i++){
	      $(this).children("td:eq("+i+")").attr("data-title",$("#"+listID+">thead>tr>th:eq("+i+")").text());
	      $(this).children("td:eq("+i+")").prepend($("<span>").text($("#"+listID+">thead>tr>th:eq("+i+")").text()+":"));
	    }
	})
  
}

var mtMsg = {
	msgStatus:"", //empty can't close dialog
	_isOpen:false
};

mtMsg.formSubmit = function(){
	mtMsg.msgStatus = "";
	$("#msgModal h2").show();
	$("#msgModal p").html(_processing_text);
	$("#msgModal .btn_grp").hide();
	if(!mtMsg._isOpen){
		mtMsg._open();
	}
}

mtMsg.showMsg = function(msg,closeable){
	$("#msgModal h2").hide();
	$("#msgModal p").html(msg);
	if(closeable){
		mtMsg.msgStatus = "error";
	  $("#msgModal .btn_grp").show();
  }else{
  	mtMsg.msgStatus = "";
	  $("#msgModal .btn_grp").hide();
	}
	if(!mtMsg._isOpen){
		mtMsg._open();
	}
}

mtMsg.close = function(){
	mtMsg.msgStatus = "close";
	$.fancybox.close();
}

mtMsg._open = function(){
	mtMsg._isOpen = true;
	$.fancybox.open({
		src  : '#msgModal',
		type : 'inline',
		closeBtn: false, // 是否顯示關閉按紐 
		closeClick: false, 
    helpers: {
      overlay: { closeClick: false }  // 防點擊背景時關閉
    },
    keys: {
        close: null // 防點擊ESC時關閉
    },
		opts : {
			beforeClose : function( instance, current, e ) {
				 if(mtMsg.msgStatus=="error" || mtMsg.msgStatus=="close"){
				 	  return true;
				 }else{
				 	  return false;
				 }
      },
      afterClose: function( instance, current, e ) {
      	mtMsg._isOpen = false;
      }
		}
	});
}



	
	
