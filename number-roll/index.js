import $ from 'jquery';

function numberRoll( obj, number, speed, hasComma ){
	var $obj = $(obj),
		numStr = String(number),
		len = numStr.length,
		h = $obj.height(),
		i;	

	// 如果新的数字短于当前的，要移除多余的i
	if( $obj.find('i').length > len ){
		$obj.find('i:gt(' + (len - 1) + ')').remove();
	}

	// 移除千分位分隔符
	if( hasComma ){
		$obj.find('b').remove();
	}

	for(i = 0 ; i < len; i++){
		// 位数不足要补
		if( $obj.find('i').length < len ){
			$obj.append('<i><span></span></i>');
		}

		// 加分隔符
		if( hasComma && i < len - 1 && (len - i - 1) % 3 === 0 ){
			$('<b >，</b>').insertAfter($obj.find('i').eq(i));
		}

		$obj.find('i').eq(i).find("span").animate({
			"top": -(numStr.charAt(i) * h)
		}, speed || 1000);
	}
}

export default numberRoll;