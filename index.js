const axios = require('axios');

function getIFSC(res, ifsc) {

    let url = `https://ifsc.razorpay.com/${ifsc}`

    axios.get(url)
        .then((response) => {
            console.log("BANK DETAILS", response);
            return res.success("BANK", response);
        })
        .catch((error) => {
            console.log("ERROR node-ifsc", error.response);
        })
}

module.exports = getIFSC;