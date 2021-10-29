// --------- Animação responsiva da navbar ativa -----------
function animation() {
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top": itemPosNewAnimTop.top + "px",
		"left": itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click", "li", function (e) {
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top": itemPosNewAnimTop.top + "px",
			"left": itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function () {
	setTimeout(function () { animation(); });
});
$(window).on('resize', function () {
	setTimeout(function () { animation(); }, 500);
});
$(".navbar-toggler").click(function () {
	setTimeout(function () { animation(); });
});



// -------------- Adicionar classe ativa na página ----------
jQuery(document).ready(function ($) {
	// Obter o caminho atual e encontrar o link de destino
	var path = window.location.pathname.split("/").pop();

	// Volta para a página inicial com caminho vazio
	if (path == '') {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	// Adiciona classe ativa ao target link
	target.parent().addClass('active');
});

// --------- Animação responsiva da navbar ativa -----------
function animation() {
	var tabsNewAnim = $('#navbarSupportedContent');
	var selectorNewAnim = $('#navbarSupportedContent').find('li').length;
	var activeItemNewAnim = tabsNewAnim.find('.active');
	var activeWidthNewAnimHeight = activeItemNewAnim.innerHeight();
	var activeWidthNewAnimWidth = activeItemNewAnim.innerWidth();
	var itemPosNewAnimTop = activeItemNewAnim.position();
	var itemPosNewAnimLeft = activeItemNewAnim.position();
	$(".hori-selector").css({
		"top": itemPosNewAnimTop.top + "px",
		"left": itemPosNewAnimLeft.left + "px",
		"height": activeWidthNewAnimHeight + "px",
		"width": activeWidthNewAnimWidth + "px"
	});
	$("#navbarSupportedContent").on("click", "li", function (e) {
		$('#navbarSupportedContent ul li').removeClass("active");
		$(this).addClass('active');
		var activeWidthNewAnimHeight = $(this).innerHeight();
		var activeWidthNewAnimWidth = $(this).innerWidth();
		var itemPosNewAnimTop = $(this).position();
		var itemPosNewAnimLeft = $(this).position();
		$(".hori-selector").css({
			"top": itemPosNewAnimTop.top + "px",
			"left": itemPosNewAnimLeft.left + "px",
			"height": activeWidthNewAnimHeight + "px",
			"width": activeWidthNewAnimWidth + "px"
		});
	});
}
$(document).ready(function () {
	setTimeout(function () { animation(); });
});
$(window).on('resize', function () {
	setTimeout(function () { animation(); }, 500);
});
$(".navbar-toggler").click(function () {
	$(".navbar-collapse").slideToggle(300);
	setTimeout(function () { animation(); });
});



// -------------- Adicionar classe ativa na página ----------
jQuery(document).ready(function ($) {
	// Obter o caminho atual e encontrar o link de destino
	var path = window.location.pathname.split("/").pop();

	// Volta para a página inicial com caminho vazio
	if (path == '') {
		path = 'index.html';
	}

	var target = $('#navbarSupportedContent ul li a[href="' + path + '"]');
	// Adiciona classe ativa ao target link
	target.parent().addClass('active');
});


/* --------------- BOTÃO VER MAIS LIBRAS -------------*/
let btn = document.querySelector('.mouse-cursor-gradient-tracking');
btn.addEventListener('mousemove', e => {
	let rect = e.target.getBoundingClientRect();
	let x = e.clientX - rect.left;
	let y = e.clientY - rect.top;
	btn.style.setProperty('--x', x + 'px');
	btn.style.setProperty('--y', y + 'px');
});

/* --------------- GERAR PDF -------------*/
function gerarPDF() {
	var doc = new jsPDF({
		orientation: 'landscape',
		unit: 'cm',
		format: 'letter'
	  })
	
	var imgData = "/projeto/img/sinaisLibras.png"; // base-64
	var doc = new jsPDF();
	doc.setFontSize(40);
	doc.text(35, 25, "Alfabeto em Libras");
	doc.addImage(imgData, 'JPEG', 15, 40, 180, 180);
	doc.save('sinais_libras.pdf')
}

/* --------------- ANIMAÇÃO SCROLL, ROLAGEM DA PÁGINA -------------*/
var root = document.documentElement;
root.className += ' js';

// definir a distância entre o topo to elemento e a página
function boxTop(idBox) {
	var boxOffset = $(idBox).offset().top;
	return boxOffset;
}


// Ready
$(document).ready(function() {
	
			var $target = $('.anime'),
			
			// define a classe que será injetada no elemento durante o scroll, definir como a animação irá ocorrer
			animationClass = 'anime-init',
			
			// pegar a altura total da janela do browser
			windowHeight = $(window).height(),
			
			offset = windowHeight - (windowHeight / 4);

	// adicionar a classe animationClass ao elemento da página.
	function animeScroll() {
		
		var documentTop = $(document).scrollTop();
		
		$target.each(function() {
			
			if (documentTop > boxTop(this) - offset) {
				
				$(this).addClass(animationClass);
			} else {
				
				$(this).removeClass(animationClass);
			}
		});
	}
	
	animeScroll();
	
	// verificar sempre que um evento de scroll ocorrer na página
	$(document).scroll(function() {
		
		setTimeout(function() {
			animeScroll()
		}, 900);
	});
});