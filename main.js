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

		canvas.width = 480;
		canvas.height = 320;
		
		ctx.fillStyle = 'black';
		ctx.beginPath();
		ctx.arc(ballX, ballY, ballR, 0, Math.PI * 2 , true);
		ctx.fill();

		if(counter >=10){

		}else{
			timeoutVar = setTimeout(start,1000)
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