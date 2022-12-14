var axios = require('axios');
var data = JSON.stringify({
  "greeting": "hi"
});

var config = {
  method: 'get',
  url: 'http://localhost:3000/api/handshake',
  headers: { 
    'Content-Type': 'application/json'
  },
  maxRedirects: 0,
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
  console.log(JSON.stringify(response.status));
})
.catch(function (error) {
  // console.log(error);
  console.log(error.response.status)
  console.log(error.response.statusText + " : " + error.response.data.error)
  // console.log(error.response.data.error)
});
