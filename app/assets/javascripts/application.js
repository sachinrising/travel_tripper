// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

$(function() {

	// $('#screen_setting_color').colorpickerplus();
	// $('#screen_setting_color').on('changeColor', function(e) {
		// if (e.color == null)
			// $(this).val('transparent').css('background-color', '#000');
		// //tranparent
		// else
			// $(this).val(e.color).css('background-color', e.color);
	// });

	initializeUI();

	function initializeUI() {
		$.ajax({
			url : "/screen_settings",
			method : "GET",
			contentType : "application/json",
			success : function(data) {
				updateEditSettingForm(data);
			}
		}).fail(function(msg) {
		});
	}

	function updateVal(jscolor){
		console.log("================jscolor=================="+jscolor)
		$('#screen_setting_color').val(jscolor);
	}

	function updateEditSettingForm(data) {
		$('.font-changable').css("font-family", data["font"]);
		// $('.color-changable').css('color', data["color"]);
		$(document).prop('title', data["title"]);
		$("#main-content").css("background-color", "#"+data["color"]);

		$('#screen_setting_id').val(data["id"]);
		$('#screen_setting_name').val(data["screen_name"]);
		$('#screen_setting_title').val(data["title"]);
		$('#screen_setting_font').val(data["font"]);
		$('#screen_setting_color').val(data["color"]);

	}

	function ConvertFormToJSON(form) {
		var array = jQuery(form).serializeArray();
		var json = {};

		jQuery.each(array, function() {
			json[this.name] = this.value || '';
		});
		return json;
	}


	$("#id-update-title").click(function() {
		// var settingHash = {};
		// settingHash['title'] = $("#id-location-name-dropbox").val();
		// settingHash['color'] = 'test';
		// settingHash['font']  = gLocation_type['Dropbox'];

		// var locationData = '{"location" : ' + JSON.stringify(locationHash) + '}';
		var settingData = '{"screen_setting" : ' + JSON.stringify(ConvertFormToJSON(jQuery("form#update_setting"))) + '}';
		$.ajax({
			url : "/screen_settings/" + $('#screen_setting_id').val(),
			type : "PUT",
			contentType : "application/json",
			data : settingData,
			success : function(data) {
				updateEditSettingForm(data);
				$("#close-setting-modal").click();
			}
		}).fail(function(msg) {

		});
		return false;

	});

});
