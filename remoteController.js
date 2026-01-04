var messageList = {}
$(function() {
	const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]')
	const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl))

	// 1F
	// $('#1FLivingRoomDyson').on('click',function(){
	// 	$('#1FLivingRoomDysonPopup').addClass('show').fadeIn();
	// });
	// $('#1FLivingRoomDysonClose').on('click',function(){
	// 	$('#1FLivingRoomDysonPopup').removeClass('show').fadeOut();
	// });

	// 2F
	// 送風機（Dyson）
	$('#2FBedRoomDyson').on('click',function(){
		$('#2FBedRoomDysonPopup').addClass('show').fadeIn();
	});
	$('#2FBedRoomDysonClose').on('click',function(){
		$('#2FBedRoomDysonPopup').removeClass('show').fadeOut();
	});
	// 寝室（エアコン）
	$('#2FBedRoomAirConditioner').on('click',function(){
		$('#2FBedRoomAirConditionerPopup').addClass('show').fadeIn();
	});
	$('#2FBedRoomAirConditionerClose').on('click',function(){
		$('#2FBedRoomAirConditionerPopup').removeClass('show').fadeOut();
	});

	// エアコンの設定カスタムボタン
	$('.airConCustomize').on('click',function(){
		$('#airConditionerCustomizePopup').addClass('show').fadeIn();
	});
	$('#airConditionerCustomizePopupClose').on('click',function(){
		$('#airConditionerCustomizePopup').removeClass('show').fadeOut();
	});
	

	// confirm
	$('.confirm').on('click',function(){
		$('#confirm').addClass('show').fadeIn();
	});
	$('#yes').on('click',function(){
		$('#confirm').removeClass('show').fadeOut();
	});
	$('#no').on('click',function(){
		$('#confirm').removeClass('show').fadeOut();
	});
});

var device = '';
var command = '';

function confirm(deviceName, commandName, message) {
	device = deviceName;
	command = commandName;
	var popupMessage = '{deviceName}{message}<br>よろしいですか？';
	$('#message').html(popupMessage.replace('{deviceName}', deviceName).replace('{message}', message));
}

function yes() {
	console.log(device);
	console.log(command);
	param = {
		'deviceId': device,
		'commandName': command
	}
	console.log(param)

	$.ajax({
		url: 'http://localhost:5000/iot/',
		type: 'POST',
		data: param
	}).done(() => {
		alert('電源ONしました。');
		device = '';
		return;
	}).fail(() => {
		alert('処理に失敗しました。時間をおいて再度お試し下さい。');
		return;
	});
}

function no() {
	console.log(device);
	device = '';
}

var temperature = (27).toFixed(1);

function temperature_down() {
	temperature = (temperature - 0.5).toFixed(1);
	display_temperature();
}
function temperature_up() {
	temperature = (temperature - 0.5).toFixed(1);
	display_temperature();
}

function display_temperature() {
	$('#temperature').html(temperature);
	$('#temperatureValue').val(temperature);
}


function souhuuki() {
	return "成功";
}