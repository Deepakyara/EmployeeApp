var employee =[
    {id:1, name:'Sagar',email:'sagar@gmail.com',address:'Andhra Pradesh',dateOfBirth:'1999-02-08',dateOfJoining:'2021-09-01',education:'Btech-CSE',type:'engineer',role:'normal',password:'sagar'},
    {id:2, name:'Suresh',email:'suresh@gmail.com',address:'Andhra Pradesh',dateOfBirth:'1998-02-08',dateOfJoining:'2021-09-01',education:'Btech-CSE',type:'engineer',role:'normal',password:'suresh'},
    {id:3, name:'Kiran',email:'kiran@gmail.com',address:'Andhra Pradesh',dateOfBirth:'1990-12-08',dateOfJoining:'2015-04-01',education:'Btech-CSE',type:'manager',role:'admin',password:'kiran'},
    {id:4, name:'Kishore',email:'kishore@gmail.com',address:'Madhya Pradesh',dateOfBirth:'1994-02-08',dateOfJoining:'2019-09-01',education:'MBA',type:'support',role:'normal',password:'kishore'},
    {id:5, name:'Swetha',email:'swetha@gmail.com',address:'Kerala',dateOfBirth:'1997-12-08',dateOfJoining:'2019-09-01',education:'BBA',type:'support',role:'normal',password:'swetha'},
    {id:6, name:'Priya',email:'priya@gmail.com',address:'Andhra Pradesh',dateOfBirth:'1999-12-08',dateOfJoining:'2021-07-01',education:'Btech-CSE',type:'contract',role:'normal',password:'priya'},
    {id:7, name:'Sunil',email:'sunil@gmail.com',address:'Karnataka',dateOfBirth:'1995-08-08',dateOfJoining:'2018-05-01',education:'Btech-Mech',type:'contract',role:'normal',password:'sunil'},
    {id:8, name:'Suriya',email:'suriya@gmail.com',address:'Maharashtra',dateOfBirth:'1990-02-08',dateOfJoining:'2013-01-01',education:'MBA',type:'engineer',role:'admin',password:'suriya'},
    {id:9, name:'Pooja',email:'pooja@gmail.com',address:'Tamilnadu',dateOfBirth:'1997-02-08',dateOfJoining:'2020-02-01',education:'Btech-ECE',type:'contract',role:'normal',password:'pooja'},
    {id:10, name:'Yamuna',email:'yamuna@gmail.com',address:'Kerala',dateOfBirth:'1998-02-08',dateOfJoining:'2020-09-01',education:'BBA',type:'support',role:'normal',password:'yamuna'}
  ];

var saveLocalStorage = () =>{
    localStorage.setItem('employee',JSON.stringify(employee));
}
    if(localStorage.getItem('employee') == null){
        saveLocalStorage();
    }else{
        employee = JSON.parse(localStorage.getItem('employee'));
    }

export var getEmployees = ()=>{
    return employee;
}

export var addEmployee = (emp)=>{
    employee.push(emp);
    saveLocalStorage();
}

export var deleteEmployee = (id) =>{
    employee = employee.filter((item)=>(item.id!=id));
    saveLocalStorage();
}

export var getEmployeeById = (id) =>{
    var list = employee.filter((item)=>(item.id==id));
    if(list.length > 0){
        return list[0];
    }else{
        return {}
   }
}

export var updateEmployee = (emp) =>{
    var list = employee.filter((item)=>(item.id==emp.id));
    if(list.length > 0){
         list[0].name = emp.name;
         list[0].email = emp.email;
         list[0].address = emp.address;
         list[0].dateOfBirth = emp.dateOfBirth;
         list[0].dateOfJoining = emp.dateOfJoining;
         list[0].education = emp.education;
         list[0].type = emp.type;
         list[0].role = emp.role;
         list[0].password = emp.password;
    }
    saveLocalStorage();
}
