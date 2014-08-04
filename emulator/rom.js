var JsROM = function(path) {
    self.mem = new Uint8Array(256); // ROM memory
    self.pout = [ // 4-bit input/output port
        {s: false}, {s: false}, {s: false}, {s: false}
    ];
}
