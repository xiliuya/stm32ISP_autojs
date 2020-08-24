//by xiliuya
menu1();

function menu1() {
    while (true) {
        var selectTile = dialogs.select("请选择功能", "检测脚本运行条件是否达成", "向stm32写入/sdcard/1.bin", "读取单片机RAM前768字节到/sdcard/1.txt");
        if (selectTile == -1) {
            toast("脚本已停止");
            break;
        }
        if (selectTile == 0) {


            if (id("device_name").findOne().text() != "未连接设备") {
                toast("已达成");
            } else toast("未达成，请连接OTG串口");
            sleep(2000);
            // log(currentActivity());
            //   break;
        } else if (selectTile == 1) {

            toast("正在启动，耗时约为1kb五分钟，请耐心等候");
            sleep(2000);
            runWriteBin();

        } else if (selectTile == 2) {
            runReadBin();
        }
    }
}




function runWriteBin() {

    console.show();
    if (intSync()) {
        log("同步波特率成功");
        if (getCom()) {
            log("单片机bootloader版本，支持指令代码获取成功");
            if (getID()) {
                log("单片机ID获取成功");
                //readBin();

                if (eraseMemory()) {
                    log("flash全擦成功");
                    //   log(readMemoryBlock(0x08000000,20));
                    writeBin("/sdcard/1.bin");
                    sleep(500);
                    verifyBin("/sdcard/1.bin");
                } else log("flash 全擦失败");
            } else
                log("单片机ID获取失败");


        } else
            log("单片机bootloader版本，支持指令代码获取失败");
    } else {
        log("同步波特率失败");
    }

}

function runReadBin() {

    console.show();
    if (intSync()) {
        log("同步波特率成功");
        if (getCom()) {
            log("单片机bootloader版本，支持指令代码获取成功");
            if (getID()) {
                log("单片机ID获取成功");
                //readBin();

                // if (eraseMemory()) {
                //  log("flash全擦成功");
                //   log(readMemoryBlock(0x08000000,20));
                //  writeBin("/sdcard/1.bin");
                readBin();
                sleep(500);
                //   verifyBin("/sdcard/1.bin");
                // } else log("flash 全擦失败");
            } else
                log("单片机ID获取失败");


        } else
            log("单片机bootloader版本，支持指令代码获取失败");
    } else {
        log("同步波特率失败");
    }

}


//以下为测试时留下的代码，不影响使用
/*if (id("et_input").exists()) {

    //id("et_input").findOne().click();
    setClip("00");
    var fasong = id("et_input").findOne();
    fasong.paste();
    log(fasong.text());
    id("et_input").setText("05060402");
    print(parseInt(fasong.text()));
} else print("NULL");*/
//writeBin("/sdcard/1.bin");
//while(!click("通道"));
//id("action_list_filter").findOne().click();
//magesid("btn_send").findOne().click();

/*log(Ack1());
var str2=readMemoryBlock(0x996fffdd,9);
log(str2);

    var str = "54876fd456a55876348856fa";
    var strArr = fixedLengthFormatString(str,10);
    
    log(strArr);

var data1 = files.readBytes("/sdcard/1.txt");
log(data1);
print(Ack1());
//Send("7f56895138754");
//intSync();
writeMemoryBlock(data1, 0x08123456, 6);*/
//writeBin("/sdcard/stm32_test.bin");

//while (className("android.widget.TextView").text("未连接").exists()) sleep(1000);

//getStr();

/*
var test = "79 5F 01 00 08 5F 01 00 08 5F 01 00 08 5F 01 00 08 5F 01 00 08 5F 01 00 08 5F 01 00 08 5F 01 00 08 5F 01 00 08 5F 01 00 08 5F 01 00 08 5F 01 00 08 DF F8 0C D0 00 F0 18 F8 00 48 00 47 51 02 00 08 00 04 00 20 06 48 80 47 06 48 00 47 FE E7 FE E7 FE E7 FE E7 FE E7 FE E7 FE E7 FE E7 FE E7 FE E7 19 02 00 08 31 01 00 08 06 4C 07 4D 06 E0 E0 68 40 F0 01 03 94 E8 07 00 98 47 10 34 AC 42 F6 D3 FF F7 DA FF A8 02 00 08 B8 02 00 08 F0 B5 0A 46 00 21 00 23 00 24 00 BF 37 E0 01 25 05 FA 01 F3 15 68 05 EA 03 04 9C 42 2E D1 08 29 13 D2 05 68 8F 00 0F 26 BE 40 B5 43 05 60 15 79 8E 00 B5 40 06 68 35 43 05 60 55 79 8E 00 B6 1C B5 40 06 68 35 43 05 60 18 E0 45 68 A1 F1 08 06 B7 00 0F 26 BE 40 B5 43 45 60 15 79 A1 F1 08 06 B6 00 B5 40 46 68 35 43 45 60 55 79 A1 F1 08 06 B6 00 B6 1C ";
var da = test.slice(3).split(" ");
log(da);
var datp = [];
for (var i = 0; i < da.length; i++) {

    if (da[i] != '') datp[i] = parseInt(da[i], 16);

}
//if(datp[datp.length]==) datp.pop();
log(datp);
//   log(stringToByte(da));
files.append("/sdcard/1.txt", datp);
print("done");

var data0 = files.readBytes("/sdcard/1.bin");
var data2 = [];
for (var i = 0; i < data0.length; i++) {
    if (data0[i] < 0)
        data2[i] = data0[i] + 256;
    else data2[i] = data0[i];
}
log(data2);
var sb =25;
var a="";
a=sb.toString(16);
log(a);
a+=sb.toString(16);
log(a);

log(id("bigtext").findOne().text().slice(-4,-2));
log(intSync());*/
//log(id("bigtext").findOne().text().slice(-1-9*3,-2).split(" "));


function Ack1() {
    if (getStr().indexOf("79") == 0)
        return true;
    else
        return false;
}

function Send(cmd) {
    var fasong = id("sendtext").findOne();
    //  fasong.paste();
    //  log(fasong.text());
    if (cmd.length < 2) {
        cmd = "0" + cmd;
        // log("sb");
    }
    fasong.setText(cmd);
    sleep(50);
    //    fasong = id("et_input").findOne();
    //   log(fasong.text());
    log(cmd);
    id("send_button").findOne().click();
}

function getStr() {
    /*  var jieshou = id("tv_body").findOne();
      id("tv_body").find().forEach(function(tv) {
          if (tv.text() != "") {
              // log(tv.text());
              jieshou = tv;
          }
      });
      log("------");
      log(jieshou.text());*/

    //return jieshou.text().slice(13);
    return id("bigtext").findOne().text().slice(-4, -2);
}

function intSync() {
    Send("7F");
    sleep(500);
    return Ack1();

}

function getCom() {
    Send("00");
    Send("ff");
    sleep(500);

    return Ack1();
}

function getProte() {
    Send("01");
    Send("fe");
    sleep(500);

    return Ack1();
}

function getID() {
    Send("02");
    Send("fd");
    sleep(500);

    return Ack1();
}

function eraseMemory() {
    Send("43");
    Send("bc");
    sleep(500);

    log(Ack1());

    Send("ff");
    Send("00");
    sleep(500);

    return Ack1();
}

function writeMemoryBlock(data, addr, len) {
    var temp = new Array(4);
    temp[0] = ((addr >> 24) & 0xff);
    temp[1] = ((addr >> 16) & 0xff);
    temp[2] = ((addr >> 8) & 0xff);
    temp[3] = ((addr) & 0xff);
    Send("31");
    Send("ce");

    while (!Ack1()) sleep(500);
    //防止写入时无应答
    for (var i = 0; i < 4; i++) {
        Send(temp[i].toString(16))
    }
    Send(checkSum(temp, 4));
    sleep(500);
    while (!Ack1()) sleep(500);

    //数据写入
    var len1 = len - 1;
    Send(len1.toString(16));
    // len1=256-len;
    // Send(len1.toString(16));
    //  var dataStr = "";
    for (i = 0; i < len; i++) {
        if (data[i] >= 0) {
            if (data[i] < 16) Send("0" + data[i].toString(16));
            else Send(data[i].toString(16));
            //   if (data[i] < 16) dataStr += "0";
            //  dataStr += data[i].toString(16);
        } else {
            log("ggggggggggg");
            data[i] = 256 + data[i];
            Send(data[i].toString(16));
            // dataStr += data[i].toString(16);
        }
    }
    //  log(dataStr[0].toString(16));
    //  Send(dataStr);
    var tmp = len1 ^ parseInt(checkSum(data, len), 16);
    Send(tmp.toString(16));

    while (!Ack1()) sleep(500);

    return 1;
}
//我去,toString转的字符串,小于16需要补零

function readMemoryBlock(addr, len) {
    var temp = new Array(4);
    temp[0] = ((addr >> 24) & 0xff);
    temp[1] = ((addr >> 16) & 0xff);
    temp[2] = ((addr >> 8) & 0xff);
    temp[3] = ((addr) & 0xff);
    Send("11");
    Send("ee");
    sleep(500);
    log(Ack1());

    for (var i = 0; i < 4; i++) {
        Send(temp[i].toString(16))
    }
    Send(checkSum(temp, 4));
    sleep(500);
    log(Ack1());

    //数据读出
    var len1 = len - 1;
    Send(len1.toString(16));
    len1 = 256 - len;
    Send(len1.toString(16));
    sleep(500);
    log(Ack1());

    //  var data = getStr().slice(3).split(" ");
    var data = id("bigtext").findOne().text().slice(-1 - len * 3, -2).split(" ");;
    //log(data);
    //  for (i = 0; i < len; i++) {
    //      Send(data[i].toString(16));
    //  }
    return data;
}

function writeBin(binFile) {
    var binData = files.readBytes(binFile);
    // log(binData);
    for (var i = 0; i <= ((binData.length + 1) / 256); i++) {
        var offset = i * 256;
        var sendData = binData.slice(0 + offset, 256 + offset);

        writeMemoryBlock(sendData, 0x08000000 + offset, sendData.length);
        log("写入第" + i + "块成功");
        //  id("action_list_reset").findOne().click();
    }
}

//bin校验
function verifyBin(binFile) {
    var bindata0 = files.readBytes(binFile);
    var bindata1 = [];
    for (var i = 0; i < bindata0.length; i++) {
        if (bindata0[i] < 0)
            bindata1[i] = bindata0[i] + 256;
        else bindata1[i] = bindata0[i];
    }
    //log(bindata1);
    var addSet = 0;
    var binArrTem = [];
    for (var j = 0; j < ((bindata1.length / 256)); j++) {
        addSet = j * 256;
        var binStrTem = readMemoryBlock(0x08000000 + addSet, 256);

        log(binStrTem);

        for (var i = 0; i < binStrTem.length; i++) {

            if (binStrTem[i] != '') binArrTem[i + addSet] = parseInt(binStrTem[i], 16);

        }
    }
    //if(datp[datp.length]==) datp.pop();
    //log(binArrTem);
    var flagVerify = 0;
    for (var i = 0; i < bindata1.length; i++) {
        if (bindata1[i] != binArrTem[i]) flagVerify = 1;
    }
    if (flagVerify == 0) log(" verifyBin successful ")
    else log(" verifyBin fail ")

}
//bin读 条件为未保护
function readBin() {
    var addSet = 0;
    var binStrTem = [];
    for (var j = 0; binStrTem.join("").indexOf("FFFFFF") == -1; j++) {
        addSet = j * 256;
        var binStrTem = readMemoryBlock(0x08000000 + addSet, 256);

        /* log(binStrTem);
         var binArrTem = [];
         for (var i = 0; i < binStrTem.length; i++) {

             if (binStrTem[i] != '') binArrTem[i] = parseInt(binStrTem[i], 16);

         }
         //if(datp[datp.length]==) datp.pop();
         log(binArrTem);
        // 用于转换为byte[]，但有未知bug，已弃用转为输出hex字符*/
        sleep(1000);
        //   log(stringToByte(da));
        files.append("/sdcard/1.txt", binStrTem);
    }
}

function checkSum(data, len) {
    var cs = 0;
    for (var i = 0; i < len; i++)
        cs ^= data[i];
    return cs.toString(16);
}

//字符串按长度分割 未用到的函数
function fixedLengthFormatString(str, num) {
    if (str == null || str == undefined) return null;
    if (!(/^[0-9]*[1-9][0-9]*$/.test(num))) return null;
    var array = new Array();
    var len = str.length;
    for (var i = 0; i < (len / num); i++) {
        if ((i + 1) * num > len) {
            array.push(str.substring(i * num, len));
        } else {
            array.push(str.substring(i * num, (i + 1) * num));
        }
    }
    return array;
}