# API/Integration

## [API](https://app.swaggerhub.com/apis-docs/enecuum/EnecuumNodeAPI/1.0.0)

Enecuum's API is available on [Swagger.](https://app.swaggerhub.com/apis-docs/enecuum/EnecuumNodeAPI/1.0.0)

Enecuum's wallet creation is included in the introduction. Instructions on how to send transactions and generate signatures are available in POST /tx method. 

::: danger DANGER
Rejected transactions are also recorded in the blockchain. Use GET /tx to check transaction status.
:::

Be aware that any wallet, including the one created for technical purposes, can receive referral rewards. This can happen if someone decides to use the wallet's referral address as their referral agent. These rewards are marked accordingly in the blockchain.

To get an explanation of the responses, refer to the response schemas. You can access them by clicking "Schema" next to "Example Value".

<p align = "center"> <img src="./img/api/schema.png" width = "500"> </p>

## Custom Token Integration

In several API methods, token ID needs to be specified. For ENQ, the token ID is all zeros. If the ID is different, that means it's a custom token.

To send transactions with custom tokens, use POST /tx with the specified token ID. 

To find out the custom token fees, total supply and other parameters, use GET /token_info with the specified token ID. The custom token fees are explained in the [Fee Principles](token-issue.md#fee-principles) guide.