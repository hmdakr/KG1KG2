(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Interface_atlas_1", frames: [[497,613,183,215],[887,659,42,46],[0,0,999,611],[682,613,203,174],[0,613,282,201],[284,613,211,243],[682,789,156,186],[952,613,44,48],[887,613,63,44],[0,858,506,54],[0,914,443,53]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.Bitmap1 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-187,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-187,-25,443,53);


(lib.right_wrong = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_3
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-25,-22);

	this.instance_1 = new lib.Bitmap7();
	this.instance_1.setTransform(-31,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_1
	this.instance_2 = new lib.Bitmap10();
	this.instance_2.setTransform(-24,-21);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).to({_off:true},1).wait(2));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31,-26,63,52);


(lib.heading_ = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-147,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-28,506,54);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgjAAHeIAAu7MBGBAAAIAAO7g");
	this.shape.setTransform(0,-0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-224.1,-47.8,448.2,95.6), null);


(lib.bgg = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-497,-305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgg, new cjs.Rectangle(-497,-305,999,611), null);


(lib.strawberry = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(57.15,20.6,0.4333,2.3073,0,0,0,0.1,0.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-40,-90);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-40,-90,194.2,220.7);


(lib.pumpkin = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(137.15,44.35,0.469,1.7768,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(32,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(32,-41,210.2,174);


(lib.potator = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(184.25,37.4,0.6787,2.154,0,0,0,0.4,0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(48,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(31.9,-66.1,304.20000000000005,206);


(lib.grapes = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(-3.3,28.9,0.3775,2.1011,0,0,0,0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-83,-66);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-88,-72,169.2,201);


(lib.brinjal = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_2
	this.btn = new lib.btn();
	this.btn.name = "btn";
	this.btn.setTransform(172.15,-4.25,0.4913,2.5821,0,0,0,0.3,0.1);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(77,-124);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(61.9,-128,226.1,247);


(lib.mcMain1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_0 = function() {
		/* this.blnPlay = true;*/
		this.fbAudio = main.playAudio("instruction");
	}
	this.frame_107 = function() {
		this.stop();
		this.blnPlay = false;
		var objRef = this;
		var blnLastQuestion = false;
		var __arrCorrectAnswer = new Array(1,2,5);
		var __nScore = 0;
		var __nWrong = 0;
		var __nButtonPush = 0;
		this.init = function() {
			for (var i = 1; objRef["mc_"+i] != undefined; i++) {
				objRef["mc_"+i].id = i;				
				objRef["mc_" + i].btn.addEventListener("mousedown", objRef["mc_" + i].listener = this.fClickEvent.bind(this));
				objRef["mc_" + i].btn.cursor = "pointer";
			}
		}
		this.fClickEvent = function(e) {	
			__nButtonPush = __nButtonPush + 1;	
			this.fSetInteraction(false);
			e.currentTarget.parent.removeEventListener("mousedown", e.currentTarget.parent.listener, false);
			e.currentTarget.parent.cursor = null;
			if (containsM(__arrCorrectAnswer, e.currentTarget.parent.id) == 1) {
				__nScore++;		
				var nRandom = Math.floor(Math.random()*3);
				nRandom = nRandom + 1;		
				this.fbAudio = main.playAudio('right'+nRandom);
				objRef["mcTick_" + e.currentTarget.parent.id].gotoAndStop(2);
				this.fbAudio.addEventListener('complete', this.strAudEnt = function()
				{ 
					this.fChangeQuestion();
					this.fbAudio.removeEventListener('complete', this.strAudEnt);			
				}.bind(this));	
				return;
			}
			__nWrong++;
			this.fbAudio = main.playAudio('incorrect');
			this.fbAudio.addEventListener('complete', this.strAudEnt = function()
			{ 
				this.fChangeQuestion();
				this.fbAudio.removeEventListener('complete', this.strAudEnt);			
			}.bind(this));		
			objRef["mcTick_" + e.currentTarget.parent.id].gotoAndStop(1);
		}
		
		this.fSetInteraction = function(b){
			for (var i = 1; objRef["mc_"+i] != undefined; i++) {
				objRef["mc_"+i].btn.mouseEnabled = b;
			}
		}
		function containsM(inArray, item) {
			var l = inArray.length;
			var t = 0;
			while (l--) {
				if (inArray[l] == item) {
					t++;
				}
			}
			return t;
		}
		this.fChangeQuestion = function() {
			if (__nScore > __arrCorrectAnswer.length - 1) {
				this.fCalculateScore();
				return;
			}
			this.fSetInteraction(true);
		}
		this.init();
		this.fCalculateScore = function(){	
			main.showRestartBtn();
			var nP = Math.floor((__arrCorrectAnswer.length/__nButtonPush)*100);	
			//alert(__arrCorrectAnswer.length + "---------------------"+__nButtonPush+"---------"+nP);
			if (nP < 70) {
				//MovieClip(parent.parent.parent).mcFinal.mcRank.gotoAndPlay("rank2");		
			} else {
				//MovieClip(parent.parent.parent).mcFinal.mcRank.gotoAndPlay("rank1_1");
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(107).call(this.frame_107).wait(1));

	// _
	this.mcTick_5 = new lib.right_wrong();
	this.mcTick_5.name = "mcTick_5";
	this.mcTick_5.setTransform(158.25,199.3,1.0032,1.0032);

	this.mcTick_4 = new lib.right_wrong();
	this.mcTick_4.name = "mcTick_4";
	this.mcTick_4.setTransform(-117.85,189.35,1.0032,1.0032);

	this.mcTick_3 = new lib.right_wrong();
	this.mcTick_3.name = "mcTick_3";
	this.mcTick_3.setTransform(373.7,-154,1.0032,1.0032);

	this.mcTick_2 = new lib.right_wrong();
	this.mcTick_2.name = "mcTick_2";
	this.mcTick_2.setTransform(41.65,-165,1.0032,1.0032);

	this.mcTick_1 = new lib.right_wrong();
	this.mcTick_1.name = "mcTick_1";
	this.mcTick_1.setTransform(-389.8,-170,1.0032,1.0032);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcTick_1},{t:this.mcTick_2},{t:this.mcTick_3},{t:this.mcTick_4},{t:this.mcTick_5}]},107).wait(1));

	// _
	this.mc_5 = new lib.grapes();
	this.mc_5.name = "mc_5";
	this.mc_5.setTransform(65.45,134.05);

	this.mc_4 = new lib.brinjal();
	this.mc_4.name = "mc_4";
	this.mc_4.setTransform(-371,143.05);

	this.mc_3 = new lib.potator();
	this.mc_3.name = "mc_3";
	this.mc_3.setTransform(82.5,-109.05);

	this.mc_2 = new lib.pumpkin();
	this.mc_2.name = "mc_2";
	this.mc_2.setTransform(-184.55,-111.95);

	this.mc_1 = new lib.strawberry();
	this.mc_1.name = "mc_1";
	this.mc_1.setTransform(-401,-108.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mc_1},{t:this.mc_2},{t:this.mc_3},{t:this.mc_4},{t:this.mc_5}]},107).wait(1));

	// HEADING
	this.instance = new lib.heading_("synched",0);
	this.instance.setTransform(-672.85,-272.75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:-342.85},11,cjs.Ease.get(1)).wait(92).to({startPosition:0},0).wait(1));

	// grapes
	this.instance_1 = new lib.grapes("synched",0);
	this.instance_1.setTransform(55.45,134.05,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(51).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:65.45},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},42).wait(1));

	// brinjal
	this.instance_2 = new lib.brinjal("synched",0);
	this.instance_2.setTransform(-401.15,143.2,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(49).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-371.1,y:143.15},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},44).wait(1));

	// potator
	this.instance_3 = new lib.potator("synched",0);
	this.instance_3.setTransform(82.5,-109.05,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(45).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},48).wait(1));

	// pumpkin
	this.instance_4 = new lib.pumpkin("synched",0);
	this.instance_4.setTransform(-184.55,-111.95,0.1,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(42).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},51).wait(1));

	// strawberry
	this.instance_5 = new lib.strawberry("synched",0);
	this.instance_5.setTransform(-401,-108.35,0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(38).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},55).wait(1));

	// ani
	this.instance_6 = new lib.Symbol1("synched",0);
	this.instance_6.setTransform(713,-225.25);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(11).to({_off:false},0).to({x:-24.5},15,cjs.Ease.get(1)).to({x:-12},5,cjs.Ease.get(1)).wait(76).to({startPosition:0},0).wait(1));

	// bg
	this.instance_7 = new lib.bgg();
	this.instance_7.setTransform(1.45,-0.5);
	this.instance_7.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).to({alpha:0.3203},11).wait(1).to({alpha:1},0).wait(95).to({alpha:0.3203},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-819.8,-305.5,1788.8,614);


// stage content:
(lib.Interface = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		this.strFrame = "strFrame1"
		this.nF = 1;
		this.fLaunchProduct = function()
		{
			if(this.mcAttachMovieClip)
			{
				this.removeChild(this.mcAttachMovieClip);
			}
			this.mcAttachMovieClip = new lib["mcMain"+this.nF];
			this.mcAttachMovieClip.x = 488;
			this.mcAttachMovieClip.y = 295;	
			this.mcAttachMovieClip.gotoAndPlay(this.strFrame);
			this.addChild(this.mcAttachMovieClip);	
			this.nF = this.nF + 1;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,0,0);
// library properties:
lib.properties = {
	id: 'ECDF1A6AC5E395468828BABD79B3D8C3',
	width: 977,
	height: 588,
	fps: 40,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/Interface_atlas_1.png?1638118650971", id:"Interface_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['ECDF1A6AC5E395468828BABD79B3D8C3'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;