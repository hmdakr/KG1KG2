(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Interface_atlas_1", frames: [[0,0,977,588],[212,785,363,54],[0,645,211,102],[406,645,149,113],[0,749,210,95],[0,590,600,53],[766,590,224,138],[766,730,193,145],[602,590,162,193],[557,645,42,46],[577,831,44,48],[577,785,63,44],[213,645,191,106]]}
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



(lib.bg = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(12);
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
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-290,-17);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-290,-17,600,53);


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
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-25,-22);

	this.instance_1 = new lib.Bitmap8();
	this.instance_1.setTransform(-31,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_1
	this.instance_2 = new lib.Bitmap6();
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
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-147,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-28,363,54);


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
	this.instance = new lib.bg();
	this.instance.setTransform(-488,-199);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgg, new cjs.Rectangle(-488,-199,977,588), null);


(lib.a_7 = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(-2.05,13.8,0.5174,0.9677,0,0,0,-0.2,0.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap12();
	this.instance.setTransform(-111,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.a_7, new cjs.Rectangle(-117.9,-38,231.9,97.6), null);


(lib.a_6 = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(21,1.4,0.4147,1.3116,0,0,0,-0.1,0.4);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-67,-56);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.a_6, new cjs.Rectangle(-71.9,-61.8,185.9,125.4), null);


(lib.a_5 = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(-2.05,-7.55,0.5174,1.3109,0,0,0,-0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-103,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.a_5, new cjs.Rectangle(-117.9,-70.8,231.9,125.4), null);


(lib.a_4 = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(-18.05,-18.5,0.446,1.5414,0,0,0,-0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-114,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.a_4, new cjs.Rectangle(-117.9,-92.8,199.9,147.4), null);


(lib.a_3 = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(-16.05,-15.15,0.4103,2.0971,0,0,0,-0.2,0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-96,-116);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.a_3, new cjs.Rectangle(-107.9,-116,183.9,200.7), null);


(lib.a_2 = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(24.4,-10.7,0.4484,1.7089,0,0,0,-0.1,0.2);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-76,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.a_2, new cjs.Rectangle(-76,-92.8,201,163.5), null);


(lib.a_1 = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(-2.05,-18.5,0.5174,1.5414,0,0,0,-0.2,0.4);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-110,-88);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.a_1, new cjs.Rectangle(-117.9,-92.8,231.9,147.4), null);


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
	this.frame_125 = function() {
		this.stop();
		this.blnPlay = false;
		var objRef = this;
		var blnLastQuestion = false;
		var __arrCorrectAnswer = new Array(1,3,4,7);
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
			var nP = Math.floor((__arrCorrectAnswer.length/__nButtonPush)*100);	
			alert(__arrCorrectAnswer.length + "---------------------"+__nButtonPush+"---------"+nP);
			if (nP < 70) {
				//MovieClip(parent.parent.parent).mcFinal.mcRank.gotoAndPlay("rank2");		
			} else {
				//MovieClip(parent.parent.parent).mcFinal.mcRank.gotoAndPlay("rank1_1");
			}
		}
		/* stop();
		this.blnPlay = false;
		var objRef = this;
		var blnLastQuestion = false;
		var __arrCorrectAnswer = new Array(1,3,4,7);
		var __nScore = 0;
		var __nWrong = 0;
		var __nButtonPush = 0;
		function init() {
			for (var i:Number = 1; objRef["mc_"+i] != null; i++) {
				objRef["mc_"+i].id = i;
				objRef["mc_" + i].addEventListener(MouseEvent.CLICK, fClickEvent);
				objRef["mc_"+i].buttonMode = true;
			}
		}
		function fClickEvent(e) {
			__nButtonPush = __nButtonPush + 1;
			setTimeout(fChangeQuestion, 4000);
			fSetInteraction(false);
			e.currentTarget.removeEventListener(MouseEvent.CLICK, fClickEvent);
			e.currentTarget.buttonMode = false;
			if (containsM(__arrCorrectAnswer, e.currentTarget.id) == 1) {
				__nScore++;
				var mcRight = new Right();
				objRef.addChild(mcRight);
				objRef["mcTick_" + e.currentTarget.id].gotoAndStop(3);
				return;
			}
			__nWrong++;
			var mcWrong = new Wrong();
			objRef.addChild(mcWrong);
			objRef["mcTick_" + e.currentTarget.id].gotoAndStop(2);
		}
		function fSetInteraction(b) {
			for (var i:Number = 1; objRef["mc_"+i] != null; i++) {
				objRef["mc_"+i].mouseEnabled = b;
			}
		}
		function containsM(inArray, item) {
			var l:Number = inArray.length;
			var t:Number = 0;
			while (l--) {
				if (inArray[l] == item) {
					t++;
				}
			}
			return t;
		}
		function fChangeQuestion() {
			trace("__nScore.........."+__nScore)
			if (__nScore > __arrCorrectAnswer.length - 1) {
				//MovieClip(parent.parent.parent).mcFinal.gotoAndPlay(2);
				fCalculateScore();
				return;
			}
			fSetInteraction(true);
		}
		init();
		
		
		function fCalculateScore() {	
			var nP = Math.floor((__arrCorrectAnswer.length/__nButtonPush)*100);	
			trace(__arrCorrectAnswer.length + "---------------------"+__nButtonPush+"---------"+nP);
			if (nP < 70) {
				MovieClip(parent.parent.parent).mcFinal.mcRank.gotoAndPlay("rank2");		
			} else {
				MovieClip(parent.parent.parent).mcFinal.mcRank.gotoAndPlay("rank1_1");
			}
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(125).call(this.frame_125).wait(1));

	// _
	this.mcTick_7 = new lib.right_wrong();
	this.mcTick_7.name = "mcTick_7";
	this.mcTick_7.setTransform(305.95,239.55);

	this.mcTick_6 = new lib.right_wrong();
	this.mcTick_6.name = "mcTick_6";
	this.mcTick_6.setTransform(-260.85,239.55);

	this.mcTick_5 = new lib.right_wrong();
	this.mcTick_5.name = "mcTick_5";
	this.mcTick_5.setTransform(429.35,130.95);

	this.mcTick_4 = new lib.right_wrong();
	this.mcTick_4.name = "mcTick_4";
	this.mcTick_4.setTransform(134.95,13.5);

	this.mcTick_3 = new lib.right_wrong();
	this.mcTick_3.name = "mcTick_3";
	this.mcTick_3.setTransform(-410.2,118.65);

	this.mcTick_2 = new lib.right_wrong();
	this.mcTick_2.name = "mcTick_2";
	this.mcTick_2.setTransform(429.35,-44);

	this.mcTick_1 = new lib.right_wrong();
	this.mcTick_1.name = "mcTick_1";
	this.mcTick_1.setTransform(-399.7,-50.25);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcTick_1},{t:this.mcTick_2},{t:this.mcTick_3},{t:this.mcTick_4},{t:this.mcTick_5},{t:this.mcTick_6},{t:this.mcTick_7}]},125).wait(1));

	// audio
	this.mc_5 = new lib.a_7();
	this.mc_5.name = "mc_5";
	this.mc_5.setTransform(331.5,60);

	this.mc_7 = new lib.a_6();
	this.mc_7.name = "mc_7";
	this.mc_7.setTransform(182.1,211.2);

	this.mc_6 = new lib.a_5();
	this.mc_6.name = "mc_6";
	this.mc_6.setTransform(-134.6,219.2);

	this.mc_3 = new lib.a_4();
	this.mc_3.name = "mc_3";
	this.mc_3.setTransform(-279.7,83.75);

	this.mc_4 = new lib.a_3();
	this.mc_4.name = "mc_4";
	this.mc_4.setTransform(40.1,33.65);

	this.mc_2 = new lib.a_2();
	this.mc_2.name = "mc_2";
	this.mc_2.setTransform(281.55,-101,1,1,0,0,0,-0.1,0);

	this.mc_1 = new lib.a_1();
	this.mc_1.name = "mc_1";
	this.mc_1.setTransform(-261.15,-81.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mc_1},{t:this.mc_2},{t:this.mc_4},{t:this.mc_3},{t:this.mc_6},{t:this.mc_7},{t:this.mc_5}]},125).wait(1));

	// HEADING
	this.instance = new lib.heading_("synched",0);
	this.instance.setTransform(-672.85,-272.75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:-342.85},11,cjs.Ease.get(1)).wait(111));

	// a_7
	this.instance_1 = new lib.a_7();
	this.instance_1.setTransform(727.65,67.35,0.5,0.5);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(57).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:331.5,y:60},10).to({scaleX:1,scaleY:1},3).to({_off:true},55).wait(1));

	// a_6
	this.instance_2 = new lib.a_6();
	this.instance_2.setTransform(272.6,440.2,0.5,0.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(52).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:182.1,y:211.2},10).to({scaleX:1,scaleY:1},3).to({_off:true},60).wait(1));

	// a_5
	this.instance_3 = new lib.a_5();
	this.instance_3.setTransform(-132.15,453.95,0.5,0.5);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(47).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-134.6,y:219.2},10).to({scaleX:1,scaleY:1},3).to({_off:true},65).wait(1));

	// a_4
	this.instance_4 = new lib.a_4();
	this.instance_4.setTransform(-597.6,101.85,0.5,0.5);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-279.7,y:83.75},10).to({scaleX:1,scaleY:1},3).to({_off:true},68).wait(1));

	// a_3
	this.instance_5 = new lib.a_3();
	this.instance_5.setTransform(40.1,33.65,0.5,0.5);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(41).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},10).to({scaleX:1,scaleY:1},3).to({_off:true},71).wait(1));

	// a_2
	this.instance_6 = new lib.a_2();
	this.instance_6.setTransform(330.45,-416.45,0.5,0.5,0,0,0,-0.2,0);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(37).to({_off:false},0).to({regX:-0.1,scaleX:1.1,scaleY:1.1,x:281.55,y:-101},10).to({scaleX:1,scaleY:1},3).to({_off:true},75).wait(1));

	// a_1
	this.instance_7 = new lib.a_1();
	this.instance_7.setTransform(-361.8,-394.4,0.5,0.5);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(34).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-261.15,y:-81.4},10).to({scaleX:1,scaleY:1},3).to({_off:true},78).wait(1));

	// ani
	this.instance_8 = new lib.Symbol1("synched",0);
	this.instance_8.setTransform(713,-225.25);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(11).to({_off:false},0).to({x:-24.5},15,cjs.Ease.get(1)).to({x:-12},5,cjs.Ease.get(1)).wait(94).to({startPosition:0},0).wait(1));

	// bg
	this.instance_9 = new lib.bgg();
	this.instance_9.setTransform(1.45,-0.5);
	this.instance_9.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).to({y:-94.5,alpha:1},11).wait(115));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-819.8,-462.8,1842.8,944.1);


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
		stage.enableMouseOver(10); 
		this.strFrame = "strFrame1"
		this.nF = 1;
		this.fLaunchProduct = function()
		{
			if(this.mcAttachMovieClip)
			{
				this.removeChild(this.mcAttachMovieClip);
			}
			this.mcAttachMovieClip = new lib["mcMain"+this.nF];
			this.mcAttachMovieClip.x = 488.1;
			this.mcAttachMovieClip.y = 295.05;	
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
		{src:"images/Interface_atlas_1.png?1637852704907", id:"Interface_atlas_1"}
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