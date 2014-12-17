'use strict';
$(function(){
	var socket = io.connect();
	socket.on('badge', function(badge){
		var $img = $('<img src="'+badge.badge_id+'" alt="CS">');
		$('.badge-wrapper').prepend($img);
	});
});