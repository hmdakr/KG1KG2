(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"Interface_atlas_1", frames: [[0,0,977,588],[231,729,129,157],[362,816,301,54],[764,590,151,140],[917,590,107,161],[442,590,155,169],[599,590,163,156],[0,590,229,146],[764,732,138,146],[231,590,209,137],[362,761,337,53]]}
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
	this.instance.setTransform(-165,-25);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-165,-25,337,53);


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

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(1,1,1,0)").s().p("ACKDYIiKiWIiJCWQgNAOgRAAQgTAAgMgOQgNgOAAgTQAAgTANgOICKiWIiKiVQgNgNAAgUQABgGABgGQACgKAHgIIACgDQAMgOATAAQARAAANAOICJCWICKiWQANgOARAAQASAAANAOQANAOAAATQAAAUgNANIiKCVICKCWQANAOAAATQAAATgNAOIgDADQgHAHgKACQgEACgHAAQgRAAgNgOg");
	this.shape.setTransform(-3.15,1.525);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,0,0,0.251)").s().p("AsuryIAKgKQAxgyBHAAQBGAAAyAyIIhIgIIgogQAxgyBHAAQBGAAAyAyQAyAyAABGQAABHgyAxIohIgIIhIhQAyAxAABHQAABGgyAzIgKAJg");
	this.shape_1.setTransform(-2.7088,0.9623,0.2531,0.2749);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#C80000","#7E0101"],[0,1],-84.6,-0.2,84.3,-0.2).ss(2,1,1).p("AqYtCQhHAAgxAyQgFAEgFAGQgZAdgKAkQgFAVAAAYQAABGAyAyIIgIgIogIhQgyAxAABHQAABHAyAyQAxAxBHAAQBGAAAygxIIgohIIhIhQAxAxBHAAQAXAAAWgGQAkgJAdgZQAFgFAFgEQAygyAAhHQAAhHgygxIohohIIhogQAygyAAhGQAAhHgygxQgygyhGAAQhHAAgxAyIohIgIogogQgygyhGAAg");
	this.shape_2.setTransform(-3.1668,1.5329,0.2532,0.275);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#C80000").s().p("AIhMSIohoiIogIiQgxAxhHAAQhHAAgxgxQgygzAAhGQAAhHAygxIIgohIogogQgygxAAhHQAAgXAGgWQAJgkAagdIAJgKQAxgyBHAAQBHAAAxAyIIgIgIIhogQAygyBGAAQBHAAAxAyQAyAyAABGQAABHgyAxIogIgIIgIhQAyAxAABHQAABGgyAzIgKAJQgdAZgkAKQgVAFgYAAQhGAAgygxg");
	this.shape_3.setTransform(-3.1668,1.5329,0.2532,0.275);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("rgba(224,254,103,0.251)").s().p("As9D+QgygxAAhHQAAhGAygyQAxgxBHAAQBGAAAzAxIEEEEIl7BmgAJOlFQAxgyBHAAQBHAAAyAyQAxAxAABHQAABGgxAzIhCBBIqSCvg");
	this.shape_4.setTransform(-0.0426,-11.5353,0.3453,0.3453);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().ls(["#95C801","#667E01"],[0,1],-60.6,-41.6,23.3,42.2).ss(2,1,1).p("AM+ovQgygyhGAAQhHAAgxAyIr3L2ImkmiQgygyhGAAQhHAAgxAyQgyAxAABHQAABGAyAxIIcIcQAxAyBHAAQBGAAAygyINvtvQAygyAAhGQAAhHgygxg");
	this.shape_5.setTransform(0.0009,-3.4483,0.3454,0.3454);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#95C801").s().p("AkhIwIococQgygwAAhHQAAhGAygyQAxgyBHAAQBGAAAzAyIGjGiIL3r2QAxgyBHAAQBHAAAyAyQAxAxAABHQAABGgxAzItvNuQgzAyhGAAQhHAAgxgyg");
	this.shape_6.setTransform(0.0009,-3.4483,0.3454,0.3454);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1}]},1).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-31.4,-25.5,62.8,51);


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
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-147,-28);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-147,-28,301,54);


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
	this.instance.setTransform(-488,-292);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.bgg, new cjs.Rectangle(-488,-292,977,588), null);


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
	this.btn.setTransform(-2.95,4.85,0.319,1.7301,0,0,0,0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-69,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-74.5,-79,143,165.5);


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
	this.btn.setTransform(29.85,7.65,0.3536,1.7825,0,0,0,0.3,0.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-42,-62);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-49.5,-79.1,158.5,170.5);


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
	this.btn.setTransform(7.05,9.85,0.319,1.7301,0,0,0,0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-48,-63);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-64.5,-74,143,172);


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
	this.btn.setTransform(-5.95,4.85,0.319,1.7301,0,0,0,0.1,0.6);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-75,-70);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-77.5,-79,143,165.5);


(lib.orange = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(-19.45,5.75,0.3926,1.929,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-94,-83);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-107.4,-88.1,176,184.5);


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
	this.btn.setTransform(15.7,7.35,0.5109,1.7771,0,0,0,0.4,0.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-99,-55);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-99,-79.1,229,170.1);


(lib.cabbage = function(mode,startPosition,loop,reversed) {
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
	this.btn.setTransform(-9.5,-15.8,0.4661,1.4312,0,0,0,-0.1,0.5);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-114,-85);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-114,-85,209,137);


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
	this.btn.setTransform(-6.95,5.2,0.3859,1.7301,0,0,0,0,0.8);

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(1));

	// Layer_1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-88,-79);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-93.4,-79,173,165.5);


(lib.mcMain = function(mode,startPosition,loop,reversed) {
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
		var __arrCorrectAnswer = new Array(1,4,7,8);
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
		var __arrCorrectAnswer = new Array(1,4,7,8);
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
			trace("__nScore.........."+__nScore);
			if (__nScore > __arrCorrectAnswer.length - 1) {		
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(107).call(this.frame_107).wait(1));

	// _
	this.mcTick_8 = new lib.right_wrong();
	this.mcTick_8.name = "mcTick_8";
	this.mcTick_8.setTransform(435.65,247.35,1.0032,1.0032);

	this.mcTick_7 = new lib.right_wrong();
	this.mcTick_7.name = "mcTick_7";
	this.mcTick_7.setTransform(173.05,247.35,1.0032,1.0032);

	this.mcTick_6 = new lib.right_wrong();
	this.mcTick_6.name = "mcTick_6";
	this.mcTick_6.setTransform(-72.2,247.35,1.0032,1.0032);

	this.mcTick_5 = new lib.right_wrong();
	this.mcTick_5.name = "mcTick_5";
	this.mcTick_5.setTransform(-314.8,247.35,1.0032,1.0032);

	this.mcTick_4 = new lib.right_wrong();
	this.mcTick_4.name = "mcTick_4";
	this.mcTick_4.setTransform(435.65,-15,1.0032,1.0032);

	this.mcTick_3 = new lib.right_wrong();
	this.mcTick_3.name = "mcTick_3";
	this.mcTick_3.setTransform(173.05,-15,1.0032,1.0032);

	this.mcTick_2 = new lib.right_wrong();
	this.mcTick_2.name = "mcTick_2";
	this.mcTick_2.setTransform(-52.2,-15,1.0032,1.0032);

	this.mcTick_1 = new lib.right_wrong();
	this.mcTick_1.name = "mcTick_1";
	this.mcTick_1.setTransform(-314.8,-15,1.0032,1.0032);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mcTick_1},{t:this.mcTick_2},{t:this.mcTick_3},{t:this.mcTick_4},{t:this.mcTick_5},{t:this.mcTick_6},{t:this.mcTick_7},{t:this.mcTick_8}]},107).wait(1));

	// _
	this.mc_8 = new lib.cabbage();
	this.mc_8.name = "mc_8";
	this.mc_8.setTransform(363.5,147.4);

	this.mc_7 = new lib.peas();
	this.mc_7.name = "mc_7";
	this.mc_7.setTransform(120.5,130.45);

	this.mc_6 = new lib.grapes();
	this.mc_6.name = "mc_6";
	this.mc_6.setTransform(-126.55,134.05);

	this.mc_5 = new lib.brinjal();
	this.mc_5.name = "mc_5";
	this.mc_5.setTransform(-363,143.05);

	this.mc_4 = new lib.orange();
	this.mc_4.name = "mc_4";
	this.mc_4.setTransform(363.5,-128.6);

	this.mc_3 = new lib.potator();
	this.mc_3.name = "mc_3";
	this.mc_3.setTransform(120.5,-109.05);

	this.mc_2 = new lib.pumpkin();
	this.mc_2.name = "mc_2";
	this.mc_2.setTransform(-146.55,-111.95);

	this.mc_1 = new lib.strawberry();
	this.mc_1.name = "mc_1";
	this.mc_1.setTransform(-363,-108.35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.mc_1},{t:this.mc_2},{t:this.mc_3},{t:this.mc_4},{t:this.mc_5},{t:this.mc_6},{t:this.mc_7},{t:this.mc_8}]},107).wait(1));

	// HEADING
	this.instance = new lib.heading_("synched",0);
	this.instance.setTransform(-672.85,-272.75);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:false},0).to({x:-342.85},11,cjs.Ease.get(1)).wait(93));

	// cabbage
	this.instance_1 = new lib.cabbage("synched",0);
	this.instance_1.setTransform(363.5,147.4,0.1,0.1);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(55).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},38).wait(1));

	// peas
	this.instance_2 = new lib.peas("synched",0);
	this.instance_2.setTransform(150.45,130.45,0.1,0.1);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(53).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:110.5},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1,x:120.5},5,cjs.Ease.get(0.5)).to({_off:true},40).wait(1));

	// grapes
	this.instance_3 = new lib.grapes("synched",0);
	this.instance_3.setTransform(-136.55,134.05,0.1,0.1);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(51).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:-126.55},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},42).wait(1));

	// brinjal
	this.instance_4 = new lib.brinjal("synched",0);
	this.instance_4.setTransform(-393.15,143.2,0.1,0.1);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(49).to({_off:false},0).to({regX:-0.1,regY:0.1,scaleX:1.1,scaleY:1.1,x:-363.1,y:143.15},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},44).wait(1));

	// orange
	this.instance_5 = new lib.orange("synched",0);
	this.instance_5.setTransform(333.5,-128.6,0.1,0.1);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(47).to({_off:false},0).to({scaleX:1.1,scaleY:1.1,x:363.5},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},46).wait(1));

	// potator
	this.instance_6 = new lib.potator("synched",0);
	this.instance_6.setTransform(120.5,-109.05,0.1,0.1);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(45).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},48).wait(1));

	// pumpkin
	this.instance_7 = new lib.pumpkin("synched",0);
	this.instance_7.setTransform(-146.55,-111.95,0.1,0.1);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(42).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},51).wait(1));

	// strawberry
	this.instance_8 = new lib.strawberry("synched",0);
	this.instance_8.setTransform(-363,-108.35,0.1,0.1);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(38).to({_off:false},0).to({scaleX:1.1,scaleY:1.1},9,cjs.Ease.get(1)).to({scaleX:1,scaleY:1},5,cjs.Ease.get(0.5)).to({_off:true},55).wait(1));

	// ani
	this.instance_9 = new lib.Symbol1("synched",0);
	this.instance_9.setTransform(713,-225.25);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(11).to({_off:false},0).to({x:-24.5},15,cjs.Ease.get(1)).to({x:-12},5,cjs.Ease.get(1)).wait(76).to({startPosition:0},0).wait(1));

	// bg
	this.instance_10 = new lib.bgg();
	this.instance_10.setTransform(1.45,-0.5);
	this.instance_10.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).to({alpha:1},11).wait(97));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-819.8,-300.7,1704.8,596.2);


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
			this.mcAttachMovieClip = new lib["mcMain"]();
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
		{src:"images/Interface_atlas_1.png?1637852807089", id:"Interface_atlas_1"}
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