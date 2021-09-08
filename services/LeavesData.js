var leaves =[
    {id:1,employeeId:4,startDate:'2021-08-01',endDate:'2021-08-02',count:2,year:2021,dateOfEntry:'2021-07-30',dateOfModify:'2021-07-30'},
    {id:2,employeeId:4,startDate:'2021-05-01',endDate:'2021-05-02',count:2,year:2021,dateOfEntry:'2021-04-31',dateOfModify:'2021-05-01'},
    {id:3,employeeId:5,startDate:'2021-06-21',endDate:'2021-06-24',count:4,year:2021,dateOfEntry:'2021-06-10',dateOfModify:'2021-06-22'},
    {id:4,employeeId:3,startDate:'2021-08-09',endDate:'2021-08-10',count:2,year:2021,dateOfEntry:'2021-07-30',dateOfModify:'2021-07-30'},
    {id:5,employeeId:6,startDate:'2021-08-01',endDate:'2021-08-02',count:2,year:2021,dateOfEntry:'2021-07-30',dateOfModify:'2021-07-30'},
    {id:6,employeeId:1,startDate:'2021-09-01',endDate:'2021-09-03',count:3,year:2021,dateOfEntry:'2021-08-31',dateOfModify:'2021-08-31'},
    {id:7,employeeId:9,startDate:'2021-07-21',endDate:'2021-07-25',count:5,year:2021,dateOfEntry:'2021-07-20',dateOfModify:'2021-07-20'},
    {id:8,employeeId:10,startDate:'2021-06-17',endDate:'2021-06-17',count:1,year:2021,dateOfEntry:'2021-06-15',dateOfModify:'2021-06-15'},
   
  ];

var saveLocalStorage = () =>{
    localStorage.setItem('leaves',JSON.stringify(leaves));
}
    if(localStorage.getItem('leaves') == null){
        saveLocalStorage();
    }else{
        customers = JSON.parse(localStorage.getItem('leaves'));
    }

export var getLeaves = ()=>{
    return leaves;
}

export var addLeave = (leave)=>{
    leaves.push(leave);
    saveLocalStorage();
}

export var deleteLeave = (id) =>{
    leaves = leaves.filter((item)=>(item.id!=id));
    saveLocalStorage();
  }

export var getLeaveById = (id) =>{
    var list = leaves.filter((item)=>(item.id==id));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var updateLeave = (leave) =>{
    var list = leaves.filter((item)=>(item.id==leave.id));
    if(list.length > 0){
         list[0].employeeId = leave.employeeId;
         list[0].startDate = leave.startDate;
         list[0].endDate = leave.endDate;
         list[0].count = leave.count;
         list[0].year = leave.year;
         list[0].dateOfEntry=leave.dateOfEntry;
         list[0].dateOfModify=leave.dateOfModify;


    }
    saveLocalStorage();
}