/*
 * FileUpload Tool
 * dependence: jquery.js, common.js
 * company: www.hyweb.com.tw
 * copyRight: Hyweb Technology Co., Ltd.(c) 2020 All Rights Reserved.
 * author Peter, Chen
 * version: 1.0
 */


var FileUpload = {};

FileUpload.debug = true;
FileUpload.map = {};
FileUpload.config = {};
FileUpload.init = function(elm, config) {
	  _log("load config");
    _log(config);
    var up = new UploadArea(config);
    var area = up.object();
    $("#" + elm).append(area.uploadArea);
    FileUpload.map[config.group] = area;
    FileUpload.config[config.group] = config;
};

FileUpload.clear = function(group){
	var area = FileUpload.map[group];
	area.fileList.find(".file").each(function() {
      var uid = $(this).find(".delete").attr("uid");
      if (uid!="") {
         console.log("clear: " + uid);          
         _Remove(uid, this, area.config);   
      } 
  });
};

FileUpload.imageLibraryCallback = function(group, files, isOverMax){
	if(isOverMax=="Y") {
	  alert("只能選擇一個檔案");
  }else{
	  FileUpload.map[group].uploadArea.addImageLibrary(files);
  }
};

function _log(str){
    if (FileUpload.debug) {
        console.log(str);	
    }
}

/*
  <div class="upload_area">
      <p class="upload_notice">請把檔案拖拉到此框，或是<a href="#" class="btn btn-xs">選擇檔案</a><a href="#" class="btn btn-xs">圖庫選取</a></p>
      <div>
        FileItem
        .
        .
        .
      </div>
      <p>檔案類型：*.doc *.docx *.xls *.xlsx *.pptx *.ppt *.pdf *.zip *.rar *.pdf；檔案大小： 4,000 KB</p>
    </div>
  </div>
*/
function UploadArea(config) {
	  
    config.uploadCount = 0;
    config.queue = new Array();
    	  
    var uploadArea = $("<div class='upload_area'/>").bind({
    	  dragenter: function(e) {
            $(this).attr("class", "upload_area working");
            e.stopPropagation();
            e.preventDefault();
        },
        dragover: function(e) {
            $(this).attr("class", "upload_area working");
            e.stopPropagation();
            e.preventDefault();
        },
        dragleave: function(e) {
            $(this).attr("class", "upload_area");
            e.stopPropagation();
            e.preventDefault();
        },
        drop: function(e) {
            $(this).attr("class", "upload_area")
            e.stopPropagation();
            e.preventDefault();
            var dt = e.originalEvent.dataTransfer;
            var files = dt.files;
            handleFiles(files);
        }
    });
    
    var notice = $("<p class='upload_notice'>請把檔案拖拉到此框，或是</p>");
    
    var chooseBtn = $("<a href='#' class='btn btn-xs'>選擇檔案</a>").bind({
        click: function() {
          fileBtn.click();
        }
    });
    
    
    var fileList = $("<div/>").sortable({
        placeholder: "ui-state-highlight",
        axis: "y",
        change: function( event, ui ) {
           // movement = ui.position.top - ui.originalPosition.top > 0 ? "DOWN" : "UP";
        },
        stop: function( event, ui) {
            var uids = new Array();
            fileList.find(".file").each(function() {
            	  var uid = $(this).find(".delete").attr("uid");
            	  if (uid!="") {
            	      uids.push(uid);
            	  }
            });
            new _Sort(uids.join(","), config);
        }
    });
    
    //var photoLibBtn = $("<a href='#' class='btn btn-xs'>選自圖庫</a>").bind({
    //    click: function() {
    //    	BoxTool.open("選自圖庫", contextPath + "/" + currentLang + "/associate/util/image-lib/finder.html?id=" + config.id + "&group=" + config.group, "98","580");
    //    }
    //});
    
    var fileBtn = $("<input type='file' style='display:none' " + (config.multiple=="Y" ? "multiple" : "") + " />").bind({
        change: function(e) {
            var files = $(this)[0].files;            
            handleFiles(files);
        },
        click: function(e) {
          $(this).val(null);
        }
    });
    
    var fileHidden = $("<input type='hidden' id='btn-" + config.group +"' name='btn-" + config.group +"' value='0' style='display:none' />");
    
    config.updateCount = function() {
        fileHidden.val(config.queue.length);
    };
    
    notice.append(chooseBtn);
    if (config.photoLibrary=="Y") {
        notice.append(photoLibBtn);
    }
    notice.append(fileBtn);
    notice.append(fileHidden);
    
    uploadArea.append(notice).append(fileList);
	if( config.width > 0 && config.height > 0 ){
		uploadArea.append($("<p class=\"info\">檔案類型：" + config.types + "；檔案大小：" + config.sizeText + "；建議尺寸：" + config.width + "x" + config.height + "</p>"));
	}else{
		uploadArea.append($("<p class=\"info\">檔案類型：" + config.types + "；檔案大小：" + config.sizeText + "</p>"));
	}


    var area = {};
    area.uploadArea = uploadArea;
    area.fileList = fileList;
    area.config = config;
    
    function handleFiles(files) {
        _log("handleFiles");
        _log(files);
        for (var i = 0; i < files.length; i++) {
            var file = files[i];
            if (config.multiple=="N" && (config.queue.length>0 || files.length>1)) {
                alert("只能選擇一個檔案");
                break;
            } else {
                fileList.append(new FileItem(file, area, false));
            }
        }
    }
	  
    _log("Load exist data");
    for (var i=0; i<config.data.length; i++) {
        _log(config.data[i]);
        fileList.append(new FileItem(config.data[i], area, true));
        config.queue.push(config.data[i]);
        config.updateCount();
    }
        
    uploadArea.addImageLibrary = function(files){
      _log("Load library data");
      for (var i=0; i<files.length; i++) {
          _log(files[i]);
          fileList.append(new FileItem(files[i], area, true));
          config.queue.push(files[i]);
          config.updateCount();
      }
    };

    this.object = function(){
    	return area;
    };

}


/*
 <div class="file">
   <div class="pic"><img src="images/photo_01.png" alt=""></div>
   <span>檔案名稱檔案名稱.jpg<em>450KB</em></span>
   <div class="progress_bar">
       <span style="width:70%"></span>
   </div>
   <a href="#" class="delete"><i class="i_close"></i></a>
 </div>
*/
function FileItem(file, area, active) {
    var config = area.config;
        
    function bytesToSize(bytes) {
        if(bytes == 0) return "0";
        var units = ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];
        var digitGroups = Math.floor(Math.log(bytes) / Math.log(1024));
        return parseFloat((bytes / Math.pow(1024, digitGroups)).toFixed(1)) + ' ' + units[digitGroups];
    }
    
    var fileArea = $("<div class='file' id='fileArea_" + file.uid + "'></div>");
    var pic = $("<div class='pic'/>");
    var img = $("<img src='" + contextPath + "/images/taitra-file.png' alt=''/>");
    pic.append(img);
    //(Math.round(file.size / 1024))
    var name = $("<span><a href=\""+file.encodeDownloadPath+"\" target=\"_blank\">" + file.name + "</a><em>" + bytesToSize(file.size) + "</em></span>");
    var progressBar = $("<div class='progress_bar' style='display:none'/>");
    var progress = $("<span style='width:0%'/>");
    var deleteBtn = $("<a href='javascript:void(0);' class='delete' uid='' style='display:none'><i style='font-size:1.3em;' class='i_close'></i></a>").bind({
        click: function() {  
        	  //PageUtil.setDataFormChange();     	  
            var uid = $(this).attr("uid");
            if(uid=="") {
                fileArea.remove();
            } else {
            	  new _Remove(uid, fileArea, config);
            }
        }
    });
    if (active || file.photoLibrary=="Y") {
    	  if (file.type.match("image/.*")) {
    	      img.attr("src", file.encodePath);
    	  }
        deleteBtn.attr("uid", file.uid);
        deleteBtn.css({display: "block"});
    }
    
    progressBar.append(progress);
    fileArea.append(pic).append(name).append(progressBar).append(deleteBtn);
    
    var item = {};
    item.fileArea = fileArea;
    item.pic = pic;
    item.img = img;
    item.name = name;
    item.progressBar = progressBar;
    item.progress = progress;
    item.deleteBtn = deleteBtn;
    
    if (active==false || file.photoLibrary=="N") {
        if (!file.name.toLowerCase().match(config.typesReg)) {
             fileArea.attr("class", "file notice_error");
             name.html(file.name + " <em>檔案類型不正確</em>");
             deleteBtn.css({display: "block"});
             return fileArea;
        }
        if (file.size > config.size) {
             fileArea.attr("class", "file notice_error");
             name.html(file.name + " <em>檔案大小" + bytesToSize(file.size) + "超過" + config.sizeText + "限制</em>");
             deleteBtn.css({display: "block"});
             return fileArea;
        }
        new _Upload(file, area, item);
    }
    
    return fileArea;
}


function _Remove(uid, fileArea, config) {
    _log("Action Remove: group=" + config.group + ", uid=" + uid);
    $.ajax({
      	 contentType:"application/json",
         url: contextPath + "/" + currentLang + "/system/fileupload/remove.json?id=" + config.id + "&group=" + config.group + "&uid=" + uid,
         data: "",
         method:"POST",
         dataType: "json",
         success: function(data) {
         	   _log(data);
             var k = -1;
             for (var i=0; i<config.queue.length; i++) {
                 if(config.queue[i].uid == uid) {
                   	k = i;
                   	break;
                 } 	
             }
             if (k>-1) {
                 _log("remove queue: " + (k));
                 config.queue.splice(k, 1);
             }
         	   fileArea.remove();
         	   config.updateCount();
         }
    });
}

function _Sort(uids, config) {
    _log("Action Sort: group=" + config.group + ", uids=" + uids);
    $.ajax({
      	 contentType: "application/json",
         url: contextPath + "/" + currentLang + "/system/fileupload/sort.json?id=" + config.id + "&group=" + config.group + "&uids=" + uids,
         data: "",
         method:"POST",
         dataType: "json",
         success: function(data) {
         	   _log(data);
         }
    });
}

function _Upload(file, area, item) {
	  var config = area.config;
	  
    _log("Action Upload: group=" + config.group + ", file=" + file.name);
    
    area.uploadArea.attr("class", "upload_area working");
    
    config.uploadCount ++;
    item.progressBar.css({display:"block"});
    
    var uid = new Date().getTime();
    
    var formData = new FormData();
    formData.append("file", file);
    formData.append("uid", uid);
    if($("#btn-"+ config.group +"-error")){
      $("#btn-"+ config.group +"-error").remove();
    }
        
    $.ajax({
        url: contextPath + "/" + currentLang + "/system/fileupload/upload.html?id=" + config.id + "&group=" + config.group,
        contentType: false,
        processData: false,
        data: formData,
        xhr: function() {
         	  var appXhr = $.ajaxSettings.xhr();
         	  // Check if upload property exists, if "yes" then upload progress can be tracked otherwise "not"
         	  if (appXhr.upload) {
         	  	   // Attach a function to handle the progress of the upload
         	  	   appXhr.upload.addEventListener("progress",function(e){
         	  	       if (e.lengthComputable) {
                         var percentage = Math.round((e.loaded * 100) / e.total);
                         var uploadSize = Math.round(e.loaded / 1024) + "KB";
                         var totalSize =  Math.round(e.total / 1024) + "KB";
                         _log(uploadSize + " / " + totalSize + " " + percentage + "%");
                         item.progress.css({width: percentage + "%"});
         	  	       }
         	  	   }, false);
         	  }
         	  return appXhr;
        },
        method: "POST",
        success: function(data) {
            _log("upload done");

            //var info = eval("info = "  + data + ";");
            var info = $.parseJSON(data);
            _log(info);
            
            item.progressBar.css({display: "none"});
            item.deleteBtn.css({display: "block"});
            
            if (info.errorCode==1) {
            	  item.name.html(file.name + " <em>上傳錯誤</em>");
                item.fileArea.attr("class", "file notice_error");
            } else
            if (info.errorCode==2) {
                item.name.html(file.name + " <em>檔案類型不正確</em>");
                item.fileArea.attr("class", "file notice_error");
                
            } else
            if (info.errorCode==3) {
            	  item.name.html(file.name + " <em>檔案大小超過限制</em>");
                item.fileArea.attr("class", "file notice_error");
            } else {
                config.queue.push(info);
                config.updateCount();
                item.deleteBtn.attr("uid", info.uid);
                
                if (info.type.match("image/.*")) {
                    item.img.attr("src", contextPath + info.encodePath);
                }
                item.name.find("a").each(function() {
                	$(this).attr("href",info.encodeDownloadPath); 
                })

                //area.fileList.append(item.fileArea);
                //area.fileList.trigger("sortupdate");
            }

            config.uploadCount --;
            
            if (config.uploadCount<1) {
                config.uploadCount = 0;
                
                var uids = new Array();
                area.fileList.find(".file").each(function() {
                	  var uid = $(this).find(".delete").attr("uid");
                	  if (uid!="") {
                	      uids.push(uid);
                	  }
                });
                new _Sort(uids.join(","), config);
                
                
                area.uploadArea.attr("class", "upload_area");
                _log(".....all upload done");
            }
        }
    });	
}