gdjs.TitleScreenCode = {};
gdjs.TitleScreenCode.localVariables = [];
gdjs.TitleScreenCode.GDNewSpriteObjects1= [];
gdjs.TitleScreenCode.GDNewSpriteObjects2= [];
gdjs.TitleScreenCode.GDNewSpriteObjects3= [];
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1= [];
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2= [];
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects3= [];
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects1= [];
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2= [];
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects3= [];
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects1= [];
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects2= [];
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects3= [];
gdjs.TitleScreenCode.GDSSObjects1= [];
gdjs.TitleScreenCode.GDSSObjects2= [];
gdjs.TitleScreenCode.GDSSObjects3= [];
gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1= [];
gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects2= [];
gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects3= [];


gdjs.TitleScreenCode.eventsList0 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame"), gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2);
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame2"), gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2);
{for(var i = 0, len = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2[i].setPosition(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene),400);
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2[i].setPosition(466 + (gdjs.evtTools.window.getWindowInnerWidth() - 1280) / 4 - gdjs.evtTools.window.getWindowInnerWidth() / 4,400);
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame"), gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2);
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame2"), gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2);
{for(var i = 0, len = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2[i].setPosition(466,400);
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2);
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2[i].SetLabelText(gdjs.evtTools.common.toString(gdjs.evtTools.window.getWindowInnerWidth()), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2[i].SetLabelText(gdjs.evtTools.common.toString((( gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2[0].getX())), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2[i].SetLabelText(gdjs.evtTools.common.toString((( gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2.length === 0 ) ? 0 :gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2[0].getX())), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame"), gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1[k] = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1 */
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame2"), gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects1);
gdjs.copyArray(runtimeScene.getObjects("GreenButtonWithStoneFrame3"), gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects1);
gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame2"), gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1);
gdjs.copyArray(runtimeScene.getObjects("SS"), gdjs.TitleScreenCode.GDSSObjects1);
{runtimeScene.getGame().getVariables().getFromIndex(7).setString("LevelSel");
}{for(var i = 0, len = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.TitleScreenCode.GDSSObjects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDSSObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1.length ;i < len;++i) {
    gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Main", 0, 0, 0);
}}

}


};gdjs.TitleScreenCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Main";
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "MainMenu", 0, 0, 0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "LevelSel";
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.createObjectsFromExternalLayout(runtimeScene, "Main", 0, 0, 0);
}}

}


};gdjs.TitleScreenCode.eventsList2 = function(runtimeScene) {

{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.sound.isMusicOnChannelPlaying(runtimeScene, 1));
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playMusicOnChannel(runtimeScene, "menuLoop.mp3", 1, false, 100, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(7)) == "Main";
if (isConditionTrue_0) {

{ //Subevents
gdjs.TitleScreenCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {

{ //Subevents
gdjs.TitleScreenCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("SS"), gdjs.TitleScreenCode.GDSSObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDSSObjects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDSSObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDSSObjects1[k] = gdjs.TitleScreenCode.GDSSObjects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDSSObjects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(1);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("RedButtonWithGoldFrame2"), gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1.length;i<l;++i) {
    if ( gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1[k] = gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1[i];
        ++k;
    }
}
gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1.length = k;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(2);
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.TitleScreenCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.TitleScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleScreenCode.GDNewSpriteObjects3.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects3.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects1.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects3.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects1.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects2.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects3.length = 0;
gdjs.TitleScreenCode.GDSSObjects1.length = 0;
gdjs.TitleScreenCode.GDSSObjects2.length = 0;
gdjs.TitleScreenCode.GDSSObjects3.length = 0;
gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1.length = 0;
gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects2.length = 0;
gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects3.length = 0;

gdjs.TitleScreenCode.eventsList2(runtimeScene);
gdjs.TitleScreenCode.GDNewSpriteObjects1.length = 0;
gdjs.TitleScreenCode.GDNewSpriteObjects2.length = 0;
gdjs.TitleScreenCode.GDNewSpriteObjects3.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects1.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects2.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrameObjects3.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects1.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects2.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame2Objects3.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects1.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects2.length = 0;
gdjs.TitleScreenCode.GDGreenButtonWithStoneFrame3Objects3.length = 0;
gdjs.TitleScreenCode.GDSSObjects1.length = 0;
gdjs.TitleScreenCode.GDSSObjects2.length = 0;
gdjs.TitleScreenCode.GDSSObjects3.length = 0;
gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects1.length = 0;
gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects2.length = 0;
gdjs.TitleScreenCode.GDRedButtonWithGoldFrame2Objects3.length = 0;


return;

}

gdjs['TitleScreenCode'] = gdjs.TitleScreenCode;
