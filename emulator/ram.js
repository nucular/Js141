var JsRAM = function() {
    self.mem = new Uint8Array(40); // RAM memory
    self.pstat = [ // 4-bit output/status port
        {s: false}, {s: false}, {s: false}, {s: false}
    ];
}
