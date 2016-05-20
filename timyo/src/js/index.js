	//滚动
	var ro = document.getElementsByClassName('sideI')[0];
	ro.style.opacity = 0;
	window.onscroll = function () {
		 scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
		 if (scrollTop > 400) {
		  	ro.style.opacity = 1;
		  } else {
		  	ro.style.opacity = 0;
		  }
		  ro.onclick = function () {
		  	    var nowTop = document.body.scrollTop||document.documentElement.scrollTop;
		  	    var t=0;
			    var b=nowTop;
			    var end=0;
			    var c=0-b;
			    var d=19;
			    var timer = setInterval(function () {
			    	 t++;
			    	 if (t >= 19) {
			    	  	clearInterval(timer);
			    	  }
			    	 if (document.body.scrollTop) {
			    	 	document.body.scrollTop = Tween.Linear(t,b,c,d);
			    	 } else {
			    	 	document.documentElement.scrollTop = Tween.Linear(t,b,c,d);
			    	 }
			    }, 19)
		  }
	}
