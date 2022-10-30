ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap2 = new ymaps.Map("map2", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        // Чтобы не определять координаты центра карты вручную,
        // воспользуйтесь инструментом Определение координат.
        center: [55.758463,  37.601079],
        // Уровень масштабирования. Допустимые значения:
        // от 0 (весь мир) до 19.
        zoom: 15
    });

    var myGeoObject2 = new ymaps.Placemark([55.758463,  37.601079], {}, {
        iconLayout: "default#image",
        iconImageHref: "img/icon-map.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [-10, -10]
    });

    myMap2.geoObjects.add(myGeoObject2);
}

