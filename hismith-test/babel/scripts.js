$(() => {

	$('.slider').slick({
		dots: true,
	});

	$('.cases-wrapper ').slick({
		autoplay: true,
		slidesToShow: 3,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow:2
			}
		},{
			breakpoint: 750,
			settings: {
				slidesToShow:1
			}
		}]
	});

	$('.reviews-wrapper').slick({
		variableWidth: true,
		slidesToShow: 3,
		autoplay: true,
		responsive:[{
			breakpoint: 750,
			settings: {
				variableWidth: false,
				slidesToShow:1
			}
		}]
	});

	$.get('ajax/get-chart-data.json', (data) => {


		for (let side in data) {

			chartMapping(data[side], side);

		}

	});

	function chartMapping(array, side) {
		let $target = $(`.chart-${side}`);


		let height = (array.length * 40) - 8;

		$target.height(height);

		for (let idx in array) {

			let value = array[idx];

			let top = idx * 40;

			let width = Math.abs(value) * 53.33;

			let formattedValue = numberFormat(value);

			let $item = $(`<div class="chart-item${value >= 0 ? '' : ' chart-item_negative'}" style="width: ${width}px; top: ${top}px">
				<div class="chart-item__bar">
					<div class="chart-item__text">${formattedValue}</div>
				</div>
				<div class="chart-item__text_outer chart-item__text">${formattedValue}</div>
			</div>`);

			$item.appendTo($target);
		}
	}

	function numberFormat(number) {
		if (number === 0) {
			return '0,0'
		}
		return number = (number + '').replace(/\./, ',');
	}


	$('input[name="phone"]').inputmask('+7 (999) 999– 99 – 99');

	$('input[name="email"]').inputmask({
		mask: "*{1,20}[.*{1,20}][.*{1,20}][.*{1,20}]@*{1,20}[.*{2,6}][.*{1,2}]",
		greedy: false,
		onBeforePaste: function (pastedValue, opts) {
			pastedValue = pastedValue.toLowerCase();
			return pastedValue.replace("mailto:", "");
		},
		definitions: {
			'*': {
				validator: "[0-9A-Za-z!#$%&'*+/=?^_`{|}~\-]",
				cardinality: 1,
				casing: "lower"
			}
		}
	});

	$('.subscribe-form').attr('novalidate', 'novalidate').submit(function (e) {
		if (!$(this).find('input:invalid').length) {
			e.preventDefault();
		}

	});

	$('.cards-table-right').scrollbar();


});