const axios = require("axios");

const bodyRequest = {
  channel: "ngoctm",
  level: "123456",
  message: "ngoctm",
  extendData: "123456",
};

async function callService() {
  const token =
    "eyJ0eXAiOiJqd3QiLCJhbGciOiJSUzI1NiIsImtpZCI6IjFPaGhGdm50cFc5ak5LZHRIbHNJN2piVF9VeENvUzZEQkV6RVEyOTJTWGMifQ.eyJ1c2VyIjoibmdvY3RtIn0.2GlPSf9ITKOLK0nTiw55YtuwHjcYdASkCVfa85Lur3h2ADmgjofFjm3F74EPDgP0UjncSI6YrxNaVE18gGWle2Rio1yERKltfWiWFqx2RDgOfAsDbdNWr5rgN1wAABzwKEk6-de87Dps5nqC0s81i2s25S3pgPrauYa9HQxi3v7A1H3gFwwmBbz2jV_6PBxWPwqkfPkTf4AUZNslovPAZ6p4bE4ECVO2jB9X-y03xr-zwcx-00-I6PA_5GTiPNXIaWI8sfRaxdCXPV8lPNION49_km0pm_BqKqqum59TAryTOn-QFzqrk471gSBB-HYkyYw59z2N5cONyQLDrQAb5A";
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

exports.writeLog = async function writeLogs() {
  try {
    let response = await callService();
    return response.data;
  } catch (err) {
    console.log(err.data);
    return null;
  }
};
