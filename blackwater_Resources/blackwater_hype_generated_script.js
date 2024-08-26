//	HYPE.documents["blackwater"]

(function HYPE_DocumentLoader() {
	var resourcesFolderName = "blackwater_Resources";
	var documentName = "blackwater";
	var documentLoaderFilename = "blackwater_hype_generated_script.js";

	// find the URL for this script's absolute path and set as the resourceFolderName
	try {
		var scripts = document.getElementsByTagName('script');
		for(var i = 0; i < scripts.length; i++) {
			var scriptSrc = scripts[i].src;
			if(scriptSrc != null && scriptSrc.indexOf(documentLoaderFilename) != -1) {
				resourcesFolderName = scriptSrc.substr(0, scriptSrc.lastIndexOf("/"));
				break;
			}
		}
	} catch(err) {	}

	// Legacy support
	if (typeof window.HYPE_DocumentsToLoad == "undefined") {
		window.HYPE_DocumentsToLoad = new Array();
	}
 
	// load HYPE.js if it hasn't been loaded yet
	if(typeof HYPE_108 == "undefined") {
		if(typeof window.HYPE_108_DocumentsToLoad == "undefined") {
			window.HYPE_108_DocumentsToLoad = new Array();
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);

			var headElement = document.getElementsByTagName('head')[0];
			var scriptElement = document.createElement('script');
			scriptElement.type= 'text/javascript';
			scriptElement.src = resourcesFolderName + '/' + 'HYPE.js?hype_version=108';
			headElement.appendChild(scriptElement);
		} else {
			window.HYPE_108_DocumentsToLoad.push(HYPE_DocumentLoader);
		}
		return;
	}
	
	// guard against loading multiple times
	if(HYPE.documents[documentName] != null) {
		return;
	}
	
	var hypeDoc = new HYPE_108();
	
	var attributeTransformerMapping = {b:"i",c:"i",bC:"i",d:"i",aS:"i",M:"i",e:"f",N:"i",f:"d",aT:"i",O:"i",g:"c",aU:"i",P:"i",Q:"i",aV:"i",R:"c",aW:"f",aI:"i",S:"i",T:"i",l:"d",aX:"i",aJ:"i",m:"c",n:"c",aK:"i",X:"i",aL:"i",A:"c",aZ:"i",Y:"i",B:"c",C:"c",D:"c",t:"i",E:"i",G:"c",bA:"c",a:"i",bB:"i"};

var scenes = [{timelines:{"27":{framesPerSecond:30,animations:[],identifier:"27",name:"shift one",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},sceneIndex:0,perspective:"600px",oid:"1",initialValues:{"10":{o:"content-box",h:"Pasted.png",x:"visible",a:292,q:"100% 100%",b:123,j:"absolute",r:"inline",c:640,z:"8",k:"div",d:480},"13":{o:"content-box",h:"right-rock.gif",x:"visible",a:333,q:"100% 100%",b:605,j:"absolute",r:"inline",aA:{type:1,transition:4,sceneOid:"38"},z:"11",c:156,d:117,aW:"0.428759",aX:0,aP:"pointer",k:"div",bD:"none"},"12":{o:"content-box",h:"h-t.gif",p:"no-repeat",x:"visible",a:83,q:"100% 100%",b:603,j:"absolute",r:"inline",c:159,z:"10",aW:"0.391940",d:119,aX:0,k:"div"},"26":{b:605,z:"12",K:"Solid",c:140,L:"Solid",d:119,aS:6,M:1,e:"0.000000",bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{type:1,transition:3,sceneSymbol:1},F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:88,y:"preserve",J:"Solid"}},backgroundColor:"#000000",name:"home"},{onSceneLoadAction:{type:0},onSceneUnloadAction:{type:0},onSceneKeyDownAction:{type:0},initialValues:{"34":{o:"content-box",h:"Pasted-1.png",x:"visible",a:-18,q:"100% 100%",b:-125,j:"absolute",r:"inline",c:1258,z:"17",k:"div",d:944},"40":{o:"content-box",h:"Pasted-3.png",x:"visible",a:620,q:"100% 100%",b:155,j:"absolute",r:"inline",c:236,z:"20",k:"div",d:144},"16":{o:"content-box",h:"h-t.gif",p:"no-repeat",x:"visible",a:83,q:"100% 100%",b:603,j:"absolute",r:"inline",c:159,z:"18",aW:"0.391940",d:119,aX:0,k:"div"},"18":{o:"content-box",h:"right-rock.gif",x:"visible",a:327,q:"100% 100%",b:605,j:"absolute",r:"inline",c:156,z:"19",aW:"0.428759",d:117,aX:0,k:"div"},"52":{b:414,z:"21",K:"Solid",c:104,L:"Solid",d:83,aS:6,M:1,bD:"none",N:1,aT:6,O:1,g:"#F0F0F0",aU:6,P:1,aV:6,j:"absolute",k:"div",A:"#A0A0A0",B:"#A0A0A0",Z:"break-word",r:"inline",C:"#A0A0A0",D:"#A0A0A0",t:13,aA:{type:1,transition:1,sceneOid:"51"},F:"center",G:"#000000",aP:"pointer",w:"Button",x:"visible",I:"Solid",a:178,y:"preserve",J:"Solid"}},sceneIndex:1,timelines:{"23_pressed":{framesPerSecond:30,animations:[],identifier:"23_pressed",name:"23_pressed",duration:0},"28":{framesPerSecond:30,animations:[],identifier:"28",name:"shift 2",duration:0},kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"19",onSceneAnimationCompleteAction:{type:0},backgroundColor:"#000000",name:"room one"},{onSceneLoadAction:{type:0},onSceneUnloadAction:{type:0},onSceneKeyDownAction:{type:0},initialValues:{"37":{o:"content-box",h:"right-rock.gif",x:"visible",a:327,q:"100% 100%",b:605,j:"absolute",r:"inline",c:156,z:"20",aW:"0.428759",d:117,aX:0,k:"div"},"39":{o:"content-box",h:"Pasted-2.png",x:"visible",a:50,q:"100% 100%",b:-28,j:"absolute",r:"inline",c:1140,z:"18",k:"div",d:855},"36":{o:"content-box",h:"h-t.gif",p:"no-repeat",x:"visible",a:83,q:"100% 100%",b:603,j:"absolute",r:"inline",c:159,z:"19",aW:"0.391940",d:119,aX:0,k:"div"}},sceneIndex:2,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:0}},perspective:"600px",oid:"38",onSceneAnimationCompleteAction:{type:0},backgroundColor:"#000000",name:"two"},{onSceneLoadAction:{type:0},onSceneUnloadAction:{type:0},onSceneKeyDownAction:{type:0},initialValues:{"49":{o:"content-box",h:"right-rock.gif",x:"visible",a:327,q:"100% 100%",b:605,j:"absolute",r:"inline",c:156,z:"20",aW:"0.000000",d:117,aX:0,k:"div",e:"0.883222"},"50":{o:"content-box",h:"Pasted-3.png",x:"visible",a:620,q:"100% 100%",b:155,j:"absolute",r:"inline",c:236,z:"21",k:"div",d:144,bD:"none"},"48":{o:"content-box",h:"h-t.gif",p:"no-repeat",x:"visible",a:83,q:"100% 100%",b:603,j:"absolute",r:"inline",c:159,z:"19",aW:"0.000000",d:119,aX:0,k:"div",e:"1.000000"},"56":{o:"content-box",h:"Pasted-4.png",x:"visible",a:187,q:"100% 100%",b:94,j:"absolute",r:"inline",c:934,z:"18",k:"div",d:379,e:"2.000000"}},sceneIndex:3,timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:8.0333338,i:"c",e:1223,r:1,s:236,o:"50"},{f:"2",t:0,d:8.0333338,i:"d",e:745,r:1,s:144,o:"50"},{f:"2",t:0,d:8.0333338,i:"b",e:0,r:1,s:155,o:"50"},{f:"2",t:0,d:8.0333338,i:"a",e:-1,r:1,s:620,o:"50"},{f:"1",t:0,d:8.9666662,i:"a",e:-2717,r:1,s:187,o:"56"},{f:"1",t:0,d:8.9666662,i:"b",e:-235,r:1,s:94,o:"56"},{f:"1",t:0,d:9.0333338,i:"d",e:2268,r:1,s:379,o:"56"},{f:"1",t:0,d:9.0333338,i:"c",e:5598,r:1,s:934,o:"56"},{f:"1",t:0,d:1.5333333,i:"e",e:"1.000000",r:1,s:"2.000000",o:"56"},{f:"1",t:0,d:1.5,i:"e",e:"0.000000",r:1,s:"1.000000",o:"48"},{f:"1",t:0,d:1.3,i:"e",e:"0.000000",r:1,s:"0.883222",o:"49"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:9.0333338}},perspective:"600px",oid:"51",onSceneAnimationCompleteAction:{type:0},backgroundColor:"#000000",name:"zoom merz"},{timelines:{kTimelineDefaultIdentifier:{framesPerSecond:30,animations:[{f:"2",t:0,d:6,i:"c",e:1284,r:1,s:2015,o:"55"},{f:"2",t:0,d:6,i:"d",e:963,r:1,s:1511,o:"55"},{f:"2",t:0,d:6,i:"a",e:-10,r:1,s:-382,o:"55"},{f:"2",t:0,d:6,i:"b",e:-30,r:1,s:-366,o:"55"}],identifier:"kTimelineDefaultIdentifier",name:"Main Timeline",duration:6}},sceneIndex:4,perspective:"600px",oid:"54",initialValues:{"55":{o:"content-box",h:"Pasted-2.png",x:"visible",a:-382,q:"100% 100%",b:-366,j:"absolute",r:"inline",c:2015,z:"1",k:"div",d:1511}},backgroundColor:"#FFFFFF",name:"Untitled Scene"}];


	
	var javascripts = [];


	
	var Custom = {};
	var javascriptMapping = {};
	for(var i = 0; i < javascripts.length; i++) {
		try {
			javascriptMapping[javascripts[i].identifier] = javascripts[i].name;
			eval("Custom." + javascripts[i].name + " = " + javascripts[i].source);
		} catch (e) {
			hypeDoc.log(e);
			Custom[javascripts[i].name] = (function () {});
		}
	}
	
	hypeDoc.setAttributeTransformerMapping(attributeTransformerMapping);
	hypeDoc.setScenes(scenes);
	hypeDoc.setJavascriptMapping(javascriptMapping);
	hypeDoc.Custom = Custom;
	hypeDoc.setCurrentSceneIndex(0);
	hypeDoc.setMainContentContainerID("blackwater_hype_container");
	hypeDoc.setResourcesFolderName(resourcesFolderName);
	hypeDoc.setShowHypeBuiltWatermark(0);
	hypeDoc.setShowLoadingPage(false);
	hypeDoc.setDrawSceneBackgrounds(true);
	hypeDoc.setDocumentName(documentName);

	HYPE.documents[documentName] = hypeDoc.API;

	hypeDoc.documentLoad(this.body);
}());

