	function slide1 () {
		 var imgs = document.getElementsByClassName('treasure');
	var img_arr = ['img/img11.gif','img/img22.gif','img/img33.gif'];
	// for (var i = 0; i < imgs.length; i++) {	
	 
	// 	imgs[i].onmouseenter = function () {
	// 		this.index = i;
	// 		this.src = img_arr[this.index];
	// 	}
	// }
	document.getElementsByClassName('treasure')[0].onclick = function () {
		 this.style.marginLeft = 0.488889 + 'rem';
		 this.src = 'img/img11.gif';
	}
	document.getElementsByClassName('treasure')[0].onmouseleave = function () {
		 this.src = 'img/img1.png';
	}



	document.getElementsByClassName('treasure')[1].onclick = function () {
		 this.src = 'img/img22.gif';
	}
	document.getElementsByClassName('treasure')[1].onmouseleave = function () {
		 this.src = 'img/img2.png';
	}



	document.getElementsByClassName('treasure')[2].onclick = function () {
		 this.src = 'img/img33.gif';
	}
	document.getElementsByClassName('treasure')[2].onmouseleave = function () {
		 this.src = 'img/img3.png';
	} 
	}


	function slide2 () {
		 var imgs = document.getElementsByClassName('t2');
	var img_arr = ['img/img11.gif','img/img22.gif','img/img33.gif'];
	// for (var i = 0; i < imgs.length; i++) {	
	// var index = i;	
	// 	imgs[i].onmouseenter = function () {
			
	// 		this.src = img_arr[index];
	// 	}
	// }
	document.getElementsByClassName('t2')[0].onclick = function () {
		 this.style.marginLeft = 0.488889 + 'rem';
		 this.src = 'img/img11.gif';
	}
	document.getElementsByClassName('t2')[0].onmouseleave = function () {
		 this.src = 'img/img1.png';
	}



	document.getElementsByClassName('t2')[1].onclick = function () {
		 this.src = 'img/img22.gif';
	}
	document.getElementsByClassName('t2')[1].onmouseleave = function () {
		 this.src = 'img/img2.png';
	}



	document.getElementsByClassName('t2')[2].onclick = function () {
		 this.src = 'img/img33.gif';
	}
	document.getElementsByClassName('t2')[2].onmouseleave = function () {
		 this.src = 'img/img3.png';
	} 
	}


	function slide3 () {
		 var imgs = document.getElementsByClassName('t3');
	var img_arr = ['img/img11.gif','img/img22.gif','img/img33.gif'];
	// for (var i = 0; i < imgs.length; i++) {	
	// var index = i;	
	// 	imgs[i].onmouseenter = function () {
			
	// 		this.src = img_arr[index];
	// 	}
	// }
	document.getElementsByClassName('t3')[0].onclick = function () {
		 this.style.marginLeft = 0.488889 + 'rem';
		 this.src = 'img/img11.gif';
	}
	document.getElementsByClassName('t3')[0].onmouseleave = function () {
		 this.src = 'img/img1.png';
	}



	document.getElementsByClassName('t3')[1].onclick = function () {
		 this.src = 'img/img22.gif';
	}
	document.getElementsByClassName('t3')[1].onmouseleave = function () {
		 this.src = 'img/img2.png';
	}



	document.getElementsByClassName('t3')[2].onclick = function () {
		 this.src = 'img/img33.gif';
	}
	document.getElementsByClassName('t3')[2].onmouseleave = function () {
		 this.src = 'img/img3.png';
	} 
	}

	slide1();
	slide2();
	slide3();

	var ul2 = document.getElementsByClassName('ul2')[0];
	var li4 = ul2.getElementsByTagName('li')[1];
	var bol = true;
	li4.onclick = function () {
		 
		 if (bol) {
		 	
		 	this.style.backgroundColor = '#fa3530';
		 	this.style.border = '0.044444rem dashed #ffffd5';
		 	this.style.color = '#fff';
		 	this.innerHTML = '已获得宝箱再点';
		 	bol = false;
		 } else {
		 	this.style.backgroundColor = '#ffffd5';
		 	this.style.border = '0.044444rem dashed #f9a09e';
		 	this.style.color = '#f9a09e';
		 	this.innerHTML = '未获得-点我';
		 	bol = true;
		 }
	}

	var denglu = document.getElementById('denglu');
	var close = document.getElementById('close');
	denglu.onclick = function () {
		 document.getElementById('loginBox').style.display = 'block';
		 document.getElementById('login').style.display = 'block'; 
	}
	close.onclick = function () {
		document.getElementById('loginBox').style.display = 'none';
		document.getElementById('login').style.display = 'none';
	}
	
	function rand (min,max) {
		 return parseInt(Math.random()*(max - min + 1)+min);
	}

	setInterval(function () {
		 denglu.style.color = "rgb" + "(" + rand(0,256) + "," + rand(0,256) + "," + rand(0,256) + ")";
	}, 200)






