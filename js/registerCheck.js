$(document).ready(function(){
	var asign = $('#sign');
	var user = $('#user');
	var passw = $('#passw');
	asign.click(function(){
		$('#login_form').css('display','none');
		$('#register').css('display','block');
	});
	var registerbtn = $('#registerbtn');
	registerbtn.click(function(){
		var user2 = $('#user2');
		var passw2 = $('#passw2');
		if(user2.val().length==0||passw2.val().length==0){
			alert('您的信息未填写完整！');
		}else{
			localStorage.setItem('userloc',user2.val());
			localStorage.setItem('passwloc',passw2.val());
			alert('注册成功！');
		}
	});
	var logbtn = $('#logbtn');
	logbtn.click(function(){
		userloc = localStorage.getItem('userloc');
		passwloc = localStorage.getItem('passwloc');
		if(userloc!=user.val()||passwloc!=passw.val()){
			alert('用户名或密码错误！');
		}else{
			alert('登录成功！');
			cookieUtil.set('usercoo',user);
			var cookievalue = cookieUtil.get('usercoo');
			if(cookievalue != null){
				alert('欢迎'+user.val()+'回来！');
			}
		}
	});
});












//javascript原生代码实现


//window.onload = function(){
//	var asign = document.getElementById('sign');
//	var user = document.getElementById('user');
//	var passw = document.getElementById('passw');
//	asign.onclick = function(){
//		document.getElementById('login_form').style.display = 'none';
//		document.getElementById('register').style.display = 'block';
//	};
//	var registerbtn = document.getElementById('registerbtn');
//	registerbtn.onclick = function(){
//		var user2 = document.getElementById('user2');
//		var passw2 = document.getElementById('passw2');
//		if(user2.value.length==0||passw2.value.length==0){
//			alert('您的信息未填写完整！');
//		}else{
//			localStorage.setItem('userloc',user2.value);
//			localStorage.setItem('passwloc',passw2.value);
//			alert('注册成功！');
////			alert(localStorage.getItem('userloc'));
////			alert(localStorage.getItem('passwloc'));
//		}
//	};
//	var logbtn = document.getElementById('logbtn');
//	logbtn.onclick = function(){
//		userloc = localStorage.getItem('userloc');
//		passwloc = localStorage.getItem('passwloc');
//		if(userloc!=user.value||passwloc!=passw.value){
//			alert('用户名或密码错误！');
////			alert(user.value);
////			alert(passw.value);
//		}else{
//			alert('登录成功！');
//			cookieUtil.set('usercoo',user);
//			var cookievalue = cookieUtil.get('usercoo');
//			if(cookievalue != null){
//				alert('欢迎'+user.value+'回来！');
//			}
//		}
//	}
//}
