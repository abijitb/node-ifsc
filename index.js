const axios = require('axios');

async function getIFSC(ifsc) {
	let url = `https://ifsc.razorpay.com/${ifsc}`;
	let { data } = await axios.get(url);
	return data;
}

module.exports = getIFSC;
