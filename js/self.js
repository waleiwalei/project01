// JavaScript Document

//遍历element中所有属性的名，值对并输出
(function outputAttributes(element){
	var pairs = new Array(),
		attrName,
		attrValue,
		i,
		len;
	
	for(i = 0,len = element.attributes.length; i<len; i++){
		attrName = element.attributes[i].nodeName;
		attrValue = element.attributes[i].nodeValue;
		pairs.push(attrName + "=\"" + attrValue + "\"");
	}
	return pairs.join(" ");		//用空格连接
});





//动态脚本引入的两种方式：
//1.引入外部js文件
(function loadScript(url){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = url;
	document.body.appendChild(script);
});
//调用示例loadScript('client.js')

//2.引入行内式js代码
(function loadScriptString(code){
	var script = document.createElement('script');
	script.type = 'text/javascript';
	try{
		script.appendChild(document.createTextNode(code));	
	}catch(ex){
		script = code;	
	}
	document.body.appendChild(script);
});
//调用示例loadScriptString("function sayHi(){alert('hi');}")






//动态样式引入两种方式：
//1.link方式
(function loadStyles(url){
	var link = document.createElement('link');	
	link.rel = 'stylesheet';
	link.type = 'text/css';
	link.src = url;
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(link);
});
//调用示例loadStyles('style.css')


//2.styld方式
(function loadStyleString(css){
	var style = document.createElement('style');	
	style.type = 'text/css';
	try{
		style.appendChild(document.createElement(css));	
	}catch(ex){
		style.styleSheet.cssText = css;
	}
	var head = document.getElementsByTagName('head')[0];
	head.appendChild(head);
});
//调用示例loadStyleString("body{background-color:red}")







//跨浏览器事件处理程序EventUtil对象
var EventUtil = {
	//添加事件
	addHandler : function(element,type,handler){					
		if(element.addEventListener){
			element.addEventListener(type,handler,false);		//DOM2	
		}else if(element.attachEvent){
			element.attachEvent("on"+type,handler);				//IE
		}else {
			element["on"+type] = handler;						//DOM0
		}
	},
	//返回对event对象的引用
	getEvent : function(event){
		return event?event:window.event;
	},
	//返回事件目标
	getTarget : function(event){
		return event.target || event.srcElement;
	},
	preventDefault : function(event){
		if(event.preventDefault){
			event.preventDefault();
		}else{
			event.returnValue = false;	
		}
	},
	stopPropagation : function(event){
		if(event.stopPropagation){
			event.stopPropagation();
		}else{
			event.cancelBubble = true;	
		}
	},
	//移除事件
	removeHandler : function(element,type,handler){
		if(element.removeEventListener){
			element.removeEventListener(type,handler,false);		//DOM2	
		}else if(element.detachEvent){
			element.detachEvent("on"+type,handler);					//IE
		}else {
			element["on"+type] = null;								//DOM0
		}
	}
		
}
//调用示例：EventUtil.addHandler(btn,"click",handler);


var cookieUtil = {
	get: function(name){
		var cookieName = encodeURIComponent(name) + "=",
			cookieStart = document.cookie.indexOf(cookieName),
			cookieValue = null;
		if(cookieStart > -1){
			var cookieEnd = document.cookie.indexOf(";",cookieStart);
			if(cookieEnd == -1){
				cookieEnd = document.cookie.length;
			}
			cookieValue = decodeURIComponent(document.cookie.substring(cookieStart+cookieName.length,cookieEnd));
		}
		return cookieValue;
	},
	
	set: function(name,value,expires,path,domain,secure){
		var cookieText = encodeURIComponent(name)+"="+encodeURIComponent(value);
		if(expires instanceof Date){
			varcookieText += "; expires=" + expires.toGMTString();
		}
		if(path){
			cookieText += ";path" + path;
		}
		if(domain){
			cookieText += ";domain" + domain;
		}
		if(secure){
			cookieText += ";secure";
		}
		document.cookie = cookieText;
	},
	
	unset: function(name,path,domain,secure){
		this.set(name,"",new Date(0),path,domain,secure);
	}
	
};
