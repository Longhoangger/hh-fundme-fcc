require("@nomiclabs/hardhat-waffle")
require("hardhat-gas-reporter")
require("@nomiclabs/hardhat-etherscan")
require("dotenv").config()
require("solidity-coverage")
require("hardhat-deploy")

const FUJI_RPC_URL = process.env.FUJI_RPC_URL
const PRIVATE_KEY = process.env.PRIVATE_KEY
const FUJI_API_KEY = process.env.FUJI_API_KEY
const COIN_MARKET_CAP_API_KEY = process.env.COIN_MARKET_CAP_API_KEY

module.exports = {
    defaultNetwork: "hardhat",
    networks: {
        hardhat: {
            chainId: 31337,
            // gasPrice: 130000000000,
        },
        avalancheFuji: {
            url: FUJI_RPC_URL,
            accounts: [PRIVATE_KEY],
            chainId: 43113,
            blockConfirmations: 6,
        },
    },
    etherscan: {
        apiKey: FUJI_API_KEY,
    },
    gasReporter: {
        enabled: true,
        outputFile: "gas-report.txt",
        noColors: true,
        currency: "USD",
        coinmarketcap: COIN_MARKET_CAP_API_KEY,
        token: "ETH",
    },
    solidity: {
        compilers: [
            {
                version: "0.8.8",
            },
            {
                version: "0.6.6",
            },
        ],
    },
    namedAccounts: {
        deployer: {
            default: 0,
        },
    },
}
