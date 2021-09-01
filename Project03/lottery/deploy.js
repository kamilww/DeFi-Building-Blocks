const HDWalletProvider = require('truffle-hdwallet-provider');
const Web3 = require('web3');
const { interface, bytecode } = require('./compile');

const provider = new HDWalletProvider(
    'ready render hobby seed vendor credit dust slam balance option moon stomach',
    'https://rinkeby.infura.io/v3/04c1b0d40ced48c1a8621344707c02b6'
);
const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();

    console.log('Attempting to deploy from account', accounts[0]);

    const result = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ gas: '1000000', from: accounts[0], gasPrice: '5000000000' });

    console.log(interface);
    console.log('Contract deployed to', result.options.address);
};
deploy();