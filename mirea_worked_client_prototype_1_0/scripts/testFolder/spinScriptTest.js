var globalPoint = 0;


function rbClick(panel,button,icon){
    var localPoint = 0;
    var panelID = panel.id;
    var iconID = icon.id;
    
    var element = document.getElementById(icon.id);
    var bordStyle = window.getComputedStyle(element).border;
    document.getElementById('glovalPointView').value = globalPoint;
    //alert(String(borderStyle);
    if (bordStyle=="2px solid rgb(131, 131, 131)"){
        localPoint = 3;
        document.getElementById(panelID).value = localPoint;
        document.getElementById("Red-1").style.transition = "border .5s";
        document.getElementById("Red-1").style.border = "2px solid rgb(210, 105, 30)";
        globalPoint += 4;
        document.getElementById('glovalPointView').value = globalPoint;
    } else if (bordStyle=="2px solid rgb(210, 105, 30)"){
        localPoint = 4;
        document.getElementById(panelID).value = localPoint;
        document.getElementById("Red-1").style.transition = "border .5s";
        document.getElementById("Red-1").style.border = "2px solid rgb(192, 192, 192)";
        globalPoint += 4;
        document.getElementById('glovalPointView').value = globalPoint;
    } else if (bordStyle=="2px solid rgb(192, 192, 192)"){
        localPoint = 5;
        document.getElementById(panelID).value = localPoint;
        document.getElementById("Red-1").style.transition = "border .5s";
        document.getElementById("Red-1").style.border = "2px solid rgb(255, 215, 0)";
        globalPoint += 4;
        document.getElementById('glovalPointView').value = globalPoint;
        document.getElementById(button.id).style.opacity = .5;
                                                         }
}

function lbClick(panel,button,icon){
    var localPoint = 0;
    var panelID = panel.id;
    var iconID = icon.id;
    
    var element = document.getElementById(iconID);
    var bordStyle = window.getComputedStyle(element).border;
    document.getElementById('glovalPointView').value = globalPoint;
    if (bordStyle=="2px solid rgb(255, 215, 0)"){
        localPoint = 4;
        document.getElementById(panelID).value = localPoint;
        document.getElementById("Red-1").style.transition = "border .5s";
        document.getElementById("Red-1").style.border = "2px solid rgb(192, 192, 192)";
        globalPoint -= 4;
        document.getElementById('glovalPointView').value = globalPoint;
    } else if (bordStyle=="2px solid rgb(192, 192, 192)"){
        localPoint = 3;
        document.getElementById(panelID).value = localPoint;
        document.getElementById("Red-1").style.transition = "border .5s";
        document.getElementById("Red-1").style.border = "2px solid rgb(210, 105, 30)";
        globalPoint -= 4;
        document.getElementById('glovalPointView').value = globalPoint;
    } else if (bordStyle=="2px solid rgb(210, 105, 30)"){
        localPoint = 0;
        document.getElementById(panelID).value = "-";
        document.getElementById("Red-1").style.transition = "border .5s";
        document.getElementById("Red-1").style.border = "2px solid rgb(128, 128, 128)";
        globalPoint -= 4;
        document.getElementById('glovalPointView').value = globalPoint;
        document.getElementById(button.id).style.opacity = .5;
    }
}

function panelInit(panel){
    //var panelID = panel.id;
    document.getElementById(panel.id).value = 3;
    document.getElementById("Red-1").style.border = "2px solid gray";
}

function refresh(refreshalbe){
    document.getElementById(refreshalbe.id).style.opacity = 1;
}
