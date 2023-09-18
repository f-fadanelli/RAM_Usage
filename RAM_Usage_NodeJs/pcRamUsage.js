const os = require('node:os');

setInterval(()=>{
    const {arch, platform, totalmem, freemem} = os;
    const tRam = totalmem() / 1024 / 1024/ 1024;
    const fRam = freemem() / 1024 / 1024/ 1024;
    const usage = (fRam/tRam)*100;

    const stats = {
        OS: platform(),
        Arch: arch(),
        totalRam: `${tRam.toFixed(2)}GB`,
        freeRam: `${fRam.toFixed(2)}GB`,
        Usage: `${usage.toFixed(2)}%`,
    };
    exports.stats = stats;
}, 1000)

