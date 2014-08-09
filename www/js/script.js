/**
 * @author Mark Erhard
 */

fader = 5000;
nowplaying = "";

$(document).ready(function() {
			
			
	$(".console").append("<span>Konsole:</span><br />");
	$("#c").bind("load",function(){
		 $(".console").append("<span>C loaded</span>");
	});
	
	$("button").click(function(){
		audio = $(this).attr("href")
		$(".console").append("<span>Button Click - Paused:  " + $(audio).prop("paused")  + "</span><br />");
		
		
		
		
		if ($(audio).prop("paused")){
			if (nowplaying != ""){
				$(nowplaying).stop().animate({volume: 0}, fader);
				setTimeout(function(audio){$(audio).trigger('pause');$("button[href=" + audio + "]").removeClass("playing");}, fader, nowplaying)
				
			} 
			
			nowplaying = audio;
		
			$(audio).prop("volume",0)		
			$(audio).stop().animate({volume: 1}, fader);
			$(audio).trigger('play');
			
			$(this).addClass("playing");	
		}
		else {
			volume = $(audio).prop("volume"); 
			$(audio).stop().animate({volume: 0}, volume * fader);
			setTimeout(function(audio){$(audio).trigger('pause'); nowplaying = "";$("button[href=" + audio + "]").removeClass("playing");}, volume * fader, audio)
			
			
		}
		
		
	});
	
	$("audio").bind("volumechange", function(){
		id = $(this).attr("id");
		
		opacity = $("#" + id).prop("volume") * 1;
		
		
		
		$("button[href=#" + id +"] span").css("background", "rgba(244,110,147," + opacity + ")");
	});
});