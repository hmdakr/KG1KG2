(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Interface_atlas_1", frames: [[0,813,238,98],[884,659,42,46],[340,613,537,59],[0,0,998,611],[944,613,44,48],[879,613,63,44],[508,674,185,156],[695,819,150,151],[170,613,168,189],[0,613,168,198],[695,674,187,143],[340,674,166,176]]}
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



(lib.CachedBmp_69 = function() {
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



(lib.Bitmap2 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.initialize(ss["Interface_atlas_1"]);
	this.gotoAndStop(11);
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
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-259,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-259,-25,537,59);


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
		/* stop();*/
	}
	this.frame_1 = function() {
		/* stop();*/
	}
	this.frame_2 = function() {
		/* stop();*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Layer_3
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-25,-22);

	this.instance_1 = new lib.Bitmap3();
	this.instance_1.setTransform(-31,-26);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance}]},1).to({state:[{t:this.instance_1}]},1).wait(1));

	// Layer_1
	this.instance_2 = new lib.Bitmap1();
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
	this.instance = new lib.CachedBmp_69();
	this.instance.setTransform(-136.4,-23.35,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9A5639").s().p("ArxELIAAoVIXjAAIAAGAQAACViWAAg");
	this.shape.setTransform(-71.475,-0.8);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-146.9,-27.5,150.9,53.5);


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

	// Layer_2
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-497,-305);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgg, new cjs.Rectangle(-497,-305,998,611), null);


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
	this.btn.setTransform(21.55,18.6,0.4952,1.8591,0,0,0,1,0.9);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-79,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-89.9,-72,222,177.8);


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
	this.btn.setTransform(2.5,28.35,0.4283,1.7755,0,0,0,1,0.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-76,-51);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.9,-58,192,169.8);


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
	this.btn.setTransform(-0.6,-8.05,0.3882,1.9767,0,0,0,0.9,0.7);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-86,-104);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-87.9,-104,174,189.1);


(lib.peas = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(33.45,37.35,0.4506,2.2271,0,0,0,0.9,0.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-37,-60);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-67.9,-71,202,213);


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
	this.btn.setTransform(-26.55,37.35,0.4506,2.2271,0,0,0,0.9,0.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-125,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-127.9,-71,202,213);


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
	this.btn.setTransform(-16.55,3.35,0.4506,2.2271,0,0,0,0.9,0.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-110,-105);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-117.9,-105,202,213);


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
	}
	this.frame_104 = function() {
		/* stop();
		this.blnPlay = false;
		var objRef = this;
		var blnLastQuestion = false;
		var __arrCorrectAnswer = new Array(1,3,4,5);
		var __nScore = 0;
		var __nWrong = 0;
		function init() {
			for (var i:Number = 1; objRef["mc_"+i] != null; i++) {
				objRef["mc_"+i].id = i;
				objRef["mc_" + i].addEventListener(MouseEvent.CLICK, fClickEvent);
				objRef["mc_"+i].buttonMode = true;
				objRef["mc_"+i].blnClicked=false;
			}
		}
		function fClickEvent(e) {
			//setTimeout(fChangeQuestion, 4000);
			fSetInteraction(false);
			e.currentTarget.removeEventListener(MouseEvent.CLICK, fClickEvent);
			e.currentTarget.buttonMode = false;
			e.currentTarget.blnClicked=true;
			if (containsM(__arrCorrectAnswer, e.currentTarget.id) == 1) {
				__nScore++;		
				var mcRight = new Right();
				objRef.addChild(mcRight);
				objRef["mcTick_" + e.currentTarget.id].gotoAndStop(3);
				return;
			}
			var mcWrong = new Wrong();
			objRef.addChild(mcWrong);
			objRef["mcTick_" + e.currentTarget.id].gotoAndStop(2);
			__nWrong++;
		}
		function fSetInteraction(b) {
			for (var i:Number = 1; objRef["mc_"+i] != null; i++) {
				objRef["mc_"+i].mouseEnabled = b;
				objRef["mc_"+i].buttonMode = b;
				objRef["mc_" + i].removeEventListener(MouseEvent.CLICK, fClickEvent);
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
			if (__nScore > __arrCorrectAnswer.length - 1) {
				//MovieClip(parent.parent.parent).mcFinal.gotoAndPlay(2);
				fCalculateScore();
				return;
			}
			for (var i:Number = 1; objRef["mc_"+i] != null; i++) {
				if (!objRef["mc_"+i].blnClicked) {
					objRef["mc_"+i].mouseEnabled = true;
					objRef["mc_"+i].buttonMode = true;
					objRef["mc_" + i].addEventListener(MouseEvent.CLICK, fClickEvent);
				}
			}
		}
		init();
		function fCalculateScore() {
			trace(__nWrong + "--------------__nWrong");
			if (__nWrong >= 1) {
				MovieClip(parent.parent.parent).mcFinal.mcRank.gotoAndPlay("rank2");
			} else {
				MovieClip(parent.parent.parent).mcFinal.mcRank.gotoAndPlay("rank1_1");
			}
		}*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(104).call(this.frame_104).wait(1));

	// _
	this.mcTick_6 = new lib.right_wrong();
	this.mcTick_6.name = "mcTick_6";
	this.mcTick_6.setTransform(433.25,253.25,1.0032,1.0032);

	this.mcTick_5 = new lib.right_wrong();
	this.mcTick_5.name = "mcTick_5";
	this.mcTick_5.setTransform(113.15,253.25,1.0032,1.0032);

	this.mcTick_4 = new lib.right_wrong();
	this.mcTick_4.name = "mcTick_4";
	this.mcTick_4.setTransform(-276.2,253.25,1.0032,1.0032);

	this.mcTick_3 = new lib.right_wrong();
	this.mcTick_3.name = "mcTick_3";
	this.mcTick_3.setTransform(426.65,-0.75,1.0032,1.0032);

	this.mcTick_2 = new lib.right_wrong();
	this.mcTick_2.name = "mcTick_2";
	this.mcTick_2.setTransform(87.45,-0.75,1.0032,1.0032);

	this.mcTick_1 = new lib.right_wrong();
	this.mcTick_1.name = "mcTick_1";
	this.mcTick_1.setTransform(-276.8,-0.75,1.0032,1.0032);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcTick_1},{t:this.mcTick_2},{t:this.mcTick_3},{t:this.mcTick_4},{t:this.mcTick_5},{t:this.mcTick_6}]},104).wait(1));

	// _
	this.mc_6 = new lib.peas();
	this.mc_6.name = "mc_6";
	this.mc_6.setTransform(329.2,137.7);

	this.mc_5 = new lib.grapes();
	this.mc_5.name = "mc_5";
	this.mc_5.setTransform(24.8,151.4);

	this.mc_4 = new lib.brinjal();
	this.mc_4.name = "mc_4";
	this.mc_4.setTransform(-354.55,162.6);

	this.mc_3 = new lib.potator();
	this.mc_3.name = "mc_3";
	this.mc_3.setTransform(366.45,-93.1);

	this.mc_2 = new lib.pumpkin();
	this.mc_2.name = "mc_2";
	this.mc_2.setTransform(4.8,-110.45);

	this.mc_1 = new lib.strawberry();
	this.mc_1.name = "mc_1";
	this.mc_1.setTransform(-378.25,-111.65);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mc_1},{t:this.mc_2},{t:this.mc_3},{t:this.mc_4},{t:this.mc_5},{t:this.mc_6}]},104).wait(1));

	// HEADING
	this.instance = new lib.heading_("synched",0);
	this.instance.setTransform(-672.85,-272.75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:-342.85},11,cjs.Ease.get(1)).wait(90));

	// peas
	this.instance_1 = new lib.peas("synched",0);
	this.instance_1.setTransform(329.15,137.7,0.1,0.1,0,0,0,-0.5,0);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(53).to({_off:false},0).to({regX:-0.1,scaleX:1.1,scaleY:1.1,alpha:1},9,cjs.Ease.get(1)).to({regX:0,scaleX:1,scaleY:1,x:329.2},5).to({_off:true},37).wait(1));

	// grapes
	this.instance_2 = new lib.grapes("synched",0);
	this.instance_2.setTransform(24.8,151.4,0.1,0.1);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(51).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).to({_off:true},39).wait(1));

	// brinjal
	this.instance_3 = new lib.brinjal("synched",0);
	this.instance_3.setTransform(-354.7,162.75,0.1,0.1);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(49).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-354.65,y:162.7,alpha:1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).to({_off:true},41).wait(1));

	// potator
	this.instance_4 = new lib.potator("synched",0);
	this.instance_4.setTransform(366.45,-93.1,0.1,0.1);
	this.instance_4.alpha = 0;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(45).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).to({_off:true},45).wait(1));

	// pumpkin
	this.instance_5 = new lib.pumpkin("synched",0);
	this.instance_5.setTransform(4.8,-110.45,0.1,0.1);
	this.instance_5.alpha = 0;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(42).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5).to({_off:true},48).wait(1));

	// strawberry
	this.instance_6 = new lib.strawberry("synched",0);
	this.instance_6.setTransform(-378.25,-111.65,0.1,0.1);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(38).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,alpha:1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,mode:"independent"},5).to({_off:true},52).wait(1));

	// ani
	this.instance_7 = new lib.Symbol1("synched",0);
	this.instance_7.setTransform(713,-225.25);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(11).to({_off:false},0).to({x:-24.5},15,cjs.Ease.get(1)).to({x:-12},5,cjs.Ease.get(1)).wait(73).to({startPosition:0},0).wait(1));

	// bg
	this.instance_8 = new lib.bgg();
	this.instance_8.setTransform(1.45,-0.5);
	this.instance_8.alpha = 0;
	this.instance_8.filters = [new cjs.ColorMatrixFilter(new cjs.ColorMatrix(0, 8, 0, 168))];
	this.instance_8.cache(-499,-307,1002,615);

	this.timeline.addTween(cjs.Tween.get(this.instance_8).to({alpha:1},11).wait(93).to({alpha:0.3203},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-819.7,-305.5,1810.7,617);


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
		//this.strFrame = "strFrame1"
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
			//this.mcAttachMovieClip.gotoAndPlay(this.strFrame);
			this.addChild(this.mcAttachMovieClip);	
			if(this.nF == 1)
			{
				this.play();
				this.fbAudio = main.playAudio('instruction');
			}
			this.nF = this.nF + 1;
		}
		playSound("INSECTS_02");
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
		{src:"images/Interface_atlas_1.png?1640562386165", id:"Interface_atlas_1"},
		{src:"sounds/INSECTS_02.mp3?1640562386205", id:"INSECTS_02"}
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