// $(function () {
//     $("h1").textillate();
// });

// document.getElementById("date").innerHTML = getNow();

// function getNow() {
//     var now = new Date();
//     var year = now.getFullYear();
//     var mon = now.getMonth() + 1;
//     var day = now.getDate();

//     var nowDate = year + "/" + mon + "/" + day;

//     return nowDate;
// }

function countCharacters() {
    var inputElement = document.getElementById('inputText');
    var characterCountElement = document.getElementById('characterCount');
    var characterCountNSElement = document.getElementById('characterCountNS');
    
    var inputText = inputElement.value;
    // 改行を削除
    var inputTextMain = inputText.replace( /\n+/g,"");
    //改行とスペースを削除
    var inputTextNS = inputTextMain.replace(/ +/g,"");
    inputTextNS = inputTextNS.replace(/　+/g,"");
    // 文字数計算
    var characterCount = inputTextMain.length;
    var characterCountNS = inputTextNS.length;
    //画面出力
    characterCountElement.textContent = characterCount;
    characterCountNSElement.textContent = characterCountNS;
}

