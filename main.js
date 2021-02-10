var currentColor = "color1"
var currentVMUValue = "0x00"

function pick_color(myColor, vmuValue) {
    currentColor = myColor;
    currentVMUValue = vmuValue;
}

function change_color(element) {
    console.log(element);
    document.getElementById(element).classList.remove("color1","color2");
    document.getElementById(element).classList.add(currentColor);
    document.getElementById(element).setAttribute("vmuvalue", currentVMUValue)
}

function createScreen() {
    
    htmlGenerator = "";

    for(i=1;i<65;i++) {
        htmlGenerator +=`<div class="row">
                        <div class="col-2 text-center">`+ i +`</div>`;
        for(j=1;j<9;j++){
            htmlGenerator += `
            <div id="`+i+`-`+j+`" class="col-1 color1 text-center" vmuvalue="0x00" onClick="change_color('`+i+`-`+j+`')">
                <small></small>
            </div>`
        }

        htmlGenerator +=`
            <div class="col-2 text-center"></div>
        </div>`;
    }

    document.getElementById('screen').innerHTML = htmlGenerator;
}

function generateArray() {
    document.getElementById("resultText").value = "";
    finalObject = "";
    finalObject += "{";
    finalObject+=`0x00,0xf0,0x0d,0xf0,0x0f,0xf0,0x00,0x0f,0x44,0xf4,0x62,0xfb,0x96,0xff,0xca,0xff,0xff,0xff,0x00,0xf0,0x00,0xf0,0x00,0xf0,0x00,0xf0,0x00,0xf0,0x00,0xf0,0x00,0xf0,`;
    for(i=1;i<65;i++) {
        for(j=1;j<9;j++){
            finalObject+=document.getElementById(i+"-"+j).getAttribute("vmuvalue");

            if(i+"-"+j !== '64-8') {
                finalObject+=",";
            }
        }
    }
    finalObject += "};";
    document.getElementById("resultText").value = finalObject;
}

createScreen();