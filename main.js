// This script creates the environment for the Busicom 141PF calculator

var Js141 = new JsEnv();

// Create all object instances
var rom0 = new JsROM("3rd/romdumps/busicom.l01");
var rom1 = new JsROM("3rd/romdumps/busicom.l02");
var rom2 = new JsROM("3rd/romdumps/busicom.l05");
var rom3 = new JsROM("3rd/romdumps/busicom.l07");
var rom4 = new JsROM("3rd/romdumps/busicom.l11");

var ram0 = new JsRAM();
var ram1 = new JsRAM();

var sipo0 = new JsSIPO(); // keyboard matrix shifter
var sipo1 = new JsSIPO(); // printer shifter (cascaded)
var sipo2 = new JsSIPO();

var cpu = new JsCPU();

// Connect the ports using object references
rom0.pout[0] = sipo0.pclock;
rom0.pout[1] = sipo0.psout; sipo2.psout = rom0.pout[1];
rom0.pout[2] = sipo1.pclock; sipo2.pclock = rom0.pout[2];

sipo1.psout = sipo2.psin;

// Register tick functions
Js141.register(cpu.cycle, 10.8)

Js141.run();
