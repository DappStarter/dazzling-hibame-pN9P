require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good armed ozone sugar notice crime remember artwork give arena flock general'; 
let testAccounts = [
"0x065ec6b9c3aa93c6fdc8da4ffa1146867a24bd91971573d5aa2256ca1a308a5d",
"0x4a25cf7e7bb72f3abcf9a5d2db4a7c7ac2b9cc57c5f3120af6f59db1703b6bb1",
"0xfdcd7b6d39a145cb0c0d13173643efa6df0ecf2356b0eff82615488df97162c3",
"0x453564fad8dbce8d3664d13800d7ca6fe7160aad66543527a0c7bcdf15605f05",
"0xb58034389a1093e06bad1fc8720b5027e3c6003d609b7bb8d199904cfad10f86",
"0xc9c8d786c1dda7cfb1500e54f8dedbe54a7870e798ab6b1592204e984af83156",
"0xf375e6a9a5a270a8ae6ac82767c8a57278d7e704b3cf4585976dbd24e0b7188f",
"0x05ec417934cc292f6c36773c95666c1eedc50e8a92d38ae0bae292d0e75653a8",
"0xdb4a32d583e82ed1e348cacf7d0aec5d6634aa59f5b463c335e10cee03715142",
"0xebfd8d0439146874391cd5e4ace227033dc6f3651a835932dbdbcaa205292e22"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


