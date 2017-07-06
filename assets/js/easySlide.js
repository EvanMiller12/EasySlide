"use strict";

$(document).ready(function () {
		var startPosition = 0;
		var endPosition = 4;

	  var $list_item = $(".easy-slide li").hide();
    $list_item.slice(startPosition, endPosition).show();
    var listLen = $list_item.length;

    $('#next').click(function () {
        if (startPosition + endPosition < listLen) {
            $list_item.slice(startPosition, startPosition + endPosition).hide();
            startPosition += 1;
            $list_item.slice(startPosition, startPosition + endPosition).show();
        }
    });
    $('#prev').click(function () {
        if (startPosition > 0) {
            $list_item.slice(startPosition, startPosition + endPosition).hide();
            startPosition -= 1;
            $list_item.slice(startPosition, startPosition + endPosition).show();
        }

    });

});
