function saturdayFun(activity) {
if (typeof activity !== `undefined`) {
    return `This Saturday, I want to ${activity}!`
}
else
return `This Saturday, I want to roller-skate!`
}
// when determining a value that is undefined, use typeof

function mondayWork(activity) {
    if (typeof activity !== `undefined`) {
        return `This Monday, I will ${activity}.`
    }
    else
    return `This Monday, I will go to the office.`
}

function wrapAdjective(result, msg = `You are`) {
    const innerFunction = function (emphatic){
        return `${msg} ${result}${emphatic}${result}!`
    }
    return innerFunction
}