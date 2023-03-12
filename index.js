const axios = require("axios");

async function callService(bodyRequest, token) {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return new Promise((resolve, reject) => {
    axios
      .post("http://localhost:3000/api/write-log", bodyRequest, config)
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
}

exports.writeLog = async function writeLogs(bodyRequest, token) {
  try {
    let response = await callService(bodyRequest, token);
    return response.data;
  } catch (err) {
    console.log(err.data);
    return null;
  }
};
