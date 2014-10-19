var JsCPU = function() {
    this.A = 0; // accumulator
    this.PC = 0; // program counter
    this.ST = [0, 0, 0]; // call stack
    this.C = false; // carry
    this.P = false; // parity
    this.Z = false; // zero
    this.S = false; // sign

    this.R = new Uint8Array(8); // register pairs

    this.ptest = {s: false};
}

