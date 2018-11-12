
ymaps.ready(function () {

	var myMap = new ymaps.Map('map', {
					center: [45.041082, 41.955887],
					controls: ['zoomControl', 'fullscreenControl'],
					zoom: 16
			}, {
					searchControlProvider: 'yandex#search'
			}),
	
			// Создаём макет содержимого.
			MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
					'<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
			),
			
			myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
					hintContent: '1',
					balloonContent: '2'
			}, {
					// Опции.
					// Необходимо указать данный тип макета.
					iconLayout: 'default#image',
					// Своё изображение иконки метки.
					iconImageHref: '',
					// Размеры метки.
					iconImageSize: [],
					// Смещение левого верхнего угла иконки относительно
					// её "ножки" (точки привязки).
					iconImageOffset: [-16, -32]
			});
			var myRectangle = new ymaps.Rectangle([
				// Задаем координаты диагональных углов прямоугольника.
				[45.045841, 41.952149],
        [45.036173, 41.970997]
				], {
				//Свойства
				balloonContent: 'Прямоугольник 1'
				}, {
				// Опции.
				strokeWidth: 0,
				fillImageHref: '../../public/img/map-radius.png',
				
				});
			

		myMap.geoObjects.add(myPlacemark).add(myRectangle);
	
		});