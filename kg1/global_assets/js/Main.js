/*
    Author ~ Ajithkumar Madhavnkutty
    Company ~ Sterco Digitex Pvt Ltd
    Email ~ ajithmadhav007@gmail.com
*/

"use strict";

(function (window)
{

    function Main()
    {
		this.initialize();	
	}
	
	var p = Main.prototype = new createjs.Container();
	p.Container_initialize = p.initialize;

	p.initialize = function ()
	{
		this.Container_initialize();

		this.pCount = 0;
		this.videoOn = false;

		activity = new Activity();
		this.addChild(activity);

		this.showStartBtn();

		if(InputData.videoUrl)
		{
			this.videoOn = true;
			this.loadVideo();
		}
	}
	
	p.loadVideo = function ()
	{
		this.videoCon.src = InputData.videoUrl;
		this.videoCon.style.display = 'block';
		this.videoCon.controls = false;
		this.videoCon.addEventListener('loadeddata', function()
		{ 
			this.startBtnBg.style.display = 'block';
			this.getVideoPauseTime(); 
		}.bind(this), false);
	}

	p.showStartBtn = function ()
	{
		this.videoCon = document.getElementById("vid_con");
		this.startBtnBg = document.getElementById("start_btn_icon");
		this.domStartBtn = new createjs.DOMElement(this.startBtnBg);
		//this.domStartBtn.x = 504, this.domStartBtn.y = 190;
		stage.addChild(this.domStartBtn);
		this.domStartBtn.x = Math.round(canvasWidth/2 - 437/2);
		this.domStartBtn.y = Math.round(canvasHeight/2 - 378/2);

		this.startBtnCon = document.getElementById("start_btn_con");
		this.startBtnCon.style.display = 'block';
		this.startBtnCon.addEventListener('click', function()
		{ 
			this.playBgMusic();
			innerDivCon.style.height = '0px';
			this.startBtnCon.style.display = this.startBtnBg.style.display = 'none';	
			if(this.videoOn)this.videoCon.play();
			else activity.startActivity();
		}.bind(this), false);
	}

	p.showRestartBtn = function ()
	{
		$('#start_btn_con').css('opacity', 0);
		$( "#start_btn_con" ).animate({ opacity: 1 }, 500, "swing");
		this.restartBtnBg = document.getElementById("restart_btn_icon");
		this.domRestartBtn = new createjs.DOMElement(this.restartBtnBg);
		innerDivCon.style.height = '100%';
		this.startBtnCon.style.display = this.restartBtnBg.style.display = 'block';	
		stage.addChild(this.domRestartBtn);
		this.domRestartBtn.x = Math.round(canvasWidth/2 - 477/2);
		this.domRestartBtn.y = Math.round(canvasHeight/2 - 354/2);

		this.startBtnCon = document.getElementById("start_btn_con");
		this.startBtnCon.style.display = 'block';
		this.startBtnCon.addEventListener('click', function()
		{ 
			window.location.reload();
		}.bind(this), false);
	}


	p.getVideoPauseTime = function ()
	{
		this.videoCon.addEventListener("timeupdate", function() 
		{ 
			this.sec = parseInt(this.videoCon.currentTime % 60);
			this.min = parseInt((this.videoCon.currentTime / 60) % 60);
			if(this.sec < 10)this.sec = ('0'+ this.sec);
			this.time = this.min + ':' + this.sec;
			if(InputData.videoPause[this.pCount] == this.time)
			{
				this.pauseVideo(true);
				this.pCount++;
			}
			//else if(this.videoCon.currentTime == this.videoCon.duration)this.startToBegin();
		}.bind(this), false);
	}

	p.pauseVideo = function (b)
	{
		if(b)
		{
			exportRoot.uncache();
			this.videoCon.pause();
			activity.startActivity();
			canvas.style.display = 'block';
			$( "#vid_con" ).animate({ opacity: 0 }, 500, "swing", function()
			{ 
				this.videoCon.style.display = 'none';
			}.bind(this));
		}
		else
		{
			this.timeoutId = setTimeout(function()
			{ 
				clearTimeout(this.timeoutId);
				this.videoCon.style.display = 'block';
				$('#vid_con').css('opacity', 0);
				$( "#vid_con" ).animate({ opacity: 1 }, 500, "swing", function()
				{ 
					exportRoot.cache(0, 0, canvasWidth, canvasHeight);
					canvas.style.display = 'none';
					this.videoCon.play();
				}.bind(this));
			}.bind(this), 500);
		}
	}

	p.startToBegin = function ()
	{
		this.pCount = 0;
		this.videoCon.currentTime = 0;
		this.videoCon.pause();
		innerDivCon.style.height = '100%';
		this.startBtnCon.style.display = 'block';
		if(activity.qtnNum)activity.qtnNum = 1;
	}

	p.playBgMusic = function ()
	{
		if(!this.bgAudio)
		{
			this.bgAudio = createjs.Sound.play("bgm", {loop:-1, volume: .02});
		}
	}

	window.Main = Main;
	
}(window));