// JavaScript Document
var quesAns = [
	{
		question:"which country has the most people?",
		answers:["1China","2America","3Japan","4India"],
		correctAns:1
	},
	{
		question:"which country has the longest history?",
		answers:["1China","2America","3Japan","4India"],
		correctAns:1
	},
	{
		question:"which country is the strongest country?",
		answers:["1China","2America","3Japan","4India"],
		correctAns:1
	},
	{
		question:"which country is the richest country?",
		answers:["1China","2America","3Japan","4India"],
		correctAns:1
	},
];

$(document).ready(function(){
	var result = $('#result');
	var ques = $('#ques');
	var ans = $('#ans');
	var num = null;
	var input_num = $('#input_num');
	var ques_ans = $('ques_ans');
	var counts = 0,j = 0;
	ques.text(quesAns[0].question);
	ans.text(quesAns[0].answers);
	var btn = $('#next_ques');
	btn.on('click',function(){
		num = input_num.val();
		if(num == ' '){
			alert('Please input your answer');	
		}else{
			if(num == quesAns[j].correctAns){
				counts += 25;
			}
		
			if(j == quesAns.length-1){	
				
				ques.hide();
				ans.hide();
				$('#input_num').hide();
				btn.hide();
				result.text('Your grade is ' + counts);
				result.show();
//				var jsonText = JSON.stringify(quesAns);
//				document.write(jsonText);
				
			}
			else{	
				j ++ ;
				ques.text(quesAns[j].question);
				ans.text(quesAns[j].answers);
				input_num.val(' ');
				
			}	
		}
		
	});
});

