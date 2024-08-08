(function( factory ) {
	if ( typeof define === "function" && define.amd ) {
		define( ["jquery", "../jquery.validate"], factory );
	} else if (typeof module === "object" && module.exports) {
		module.exports = factory( require( "jquery" ) );
	} else {
		factory( jQuery );
	}
}(function( $ ) {

/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: ZH (Chinese; 中文 (Zhōngwén), 汉语, 漢語)
 * Region: TW (Taiwan)
 */
$.extend( $.validator.messages, {
	required: "<i class=\"fas fa-exclamation-triangle\"></i>" + "必須填寫",
	pattern: "<i class=\"fas fa-exclamation-triangle\"></i>" + "資料格式有誤",
	remote: "<i class=\"fas fa-exclamation-triangle\"></i>" + "請修正此欄位",
	email: "<i class=\"fas fa-exclamation-triangle\"></i>" + "請輸入有效的電子郵件",
	url: "<i class=\"fas fa-exclamation-triangle\"></i>" + "請輸入有效的網址",
	date: "<i class=\"fas fa-exclamation-triangle\"></i>" + "請輸入有效的日期",
	dateISO: "<i class=\"fas fa-exclamation-triangle\"></i>" + "請輸入有效的日期 (YYYY-MM-DD)",
	number: "<i class=\"fas fa-exclamation-triangle\"></i>" + "請輸入正確的數值",
	digits: "<i class=\"fas fa-exclamation-triangle\"></i>" + "只可輸入數字",
	creditcard: "<i class=\"fas fa-exclamation-triangle\"></i>" + "請輸入有效的信用卡號碼",
	equalTo: "<i class=\"fas fa-exclamation-triangle\"></i>" + "請重複輸入一次",
	extension: "<i class=\"fas fa-exclamation-triangle\"></i>" + "請輸入有效的後綴",
	maxlength: "<i class=\"fas fa-exclamation-triangle\"></i>" + $.validator.format( "最多 {0} 個字" ),
	minlength: "<i class=\"fas fa-exclamation-triangle\"></i>" + $.validator.format( "最少 {0} 個字" ),
	rangelength: "<i class=\"fas fa-exclamation-triangle\"></i>" + $.validator.format( "請輸入長度為 {0} 至 {1} 之間的字串" ),
	range: "<i class=\"fas fa-exclamation-triangle\"></i>" + $.validator.format( "請輸入 {0} 至 {1} 之間的數值" ),
	max: "<i class=\"fas fa-exclamation-triangle\"></i>" + $.validator.format( "請輸入不大於 {0} 的數值" ),
	min: "<i class=\"fas fa-exclamation-triangle\"></i>" + $.validator.format( "請輸入不小於 {0} 的數值" )
} );
return $;
}));