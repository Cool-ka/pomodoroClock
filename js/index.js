$(document).ready(function(){
$("button").addClass("btn");
  // Define all variables  
  var clock;
  var clock2;
  var sessionvalue;
  var breakvalue;
  var audio = new Audio('http://scambuster.info/audio/time_up.wav');

  breakvalue = parseInt($("#breakvalue").html() * 60);
  sessionvalue = parseInt($("#sessionvalue").html() * 60);
  
  // Session Clock
  clock = $('.clock').FlipClock(sessionvalue,{
		       clockFace: "MinuteCounter",
           autoStart: false,
           countdown: true,
           callbacks: {
            start: function(){
              $(".worktimelabel").addClass("text-success");
            },
             
             stop: function(){
              $(".worktimelabel").removeClass("text-success");
            },
        
            interval: function(){
              var time = clock.getTime().time;
              if(time === 0){
              audio.play();
              clock2.setTime(parseInt($("#breakvalue").html() * 60));
              clock2.start();
              }
            
            }
           }
				});
  
// Break Time Clock
clock2 = $('.clock2').FlipClock(breakvalue,{
           clockFace: "MinuteCounter",
           autoStart: false,
           countdown: true,
           callbacks: {
             start: function(){
              $(".breaktimelabel").addClass("text-success");
            },
             
             stop: function(){
              $(".breaktimelabel").removeClass("text-success");
            },
            interval: function(){
              var time2 = clock2.getTime().time;
              if(time2 === 0){
              audio.play();
              clock.setTime(parseInt($("#sessionvalue").html() * 60));
              clock.start();
              }
            
            }
           }
  
        });
  

// Managing the Switch Buttons

 $("#onswitch").click(function(){
      clock.setTime(parseInt($("#sessionvalue").html() * 60));
      clock2.setTime(parseInt($("#breakvalue").html() * 60));
      audio.play();
      clock.start();


  })

 $("#offswitch").click(function(){
         clock.stop();
         clock2.stop();
 })

 $("#resetswitch").click(function(){
 clock.setTime(parseInt($("#sessionvalue").html() * 60));
 clock2.setTime(parseInt($("#breakvalue").html() * 60));
 clock2.stop();
 clock.start();
 audio.play();


 })
// Add to Session value with + button
  $("#addsession").click(function(){
  sessionvalue = parseInt($("#sessionvalue").html());
  $("#sessionvalue").html(sessionvalue + 1);
  clock.setTime(parseInt($("#sessionvalue").html()) * 60);

})
  
// Remove from Session value with - button
  $("#removesession").click(function(){
  sessionvalue = parseInt($("#sessionvalue").html());
  $("#sessionvalue").html(sessionvalue - 1);
    if(sessionvalue === 1){
      $("#sessionvalue").html(1);
  }
  clock.setTime(parseInt($("#sessionvalue").html()) * 60);

})
  
  // Add to Break value with + button
  $("#addbreak").click(function(){
  breakvalue = parseInt($("#breakvalue").html());
  $("#breakvalue").html(breakvalue + 1);
  clock2.setTime(parseInt($("#breakvalue").html()) * 60);

})
  
// Remove from Break value with - button
  $("#removebreak").click(function(){
  breakvalue = parseInt($("#breakvalue").html());
  $("#breakvalue").html(breakvalue - 1);
  if(breakvalue === 1){
      $("#breakvalue").html(1);
  }
  clock2.setTime(parseInt($("#breakvalue").html()) * 60);


});

});