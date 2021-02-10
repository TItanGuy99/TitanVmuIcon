var currentColor = "color1"
var currentVMUValue = "0x00"

function pick_color(myColor, vmuValue) {
    currentColor = myColor;
    currentVMUValue = vmuValue;
}

function change_color(element) {
    console.log(element);
    document.getElementById(element).classList.remove("black","white");
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
        
        htmlGenerator += `<div id="`+i+`" class="black border field" vmuvalue="0x00" onClick="change_color('`+i+`')"></div>`

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
    finalObject+=`0x00,0xf0,0x0d,0xf0,0x0f,0xf0,0x00,0x0f,0x44,0xf4,0x62,0xfb,0x96,0xff,0xca,0xff,0xff,0xff,0x00,0xf0,0x00,0xf0,0x00,0xf0,0x00,0xf0,0x00,0xf0,0x00,0xf0,0x00,0xf0,`;
    for(i=0;i<512;i++) {
        finalObject+=document.getElementById(i).getAttribute("vmuvalue");

        if(i !== 511) {
            finalObject+=",";
        }
    }
    finalObject += "};";
    document.getElementById("resultText").value = finalObject;
}