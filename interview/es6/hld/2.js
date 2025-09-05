const sleep = ms => new Promise(r => setTimeout(r, ms));

async function trafficLight() {
    const seq = [
        { color: 'red', ms: 1000 },
        { color: 'yellow', ms: 3000 },
        { color: 'green', ms: 2000 }
    ]

    while(true) {
        for (const { color, ms } of seq) {
            console.log(color);
            await sleep(ms);
        }
    }
}

trafficLight();