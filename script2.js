
$(document).ready(function(){
  score=0;
  var rightAnswer="";
  var studentAnswer="";  
  var rightVector=["good job!", "way to go!", "super!"]
  var wrongVector=["try again", "not quite", "wrong"]
  
  $("#start").click(function(){
    $("h1").remove();
    score =0;
    $("#box").remove();
    $("body").append("<div id='box'></div>");    
    $("#box").append("<button id='new_question'>new question</button><div id='question'></div><form><input type='text' id='a' /><input type='button' id='b' value='submit'/></form><div id='test'><img src='car.png' alt='car' style='width:304px;height:228px;'></div>")
  
    $("head").append("<style media='screen' type='text/css'>#test{color:blue; position:absolute; top:500px; left:"+200*score+"px}</style>");
    $("#new_question").click(function(){
      $("#question").remove();
      $("#answer").remove();
      var firstNumber=Math.floor((Math.random() * 10) + 1);
      var secondNumber=Math.floor((Math.random() * 10) + 1);
      $("#box").append("<div id='question'></div>")
      $("#box").append("<div id='answer'></div>")
      $("#question").append("<p id='zee'>What is "+firstNumber+"+"+secondNumber+"</p");
      rightAnswer=secondNumber+firstNumber;  
      });
    $('#b').click(function(){
      $("style").remove();
      var studentAnswer=$('#a').val();
      if (rightAnswer==studentAnswer){
        var result=rightVector[Math.floor(Math.random() * 3)];
        score+=1;
        $("head").append("<style media='screen' type='text/css'>#test{color:blue; position:absolute; top:500px; left:"+200*score+"px}</style>");
      } else {
        var result=wrongVector[Math.floor(Math.random() * 3)];
        score-=1;
         $("head").append("<style media='screen' type='text/css'>#test{color:blue; position:absolute; top:500px; left:"+200*score+"px}</style>");
      }
    
      $('#answer').append("<p id='result'>"+result+"</p>");
      //$("#box").append('<p>'+i+'</p>');
      if (score>6){
          $("#box").remove();
          $("body").append("<h1>Winner!</h1>")
      } else if (score<-1){
          $("#box").remove();
          $("body").append("<h1>Game over!</h1>")
      }
    });
  });
});


