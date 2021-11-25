var canvas, stage, lib, exportRoot, anim_container, dom_overlay_container, fnStartAnimation, innerDivCon, qtnMark, fbScreen;
var canvasWidth = 977, canvasHeight = 588, audCnt = 0, audMaxCnt = 0, parentFlag;
var images, main;

function init()
{
	canvas = document.getElementById("canvas");
	//vidNavCon = document.getElementById("vid_nav_con");
	innerDivCon = document.getElementById("inner-con");
	anim_container = document.getElementById("animation_container");
	dom_overlay_container = document.getElementById("dom_overlay_container");
	innerShadow = document.getElementById("inner_shadow");

	anim_container.style.width = canvas.style.width = dom_overlay_container.style.width = canvasWidth+'px';
	anim_container.style.height = canvas.style.height = dom_overlay_container.style.height = canvasHeight+'px';

	document.addEventListener('contextmenu', preventMouseRightClick);
	loadCSSFonts();
}

function loadCSSFonts ()
{
    this.loadFonts({
        src: foo,
        type: "fontcss"
    });
    return false;
}

function loadFonts (config)
{
    var loader = new createjs.FontLoader(config, true);
    loader.on("complete", handleFontLoaded, this);
    loader.load();
}

function handleFontLoaded (e)
{
    loadAudios();
}

function loadAudios()
{
	if (!createjs.Sound.initializeDefaultPlugins()) {return;}
    //var audioPath = "sounds/";
    var sounds = InputData.Audios;
    audMaxCnt = sounds.length;
    createjs.Sound.alternateExtensions = ["mp3"];
    createjs.Sound.addEventListener("fileload", handleAudioLoad);
    createjs.Sound.registerSounds(sounds);
}

function handleAudioLoad(e)
{
	audCnt++;
	if(audCnt == audMaxCnt)loadAssets();
}

function loadAssets()
{
	var comp=AdobeAn.getComposition("ECDF1A6AC5E395468828BABD79B3D8C3");
	var lib=comp.getLibrary();
	var loader = new createjs.LoadQueue(false);
	loader.addEventListener("fileload", function(evt){handleFileLoad(evt,comp)});
	loader.addEventListener("complete", function(evt){handleComplete(evt,comp)});
	var lib=comp.getLibrary();
	lib.properties.manifest.push(
		{src:assetsPath+"images/arrow.png", id:"arrowBtnImg"},
		{src:assetsPath+"images/start.png", id:"startIcon"},
		{src:assetsPath+"images/restart.png", id:"restartIcon"}
	)
	loader.loadManifest(lib.properties.manifest);

	lib.properties.width = canvasWidth, lib.properties.height = canvasHeight;
}

function handleFileLoad(evt, comp)
{
	images = comp.getImages();	
	if (evt && (evt.item.type == "image")) { images[evt.item.id] = evt.result; }	
}

function handleComplete(evt,comp)
{
	$( "#preload_div" ).animate({ opacity: 0 }, 400, "linear", function()
	{ 
		$( "#preload_div" ).remove();

		lib=comp.getLibrary();
		var ss=comp.getSpriteSheet();
		var queue = evt.target;
		var ssMetadata = lib.ssMetadata;
		for(i=0; i<ssMetadata.length; i++)
		{
			ss[ssMetadata[i].name] = new createjs.SpriteSheet( {"images": [queue.getResult(ssMetadata[i].name)], "frames": ssMetadata[i].frames} )
		}

		anim_container.style.opacity = 0;
		exportRoot = new lib.Interface();
		stage = new lib.Stage(canvas);
		//stage = new createjs.StageGL("canvas",{ antialias: true });
		createjs.Touch.enable(stage);
		stage.enableMouseOver();
		stage.mouseMoveOutside = true;

		fnStartAnimation = function()
		{
			stage.addChild(exportRoot);
			createjs.Ticker.framerate = lib.properties.fps;
			createjs.Ticker.addEventListener("tick", stage);
		}

		AdobeAn.makeResponsive(true,'both',false,1,[canvas,anim_container,dom_overlay_container]);	
		AdobeAn.compositionLoaded(lib.properties.id);
		fnStartAnimation();

		main = new Activity();
		stage.addChild(main);

		$( "#animation_container" ).animate({ opacity: 1 }, 500, "linear");

		this.scaleDomElements();
	}.bind(this));
}

function scaleDomElements ()
{
	var pRatio, w, sc;
	pRatio = window.devicePixelRatio || 1;
	w = lib.properties.width;
	sc = (w/pRatio)/w;
	innerDivCon.style.transform = 'scale('+ sc +')';
	window.addEventListener('resize', function()
	{
		pRatio = window.devicePixelRatio || 1;
		w = lib.properties.width;
		sc = (w/pRatio)/w;
		innerDivCon.style.transform = 'scale('+ sc +')';
	});
}

function preventMouseRightClick(e)
{
	e.preventDefault();
	return false;	
}
