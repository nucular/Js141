var JsCPU = function() {
    self.A = 0; // accumulator
    self.PC = 0; // program counter
    self.ST = [0, 0, 0]; // call stack
    self.C = false; // carry
    self.P = false; // parity
    self.Z = false; // zero
    self.S = false; // sign

    self.R = new Uint8Array(8); // register pairs

    self.ptest = {s: false};
}

