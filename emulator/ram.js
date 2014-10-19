var JsRAM = function() {
    this.mem = new Uint8Array(40); // RAM memory
    this.pstat = [ // 4-bit output/status port
        {s: false}, {s: false}, {s: false}, {s: false}
    ];
}
