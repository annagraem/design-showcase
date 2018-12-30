$(document).ready(function(){
	$("#hana").click(function(){
		$.fancybox.open({
			src  : 'build/hana.png',
			type : 'image',
			opts : {
				caption : '<p><a href="src/hanaanya.svg">.svg source</a></p><p><a href="src/hanaanna.svg">.svg alternative</a></p>'
			},
			beforeShow : function() {
        $('.fancybox-overlay').css({'background-color' :'#000'});
    	}
		});
  });

	$.fancybox.defaults.video = {
		tpl:
			'<video class="fancybox-video" autoplay loop muted poster="{{poster}}">' +
			'<source src="{{src}}" type="{{format}}" />' +
			'Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!' +
			"</video>",
		format: "", // custom video format
		autoStart: true
	},

  $("#glitch").click(function(){
		$.fancybox.open({
			src  : 'build/glitch.mp4',
			type : 'video',
			opts : {
				caption : '<a href="src/glitch.aep">.aep source</a>'
			}
		});
  });

	$("#lollipop").click(function(){
		$.fancybox.open({
			src  : 'build/lollipop.png',
			type : 'image',
			opts : {
				caption : '<a href="src/lollipop.svg">.svg source</a>'
			}
		});
  });
});
