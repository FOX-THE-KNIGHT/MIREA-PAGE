var GlobalCurrentPoints = 0;
var GlobalPlanPoints = 0;
//var yellowCoefficient = 0.5;
//var greenCoefficient = 0.25;
// Это для модального режима
/*
function markIconChangeRed(icon) {
    var iconID = icon.id;
    
    var mark = Number(prompt("Введите оценку -3,4,5-: "));
    
    switch(mark){
        case 3: document.getElementById(iconID).style.border = "2px solid chocolate";GlobalCurrentPoints +=4; break;
               
        case 4: document.getElementById(iconID).style.border="2px solid silver";GlobalCurrentPoints +=8; break;
            
        case 5: document.getElementById(iconID).style.border="2px solid gold";GlobalCurrentPoints +=12; break;
            
        default: document.getElementById(iconID).style.border=" 2px solid #838383"; break;
               }
    
     document.getElementById('curField').value = GlobalCurrentPoints;
    technicOculus(document.getElementById('OCULUS'));
    technicHTC(document.getElementById('HTC'));
    technicEpson(document.getElementById('EPSON'));
    technicHololeans(document.getElementById('HOLOLEANS'));
    technicRunroad(document.getElementById('RUNROAD'));
    
     levelUpCheckTech();
    levelUpCheckEvent();
    
}

function resetIconRed(icon){
    var iconID = icon.id;
    var styleState = icon.style.border;
     if(styleState=="2px solid chocolate"){
         GlobalCurrentPoints -=4;
         document.getElementById('curField').value = GlobalCurrentPoints;
         document.getElementById(iconID).style.border=" 2px solid #838383";
     } else if(styleState == "2px solid silver"){
         GlobalCurrentPoints -=8;
         document.getElementById('curField').value = GlobalCurrentPoints;
         document.getElementById(iconID).style.border="2px solid #838383";
     }else if(styleState == "2px solid gold") {
         GlobalCurrentPoints -=12;
         document.getElementById('curField').value = GlobalCurrentPoints;
         document.getElementById(iconID).style.border=" 2px solid #838383";
     }else{
        document.getElementById(iconID).style.border=" 2px solid #838383"; 
     }
    
     levelUpCheckTech();
    levelUpCheckEvent();
    
}

function finalRed(icon){
    resetIconRed(icon);
    markIconChangeRed(icon);
    
}


function markIconChangeYellow(icon) {
    var iconID = icon.id;
    
    var mark = Number(prompt("Введите оценку -3,4,5-: "));
    
    switch(mark){
        case 3: document.getElementById(iconID).style.border = "2px solid chocolate";GlobalCurrentPoints +=4*yellowCoefficient; break;
               
        case 4: document.getElementById(iconID).style.border="2px solid silver";GlobalCurrentPoints +=8*yellowCoefficient; break;
            
        case 5: document.getElementById(iconID).style.border="2px solid gold";GlobalCurrentPoints +=12*yellowCoefficient; break;
            
        default: document.getElementById(iconID).style.border=" 2px solid #838383"; break;
               }
    
     document.getElementById('curField').value = GlobalCurrentPoints;
    technicOculus(document.getElementById('OCULUS'));
    technicHTC(document.getElementById('HTC'));
    technicEpson(document.getElementById('EPSON'));
    technicHololeans(document.getElementById('HOLOLEANS'));
    technicRunroad(document.getElementById('RUNROAD'));
    
     levelUpCheckTech();
    levelUpCheckEvent();
    
}

function resetIconYellow(icon){
    var iconID = icon.id;
    var styleState = icon.style.border;
     if(styleState=="2px solid chocolate"){
         GlobalCurrentPoints -=4*yellowCoefficient;
         document.getElementById('curField').value = GlobalCurrentPoints;
         document.getElementById(iconID).style.border=" 2px solid #838383";
     } else if(styleState == "2px solid silver"){
         GlobalCurrentPoints -=8*yellowCoefficient;
         document.getElementById('curField').value = GlobalCurrentPoints;
         document.getElementById(iconID).style.border="2px solid #838383";
     }else if(styleState == "2px solid gold") {
         GlobalCurrentPoints -=12*yellowCoefficient;
         document.getElementById('curField').value = GlobalCurrentPoints;
         document.getElementById(iconID).style.border=" 2px solid #838383";
     }else{
        document.getElementById(iconID).style.border=" 2px solid #838383"; 
     }
    
    levelUpCheckTech();
    levelUpCheckEvent();
    
}

function finalYellow(icon){
    resetIconYellow(icon);
    markIconChangeYellow(icon);
    
}


function markIconChangeGreen(icon) {
    var iconID = icon.id;
    
    var mark = Number(prompt("Введите оценку -3,4,5-: "));
    
    switch(mark){
        case 3: document.getElementById(iconID).style.border = "2px solid chocolate";GlobalCurrentPoints +=4*greenCoefficient; break;
               
        case 4: document.getElementById(iconID).style.border="2px solid silver";GlobalCurrentPoints +=8*greenCoefficient; break;
            
        case 5: document.getElementById(iconID).style.border="2px solid gold";GlobalCurrentPoints +=12*greenCoefficient; break;
            
        default: document.getElementById(iconID).style.border=" 2px solid #838383"; break;
               }
    
     document.getElementById('curField').value = GlobalCurrentPoints;
    technicOculus(document.getElementById('OCULUS'));
    technicHTC(document.getElementById('HTC'));
    technicEpson(document.getElementById('EPSON'));
    technicHololeans(document.getElementById('HOLOLEANS'));
    technicRunroad(document.getElementById('RUNROAD'));
    
    
    levelUpCheckTech();
    levelUpCheckEvent();
    
}

function resetIconGreen(icon){
    var iconID = icon.id;
    var styleState = icon.style.border;
     if(styleState=="2px solid chocolate"){
         GlobalCurrentPoints -=4*greenCoefficient;
         document.getElementById('curField').value = GlobalCurrentPoints;
         document.getElementById(iconID).style.border=" 2px solid #838383";
     } else if(styleState == "2px solid silver"){
         GlobalCurrentPoints -=8*greenCoefficient;
         document.getElementById('curField').value = GlobalCurrentPoints;
         document.getElementById(iconID).style.border="2px solid #838383";
     }else if(styleState == "2px solid gold") {
         GlobalCurrentPoints -=12*greenCoefficient;
         document.getElementById('curField').value = GlobalCurrentPoints;
         document.getElementById(iconID).style.border=" 2px solid #838383";
     }else{
        document.getElementById(iconID).style.border=" 2px solid #838383"; 
     }
    
     levelUpCheckTech();
    levelUpCheckEvent();
    
    
}

function finalGreen(icon){
    resetIconGreen(icon);
    markIconChangeGreen(icon);
    
}

*/

//Открытие доступа к технологиям

function technicOculus(imagOculus){
    if (GlobalCurrentPoints >= 16){
        document.getElementById('OCULUS').style.border = "4px solid green";
        document.getElementById('OCULUS').style.opacity = 1;
        document.getElementById('OCULUS').style.transition = "opacity .5s";
    }else{
        document.getElementById('OCULUS').style.border = "4px solid red";
        document.getElementById('OCULUS').style.opacity = 0.3;
        document.getElementById('OCULUS').style.transition = "opacity .5s";
    }
}

function technicHTC(imagHTC){
    if (GlobalCurrentPoints >= 32){
        document.getElementById('HTC').style.border = "4px solid green";
        document.getElementById('HTC').style.opacity = 1;
        document.getElementById('HTC').style.transition = "opacity .5s";
    }else{
        document.getElementById('HTC').style.border = "4px solid red";
        document.getElementById('HTC').style.opacity = 0.3;
        document.getElementById('HTC').style.transition = "opacity .5s";

    }
}

function technicEpson(imagEpson){
    if (GlobalCurrentPoints >= 46){
        document.getElementById('EPSON').style.border = "4px solid green";
        document.getElementById('EPSON').style.opacity = 1;
        document.getElementById('EPSON').style.transition = "opacity .5s";

    }else{
        document.getElementById('EPSON').style.border = "4px solid red";
        document.getElementById('EPSON').style.opacity = 0.3;
        document.getElementById('EPSON').style.transition = "opacity .5s";
    }
}

function technicHololeans(imagHololeans){
    if (GlobalCurrentPoints >= 58){
        document.getElementById('HOLOLEANS').style.border = "4px solid green";
        document.getElementById('HOLOLEANS').style.opacity = 1;
        document.getElementById('HOLOLEANS').style.transition = "opacity .5s";
    }else{
        document.getElementById('HOLOLEANS').style.border = "4px solid red";
        document.getElementById('HOLOLEANS').style.opacity = 0.3;
        document.getElementById('HOLOLEANS').style.transition = "opacity .5s";
    }
}

function technicRunroad(imagRunroad){
    if (GlobalCurrentPoints >= 66){
        document.getElementById('RUNROAD').style.border = "4px solid green";
        document.getElementById('RUNROAD').style.opacity = 1;
        document.getElementById('RUNROAD').style.transition = "opacity .5s";
    }else{
        document.getElementById('RUNROAD').style.border = "4px solid red";
        document.getElementById('RUNROAD').style.opacity = 0.3;
        document.getElementById('RUNROAD').style.transition = "opacity .5s";
    }
}

//Переход на следующий уровень

function levelUpCheckTech(){
    var nextTechnic = 16;
    
     document.getElementById('techField').value = nextTechnic;
    
    if (GlobalCurrentPoints >= nextTechnic && GlobalCurrentPoints >= 136.5){
        
        document.getElementById('techField').value = 'MAX';
    } else if (GlobalCurrentPoints >= nextTechnic && GlobalCurrentPoints >= 78){
        nextTechnic = 92;
        document.getElementById('techField').value = nextTechnic;
    } else if (GlobalCurrentPoints >= nextTechnic && GlobalCurrentPoints >= 66){
        nextTechnic = 78;
        document.getElementById('techField').value = nextTechnic;
    } else if (GlobalCurrentPoints >= nextTechnic && GlobalCurrentPoints >= 58){
        nextTechnic = 66;
        document.getElementById('techField').value = nextTechnic;
    } else if (GlobalCurrentPoints >= nextTechnic && GlobalCurrentPoints >= 46){
        nextTechnic = 58;
        document.getElementById('techField').value = nextTechnic;
    } else if (GlobalCurrentPoints >= nextTechnic && GlobalCurrentPoints >= 32){
        nextTechnic = 46;
        document.getElementById('techField').value = nextTechnic;
    } else if(GlobalCurrentPoints >= nextTechnic && GlobalCurrentPoints >= 16){
        nextTechnic = 32;
        document.getElementById('techField').value = nextTechnic;
    } else{
        document.getElementById('techField').value = 16;
    }
    
    
   
    
}

function levelUpCheckEvent(){
    var nextEvent = 16;
    
   document.getElementById('eventField').value = nextEvent;
    
    if (GlobalCurrentPoints >= nextEvent && GlobalCurrentPoints >= 136.5){
        
        document.getElementById('eventField').value = 'MAX';
    } else if (GlobalCurrentPoints >= nextEvent && GlobalCurrentPoints >= 78){
        nextEvent = 92;
        document.getElementById('eventField').value = nextEvent;
    } else if (GlobalCurrentPoints >= nextEvent && GlobalCurrentPoints >= 66){
        nextEvent = 78;
        document.getElementById('eventField').value = nextEvent;
    } else if (GlobalCurrentPoints >= nextEvent && GlobalCurrentPoints >= 58){
        nextEvent = 66;
        document.getElementById('eventField').value = nextEvent;
    } else if (GlobalCurrentPoints >= nextEvent && GlobalCurrentPoints >= 46){
        nextEvent = 58;
        document.getElementById('eventField').value = nextEvent;
    } else if (GlobalCurrentPoints >= nextEvent && GlobalCurrentPoints >= 32){
        nextEvent = 46;
        document.getElementById('eventField').value = nextEvent;
    } else if(GlobalCurrentPoints >= nextEvent && GlobalCurrentPoints >= 16){
        nextEvent = 32;
        document.getElementById('eventField').value = nextEvent;
    } else{
        document.getElementById('eventField').value = 16;
    }
    
}

//.................SPINNERS.......................

function rbClick(panel,button,icon,zone){
    var localPoint = 0;
    var pointCoefficient = 0;
    var panelID = panel.id;
    var iconID = icon.id;
    
    if(zone=="red"||zone=="Red"){
        pointCoefficient = 1;
    }  else if (zone=="yellow"||zone=="Yellow"){
        pointCoefficient = 0.5;
    } else if (zone=="green"||zone=="Green"){
        pointCoefficient = 0.25
    }
    
    
    var element = document.getElementById(icon.id);
    var bordStyle = window.getComputedStyle(element).border;
    document.getElementById('curField').value = GlobalCurrentPoints;
    //alert(String(borderStyle);
    if (bordStyle=="2px solid rgb(131, 131, 131)"){
        localPoint = 3;
        document.getElementById(panelID).value = localPoint;
        document.getElementById(iconID).style.transition = "border .5s";
        document.getElementById(iconID).style.border = "2px solid rgb(210, 105, 30)";
        
        
        GlobalCurrentPoints += 3*pointCoefficient-pointCoefficient;
        GlobalPlanPoints += 3*pointCoefficient-pointCoefficient;
        
        
        document.getElementById('curField').value = GlobalCurrentPoints;
        document.getElementById('planField').value = GlobalPlanPoints;
    } else if (bordStyle=="2px solid rgb(210, 105, 30)"){
        localPoint = 4;
        document.getElementById(panelID).value = localPoint;
        document.getElementById(iconID).style.transition = "border .5s";
        document.getElementById(iconID).style.border = "2px solid rgb(192, 192, 192)";
        
        GlobalCurrentPoints -= 3*pointCoefficient-pointCoefficient;
        GlobalPlanPoints -= 3*pointCoefficient-pointCoefficient;
        GlobalCurrentPoints += 4*pointCoefficient;
        GlobalPlanPoints += 4*pointCoefficient;
        
        
        document.getElementById('curField').value = GlobalCurrentPoints;
        document.getElementById('planField').value = GlobalPlanPoints;
    } else if (bordStyle=="2px solid rgb(192, 192, 192)"){
        localPoint = 5;
        document.getElementById(panelID).value = localPoint;
        document.getElementById(iconID).style.transition = "border .5s";
        document.getElementById(iconID).style.border = "2px solid rgb(255, 215, 0)";
        
        GlobalCurrentPoints -= 4*pointCoefficient;
        GlobalPlanPoints -= 4*pointCoefficient;
        GlobalCurrentPoints += 5*pointCoefficient+pointCoefficient;
        GlobalPlanPoints += 5*pointCoefficient+pointCoefficient;
        
        
        document.getElementById('curField').value = GlobalCurrentPoints;
        document.getElementById('planField').value = GlobalPlanPoints;
        document.getElementById(button.id).style.opacity = .5;
                                                         }
    
    technicOculus(document.getElementById('OCULUS'));
    technicHTC(document.getElementById('HTC'));
    technicEpson(document.getElementById('EPSON'));
    technicHololeans(document.getElementById('HOLOLEANS'));
    technicRunroad(document.getElementById('RUNROAD'));
    
    
    levelUpCheckTech();
    levelUpCheckEvent();
}

function lbClick(panel,button,icon,zone){
    var localPoint = 0;
    var pointCoefficient = 0;
    var panelID = panel.id;
    var iconID = icon.id;
    
    if(zone=="red"||zone=="Red"){
        pointCoefficient = 1;
    }  else if (zone=="yellow"||zone=="Yellow"){
        pointCoefficient = 0.5;
    } else if (zone=="green"||zone=="Green"){
        pointCoefficient = 0.25
    }
    
    
    var element = document.getElementById(iconID);
    var bordStyle = window.getComputedStyle(element).border;
    document.getElementById('curField').value = GlobalCurrentPoints;
    if (bordStyle=="2px solid rgb(255, 215, 0)"){
        localPoint = 4;
        document.getElementById(panelID).value = localPoint;
        document.getElementById(iconID).style.transition = "border .5s";
        document.getElementById(iconID).style.border = "2px solid rgb(192, 192, 192)";
        
        GlobalCurrentPoints -= (5*pointCoefficient+pointCoefficient);
        GlobalPlanPoints -= (5*pointCoefficient+pointCoefficient);
        GlobalCurrentPoints += 4*pointCoefficient;
        GlobalPlanPoints += 4*pointCoefficient;
        
        
        document.getElementById('curField').value = GlobalCurrentPoints;
        document.getElementById('planField').value = GlobalPlanPoints;
    } else if (bordStyle=="2px solid rgb(192, 192, 192)"){
        localPoint = 3;
        document.getElementById(panelID).value = localPoint;
        document.getElementById(iconID).style.transition = "border .5s";
        document.getElementById(iconID).style.border = "2px solid rgb(210, 105, 30)";
        
        
        GlobalCurrentPoints -= 4*pointCoefficient;
        GlobalPlanPoints -= 4*pointCoefficient;
        GlobalCurrentPoints += 3*pointCoefficient-pointCoefficient;
        GlobalPlanPoints += 3*pointCoefficient-pointCoefficient;
        
        document.getElementById('curField').value = GlobalCurrentPoints;
        document.getElementById('planField').value = GlobalPlanPoints;
    } else if (bordStyle=="2px solid rgb(210, 105, 30)"){
        document.getElementById(panelID).value = "-";
        document.getElementById(iconID).style.transition = "border .5s";
        document.getElementById(iconID).style.border = "2px solid rgb(131, 131, 131)";
        
        
        GlobalCurrentPoints -= 3*pointCoefficient-pointCoefficient;
        GlobalPlanPoints -= 3*pointCoefficient-pointCoefficient;
        
        document.getElementById('curField').value = GlobalCurrentPoints;
        document.getElementById('planField').value = GlobalPlanPoints;
        document.getElementById(button.id).style.opacity = .5;
    }
    
    technicOculus(document.getElementById('OCULUS'));
    technicHTC(document.getElementById('HTC'));
    technicEpson(document.getElementById('EPSON'));
    technicHololeans(document.getElementById('HOLOLEANS'));
    technicRunroad(document.getElementById('RUNROAD'));
    
    
    levelUpCheckTech();
    levelUpCheckEvent();
}

function refresh(refreshalbe){
    document.getElementById(refreshalbe.id).style.opacity = 1;
}  

function initLeftButtons(myButton){
    var leftButton = document.getElementById(myButton.id);
    var buttonOpacity = window.getComputedStyle(leftButton).opacity;
    buttonOpacity = .5;
}


function profileListCreate(tList){
    
    var thisList = document.getElementById(tList.id);
    
    //alert(thisList);
    
    var myChange = thisList.options.selectedIndex;
    var cht = thisList.options[thisList.selectedIndex].id;
    
   // alert(myChange);
   // alert(cht);
    
    //thisList.options[thisList.selectedIndex].id;
    //checkList.id;
    
   // alert(nID);
    var profList = document.getElementById("prList");
    var proArray090301 = ["Вычислительные машины, комплексы, системы и сети", 
                    "Информационно-аналитические и управляющие системы",
                    "Математическое и программное обеспечение вычислительной техники и автоматизированных систем",
                    "Промышленная информатика"];
    
    var proArray090303 = ["Информатизация организаций"];
    var proArray090304 = ["Корпоративные информационные системы",
                          "Системная и программная инженерия",
                          "Системы поддержки принятия решений",
                          "Разработка программных продуктов и проектирование информационных систем"];
    var proArray150304 = ["Автоматизация технологических процессов и производств в промышленности"];
    
    
    
    if(myChange==1){
       profList.options.length = 0;
        
        var len = proArray090301.length;
        //profList.options.length = len;
        for(var i=0;i<len;i++){
           profList[i] = new Option(proArray090301[i],i);
            var optID = String(i)+"090301";
           profList[i].setAttribute("id",optID); 
            profList[i].setAttribute("title","ID: "+optID);
            profList[i].setAttribute("onclick",iconMarkMessage(optID));
            
         // var option = document.createElement("option");
           // option.setAttribute("value",proArray090301[i]);
            //option.setAttribute("id",i);
            //option.text = proArray090301[i];
            //document.getElementById("prList").appendChild(option);
        }
        
    } else if(myChange==2){
        profList.options.length = 0;
        
        var len = proArray090303.length;
        
        for(var i=0;i<len;i++){
           profList[i] = new Option(proArray090303[i],i);
          var optID = String(i)+"090303";
           profList[i].setAttribute("id",optID); 
            profList[i].setAttribute("title","ID: "+optID);
            profList[i].setAttribute("onclick",iconMarkMessage(optID));
        }
    }  else if(myChange==3){
        profList.options.length = 0;
        
        var len = proArray090304.length;
        
        for(var i=0;i<len;i++){
           profList[i] = new Option(proArray090304[i],i);
           var optID = String(i)+"090304";
           profList[i].setAttribute("id",optID); 
            profList[i].setAttribute("title","ID: "+optID);
            profList[i].setAttribute("onclick",iconMarkMessage(optID));
        }
    } else if(myChange==4){
        profList.options.length = 0;
        
        var len = proArray150304.length;
        
        for(var i=0;i<len;i++){
           profList[i] = new Option(proArray150304[i],i);
          var optID = String(i)+"150304";
           profList[i].setAttribute("id",optID); 
            profList[i].setAttribute("title","ID: "+optID);
            profList[i].setAttribute("onclick",iconMarkMessage(optID));
        }
    }
    
}

//....................Профиль ВМКС и С.....................

var redDisc090301_1 = ["Процедурное программирование","Информатика",
                       "ООП","ООП(Курсовая работа)", "Разработка программных приложений",
                       "Математическая логика и теория алгоритмов","Архитектура вычислительных машин",
                       "Системная и программная инженерия","Информационные системы и базы данных",
                       "Схемотехника ЭВМ","Сети ЭВМ и телекоммуникации","Микропроцессорные системы",
                       "Микропроцессорные системы","Аппаратно-программное обеспечение ЭВМ"];

var yellowDisc090301_1 = ["Математический анализ","Физика","Физика","Дискретная математика","Математический анализ",
                          "Электротехника","Теория вероятностей, мат. статика и случ. процессы","Теория автоматов",
                          "Вычислительная математика","Структура операционных устройств","Моделирование",
                          "Системное программное обеспечение","Сети ЭВМ и телекоммуникации",
                          "Аппаратно-программные средства компьютерных сетей"];

var greenDisc090301_1 = ["История","Алгебра и геометрия","Философия","Иностранный язык","Теория приятия решений",
                         "Интерфейсы и переферийные устройства","Защита информации"];

//........................................................
//....................Информационно-аналитические и управляющие системы.....................

var redDisc090301_2 = ["Процедурное программирование","Информатика",
                       "ООП","ООП(Курсовая работа)", "Разработка программных приложений",
                       "Математическая логика и теория алгоритмов","Архитектура вычислительных машин и систем",
                       "Системная и программная инженерия","Исследование операций","Информационные системы и базы данных",
                       "Методы интеллектуального анализа данных","OLAP и другие технологии организации, обработки и хранения данных",
                       "Технология создания программного продукта","Математические основы информационной безопасности"];

var yellowDisc090301_2 = ["Математический анализ","Физика","Физика","Дискретная математика","Математический анализ",
                          "Электротехника","Теория вероятностей, мат. статика и случ. процессы","Модели динамики информационных систем",
                          "Вычислительная математика","Уравнения в частных производных","Теория оптимального управления",
                          "Математические методы в информационных технологиях","Методы оптимизации","Математическое моделирование"];

var greenDisc090301_2 = ["История","Алгебра и геометрия","Философия","Иностранный язык","Теория приятия решений",
                         "Имитационное моделирование динамических систем","Математические модели в экономике"];

//........................................................

//...................Математическое и программное обеспечение вычислительной техники и автоматизированных систем

var redDisc090301_3 = ["Процедурное программирование","Информатика",
                       "ООП","ООП(Курсовая работа)", "Разработка программных приложений",
                       "Математическая логика и теория алгоритмов","Архитектура вычислительных машин и систем",
                       "Системная и программная инженерия","Информационные системы и базы данных",
                       "Основы программирования микропроцессоров","Объектно-ориентированный анализ и проектирование программного обеспечения",
                       "Функциональное и логическое программирование","Информационные технологии интернета вещей",
                       "Проектирование интеллектуальных систем"];

var yellowDisc090301_3 = ["Математический анализ","Физика","Физика","Дискретная математика","Математический анализ",
                          "Электротехника","Теория вероятностей, мат. статика и случ. процессы",
                          "Технологии разработки программного обеспечения","Вычислительная математика",
                          "Структуры и алгоритмы обработки данных","Операционные системы","Техническое обеспечение автоматизированных систем",
                          "Сети ЭВМ и телекоммуникации","Моделирование систем"];

var greenDisc090301_3 = ["История","Алгебра и геометрия","Философия","Иностранный язык","Параллельное программирование",
                         "Системы тестирования программного обеспечения","Технико-экономическое обоснование задач автоматизации"];

//........................................................
//...................................Промышленная информатика.....................

var redDisc090301_4 = ["Процедурное программирование","Информатика",
                       "ООП","ООП(Курсовая работа)", "Разработка программных приложений",
                       "Математическая логика и теория алгоритмов","Архитектура вычислительных машин и систем",
                       "Системная и программная инженерия","Информационные системы и базы данных",
                       "Автоматное программирование систем управления","Мехатроника промышленных систем",
                       "Промышленная информатика", "Проектирование аппаратно-программных комплексов",
                       "Технические средства автоматизации и управления"];


var yellowDisc090301_4 = ["Математический анализ","Физика","Физика","Дискретная математика","Математический анализ",
                          "Электротехника","Теория вероятностей, мат. статика и случ. процессы","Теория конечных автоматов",
                          "Вычислительная математика","Цифровые системы управления", "Технические средства автоматизации и управления",
                          "Цифровые системы управления", "Вычислительные системы реального времени","Промышленные сети"];

var greenDisc090301_4 = ["История","Алгебра и геометрия","Философия","Иностранный язык","Технические измерения и приборы",
                         "Вычислительные системы реального времени","Дизайн интерфейсов систем управления"];
//................................................................................
//.........................Информатизация организаций.............................

var redDisc090303 = ["Процедурное программирование","Информатика",
                       "ООП", "Развитие информационного общества","Численные методы","Моделирование бизнес процессов",
                     "Архитектура вычислительных машин и систем","Разработка программных приложений","Проектирование и разработка баз данных",
                     "Анализ и управление бизнес процессами","Архитектура организаций","Проектирование информационных систем",
                     "Управление ИТ проектами", "Электронный бизнес и электронная коммерция"];

var yellowDisc090303 = ["Математический анализ","Физика","Физика","Дискретная математика","Математический анализ",
                        "Системный анализ и моделирование","Теория вероятности и математическая статистика",
                        "Системная и программная инженерия","Информационные системы и технологии",
                        "Анализ и управление бизнес процессами (курсовая)","Предметно-ориентированные информационные системы",
                        "Администрирование баз данных","Управление ИТ проектами (курсовая)","Контроллинг"];

var greenDisc090303 = ["История","Алгебра и геометрия","Философия","Иностранный язык","Экономика информационного общества",
                       "Компьютерная графика","Информационные технологии бизнес планирования"];
//................................................................................
//......................Корпоративные информационные системы......................

var redDisc090304_1 = ["Процедурное программирование","Информатика",
                       "ООП","ООП(Курсовая работа)","Структура и алгоритмы обработки данных",
                       "Моделирование бизнес процессов","Архитектура вычислительных машин и систем","Разработка программных приложений",
                       "Проектирование и разработка баз данных","Разработка клиент-серверных приложений",
                       "Интеллектуальные системы и технологии","Проектирование информационных систем",
                       "Управление ИТ проектами","Разработка программного обеспечения для корпоративных информационных систем"];

var yellowDisc090304_1 = ["Математический анализ","Физика","Физика","Дискретная математика","Математический анализ",
                          "Математическая логика и теория алгоритмов","Теория вероятности и математическая статистика",
                          "Системная и программная инженерия","Информационные системы и технологии",
                          "Корпоративные информационные системы","Моделирование систем",
                          "Информационная безопасность и защита информации","Безопасность функционирования информационных систем",
                          "Открытые информационные системы"];

var greenDisc090304_1 = ["История","Алгебра и геометрия","Философия","Иностранный язык","Оценка качества информационных систем",
                         "Теория систем и системный анализ","Мировые информационные ресурсы"];

//................................................................................
//..............Разработка программных продуктов и проектирование информационных систем....

var redDisc090304_2 = ["Процедурное программирование","Информатика",
                       "ООП","ООП(Курсовая работа)","Структура и алгоритмы обработки данных",
                       "Моделирование бизнес процессов","Архитектура вычислительных машин и систем","Разработка программных приложений",
                       "Проектирование и разработка баз данных","Разработка клиент-серверных приложений",
                       "Тестирование и отладка программного обеспечения","Проектирование информационных систем",
                       "Управление ИТ проектами","Системы управления ИТ сервисами и контентом"];

var yellowDisc090304_2 = ["Математический анализ","Физика","Физика","Дискретная математика","Математический анализ",
                          "Математическая логика и теория алгоритмов","Теория вероятности и математическая статистика",
                          "Системная и программная инженерия","Информационные системы и технологии",
                          "Разработка клиент-серверных приложений (курсовая)","Системное программное обеспечение",
                          "Компьютерная графика", "Информационная безопасность программных продуктов и систем",
                          "Качество и стандартизация программных продуктов и систем"];

var greenDisc090304_2 = ["История","Алгебра и геометрия","Философия","Иностранный язык","Теория автоматов и формальных языков",
                         "Теория систем и системный анализ","Тестирование и отладка программного обеспечения (курсовая)"];

//.........................................................................................
//........................Системная и программная инженерия................................

var redDisc090304_3 = ["Процедурное программирование","Информатика",
                       "ООП","ООП(Курсовая работа)","Структура и алгоритмы обработки данных",
                       "Моделирование бизнес процессов","Архитектура вычислительных машин и систем","Разработка программных приложений",
                       "Проектирование и разработка баз данных","Функциональное и логическое программирование",
                       "Технологии разработки программного обеспечения","Проектирование информационных систем",
                       "Вычислительные сети и телекоммуникации","Теоретические основы интернета вещей"];

var yellowDisc090304_3 = ["Математический анализ","Физика","Физика","Дискретная математика","Математический анализ",
                          "Математическая логика и теория алгоритмов","Теория вероятности и математическая статистика",
                          "Программная инженерия","Информационные системы и технологии",
                           "Функциональное и логическое программирование (курсовая)", "Системы поддержки принятия решений",
                          "Теория автоматов и формальных языков","Технологии разработки программного обеспечения",
                          "Технологии разработки программного обеспечения (курсовая)"];

var greenDisc090304_3 = ["История","Алгебра и геометрия","Философия","Иностранный язык", "Операционные системы",
                         "Теория систем и системный анализ","Методы и средства защиты компьютерной информации"];

//.........................................................................................
//.........................Системы поддержки принятия решений..............................

var redDisc090304_4 = ["Процедурное программирование","Информатика",
                       "ООП","ООП(Курсовая работа)","Структура и алгоритмы обработки данных",
                       "Моделирование бизнес процессов","Архитектура вычислительных машин и систем","Разработка программных приложений",
                       "Проектирование и разработка баз данных","Разработка клиент-серверных приложений",
                       "Структуры сетевых баз данных","Проектирование информационных систем",
                       "Интеллектуальный анализ данных","Технологии разработки программного обеспечения"];

var yellowDisc090304_4 = ["Математический анализ","Физика","Физика","Дискретная математика","Математический анализ",
                          "Математическая логика и теория алгоритмов","Теория вероятности и математическая статистика",
                          "Системная и программная инженерия","Информационные системы и технологии",
                          "Разработка клиент-серверных приложений (курсовая)", "Интеллектуальные системы",
                          "Теория принятия решений","Программное обеспечение интеллектуальных систем",
                          "Программирование микропроцессорных систем"];

var greenDisc090304_4 = ["История","Алгебра и геометрия","Философия","Иностранный язык","Теория автоматов и формальных языков",
                         "Теория систем и системный анализ","Информационная безопасность"];

//.........................................................................................
//.......Автоматизация технологических процессов и производств в промышленности............

var redDisc150304 = ["Процедурное программирование","Информатика",
                       "ООП","Математические основы автоматизированных систем","Теоретическая механика",
                     "Конструкторско-технологическая информатика (курсовая)","Электроника систем автоматизации",
                     "Основы конструирования машин","Промышленная информатика","Автоматное программирование систем управления",
                     "Технологическое оборудование автоматизированных производств","Технологии автоматизированных производств",
                     "Надежность и диагностика автоматизированных систем","Автоматизация технологических процессов и производств"];

var yellowDisc150304 = ["Математический анализ","Физика","Физика","Дискретная математика","Математический анализ",
                        "Физика","Теория вероятностей, математическая статистика и случайные процессы",
                        "Теория конечных автоматов","Теория автоматического управления",
                        "Электромеханические и мехатронные системы","Технические средства автоматизации и управления",
                        "Теория автоматического управления","Технические средства автоматизации и управления",
                        "Промышленные сети"];

var greenDisc150304 = ["История","Алгебра и геометрия","Философия","Иностранный язык","Технические измерения и приборы",
                       "Пневматические и гидравлические мехатронные системы","Теория систем и системный анализ"];

//.........................................................................................
function disceplineIconChangeRed(myRed){
    var i;

    for(i=0;i<myRed.length;i++){
        var redID = document.getElementById("Red-"+String(i+1));
       // redID.setAttribute("title","");
        redID.setAttribute("title",myRed[i]);
    }
}

function disceplineIconChangeYellow(myYellow){
    var i;

    for(i=0;i<myYellow.length;i++){
        var yellowID = document.getElementById("Yellow-"+String(i+1));
        //yellowID.setAttribute("title","");
        yellowID.setAttribute("title",myYellow[i]);
    }
}

function disceplineIconChangeGreen(myGreen){
    var i;

    for(i=0;i<myGreen.length;i++){
        var greenID = document.getElementById("Green-"+String(i+1));
        //greenID.setAttribute("title","");
        greenID.setAttribute("title",myGreen[i]);
    }
}

function iconMarkMessage(checkID){
    if(checkID=="0090301"){
        disceplineIconChangeRed(redDisc090301_1);
        disceplineIconChangeYellow(yellowDisc090301_1);
        disceplineIconChangeGreen(greenDisc090301_1);
    } else  if(checkID=="1090301"){
        disceplineIconChangeRed(redDisc090301_2);
        disceplineIconChangeYellow(yellowDisc090301_2);
        disceplineIconChangeGreen(greenDisc090301_2);
    } else  if(checkID=="2090301"){
        disceplineIconChangeRed(redDisc090301_3);
        disceplineIconChangeYellow(yellowDisc090301_3);
        disceplineIconChangeGreen(greenDisc090301_3);
    } else  if(checkID=="0090303"){
        disceplineIconChangeRed(redDisc090303);
        disceplineIconChangeYellow(yellowDisc090303);
        disceplineIconChangeGreen(greenDisc090303);
    } else  if(checkID=="0090304"){
        disceplineIconChangeRed(redDisc090304_1);
        disceplineIconChangeYellow(yellowDisc090304_1);
        disceplineIconChangeGreen(greenDisc090304_1);
    } else  if(checkID=="1090304"){
        disceplineIconChangeRed(redDisc090304_2);
        disceplineIconChangeYellow(yellowDisc090304_2);
        disceplineIconChangeGreen(greenDisc090304_2);
    } else  if(checkID=="2090304"){
        disceplineIconChangeRed(redDisc090304_3);
        disceplineIconChangeYellow(yellowDisc090304_3);
        disceplineIconChangeGreen(greenDisc090304_3);
    } else  if(checkID=="3090304"){
        disceplineIconChangeRed(redDisc090304_4);
        disceplineIconChangeYellow(yellowDisc090304_4);
        disceplineIconChangeGreen(greenDisc090304_4);
    } else  if(checkID=="0150304"){
        disceplineIconChangeRed(redDisc150304);
        disceplineIconChangeYellow(yellowDisc150304);
        disceplineIconChangeGreen(greenDisc150304);
    }
}







