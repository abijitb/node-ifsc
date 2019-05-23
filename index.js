const axios = require('axios');

function getIFSC(ifsc) {

    let url = `https://ifsc.razorpay.com/${ifsc}`

    axios.get(url)
        .then((response) => {
            console.log("BANK DETAILS", response.data);
        })
        .catch((error) => {
            console.log("ERROR node-ifsc", error);
        })
}
module.exports = getIFSC;