var endPoint = "http://localhost:4000/api/authenticate";

let id = 0;
let token = '';

export var setDetails = (id, token) => {
  this.id = id;
  this.token = token;
}

export var getId = () => {
    return this.id;
}

export var getToken = () => {
    return this.token;
}

export var authenticate = (state) => {
    return fetch(endPoint, {
      method: 'post',
          headers: {
          'Content-Type': 'application/json;charset=utf-8'
            },
          body:JSON.stringify(state)
      })
    .then(response => response.json())
    .then(response => {
      id = response.id
      token = response.token
      console.log("Response status::::",response.success);
      return response;
  }).catch(function(error) {
    console.log(error);
  });
  }
