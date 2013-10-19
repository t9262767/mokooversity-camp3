var gameModule = (function (){
	//下方為宣告全域變數

	var timeoutVar,
		counter = 0;


	function start(){
		var canvas = document.getElementById("game"),
		ctx = canvas.getContext('2d'),
		ballX =Math.random()*300,
		ballY =Math.random()*300,
		ballR =Math.random()*100;

		var a = Math.ceil(Math.random()*255),
			b = Math.ceil(Math.random()*255),
			c = Math.ceil(Math.random()*255);

		canvas.width = 430;
		canvas.height = 300;
		
		ctx.fillStyle = "rgb("+a+","+b+","+c+")";
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
		ctx.fill();

		if(counter >=30){

		}else{
			timeoutVar = setTimeout(start,15*ballR);
			counter=counter+1;
			console.log("Counter: "+counter);
		}	
	}




	function gameover(){
		
	}




	return{
		start:start
	}


}) ();

gameModule.start();