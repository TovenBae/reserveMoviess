var socket = io.connect();

console.log(socket);
// 이벤트 연결
socket.on('reserve', function(data) {
	var $target = $('div[data-x = ' + data.x + '][data-y = ' + data.y + ']');
	$target.removeClass('enable');
	$target.addClass('disable');
});

// 초기 좌석 생성
$(document).ready(function() {
	// 변수 선언
	var onClickSeat = function() {
		var x = $(this).attr('data-x');
		var y = $(this).attr('data-y');

		console.log('click x : ' + x + ', y : ' + y);
		if (confirm('좌석을 예약하시겠습니까?')) {
			$(this).off('click');
			socket.emit('reserve', {
				x: x,
				y: y
			});
		} else {
			alert("취소했습니다.");
		};
	};

	// Ajax 수행
	$.getJSON('/seats', {dummy: new Date().getTime()}, function(data) {
		// console.log(data);
		// 좌석을 생성합니다.
		$.each(data, function(indexY, line) {
			// console.log('indexY : ' + indexY + ',' + line);
			// 문서 객체 생성
			var $line = $('<div></div>').addClass('line');
			$.each(line, function(indexX, seat) {
				// console.log('indexX : ' + indexX + ',' + seat);
				// 문서 객체를 생성하고 변수 $line에 추가
				var $output = $('<div></div>', {
					'class': 'seat',
					'data-x': indexX,
					'data-y': indexY
				}).appendTo($line);

				if (seat == 1) {
					// 좌석이 비었으면 enable 클래스와 click 리스너 추가
					$output.addClass('enable').on('click', onClickSeat);
				} else if (seat == 2) {
					// 좌석이 예약되었으면 disable 클래스 추가
					$output.addClass('disable');
				}
			});

			// 문서 객체 추가
			$line.appendTo('body');
			// alert($('body').html());
		});
	});

});

