require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict argue system venture stone raise saddle million honey light army genre'; 
let testAccounts = [
"0x278eb57f0744e774b4a54bd44281992b697f1317bbdcd120bccf6a7993caa835",
"0x88a3245d121a07a887914e766cbe39b4733f797c9a6334ceac011b2b01282f25",
"0x04bda50a556c0827ea8ef694f02c3aa4cae3eaa63beaa0841d7126a09af90e6d",
"0x905ed5b989c2557b39ef7aade7018236df438e8572b6cf3c487672acd99e4c8a",
"0x0d43738847aa31e57e3e65ff3371453caf3b660469a0b5d2e2d7d8e652c48c6f",
"0x651c6159a5d5fa5001289744533ba440305522f51fc09d3d545afe55aceb2e2d",
"0xeb8d1d7e5edb7344c7724c3a98fe3c835123ec9a339eeda09fa68d74d26bfc0d",
"0xefc077c24a21438679d9996f4a669815315562a9a9655a01387795d9548e9308",
"0x66db566954c852d8dffb03f6d8746c9515329cdf43e1380e984137991426e23c",
"0x82b46dbc0bb2f16e52aecefcf9496d09a81a6a6fcaf165ed2b56240e0fcec385"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

