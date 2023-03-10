/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

function createEmployeeRecord([string1, string2, string3, num]){
let employeeRecordObj = {
    firstName: string1,
    familyName: string2,
    title: string3,
    payPerHour: num,
    timeInEvents: [],
    timeOutEvents: []
}
return employeeRecordObj
}

function createEmployeeRecords(Array){
    let newArray = Array.map(createEmployeeRecord)
    return newArray
}

let employeeRecordObj =  {
    firstName: string1,
    familyName: string2,
    title: string3,
    payPerHour: num,
    timeInEvents: [],
    timeOutEvents: []
}
// function createTimeInEvent(dateStamp, employeeRecordObj){
//     //console.log("this is what i am looking for", dateStamp)
    
    
//     let dateStampArray = dateStamp.split(' ')
//     let parsedTime = parseInt(dateStampArray[1], 10)
//     console.log(dateStampArray, '<---look! there it is!')
//     let timeInObj = {
//         type: 'TimeIn',
//         hour: parsedTime,
//         date: `${dateStampArray[0]}`
//     };
//     console.log(timeInObj, 'yahoo!!')
//     employeeRecordObj.timeInEvents.push(timeInObj)
//     return employeeRecordObj
// }

// createEmployeeRecord.call()
function createTimeInEvent(dateStamp){
   
    let dateStampsArray = dateStamp.split(" ");
  
    let parsedNum = parseInt(dateStampsArray[1], 10)
    //console.log(parsedNum)
    let timeInEventObj = {
    type: "TimeIn",
    hour: parsedNum,
    date: `${dateStampsArray[0]}`
  };
    //console.log("it should be here", timeInEventObj)
    this.timeInEvents.push(timeInEventObj)
    
    return this
  };

  function createTimeOutEvent(dateStamp){
    let dateStampArray = dateStamp.split(" ")
    let parsedNum = parseInt(dateStampArray[1], 10)
    let timeOutObj = {
        type: 'TimeOut',
        hour: parsedNum,
        date:`${dateStampArray[0]}`
    }
    this.timeOutEvents.push(timeOutObj)
    return this
  }

//   function hoursWorkedOnDate(dateStamp){
//     let dateStampArray = dateStamp.split(' ')
//     const target = `${dateStampArray[0]}`;
//     let timeIn = this.timeInEvents.find(ob => {
//         for(key in target) {
//             if (!(key in ob)) return false;
//             if (ob[key] !== target[key]) return false
//         }
//         return true
//     })
   
//     console.log("lolok!", timeIn)
//     //let timeOut = this.timeOutEvents.find(createTimeOutEvent)
//   }

function hoursWorkedOnDate(dateStamp){
console.log("ehllo!", this.timeInEvents)
}