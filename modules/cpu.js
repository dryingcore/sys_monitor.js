const os = require("os");
const si = require("systeminformation");

async function getCpuInfo() {
	const cpuInfo = os.cpus();
	const formattedCpuInfo = cpuInfo.map(cpu => {
		return {
			model: cpu.model,
			speed: `${cpu.speed} MHz`,
			times: cpu.times.sys,
		};
	});

	const load = await si.currentLoad();

	console.log("CPU Info:");
	console.table(formattedCpuInfo, ["model", "speed", "times"]);
	console.log("CPU Usage:");
	console.log(`Current Load: ${load.currentLoad.toFixed(2)}%`);
}

module.exports = getCpuInfo;
