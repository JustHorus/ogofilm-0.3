$(document).ready(function() {

	// ====== burger menu ====
	$('.burger_menu').click(function(event) {
		$('.burger_menu, .login_mobile').toggleClass('active')
        $('body').toggleClass('lock')
	})


	

	// ======= checkbox ========
	$.each($('.popup_notsave'), function(index, val) {
		if($(this).find('input').prop('checked')==true){
			$(this).addClass('check_actv')
		}
	})
	$(document).on('click', '.popup_notsave', function(event) {
		if($(this).hasClass('check_actv')) {
			$(this).find('input').prop('checked', false)
		}
		else {
			$(this).find('input').prop('checked', true)
		}
		$(this).toggleClass('check_actv')

		return false
	})	
})


// ================popups=================

$(function () {
	$('a.popup_btn').click(function () {
		$('.popup').removeClass('popup_active')
		$('div.'+$(this).attr("rel")).addClass('popup_active')
		$('body').addClass('popup_lock') 		
	})

	$('div.popup_closed').click(function () {
		$(this).parent().removeClass('popup_active')
		$(this).parent().parent().removeClass('popup_active')
		$('body').removeClass('popup_lock')
	})

})




// ========== player =============


// $('.bar_tab_trigger').click(function(event) {
// 	var dataTab = $(this).attr('data-tab')
		
	
	
// 	$('.bar_tab_trigger.active').removeClass('active')
// 	$(this).addClass('active')


// 	if (dataTab === '1') {
// 		$('#kinoplayertop').attr('data-player', 'alloha')
// 	} else if (dataTab === '2') {
// 		$('#kinoplayertop').attr('data-player', 'bazon')
// 	} else if (dataTab === '3') {
// 		$('#kinoplayertop').attr('data-player', 'trailer')
// 	}

// })

// ============ авто нажатие кнопки на страничке =======

window.addEventListener("load", function () {
	var btn = document.getElementById ("myButton");
	btn.addEventListener ("click", clk);
	btn.click ();
});

function clk () {
}


// =============== media =====

// $(document).ready(function(){
//     var winW = $(window).width()

// 		if (winW<=992) {
// 			$("#kinoplayertop").attr('data-kinoheight', '400px')
// 		} 
// 		else if (winW<=767) {
// 				$("#kinoplayertop").atrr('data-kinoheight', '300px')
// 		} else if (winW>=992) {
// 				$("#kinoplayertop").attr('data-kinoheight', '528px')
// 		}	
	
// });







// ======== filter ======

$(function () {
	$('.bar_btn').click(function(event) {
		$('div.'+$(this).attr("rel")).addClass('show')
		
	})
})


// $(function () {
// 	$.each($('.try'), function(index, val) {
// 		if($(this).find('input').prop('checked')===true){
// 			$('.filter_sub1'+$(this).attr("rel")).addClass('show')
// 		}
// 	})
	
// 	// $(document).on('click', '.filter_sub', function(event) {
// 	// 	if($(this).hasClass('check_actv')) {
// 	// 		$(this).find('input').prop('checked', false)
// 	// 	}
// 	// 	else {
// 	// 		$(this).find('input').prop('checked', true)
// 	// 	}
// 	// 	$(this).toggleClass('check_actv')
	
// 	// 	return false
// 	// })	
// })

