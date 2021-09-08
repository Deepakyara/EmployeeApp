var attendance=
[{id:111,employeeId:1,date:"20-01-2020",inTime:"9:00",outTime:"16:00",totalHours:"7"},
{id:112,employeeId:2,date:"20-01-2020",inTime:"9:10",outTime:"16:30",totalHours:"7.3"},
{id:113,employeeId:3,date:"20-01-2020",inTime:"9:40",outTime:"17:00",totalHours:"7.15"},
{id:114,employeeId:4,date:"20-01-2020",inTime:"9:00",outTime:"17:00",totalHours:"8"},
{id:115,employeeId:5,date:"20-01-2020",inTime:"10:00",outTime:"16:00",totalHours:"6"},
{id:116,employeeId:6,date:"20-01-2020",inTime:"8:00",outTime:"16:00",totalHours:"8"},
{id:117,employeeId:7,date:"20-01-2020",inTime:"9:00",outTime:"16:30",totalHours:"7"},
{id:118,employeeId:8,date:"20-01-2020",inTime:"10:40",outTime:"17:00",totalHours:"6.15"},
{id:119,employeeId:9,date:"20-01-2020",inTime:"10:00",outTime:"17:00",totalHours:"7"},
{id:120,employeeId:10,date:"20-01-2020",inTime:"11:00",outTime:"18:00",totalHours:"7"},
{id:121,employeeId:1,date:"21-01-2020",inTime:"9:00",outTime:"16:00",totalHours:"7"},
{id:122,employeeId:2,date:"21-01-2020",inTime:"9:10",outTime:"16:30",totalHours:"7.3"},
{id:123,employeeId:3,date:"21-01-2020",inTime:"9:40",outTime:"17:00",totalHours:"7.15"},
{id:124,employeeId:4,date:"21-01-2020",inTime:"9:00",outTime:"17:00",totalHours:"8"},
{id:125,employeeId:5,date:"21-01-2020",inTime:"10:00",outTime:"16:00",totalHours:"6"},
{id:126,employeeId:6,date:"21-01-2020",inTime:"8:00",outTime:"16:00",totalHours:"8"},
{id:127,employeeId:7,date:"21-01-2020",inTime:"9:00",outTime:"16:30",totalHours:"7"},
{id:128,employeeId:8,date:"21-01-2020",inTime:"10:40",outTime:"17:00",totalHours:"6.15"},
{id:129,employeeId:9,date:"21-01-2020",inTime:"10:00",outTime:"17:00",totalHours:"7"},
{id:130,employeeId:10,date:"21-01-2020",inTime:"11:00",outTime:"18:00",totalHours:"7"}]


var saveLocalStorage = () =>{
    localStorage.setItem('attendance',JSON.stringify(attendance));
}

//add attrndance of an employee
export var addEmployeeAttendance=(att)=>{
    attendance.push(att);
    saveLocalStorage();
}
//get attandance of a particular employee in a particular date 
export var getAttendanceByDate=(employeeId,date)=>{
    var list = attendance.filter((item)=>(item.employeeId==employeeId && item.date===date));
    if (list.length>0){
        return list
    }
    else{
        return("No record found")
    }
}

//get attendance of employee all records using employeeid
export var getAttendanceByDate=(employeeId)=>{
    var list = attendance.filter((item)=>(item.employeeId==employeeId));
    if (list.length>0){
        return list
    }
    else{
        return("No record found")
    }
}
//delete a particular record according to employeeid, date
export var deleteEmployeeAttendanceByDate=(employeeId,date)=>{
    attendance= attendance.filter((item)=>(item.employeeId!==employeeId && item.date!==date));
    saveLocalStorage();
}
//delete whole employee attendance
export var deleteEmployeeAttendance=(employeeId,date)=>{
    attendance=attendance.filter((item)=>(item.employeeId!==employeeId));
    saveLocalStorage();
}
