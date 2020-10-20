# API/Integration

Enecuum's API is available on [Swagger.](https://app.swaggerhub.com/apis-docs/enecuum/EnecuumNodeAPI/1.0.0)

Enecuum's wallet creation is included in the introduction. Instructions on how to send transactions and generate signatures are available in POST /tx method. 

::: danger DANGER

Rejected transactions are also recorded in the blockchain. Use GET /tx to check transaction status.

:::

Be aware that any wallet, including the one created for technical purposes, can receive referral rewards. This can happen if someone decides to use the wallet's referral address as their referral agent. These rewards are marked accordingly in the blockchain.

