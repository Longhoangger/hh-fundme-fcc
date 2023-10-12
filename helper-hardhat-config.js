const networkConfig = {
    43113: {
        name: "avalancheFuji",
        ethUsdPriceFeed: "0x5498bb86bc934c8d34fda08e81d444153d0d06ad",
    },
}

const developmentChains = ["hardhat", "localhost"]
const DECIMALS = 8
const INITIAL_ANSWER = 200000000000
module.exports = {
    networkConfig,
    developmentChains,
    DECIMALS,
    INITIAL_ANSWER,
}
