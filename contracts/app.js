const Matic = require('maticjs').default;

const config = require('./config');


const token = config.ROPSTEN_TEST_TOKEN; // test token address
const amount = '1000000000000000000'
const from = config.FROM_ADDRESS; // from address

// Create object of Matic
const matic = new Matic({
maticProvider: config.MATIC_PROVIDER,
parentProvider: config.PARENT_PROVIDER,
rootchainAddress: config.ROOTCHAIN_ADDRESS,
syncerUrl: config.SYNCER_URL,
watcherUrl: config.WATCHER_URL,
});


matic.wallet =config.PRIVATE_KEY; // prefix with ex



matic
  .approveERC20TokensForDeposit(token, amount, {
    from,
    onTransactionHash: (hash) => {
      // action on Transaction success
      console.log(hash, 'Deposit Tokens from Ropsten/Ethereum to Matic — Transaction Approved.') // eslint-disable-line
    },
  })

 // Deposit tokens
 matic.depositERC20Tokens(token, from, amount, {
    from,
    onTransactionHash: (hash) => {
      // action on Transaction success
      console.log(hash, 'Tokens deposited from Ropsten/Ethereum to Matic.'); // eslint-disable-line
    },
  });


  
const recipient = "0xf66f409086647591e0c2f122C1945554b8e0e74F"; // to address
// amount in wei

// Send Tokens
matic.transferTokens(token, recipient, amount, {
    from,
    // parent: true, // For token transfer on Main network (false for Matic Network)
    onTransactionHash: (hash) => {
      // action on Transaction success
      console.log(hash); // eslint-disable-line
    },
  });