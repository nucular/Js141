var JsROM = function(path) {
    this.mem = new Uint8Array(256); // ROM memory
    this.pout = [ // 4-bit input/output port
        {s: false}, {s: false}, {s: false}, {s: false}
    ];
}
