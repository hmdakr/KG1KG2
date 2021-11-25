/*
    Author ~ Ajithkumar Madhavnkutty
    Company ~ Sterco Digitex Pvt Ltd
    Email ~ ajithmadhav007@gmail.com
*/

"use strict";

(function (window)
{

    function Activity()
    {
		this.initialize();	
	}
	
	var p = Activity.prototype = new createjs.Container();
	p.Container_initialize = p.initialize;

	p.initialize = function ()
	{
		this.Container_initialize();

		this.showStartBtn();
	}

	p.showStartBtn = function ()
	{
		this.startBtnBg = document.getElementById("start_btn_icon");
		this.domStartBtn = new createjs.DOMElement(this.startBtnBg);
		this.startBtnBg.style.display = 'block';
		//this.domStartBtn.x = 504, this.domStartBtn.y = 190;
		stage.addChild(this.domStartBtn);
		this.domStartBtn.x = Math.round(canvasWidth/2 - 511/2);
		this.domStartBtn.y = Math.round(canvasHeight/2 - 398/2);

		this.startBtnCon = document.getElementById("start_btn_con");
		this.startBtnCon.style.display = 'block';
		this.startBtnCon.addEventListener('click', this.startActivity.bind(this));
	}

	p.showRestartBtn = function ()
	{
		this.timeoutId = setTimeout(function()
		{ 
			clearTimeout(this.timeoutId); 
			$('#start_btn_con').css('opacity', 0);
			$( "#start_btn_con" ).animate({ opacity: 1 }, 500, "swing");
			this.restartBtnBg = document.getElementById("restart_btn_icon");
			this.domRestartBtn = new createjs.DOMElement(this.restartBtnBg);
			innerDivCon.style.height = '100%';
			this.startBtnCon.style.display = this.restartBtnBg.style.display = 'block';	
			stage.addChild(this.domRestartBtn);
			this.domRestartBtn.x = Math.round(canvasWidth/2 - 566/2);
			this.domRestartBtn.y = Math.round(canvasHeight/2 - 377/2);

			this.startBtnCon = document.getElementById("start_btn_con");
			this.startBtnCon.style.display = 'block';
			this.startBtnCon.addEventListener('click', function()
			{ 
				window.location.reload();
			}.bind(this), false);
		}.bind(this), 1000);
	}

	p.startActivity = function ()
	{
		this.wrongCnt = 0;
		this.startBtnCon.style.display = 'none';
		this.playBgMusic();
		innerDivCon.style.height = '0px';
		canvas.style.display = 'block';
		exportRoot.fLaunchProduct();
	}

	p.playInstAudio = function ()
	{
		this.instAudio = this.playAudio('');
		this.instAudio.addEventListener('complete', this.instAudEnt = function()
		{ 
			this.instAudio.removeEventListener('complete', this.instAudEnt);
			this.enabledOptions();
		}.bind(this));
	}

	p.onFrame = function (b)
	{
		if(b)createjs.Ticker.addEventListener("tick", this.tickerEvent = this.updateAnim.bind(this));
		else createjs.Ticker.removeEventListener("tick", this.tickerEvent);
	}

	p.updateAnim = function (e)
	{
		this.crntFrame = Math.round((this.soluAudio.position/this.soluAudio.duration)*this.maxFrames);
		if(this.crntFrame < this.maxFrames)this.soluScreen.gotoAndStop(this.crntFrame);
		else this.soluScreen.gotoAndStop(this.maxFrames-1);
	}

	p.playAudio = function (name)
	{
		if(this.audio)this.audio.stop();
		this.audio = createjs.Sound.play(name);
		this.audio.name = name;
		return this.audio;
	}

	p.playBgMusic = function ()
	{
		if(!this.bgAudio)
		{
			this.bgAudio = createjs.Sound.play("bgm", {loop:-1, volume: .1});
		}
	}

	window.Activity = Activity;
	
}(window));