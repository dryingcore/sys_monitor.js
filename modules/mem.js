const os = require("os");
const si = require("systeminformation");

async function getRamInfo() {
	const totalMem = os.totalmem();
	const freeMem = os.freemem();
	const memData = await si.mem();

	console.log("RAM Info:");
	console.log(`Total Memory: ${(totalMem / 1073741824).toFixed(2)} GB`);
	console.log(`Free Memory: ${(freeMem / 1073741824).toFixed(2)} GB`);
	console.log(`Used Memory: ${(memData.used / 1073741824).toFixed(2)} GB`);
	console.log(`Free Memory: ${(memData.free / 1073741824).toFixed(2)} GB`);
}

module.exports = getRamInfo;
