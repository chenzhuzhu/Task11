/**
 * Created by cyz on 2017/8/26.
 */
"use strict";
var readlineSync = require('readline-sync')
var judgeFormat = require('./stuInfo.js')
var printInfo=require('./printInfo')

let mainInterface = `1.添加学生
2.生成成绩单
3.退出
请输入你的选择（1～3）：`
let queryStuInfo=`请输入学生信息（格式：姓名，学号，学科：成绩，……），按回车提交：`
let printStuInfo=`请输入要打印的学生的学号（格式：学号，学号……），按回车提交：`
function getChoice(){
    let answer;
    let value;
    let allOfStuInfo=[];

    while (true) {
        answer = readlineSync.question();
        if (answer === '1') {
            console.log(queryStuInfo)
            let stuInfoInput = readlineSync.question();
            judgeFormat.judgeFormat(stuInfoInput,allOfStuInfo)
            console.log(allOfStuInfo)
        } else if(answer ==='2'){
            console.log(printStuInfo)

            let wantStuInfo=readlineSync.question();
            let needToPrint=printInfo.judgePrintInfo(wantStuInfo)
            printInfo.printResult(needToPrint,allOfStuInfo)

        }  else if (answer ==='3') {
            // Ctl-C
            process.exit();
        } else {
            console.log('请输入正确选项')

        }
    }


}

function main(){

    console.log(mainInterface)
    // let queryText = '';
    getChoice();
}
main()