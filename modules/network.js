const si = require("systeminformation");

async function getNetworkInfo() {
	const networkData = await si.networkInterfaces();

	console.log("Network Info:");
	networkData.forEach(network => {
		console.log(`Interface: ${network.iface}`);
		console.log(`IPv4: ${network.ip4}`);
		console.log(`IPv6: ${network.ip6}`);
		console.log(`MAC: ${network.mac}`);
		console.log(`Internal: ${network.internal}`);
	});
}

module.exports = getNetworkInfo;
