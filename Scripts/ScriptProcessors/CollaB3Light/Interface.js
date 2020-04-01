Content.makeFrontInterface(1024, 768);



//! Plugin vs Standalone

const var standaloneSettingPnl = Content.getComponent("standaloneSettingPnl");
const var instrumentSettingPnl = Content.getComponent("instrumentSettingPnl");

standaloneSettingPnl.showControl( ! Engine.isPlugin());
instrumentSettingPnl.showControl(Engine.isPlugin());






//! Leslie
const var Leslie = Synth.getEffect("Leslie");


inline function onleslieSpeedControl(component, value)
{
    switch (value){
        
        case 0:
            Leslie.setAttribute(Leslie.Speed, 0);
            Leslie.setAttribute(Leslie.Stop, 1);
            break;
            
        case 1:
            Leslie.setAttribute(Leslie.Speed, 0);
            Leslie.setAttribute(Leslie.Stop, 0);
            break;
            
        case 2:
            Leslie.setAttribute(Leslie.Speed, 1);
            Leslie.setAttribute(Leslie.Stop, 0);
            break;
    }
};
Content.getComponent("leslieSpeed").setControlCallback(onleslieSpeedControl);



//! =================================================================== Font Load


Engine.loadFontAs("{PROJECT_FOLDER}Fonts/Abel-Regular.ttf", "Abel");


//! =========================================================== open close panels


const var morePanel = Content.getComponent("morePanel");
const var presetsPanel = Content.getComponent("presetsPanel");
const var settingsPanel = Content.getComponent("settingsPanel");

const var moreButton = Content.getComponent("moreButton");
const var presetsButton = Content.getComponent("presetsButton");
const var settingsButton = Content.getComponent("settingsButton");


inline function onsettingsButtonControl(component, value)
{
    morePanel.showControl(false);
    presetsPanel.showControl(false);
    settingsPanel.showControl(value);
    
    moreButton.setValue(false);
    presetsButton.setValue(false);
    settingsButton.setValue(value);
}



inline function onmoreButtonControl(component, value)
{
    morePanel.showControl(value);
    presetsPanel.showControl(false);
    settingsPanel.showControl(false);
    
    moreButton.setValue(value);
    presetsButton.setValue(false);
    settingsButton.setValue(false);
}


inline function onpresetsButtonControl(component, value)
{
    presetsPanel.showControl(value);
    morePanel.showControl(false);
    settingsPanel.showControl(false);
    
    moreButton.setValue(false);
    presetsButton.setValue(value);
    settingsButton.setValue(false);
};

moreButton.setControlCallback(onmoreButtonControl);
presetsButton.setControlCallback(onpresetsButtonControl);
settingsButton.setControlCallback(onsettingsButtonControl);




//! =========================================================== Drawbars inverter


const var SimpleGainMain1 = Synth.getEffect("SimpleGainMain1");
const var SimpleGainMain2 = Synth.getEffect("SimpleGainMain2");
const var SimpleGainMain3 = Synth.getEffect("SimpleGainMain3");
const var SimpleGainMain4 = Synth.getEffect("SimpleGainMain4");
const var SimpleGainMain5 = Synth.getEffect("SimpleGainMain5");
const var SimpleGainMain6 = Synth.getEffect("SimpleGainMain6");
const var SimpleGainMain7 = Synth.getEffect("SimpleGainMain7");
const var SimpleGainMain8 = Synth.getEffect("SimpleGainMain8");
const var SimpleGainMain9 = Synth.getEffect("SimpleGainMain9");


inline function onKnobDrawbar1Control(component, value)
{
	SimpleGainMain1.setAttribute(SimpleGainMain1.Gain, 100 * (1 - value) - 100);
};


inline function onKnobDrawbar2Control(component, value)
{
	SimpleGainMain2.setAttribute(SimpleGainMain2.Gain, 100 * (1 - value) - 100);
};


inline function onKnobDrawbar3Control(component, value)
{
	SimpleGainMain3.setAttribute(SimpleGainMain3.Gain, 100 * (1 - value) - 100);
};


inline function onKnobDrawbar4Control(component, value)
{
	SimpleGainMain4.setAttribute(SimpleGainMain4.Gain, 100 * (1 - value) - 100);
};


inline function onKnobDrawbar5Control(component, value)
{
	SimpleGainMain5.setAttribute(SimpleGainMain5.Gain, 100 * (1 - value) - 100);
};


inline function onKnobDrawbar6Control(component, value)
{
	SimpleGainMain6.setAttribute(SimpleGainMain6.Gain, 100 * (1 - value) - 100);
};



inline function onKnobDrawbar7Control(component, value)
{
	SimpleGainMain7.setAttribute(SimpleGainMain7.Gain, 100 * (1 - value) - 100);
};


inline function onKnobDrawbar8Control(component, value)
{
	SimpleGainMain8.setAttribute(SimpleGainMain8.Gain, 100 * (1 - value) - 100);
};


inline function onKnobDrawbar9Control(component, value)
{
	SimpleGainMain9.setAttribute(SimpleGainMain9.Gain, 100 * (1 - value) - 100);
};


Content.getComponent("KnobDrawbar1").setControlCallback(onKnobDrawbar1Control);
Content.getComponent("KnobDrawbar2").setControlCallback(onKnobDrawbar2Control);
Content.getComponent("KnobDrawbar3").setControlCallback(onKnobDrawbar3Control);
Content.getComponent("KnobDrawbar4").setControlCallback(onKnobDrawbar4Control);
Content.getComponent("KnobDrawbar5").setControlCallback(onKnobDrawbar5Control);
Content.getComponent("KnobDrawbar6").setControlCallback(onKnobDrawbar6Control);
Content.getComponent("KnobDrawbar7").setControlCallback(onKnobDrawbar7Control);
Content.getComponent("KnobDrawbar8").setControlCallback(onKnobDrawbar8Control);
Content.getComponent("KnobDrawbar9").setControlCallback(onKnobDrawbar9Control);


//! ================================================================= Perc Switch


const var percHarmKnob = Content.getComponent("percHarmKnob");
const var perc2nd = Synth.getChildSynth("perc2nd");
const var perc3rd = Synth.getChildSynth("perc3rd");


inline function onpercHarmKnobControl(component, value)
{
    switch (value){
        
        case 0:
            perc2nd.setAttribute(perc2nd.Gain, 0);
            perc3rd.setAttribute(perc3rd.Gain, 0.07);
            break;
            
        case 1:
            perc2nd.setAttribute(perc2nd.Gain, 0);
            perc3rd.setAttribute(perc3rd.Gain, 0);
            break;
            
        case 2:
            perc2nd.setAttribute(perc2nd.Gain, 0.07);
            perc3rd.setAttribute(perc3rd.Gain, 0);
            break;
    }
};
percHarmKnob.setControlCallback(onpercHarmKnobControl);





function onNoteOn()
{
	
}
 function onNoteOff()
{
	
}
 function onController()
{
	
}
 function onTimer()
{
	
}
 function onControl(number, value)
{
	
}
 