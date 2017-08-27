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
    console.log('成绩单'+'\n'+'姓名|Chinese|Math|English|平均分|总分'+'\n'+'==============================')
    findAndPrint(printInfo,allInfo)
    console.log('==============================')
    let allScoreInfo=calAllStuInfo(allInfo)
    console.log('全班总分平均数：'+allScoreInfo['allAve'])
    console.log('全班总分中位数：'+allScoreInfo['median'])

}

function calAllStuInfo(allInfo){
    let sum=[];
    let allScore=0;
    allInfo.forEach(function(item){
        sum.push(parseInt(item['Chinese'],10)+parseInt(item['Math'],10)+parseInt(item['English'],10))
    })
    sum.forEach(function(item){
        allScore+=item
    })
    let allStuAve = (allScore/allInfo.length).toFixed(1)
    let medianScore = sum[Math.ceil(sum.length/2)]
    return{allAve:allStuAve,median:medianScore}



}

function find(allInfo,item){
    for(let i =0;i<allInfo.length;i++){
        if(allInfo[i].id==item){
            return allInfo[i]
        }
    }
    return false

}

function printThisStu(item){
    let sum=0;
    sum+=parseInt(item['Chinese'],10)
    sum+=parseInt(item['Math'],10)
    sum+=parseInt(item['English'],10)
    item.sum=sum
    item.average=(sum/3).toFixed(2)
    console.log(item.name+'|'+item['Chinese']+'|'+item['Math']+'|'+item['English']+'|'+item.average+'|'+item.sum)
}

function findAndPrint(printInfo,allInfo){
    printInfo.forEach(function(item){
        let finded =find(allInfo,item)
        if(finded){
            printThisStu(finded)
        }
    })

}

module.exports={
    judgePrintInfo,
    printResult,
}