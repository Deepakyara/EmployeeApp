var apiEndPoint = "http://localhost:4000/api/attendance";


export var getAttendanceById = (id,token) =>{
    return fetch(apiEndPoint+"/"+id+"?token="+token, {
        method: 'get',
            headers: {
            'Content-Type': 'application/json;charset=utf-8'
              }
        })
      .then(response => response.json())
      .then(response => {
        return response;
    }).catch(function(error) {
      console.log(error);
  });
}
