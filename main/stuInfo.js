/**
 * Created by cyz on 2017/8/27.
 */

function judgeFormat(){

    let inputInfoError=`请按照正确的格式输入（格式：姓名，学号，学科：成绩，……）：`
    let answer = readlineSync.question();
    let getInfo=answer.split(',')
    console.log(getInfo)


}

module.exports={
    judgeFormat
};
