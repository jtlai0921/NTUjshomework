let big = document.getElementById("bigPhoto");

function changePic_1() { big.src = "pic/001.jpg"; }

function changePic_2() { big.src = "pic/002.jpg"; }

function changePic_3() { big.src = "pic/003.jpg"; }

function changePic_4() {
    big.src = "pic/004.jpg";
}

function changePic_5() { big.src = "pic/005.jpg"; }

function changePic_6() { big.src = "pic/006.jpg"; }
document.getElementById("small1").addEventListener("click", changePic_1);
document.getElementById("small2").addEventListener("click", changePic_2);
document.getElementById("small3").addEventListener("click", changePic_3);
document.getElementById("small4").addEventListener("click", changePic_4);
document.getElementById("small5").addEventListener("click", changePic_5);
document.getElementById("small6").addEventListener("click", changePic_6);


function clickPic1() { alert("電子履歷看板"); }

function clickPic2() { alert("心律血氧檢測"); }

function clickPic3() { alert("潛水日誌"); }

function clickPic4() { alert("我的健康APP"); }

function clickPic5() { alert("簡易健康檢測APP"); }

function clickPic6() { alert("pygame Dino"); }

function clickH1() { alert("我是標題H1................"); }
document.querySelector("#small1").addEventListener("click", clickPic1);
document.querySelector("#small2").addEventListener("click",
    clickPic2);
document.querySelector("#small3").addEventListener("click",
    clickPic3);
document.querySelector("#small4").addEventListener("click",
    clickPic4);
document.querySelector("#small5").addEventListener("click",
    clickPic5);
document.querySelector("#small6").addEventListener("click",
    clickPic6);
let boxMsg = document.getElementById("box-msg");
function changeTxt() {
    if (this.id == "small1") {
        boxMsg.innerHTML = "利用nuvoTon NANO130KE3BN單晶片MCU微處理器在Keil C的環境下編譯，將大頭照和QR code和設計文字或動畫寫入MCU，由TFT螢幕顯示"
    }
    if (this.id == "small2") {
        boxMsg.innerHTML = "心律血氧檢測S"
    }
    if (this.id == "small3") {
        boxMsg.innerHTML = "潛水日誌S"
    }
    if (this.id == "small4") {
        boxMsg.innerHTML = "我的健康APP"
    } if (this.id == "small5") {
        boxMsg.innerHTML = "簡易健康檢測APP"
    } if (this.id == "small6") {
        boxMsg.innerHTML = "pygame Dino"
    }
}
document.querySelector("#small1").addEventListener("click", changeTxt);
document.querySelector("#small2").addEventListener("click", changeTxt);
document.querySelector("#small3").addEventListener("click", changeTxt);
document.querySelector("#small4").addEventListener("click", changeTxt);
document.querySelector("#small5").addEventListener("click", changeTxt);
document.querySelector("#small6").addEventListener("click", changeTxt);