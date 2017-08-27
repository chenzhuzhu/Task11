/**
 * Created by cyz on 2017/8/27.
 */
"use strict";
let mainInterface = `1.添加学生
2.生成成绩单
3.退出
请输入你的选择（1～3）：`
function judgeFormat(text,allInfo){

    let inputInfoError=`请按照正确的格式输入（格式：姓名，学号，学科：成绩，……）：`
    let getInfo=text.split(',')
    console.log(getInfo)
    let certainStuInfo = judgeStuInfoInput(getInfo,inputInfoError)
    if(certainStuInfo){
        saveInfo(certainStuInfo,allInfo,mainInterface)
    }
}

function judgeStuInfoInput(collection,inputInfoError){
   if (collection.length<3){
       console.log(inputInfoError)
       return false
   }else{
       for(let i = 2;i<collection.length;i++){
           if(!collection[i].includes(':')){
               console.log(inputInfoError)
               return false
           }
       }
   }
   return collection

}

function saveInfo(collection,allInfo,mainInterface){
    let stuInfo;
    stuInfo={
        name:collection[0],
        id:collection[1],
    }
    for(let i = 2;i<collection.length;i++){
        let subject = collection[i].split(':')[0];
        let score = collection[i].split(':')[1];
        stuInfo[`${subject}`]=score
    }
    allInfo.push(stuInfo)
    console.log('学生'+stuInfo.name+'的成绩被添加')
    console.log(mainInterface)
}





module.exports={
    judgeFormat
};
