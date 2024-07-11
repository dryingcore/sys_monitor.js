const getCpuInfo = require("./modules/cpu");
const getRamInfo = require("./modules/mem");
const getStorageInfo = require("./modules/storage");
const getNetworkInfo = require("./modules/network");

async function runMonitor() {
	console.clear();
	await getCpuInfo();
	await getRamInfo();
	await getStorageInfo();
	await getNetworkInfo();
}

setInterval(runMonitor, 5000); // Update every 5 seconds
