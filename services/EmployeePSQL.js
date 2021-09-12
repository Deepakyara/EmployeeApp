//var apiEndPoint = "https://nodeapi.pyther.com/Student";
var apiEndPoint = "http://localhost:4000/api/employee";
// GET https://nodeapi.pyther.com/Student fetch RECORDS
// POST https://nodeapi.pyther.com/Student ADD RECORDS
// PUT https://nodeapi.pyther.com/Student UPDATE RECORD
// DELETE https://nodeapi.pyther.com/Student DELETE RECORD

export var getEmployees = () =>{
    return fetch(apiEndPoint, {
        method: 'get',headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(response => response.json()).then(response => {
        //console.log(JSON.stringify(response));
        return response;
    }).catch(function(error) {
        console.log(error);
    });
}

export var getEmployeeById = (id, token) =>{
    return fetch(apiEndPoint+"/"+id+"?token="+token, {
        method: 'get',headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    }).then(response => response.json()).then(response => {
        console.log("hello 1")
        console.log(JSON.stringify(response));
        return response;
    }).catch(function(error) {
        console.log(error);
    });
}
