'use strict'

const userData = []

const getData = () => {
  return fetch('db.json')
  .then((response) => response.json())
  .then((data) => {
    userData.push({
      user: data.user,
      age: data.age,
      role: data.role
    })
  }).catch(error => {
    console.log(error);
  })
}

const sendData = () => {
  getData()
    .then(() => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      });
    })
    .then(response => response.json())
    .then(data => {
      console.log(data);
    })
    .catch(error => {
      console.log(error);
    });
};

sendData();
