import $ from 'jquery';
import Inputmask from 'inputmask';



import './sliders';

import './yandex-map';




Inputmask({"mask": "+7 (999) 999-9999"}).mask('.quiz__finish-form--phone');

$(window).scroll(function () {
	if ($(this).scrollTop() > $(this).height()) {
		$('.top-scroll').addClass('top-scroll_active');
	} else {
		$('.top-scroll').removeClass('top-scroll_active');
	}
	$('.top-scroll').click(function () {
		$("html, body").stop().animate({ scrollTop: 0 }, 'slow', 'swing');
	});
});


function sendMail() {
	$("#order-form").submit(function () {
		$.ajax({
			type: "POST",
			url: "../ajax/mail-form_order.php",
			data: $(this).serialize(),
			success: function (response) {
				if (response) {
					console.log("send");
					$(".popup-thank").show("500");
				} else {
					console.log("Ошибка отправки");
				}
			},
			error: function (response) {
				console.log("Файл не найден");
			}
		});
	});
}

import 'normalize.css';

import '../../node_modules/swiper/dist/css/swiper.css';

import '../scss/main.scss';
