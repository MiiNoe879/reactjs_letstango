// JavaScript Document

//MEGA MENU DROPWN ON HOVER


$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).delay(200).fadeIn(500);
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).not('.in .dropdown-menu').stop(true,true).delay(200).fadeOut(500);
            $(this).toggleClass('open');       
        }
    );
});







//MEGA MENU DROPWN ON HOVER END

//TOUCH ENABLE FOR HERO SLIDER
//$(document).ready(function() {
//   $("#myCarousel").swiperight(function() {
//      $(this).carousel('prev');
//    });
//   $("#myCarousel").swipeleft(function() {
//      $(this).carousel('next');
//   });
//});


//   $(document).ready(function() {  
//  		 $(".carousel-inner").swiperight(function() {  
//    		  $(this).parent().carousel('prev');  
//	    		});  
//		   $(".carousel-inner").swipeleft(function() {  
//		      $(this).parent().carousel('next');  
//	   });  
//	}); 

//TOUCH ENABLE FOR HERO SLIDER END


//COUNT DOWN

$( document ).ready(function() {
  setInterval(function time(){
  var d = new Date();
  var hours = 24 - d.getHours();
  if((hours + '').length == 1){
    hours = '0' + hours;
  }
  var min = 60 - d.getMinutes();
  if((min + '').length == 1){
    min = '0' + min;
  }
  var sec = 60 - d.getSeconds();
  if((sec + '').length == 1){
        sec = '0' + sec;
  }
  jQuery('#countdown #hour').html(hours);
  jQuery('#countdown #min').html(min);
  jQuery('#countdown #sec').html(sec);
}, 1000); });

//COUNT DOWN END

//MAGNIFY



//DROP DOWN SELECTION PRODUCT PAGE

(function ( $ ) {



	var elActive = '';
    $.fn.selectCF = function( options ) {
 
        // option
        var settings = $.extend({
            color: "#FFF", // color
            backgroundColor: "#50C9AD", // background
			change: function( ){ }, // event change
        }, options );
 
        return this.each(function(){

        	console.log("theme")
			
			var selectParent = $(this);
				list = [],
				html = '';
				
			//parameter CSS
			var width = $(selectParent).width();
			
			$(selectParent).hide();
			if( $(selectParent).children('option').length == 0 ){ return; }
			$(selectParent).children('option').each(function(){
				if( $(this).is(':selected') ){ s = 1; title = $(this).text(); }else{ s = 0; }
				list.push({ 
					value: $(this).attr('value'),
					text: $(this).text(),
					selected: s,
				})
			})
			
			// style
			var style = " background: "+settings.backgroundColor+"; color: "+settings.color+" ";
		
			html += "<ul class='selectCF'>";
			html += 	"<li>";
			
			html += 		"<span class='titleCF' style='"+style+"; width:"+width+"px'>"+title+"</span>";
			html += 		"<span class='arrowCF ion-chevron-down' style='"+style+"'></span>";
			html += 		"<span class='searchCF' style='"+style+"; width:"+width+"px'><input style='color:"+settings.color+"' /></span>";
			html += 		"<ul>";
			$.each(list, function(k, v){ s = (v.selected == 1)? "selected":"";
			html += 			"<li value="+v.value+" class='"+s+"'>"+v.text+"</li>";})		
			html += 		"</ul>";
			html += 	"</li>";
			html += "</ul>";

			$(selectParent).after(html);
			var customSelect = $(this).next('ul.selectCF'); // add Html
			var seachEl = $(this).next('ul.selectCF').children('li').children('.searchCF');
			var seachElOption = $(this).next('ul.selectCF').children('li').children('ul').children('li');
			var seachElInput = $(this).next('ul.selectCF').children('li').children('.searchCF').children('input');
			
console.log(html)


			// handle active select
			$(customSelect).unbind('click').bind('click',function(e){
				e.stopPropagation();
				if($(this).hasClass('onCF')){ 
					elActive = ''; 
					$(this).removeClass('onCF');
					$(this).removeClass('searchActive'); $(seachElInput).val(''); 
					$(seachElOption).show();
				}else{
					if(elActive != ''){ 
						$(elActive).removeClass('onCF'); 
						$(elActive).removeClass('searchActive'); $(seachElInput).val('');
						$(seachElOption).show();
					}
					elActive = $(this);
					$(this).addClass('onCF');
					$(seachEl).children('input').focus();
				}
			})
			
			// handle choose option
			var optionSelect = $(customSelect).children('li').children('ul').children('li');
			$(optionSelect).bind('click', function(e){
				var value = $(this).attr('value');
				if( $(this).hasClass('selected') ){
					//
				}else{
					$(optionSelect).removeClass('selected');
					$(this).addClass('selected');
					$(customSelect).children('li').children('.titleCF').html($(this).html());
					$(selectParent).val(value);
					settings.change.call(selectParent); // call event change
				}
			})
				
			// handle search 
			$(seachEl).children('input').bind('keyup', function(e){
				var value = $(this).val();
				if( value ){
					$(customSelect).addClass('searchActive');
					$(seachElOption).each(function(){
						if( $(this).text().search(new RegExp(value, "i")) < 0 ) {
							// not item
							$(this).fadeOut();
						}else{
							// have item
							$(this).fadeIn();
						}
					})
				}else{
					$(customSelect).removeClass('searchActive');
					$(seachElOption).fadeIn();
				}
			})
			
		});
    };
	$(document).click(function(){
		console.log("click")
		if(elActive != ''){
			$(elActive).removeClass('onCF');
			$(elActive).removeClass('searchActive');
		}
	})
}( jQuery ));

$(function(){

console.log("event-change")

  var event_change = $('#event-change');
  $( ".select" ).selectCF({
    change: function(){
      var value = $(this).val();
      var text = $(this).children('option:selected').html();
      console.log(value+' : '+text);
      event_change.html(value+' : '+text);
    }
  });
  $( ".test" ).selectCF({
    color: "#FFF",
    backgroundColor: "#663052",
  });
})


//FLOATING CART HEADER

/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav#floater').addClass('fixed-header');
        $('nav#floater div.floater').addClass('visible-floating-cart');
    }
    else {
        $('nav#floater').removeClass('fixed-header');
        $('nav#floater div.floater').removeClass('visible-floating-cart');
    }
})


//<!--COMPAI PRODUCT PULL RIGHT
//-->
function showSimilarProducts() {
    document.getElementById("mySidenav").style.width = "320px";
	 document.getElementById("mySidenav").style.right = "0px";
	document.getElementById("mySidenav-bg").style.display = "block";
	document.getElementById("mySidenav-bg").style.backgroundColor = "rgba(0,0,0,0.4)";
}

function hideSimilarProducts() {
    document.getElementById("mySidenav").style.width = "0";
	 document.getElementById("mySidenav").style.right = "-30px";
	document.getElementById("mySidenav-bg").style.display = "none";
	document.getElementById("mySidenav-bg").style.backgroundColor = "transparent";
}



//<!--FILTER MOB PRODUCT PULL RIGHT
//-->
function openNav(type) {
	if(type=="filter"){
    document.getElementById("left_filter").style.width = "100%";
	 document.getElementById("left_filter").style.right = "0px";
	}
	else if (type=="sort"){
	 document.getElementById("sortby-mob").style.bottom = "0px";
	}
}

function closeNav(type) {
	
	if(type=="filter"){
    document.getElementById("left_filter").style.width = "0";
	 document.getElementById("left_filter").style.right = "-30px";
	}
	else if (type=="sort"){
	 document.getElementById("sortby-mob").style.bottom = "-100%";
	}
	
    

}





//$(window).scroll(function(){
//    if ($('#left_filter').scrollTop() >= 50) {
//        $('nav#floater-filter').addClass('fixed-header');
//        $('nav#floater-filter div.floater-filter').addClass('visible-floating-cart');
//    }
//    else {
//        $('nav#floater-filter').removeClass('fixed-header');
//        $('nav#floater-filter div.floater-filter').removeClass('visible-floating-cart');
//    }
//})



//<!--SORT BY PULL BOTTOM
//-->
//function openNav() {
//	 document.getElementById("sortby-mob").style.bottom = "0px";
//
//}
//
//function closeNav() {
//	 document.getElementById("sortby-mob").style.bottom = "-100px";
//
//}





//SMOOOTH SCROLL

window.smoothScroll = function(target) {
	
    var scrollContainer = target;
    do { //find scroll container
        scrollContainer = scrollContainer.parentNode;
        if (!scrollContainer) return;
        scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop == 0);

    var targetY = 0;
    do { //find the top of target relatively to the container
        if (target == scrollContainer) break;
        targetY += target.offsetTop;
    } while (target = target.offsetParent);

    scroll = function(c, a, b, i) {
        i++; if (i > 30) return;
        c.scrollTop = a + (b - a) / 30 * i;
        setTimeout(function(){ scroll(c, a, b, i); }, 20);
    }
    // start scrolling
    scroll(scrollContainer, scrollContainer.scrollTop, targetY-100, 0);
	
}


<!--PROGRESS BAR ON SCROLL ANIMATION-->

$(document).ready(function() {
	$('.progress-bar').waypoint(function() {
		$('.progress-bar').css({
		animation: "animate-positive 1.5s", opacity: "1" });},
		{ offset: '100%' });
	});
