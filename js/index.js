// JavaScript Document
var quesAns = [
	{
		question:"which country has the most people?",
		answers:["China","America","Japan","India"],
		correctAns:"China"
	},
	{
		question:"which country has the longest history?",
		answers:["China","America","Japan","India"],
		correctAns:"China"
	},
	{
		question:"which country is the strongest country?",
		answers:["China","America","Japan","India"],
		correctAns:"China"
	},
	{
		question:"which country is the richest country?",
		answers:["China","America","Japan","India"],
		correctAns:"China"
	},
];

$(document).ready(function(){
	var result = $('#result');
	var ques = $('#ques');
	var ans = $('#ans');
	var num = null;
//	var input_num = $('#input_num');
	var ques_ans = $('ques_ans');
	var answers = $('.answer');
	var spans = $('.spans');
	var span1 = $('#ans_span1');
	var span2 = $('#ans_span2');
	var span3 = $('#ans_span3');
	var span4 = $('#ans_span4');
	var counts = 0,j = 0;
	ques.text(quesAns[0].question);
//	ans.text(quesAns[0].answers);
	span1.text(quesAns[0].answers[0]);
	span2.text(quesAns[0].answers[1]);
	span3.text(quesAns[0].answers[2]);
	span4.text(quesAns[0].answers[3]);
	var btn = $('#next_ques');
	btn.on('click',function(){
		for (var i = 0 ; i < 4 ;  i ++ ) {
			if(answers[i].checked){
				num = spans[i].innerHTML;
			}
		}
//		num = input_num.val();
		if(num == ' '){
			alert('Please input your answer');	
		}else{
			if(num == quesAns[j].correctAns){
				counts += 25;
			}
		
			if(j == quesAns.length-1){	
				ques.hide();
				ans.hide();
//				$('#input_num').hide();
				btn.hide();
				result.text('你的总分是' + counts);
				result.show();
				cookieUtil.set('grade',counts);
				alert(cookieUtil.get('grade'));
//				var data = JSON.stringify(quesAns);
//				var jsonText = eval("("+data+")");
//				document.write(jsonText);
			}
			else{	
				j ++ ;
				//取消按钮的选中效果，没设置成功。。。？？？？？
//				$('#answer1').checked = false;
//				$('#answer2').checked = false;
//				$('#answer3').checked = false;
//				$('#answer4').checked = false;
				ques.text(quesAns[j].question);
				span1.text(quesAns[j].answers[0]);
				span2.text(quesAns[j].answers[1]);
				span3.text(quesAns[j].answers[2]);
				span4.text(quesAns[j].answers[3]);
//				input_num.val(' ');
				
			}	
		}
		
	});
});

