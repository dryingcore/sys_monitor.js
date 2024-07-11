const si = require("systeminformation");

async function getStorageInfo() {
	const diskData = await si.diskLayout();

	console.log("Storage Info:");
	diskData.forEach(disk => {
		console.log(`Device: ${disk.device}`);
		console.log(`Size: ${(disk.size / 1073741824).toFixed(2)} GB`);
		console.log(`Type: ${disk.type}`);
		console.log(`Name: ${disk.name}`);
	});
}

module.exports = getStorageInfo;
