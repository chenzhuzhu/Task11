/**
 * Created by cyz on 2017/8/26.
 */
"use strict";
var readlineSync = require('readline-sync')
// var judgeFormat = require('./stuInfo.js')
main()

function judgeFormat(){

    let inputInfoError=`请按照正确的格式输入（格式：姓名，学号，学科：成绩，……）：`
    let answer = readlineSync.question();
    let getInfo=answer.split(',')
    console.log(getInfo)


}

function getChoice(){
    let answer;
    let value;
    let queryStuInfo=`请输入学生信息（格式：姓名，学号，学科：成绩，……），按回车提交：`
    let printStuInfo=`请输入要打印的学生的学号（格式：学号，学号……），按回车提交：`
    let inputInfoError = `请按正确的格式输入要打印的学生的学号（格式：学号，学号……），按回车提交：`

    while (true) {
        answer = readlineSync.question();
        if (answer === '1') {
            console.log(queryStuInfo)
            judg3eFormat()

        } else if(answer ==='2'){
            console.log(printStuInfo)
        }  else if (answer ==='3') {
            // Ctl-C
            process.exit();
        } else {
            console.log('请输入正确选项')

        }
    }


}

function main(){
        let mainInterface = `1.添加学生
2.生成成绩单
3.退出
请输入你的选择（1～3）：`
    console.log(mainInterface)
    // let queryText = '';
    getChoice();





}