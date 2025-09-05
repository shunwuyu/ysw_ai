class EventEmitter {
    constructor() {
        // 维护callbacks 订阅者
        this.events={} // type, [] 
    }
    on(event, listener) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(listener);
    }
    // 手动触发
    emitter(event, ...args) {
        if (!this.events[event]) return;
        this.events[event].forEach(listener => {
            listener.apply(this, args);
        })
    }
    off(event, listener) {
        // removeEventListener tyep + callback  具体的订阅者
        if(!this.events[event]) return;
        this.events[event] = this.events[event].filter(l => l !== listener);
    }
    once() {

    }
}

const ws = new EventEmitter();
ws.on("offer", () => {
    console.log("硕果走一波");
})
ws.on("zjoffer", () => {
    console.log("酒吧走一波");
})

ws.emitter("offer")
setTimeout(() => {
    ws.emitter("zjoffer")
}, 10000)