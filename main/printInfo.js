/**
 * Created by cyz on 2017/8/27.
 */
"use strict";
let inputInfoError = `请按正确的格式输入要打印的学生的学号（格式：学号，学号……），按回车提交：`
function judgePrintInfo(text){
    let getId = text.split(',')
    if (getId.length===0){
        console.log(inputInfoError)
        return false
    }
    return getId
}

function printResult(printInfo,allInfo){
    console.log('成绩单'+'\n'+'姓名|数学|英语|平均分|总分'+'\n'+'=========================')
    findAndPrint(printInfo,allInfo)

}

function find(allInfo,item){
    allInfo.forEach(function(ele){
        console.log(ele.id,item)
        if(ele.id==item){
            console.log('哈哈哈找到了')
            return ele
        }
    })
    return false
}

function printThisStu(item){
    let sum=0;
    sum+=parseInt(item['语文'],10)
    sum+=item['数学']
    sum+=item['英语']
    item.sum=sum
    item.average=sum/3
    console.log(item.name+'|'+item['语文']+'|'+item['数学']+'|'+item['英语']+'|'+item.average+'|'+item.sum)
}

function findAndPrint(printInfo,allInfo){
    printInfo.forEach(function(item){
        let finded =find(allInfo,item)
        if(finded){
            printThisStu(finded,allInfo)
        }
    })
}

module.exports={
    judgePrintInfo,
    printResult,
}