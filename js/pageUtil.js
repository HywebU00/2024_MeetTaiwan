var PageUtil = {};

PageUtil.getHtmlText = function (htmlContent) {
  return htmlContent.replace(/(<([^>]+)>)/gi, "");
}
PageUtil.getSubstrHtmlText = function (htmlContent, len) {
  let str = htmlContent.replace(/(<([^>]+)>)/gi, "");
  return (str.length > len) ? (str.substr(0, len) + "...") : str;
}
PageUtil.forbidden = function (msg, error) {
  console.log(msg);
  console.log(error);
  if ((msg.statusText == "error") || (msg.statusText == "parsererror") || (error == "parsererror")) {
    window.location = '/index.html';
  } else {
    PageUtil.error("error code :" + msg.status + ",error=" + error);
  }
}

/**********************************************/
/**********************************************/
/***訊息 error dialog *************************/
PageUtil.error = function (msg) {
  doEditMask();
  let mdiv = $("<div>").attr("id", "pageMsg")
    .append($("<span class=\"ui-icon ui-icon-alert\" style=\"float:left; margin:1em;\"></span>"))
    .append($("<span>").html(msg)).appendTo("body");
  mdiv.dialog({
    classes: { "ui-error": "highlight" },
    title: "系統訊息",
    height: "auto",
    width: 400,
    minHeight: 320,
    modal: true,
    closeOnEscape: true,
    buttons: {
      "關閉": function () {
        $(this).dialog("close");
      }
    },
    close: function (event, ui) { closeModal(); closeEditModal(); $(this).remove(); },
    open: function (event, ui) {
      $('.ui-dialog').css('z-index', 995);
      $(".ui-dialog-titlebar-close").hide();
      $('.ui-widget-overlay').css('z-index', 994);
    }
  });
}
/**********************************************/
/**********************************************/
/***訊息 info dialog **************************/
PageUtil.info = function (msg) {
  doEditMask();
  let mdiv = $("<div>").attr("id", "pageMsg")
    .append($("<span class=\"ui-icon ui-icon-info\" style=\"float:left; margin:1em;\"></span>"))
    .append($("<span>").html(msg)).appendTo("body");
  mdiv.dialog({
    classes: { "ui-dialog": "highlight" },
    title: "系統訊息",
    height: "auto",
    width: 400,
    minHeight: 320,
    modal: true,
    closeOnEscape: true,
    buttons: {
      "關閉": function () {
        $(this).dialog("close");
      }
    },
    close: function (event, ui) { closeModal(); closeEditModal(); $(this).remove(); },
    open: function (event, ui) {
      $('.ui-dialog').css('z-index', 995);
      $(".ui-dialog-titlebar-close").hide();
      $('.ui-widget-overlay').css('z-index', 994);
    }
  });
}
/**********************************************/
/**********************************************/
/***訊息 confirm dialog **************************/
PageUtil.confirm = function (msg, handler) {
  doEditMask();
  let mdiv = $("<div>").attr("id", "pageMsg")
    .append($("<span class=\"ui-icon ui-icon-info\" style=\"float:left; margin:1em;\"></span>"))
    .append($("<span>").html(msg)).appendTo("body");
  mdiv.dialog({
    classes: { "ui-dialog": "highlight" },
    title: "系統訊息",
    height: "auto",
    width: 400,
    minHeight: 320,
    modal: true,
    closeOnEscape: false,
    buttons: {
      "確定": function () {
        if (handler) { handler() }
        $(this).dialog("close");
      },
      "取消": function () {
        closeModal(); closeEditModal(); $(this).dialog("close");
      }
    },
    close: function (event, ui) { $(this).remove(); },
    open: function (event, ui) {
      $('.ui-dialog').css('z-index', 995);
      $(".ui-dialog-titlebar-close").hide();
      $('.ui-widget-overlay').css('z-index', 994);
    }
  });
}
/**********************************************/
/**********************************************/
/***訊息 confirm dialog **************************/
PageUtil.confirmOnChange = function (msg, handler, cancelHandler) {
  doEditMask();
  let mdiv = $("<div>").attr("id", "pageMsg")
    .append($("<span class=\"ui-icon ui-icon-info\" style=\"float:left; margin:1em;\"></span>"))
    .append($("<span>").html(msg)).appendTo("body");
  mdiv.dialog({
    classes: { "ui-dialog": "highlight" },
    title: "系統訊息",
    height: "auto",
    width: 400,
    minHeight: 320,
    modal: true,
    closeOnEscape: false,
    buttons: {
      "確定": function () {
        if (handler) { handler() }
        $(this).dialog("close");
      },
      "取消": function () {
        if (cancelHandler) {
          cancelHandler();
          closeModal(); closeEditModal(); $(this).dialog("close");
        }
      }
    },
    close: function (event, ui) { $(this).remove(); },
    open: function (event, ui) {
      $('.ui-dialog').css('z-index', 995);
      $(".ui-dialog-titlebar-close").hide();
      $('.ui-widget-overlay').css('z-index', 994);
    }
  });
}
/**********************************************/
/**********************************************/
/***convert form element to json***************/
PageUtil.convertFormToJSON = function (formObj) {
  const array = formObj.serializeArray(); // Encodes the set of form elements as an array of names and values.
  const json = {};
  $.each(array, function (el) {
    if (json[this.name]) {
      json[this.name] = (json[this.name] || []).concat(",").concat(this.value);
    } else {
      json[this.name] = this.value || "";
    }
  });
  //console.log(json); 
  return json;
}
/**********************************************/
/**********************************************/
/***convert form element to json***************/
PageUtil.convertPrefixFormToJSON = function (formObj, prefix) {
  const array = formObj.serializeArray(); // Encodes the set of form elements as an array of names and values.
  const json = {};
  $.each(array, function (el) {
    //let nn = this.name.replace(/^'+prefix+'/, "");
    let nn = this.name.replace(new RegExp("^" + prefix), '');
    if (json[nn]) {
      json[nn] = (json[nn] || []).concat(",").concat(this.value);
    } else {
      json[nn] = this.value || "";
    }
  });
  //console.log(json); 
  return json;
}
/**********************************************/
/**********************************************/
/***send ajax by json data and json result ****/
PageUtil.doJsonAjax = function (u, d, handler) {
  doMask();
  $.ajax({
    type: "POST",
    url: u,
    contentType: "application/json",
    dataType: "json",
    data: JSON.stringify(d),
    success: function (result) {
      if (result.error == 1) {
        if (handler) {
          handler(result);
        }
      } else {
        this.error("request error code :" + result.error + "<br>msg:" + result.api + "<br>msg:" + result.msg);
      }
    }, complete: function () {

    },
    error: function (msg, error, thrownError) {
      console.log(msg);
      this.error("error code :" + msg.status + "<br>" + u);
    }
  });
}


/**********************************************/
/**********************************************/
/*** show hide data form **********************/
PageUtil.doForm = function (editStatus) {
  if (editStatus) {
  	closeEditModal();
    if ($("#dataSiteListAreaPanel").length > 0) {
      doShowListBtn(-1); //close site list
    }
    //bind onchange
    let inpAry = ["input", "textarea", "select"];
    inpAry.forEach(function (item, i) {
      $("#" + PageUtil.dataFormID + " " + item).on("change", function () {
        PageUtil.dataFormIsChange = true;
      });
    })

    $("#" + PageUtil.dataFormID + " input[type='radio'],#" + PageUtil.dataFormID + " input[type='checkbox']").on("click", function () {
      PageUtil.dataFormIsChange = true;
    });

    $("#" + PageUtil.dataFormID + " button.cedit").on("click", function () {
      PageUtil.dataFormIsChange = true;
    });

	//$("#editBlock").css("right","0px");
	$("#editBlock").css("visibility","visible");
	$(".editDiv .hy_block").scrollTop(0); 
	$(".editDiv").css("right","0px"); 
	$("body").css("overflow","hidden");
	$("body").css("overflow-y", "hidden");	

  } else {
    PageUtil.dataFormIsChange = false;
    $("body").css("overflow-x","hidden");
    $("body").css("overflow-y","");
    $("#editBlock>.editDiv").animate({
      "right": "-3000px"
    }, 0, "swing", function () {
	  $("#editBlock").css("visibility","hidden"); 
      closeModal();
      closeEditModal();
    });
	
  }
}

/*** show hide data form (multi form)********************/
PageUtil.doFormById = function (fid, editStatus) {
  if (editStatus) {
  	closeEditModal();
    if ($("#dataSiteListAreaPanel").length > 0) {
      doShowListBtn(-1); //close site list
    }
    //bind onchange
    let inpAry = ["input", "textarea", "select"];
    inpAry.forEach(function (item, i) {
      $("#" + fid + " " + item).on("change", function () {
        PageUtil.dataFormIsChange = true;
      });
    })
    $("#" + fid + " button.cedit").on("click", function () {
      PageUtil.dataFormIsChange = true;
    });
    
	$("#" + fid).css("right", "0px");
	$("#" + fid).css("visibility","visible");
	$(".editDiv .hy_block").scrollTop(0); 
	$(".editDiv").css("right","0px"); 
	$("body").css("overflow", "hidden");
	$("body").css("overflow-y", "hidden");
  } else {
    PageUtil.dataFormIsChange = false;
	$("body").css("overflow-x","hidden");
    $("body").css("overflow-y","");
    $("#" + fid + ">.editDiv").animate({
      "right": "-3000px"
    }, 0, "swing", function () {
	  $("#" + fid).css("visibility","hidden");
      closeModal();
      closeEditModal();
    });
	
  }
}



/**********************************************/
/**********************************************/
/*** set data form element value***************/
PageUtil.dataFormID = "dataForm";  //can not empty
PageUtil.dataFormIsChange = false;
PageUtil.setDataFormChange = function () {
  PageUtil.dataFormIsChange = true;
}
PageUtil.setDataFormChangeReset = function () {
  PageUtil.dataFormIsChange = false;
}
PageUtil.setFormDataID = function (fid) {
  PageUtil.dataFormID = fid;
}
PageUtil.setFormDataCheckbox = function (vals, objName) {
  //vals split by comma
  let list = vals.split(",");
  for (var i = 0; i < list.length; i++) {
    $("#" + PageUtil.dataFormID + " input[name='" + objName + "'][value='" + list[i] + "']")
      .prop("checked", true);
  }
}
PageUtil.setFormDataSelect = function (val, objId) {
  $("#" + PageUtil.dataFormID + " select[name='" + objId + "']").val(val);
}
//auto get filed value
PageUtil.setFormDataValue = function (bean, objIdAry) {
  //objIdAry [sbject,url,content] //input|select
  for (var i = 0; i < objIdAry.length; i++) {
    $("#" + PageUtil.dataFormID + " input[name='" + objIdAry[i] + "'],#" + PageUtil.dataFormID + " textarea[name='" + objIdAry[i] + "'],#" + PageUtil.dataFormID + " select[name='" + objIdAry[i] + "']").val(bean[objIdAry[i]]);
  }
}
//set feild by value and obj id
PageUtil.setFormDataByValue = function (val, objId) {
  //objIdAry [sbject,url,content] //input|select
  $("#" + PageUtil.dataFormID + " input[name='" + objId + "'],#" + PageUtil.dataFormID + " textarea[name='" + objId + "'],#" + PageUtil.dataFormID + " select[name='" + objId + "']").val(val);
}
//init html editor and set content
PageUtil.setFormDataHtmlEditor = function (val, obj, config) {
  //obj="#content  or  #dataForm textarea[name='content']" 
  if ($(obj)[0]['data-froala.editor'] != undefined) {
    $(obj)[0]['data-froala.editor'].destroy();
  }
  $(obj).val(val);
  let editor = new FroalaEditor(obj, {
    imageUploadParams: config, events: {
      "contentChanged": function () {
        PageUtil.setDataFormChange();
      }
    }
  }, function () {
    // Call the method inside the initialized event.
    editor.html.set(val);
  })
}

//supprot textarea[name]|div[name]|objId
PageUtil.setFormDataHTML = function (bean, objIdAry) {
  for (var i = 0; i < objIdAry.length; i++) {
    $("#" + PageUtil.dataFormID + " div[name='" + objIdAry[i] + "']").html(bean[objIdAry[i]]);
  }
}

//form element add required rule
PageUtil.setFormDataRequired = function () {
  $("#" + PageUtil.dataFormID + " .necessary,.necessary").parents(".form_grp").find("input,select,textarea").each(function () {
    if ($(this).attr("type") != "hidden" && $(this).attr("type") != "file") {
      try {
        var id = $(this).attr("id");
        if ($("#" + id).length > 0) {
          $("#" + id).rules("add", {
            required: true
          });
        }
      } catch (E) {
        console.log($(this).attr("id") + ".." + E);
      }
    }
  });
}

//append multi lang input
PageUtil.setFormDataLangTextValue = function (objId, bean, langList) {
  $("#" + objId).empty();
  langList.forEach(function (item, i) {
    let dgrp = $("<div>").attr("class", "form_grp")
      .append($("<label>").attr("class", "form_title").html(item.name));
    let dcont = $("<div>").attr("class", "form_content");
    let dsub = $("<div>").attr("class", "sub_form_content");
    let linp = $("<input>").attr("name", objId + "-" + item.id).attr("id", objId + "-" + item.id);
    if (bean && bean[objId] && bean[objId][item.id]) {
      linp.val(bean[objId][item.id]);
    }
    dgrp.append(dcont.append(dsub.append(linp)));
    $("#" + objId).append(dgrp);
  })
}

PageUtil.setFormDataLangTextAreaValue = function (objId, bean, langList) {
  $("#" + objId).empty();
  langList.forEach(function (item, i) {
    let dgrp = $("<div>").attr("class", "form_grp")
      .append($("<label>").attr("class", "form_title").html(item.name));
    let dcont = $("<div>").attr("class", "form_content");
    let dsub = $("<div>").attr("class", "sub_form_content");
    let dtext = $("<textarea>").attr("name", objId + "-" + item.id).attr("id", objId + "-" + item.id);
    if (bean && bean[objId] && bean[objId][item.id]) {
      dtext.val(bean[objId][item.id]);
    }
    dgrp.append(dcont.append(dsub.append(dtext)));
    $("#" + objId).append(dgrp);
  })
}


//append json Content to data form table
PageUtil.appendFormDataJsonContent = function (info, parentID, modHandler, delHandler) {
  let tr = $("<tr>").attr("data-jscont", info.id);
  tr.append($("<td>").append($("<img>").attr("src", "/images/module/" + info.dsType + ".png")));
  if (info.dsType == "h-edit") {
    tr.append($("<td>").html(""));
  } else {
    if (info.tempImgPath1 != "") {
      tr.append($("<td>").append($("<img>").attr("src", info.tempImgPath1)));
    } else if (info.img1.path != "") {
      tr.append($("<td>").append($("<img>").attr("src", info.img1.encodePath)));
    } else {
      tr.append($("<td>").html(""));
    }
  }
  tr.append($("<td>").html(PageUtil.getSubstrHtmlText(info.content1, 100)));
  let btnMod = $("<button>").attr("type", "button").attr("class", "btn icon_btn cedit").attr("tooltip", "編輯")
    .append($("<i>").addClass("i_edit"))
    .bind("click", function () { modHandler(info.id); });
  let btnDel = $("<button>").attr("type", "button").attr("class", "btn icon_btn cedit").attr("tooltip", "編輯")
    .append($("<i>").addClass("i_trash"))
    .bind("click", function () { delHandler(info.id); });
  tr.append($("<td>").append(btnMod, btnDel));
  if ($("tr[data-jscont='" + info.id + "']").length > 0) {
    $("tr[data-jscont='" + info.id + "']").replaceWith(tr);
  } else {
    $("#" + PageUtil.dataFormID + " #" + parentID).append(tr);
  }

  //set sort
  $("#" + PageUtil.dataFormID + " #" + parentID).sortable({
    placeholder: "ui-state-highlight",
    axis: "y",
    change: function (event, ui) {
      //console.log(ui.item.find(".priority").text());
    },
    stop: function (event, ui) {
      // $("#jsonSort").val(getJsonSort());
      // console.log(ui.item.attr("id") + "..." + $("#jsSort").val());
    }
  });
}
//remove json content
PageUtil.removeFormDataJsonContent = function (id) {
  $("tr[data-jscont='" + id + "']").remove();
}
//get json sort
PageUtil.getFormDataJsonSort = function (parentID) {
  var tarr = [];
  $("#" + parentID + " tr").each(function () {
    tarr.push($(this).attr("data-jscont"));
  });
  return tarr.join(",").toString();
}


//append data information
PageUtil.setFormDataEditInfo = function (parentBlockID, isShow, bean) {
  $(".editInfo").remove();
  if (isShow) {
    let p1 = $("<p>");
    if (bean.creator != undefined && bean.creator != "") {
      p1.append($("<span>").attr("class", "editTitle").html("新增人員"))
        .append($("<span>").html(bean.creatorStr));
    }
    if (bean.createTime != undefined && bean.createTime != "") {
      p1.append($("<span>").attr("class", "editTitle").html("新增時間"))
        .append($("<span>").html(PageUtil.getDateStr(bean.createTime)));
    }
    let p2 = $("<p>")
    if (bean.modifier != undefined && bean.modifier != "") {
      p2.append($("<span>").attr("class", "editTitle").html("異動人員"))
        .append($("<span>").html(bean.modifierStr));
    }

    if (bean.modifyTime != undefined && bean.modifyTime != "") {
      p2.append($("<span>").attr("class", "editTitle").html("異動時間"))
        .append($("<span>").html(PageUtil.getDateStr(bean.modifyTime)));
    }
    let ta = $("<div>").attr("class", "editInfo").append(p1, p2);

    $("#" + parentBlockID + " .hy_block,#" + parentBlockID + " .fix_block").append(ta);
  } else {
    $(".editInfo").remove();
  }
}

PageUtil.setFormDataTableEditInfo = function (parentBlockID, isShow, bean) {
  $("#" + parentBlockID + ">.editInfo").remove();
  if (isShow) {
    let hh3 = $("<h3>").html("異動資訊");
    let tb = $("<tbody>");
    if (bean.creator != undefined && bean.creator != "") {
      tb.append($("<tr>").append($("<th>").html("新增人員"))
        .append($("<td>").html(bean.creatorStr)));
    }
    if (bean.createTime != undefined && bean.createTime != "") {
      tb.append($("<tr>").append($("<th>").html("新增時間"))
        .append($("<td>").html(PageUtil.getDateStr(bean.createTime))));
    }
    if (bean.modifier != undefined && bean.modifier != "") {
      tb.append($("<tr>").append($("<th>").html("異動人員"))
        .append($("<td>").html(bean.modifierStr)));
    }

    if (bean.modifyTime != undefined && bean.modifyTime != "") {
      tb.append($("<tr>").append($("<th>").html("異動時間"))
        .append($("<td>").html(PageUtil.getDateStr(bean.modifyTime))));
    }
    let ta = $("<div>").attr("class", "table_list editInfo").append(hh3, $("<table>").append(tb));
    $("#" + parentBlockID).append(ta);
  } else {
    $("#" + parentBlockID + ">.editInfo").remove();
  }
}


/**********************************************/
/**********************************************/
/*** set data form element required************/
PageUtil.setFormDataLangTextRequired = function (objId, langList) {
  langList.forEach(function (item, i) {    
    $("input[name='" + objId + "-" + item.id + "']").rules("add", "required");
  })
}
PageUtil.setFormDataLangTextAreaRequired = function (objId, langList) {
  langList.forEach(function (item, i) {
    $("textarea[name='" + objId + "-" + item.id + "']").rules("add", "required");
  })
}


/**********************************************/
/**********************************************/
/**********************************************/
PageUtil.getDateStr = function (sdate) {
  let aa = new Array();
  if (sdate != "") {
    if (sdate.length >= 4) {
      aa.push(sdate.substr(0, 4));
    }
    if (sdate.length >= 6) {
      aa.push(sdate.substr(4, 2));
    }
    if (sdate.length >= 8) {
      aa.push(sdate.substr(6, 2));
    }
    if (sdate.length <= 8) {
      return aa.join("/");
    } else {
      if (sdate.length == 12) {
        return aa.join("/") + " " + sdate.substr(8, 2) + ":" + sdate.substr(10, 2);
      } else if (sdate.length == 14) {
        return aa.join("/") + " " + sdate.substr(8, 2) + ":" + sdate.substr(10, 2) + ":" + sdate.substr(12, 2);
      }
    }
  }
  return "";
}