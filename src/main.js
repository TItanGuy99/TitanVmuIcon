var currentColor = "color1"
var currentVMUValue = "0x00"

function pick_color(myColor, vmuValue) {
    currentColor = myColor;
    currentVMUValue = vmuValue;
}

function change_color(element) {
    console.log(element);
    document.getElementById(element).classList.remove("color1","color2", "color3", "color4", "color5", "color6", "color7");
    document.getElementById(element).classList.add(currentColor);
    document.getElementById(element).setAttribute("vmuvalue", currentVMUValue)
}

function createScreen() {
    htmlGenerator = '';
    count = 0;
    for(i=0;i<512;i++) {
        if(count==0) {
            htmlGenerator +=`<div class="row">`;
        }
        
        htmlGenerator += `<div id="`+i+`" class="color1 border field" vmuvalue="0x00" onClick="change_color('`+i+`')"></div>`

        count++;
        if(count==16) {
            count=0;
        }

        if(count==0) {
            htmlGenerator +=`</div>`;
        }
    }

    document.getElementById('screen').innerHTML = htmlGenerator;
}

createScreen();

function generateArray() {
    document.getElementById("resultText").value = "";
    finalObject = "";
    finalObject += "{";
    finalObject+=`0x00,0xF0,0x0F,0x0F,0x69,0xF6,0xCC,0xFC,0x88,0xF3,0xFC,0xFF,0xFC,0xFF,0x99,0xF9,0x77,0xF7,0x44,0xF4,0x21,0xF2,0xA0,0xFF,0x61,0xF9,0x93,0xFC,0xCB,0xFC,0x00,0xF0,`;
    for(i=0;i<512;i++) {
        finalObject+=document.getElementById(i).getAttribute("vmuvalue");

        if(i !== 511) {
            finalObject+=",";
        }
    }
    finalObject += "};";
    document.getElementById("resultText").value = finalObject;
}

function loadArray() {
    var myObject = document.getElementById("resultText").value;
    myObject = myObject.replace("{", "");
    myObject = myObject.replace("};", "");
    var arr = myObject.split(','); 
    
    for(i=32;i<arr.length;i++) {
        document.getElementById(i-32).classList.remove("color1","color2", "color3", "color4", "color5", "color6", "color7");

        switch(arr[i]) {
            case "0x00":
                document.getElementById(i-32).classList.add("color1");
            break;

            case "0x44":
                document.getElementById(i-32).classList.add("color2");
            break;

            case "0x33":
                document.getElementById(i-32).classList.add("color3");
            break;

            case "0x66":
                document.getElementById(i-32).classList.add("color4");
            break;

            case "0x22":
                document.getElementById(i-32).classList.add("color5");
            break;

            case "0xCC":
                document.getElementById(i-32).classList.add("color6");
            break;

            case "0x77":
                document.getElementById(i-32).classList.add("color7");
            break;

            default:
                document.getElementById(i-32).classList.add("color1");
            break;
        }
    }
}

function clean() {
    document.getElementById("resultText").value = "";
    for(i=0;i<513;i++) {
        document.getElementById(i).classList.remove("color1","color2", "color3", "color4", "color5", "color6", "color7");
        document.getElementById(i).classList.add("color1");
    }
}