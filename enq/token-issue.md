# How to Issue Own Tokens

With Enecuum, it is possible to use the Trinity protocol (a combination of PoA, PoS and PoW) as well as functionality such as ETM (Enecuum Token Machine), delegation to PoS nodes (delegated smart staking), issuing of different types of tokens - mining, NFT and other.

## Token Types

In the Enecuum network, there are three types of custom tokens:

- Non-reissuable - tokens with a fixed supply. After the token release, extra token coins can not be emitted.
- Reissuable - tokens with a flexible supply. After the token release, its supply can be changed by issuing or burning of coins.
- Mineable - tokens that can be mined. Some volume is selected for instant release (pre-mine), and the rest is mined by users.

### Common Parameters

Each type of token has the following common parameters:

- Ticker - a unique token identifier 1-6 characters long. 
- Name - a token description up to 40 characters long.
- Token type - a type that determines token operation. The types are explained in the section above.
- Decimals - a number of decimal places.
- Emission/Premine - a token supply at the time of the issue. 
- Fee type -  a type that determines whether the fee is fixed or percentage.
- Fee - an exact fee amount for token transactions. The fee from each transaction will be sent to the wallet of the token creator.
- Min fee - a minimum fee for token transactions if the token type is percentage. 

### Mineable Token Parameters

Besides the parameters mentioned above, mineable tokens also feature the following: 

- Max supply - a maximum token emission. Upon reaching this number, the token can no longer be mined.
- Block reward - a reward for each mined macroblock. This number includes the referral reward. 
- Minimum stake - a minimum balance the user is required to have in order to start mining.
- Referrer stake - a minimum balance for the user to become a referral agent. After becoming a referral agent, the user can share a code to receive rewards from blocks mined by others. This system creates passive income.
- Referral share - a share of the total block reward that determines the referral reward amount. The referral reward is distributed among the referral and their agent equally.

### Token Calculator

You can use our [token calculator](http://pulse.enecuum.com/#!/token-roi) to estimate your return on mineable token investment. This tool can help you plan mineable token parameters based on your expectations. The calculator will predict how long it will take to mine your custom token and what the ROI will be depending on the premine value and the number of staked coins.

You can fill out the white fields with desired parameters. The calculated values will then be displayed in the blue-ish fields. The center column shows the token values, and the right column displays the same values converted in USD. Note that staked tokens is a user assumption only and is not related to blockchain functions.

Be aware that the mining period parameter is approximate. There are factors that are hard to take into calculation. For example, there is no guarantee that every mineable token miner will take part in each macroblock. So, the emission section is a rough estimation.

In order to save the page as a PDF file, click the button in the top-right corner and select "Print as PDF"

<p align = "center"> <img src="./img/token-issue/save.png" width="300"> </p>

## Fee Principles

With each transaction, including custom tokens, users need to pay the transaction fee. When sending ENQ, the user pays 0.1 ENQ fee to the Enecuum network. When sending custom tokens, the user pays the fee to the token creator. The fee amount is set by that token creator. With each custom token transaction, the token creator pays 0.1 ENQ fee to the Enecuum network.

The token creator also chooses the fee type. The fee can be either fixed or percentage. The fixed fee stays the same for any transaction. The percentage fee depends on the transaction amount. If the percentage fee is selected, the creator can also choose the minimum fee. Then, the user will pay the minimum fee if the transaction percent fee is too low.

<p align = "center"> <img src="./img/token-issue/fee-principle.svg" width="400"> </p>

Here's an example of how it works:

1. Carol creates her custom token CRL. She sets her transaction fee type to fixed. She also sets the fee amount to 1 CRL. Carol pays the fee in ENQ to the Enecuum Genesis address for the token creation. 
2. Alice sends 10 CRL to Bob. She pays 1 CRL fee to Carol. Bob receives 10 CRL.
3. Carol pays 0.1 ENQ fee to the Enecuum Genesis address for the transaction that Alice sent.

## Mining Slots

To ensure consistency of custom tokens mining, we implement so-called **“mining slots”** — additional rules of microblock publishing that achieve predictable emission time of the custom token in case of permanent non-zero number of miners online.

Macroblocks are issued every 15 seconds and consist of microblocks created by PoA miners. If all miners have equal probability to create a microblock, then there is no guarantee that a specific token or even a native coin will be mined in a macroblock. A mining slot is an exclusive place in a macroblock for specific token miners. It allows miners of token with a slot to compete only among themselves and not with other token miners. As the size of a macroblock is limited, these slots will be distributed on a competitive basis. For now, there are 10 slots available for custom tokens in a macroblock. There is always one additional slot for a native coin (ENQ) and one random slot (any mining token can be mined with it).

In random slots, all mineable tokens, including ENQ, will compete on equal terms. The more miners a token has, the more likely it will gain a random slot.

### How to Get a Slot

::: tip TIP
Having a mining slot is useful. Without slots, the stability of the token emission is not guaranteed due to competition among miners of different tokens.
:::

There are two requirements for getting a mining slot for your custom token:

1. Among mining token owners, you must be in the top 10 wallet list sorted by available ENQ balance (i.e., "delegated", "undelegated", "transit", and "reward" balances are not taken into account).
2. You must have at least 500 000 ENQ.

Slot owners are determined during each macroblock creation, and if no one has the minimum required balance, then slots will be considered random. If your wallet passes the requirements and owns several mining tokens, the slot will be shared between all your tokens with distribution based on the following rule: the more miners a token has, the more likely it will be mined.

### Mining Slot Example

Here's an example to illustrate mining slot rules:

| Token owner |  Token(s)  | Miners online | Available balance |                                                                      Mining chance                                                                      |
|:-----------:|:----------:|:-------------:|:-----------------:|:-------------------------------------------------------------------------------------------------------------------------------------------------------:|
| Alice       | ALC        | 100           | 700 000 ENQ       | Slot is guaranteed. Token will be mined every macroblock. Unlikely to gain a random slot due to low number of miners.                                   |
| Bob         | BOB1, BOB2 | 100, 1        | 500 000 ENQ       | Slot is guaranteed. Tokens will be mined every macroblock. BOB1 is more likely to be mined. Unlikely to gain a random slot due to low number of miners. |
| Carol       | CRL        | 2 000         | 300 000 ENQ       | Does not have enough available balance for a guaranteed slot. Gains most random slots due to higher number of miners.                                   |
| Dave        | DVE        | 1 000         | 200 000 ENQ       | Does not have enough available balance for a guaranteed slot. Less likely to gain a random slot compared to CRL and ENQ.                                |
| Enecuum     | ENQ        | 1 500         | --                | Slot is guaranteed. Token will be mined every macroblock. Can gain a random slot.                                                                       |

In this example, 2 mining slots are reserved by Alice and Bob, because they meet the requirements. Their tokens will be mined with every macroblock. One slot is always reserved for ENQ. The rest of the mining slots for custom tokens become random. Keeping in mind one additional slot, the total number of random slots equals 9. Each token in this table can compete for 9 random mining slots. Because Carol has more miners, she will gain more slots, but the mining won't be stable. In case other tokens get more miners, CRL mining rate will drop significantly.


## Issue Tokens via Enecuum Network

You can create custom token via ENQ App or on your computer using our website.

### ENQ App

1. Go to [pulse.enecuum.com](https://pulse.enecuum.com/) and download the Android app via top menu. Navigate to How to mine -> Download app.
2. Create a wallet and save your secret key. Without a secret key, you can't recover your account.
3. Get ENQ tokens. You can buy ENQ on exchanges.
4. Open the app. Click on the icon in the lower right corner to access the token issue interface. This feature is provided to any Enecuum Network user. The issuing functions of new tokens are included in the protocol. The user is only required to specify the token parameters.
5. Fill out the required parameters.

<p align = "center"> <img src="./img/token-issue/2-token-issue.jpg" width="300"> </p>

6. Confirm the issuing of your new token. You will receive a message that tokens have been successfully created. 1000.1 ENQ will be deducted from your account. 

<p align = "center"> <img src="./img/token-issue/3-token-confirm.jpg" width="300"> </p>

7. Next, go to the "Token balance" tab on the Home screen. Here you can see ENQ and your newly created token balances.

### ENQ Wallet

1. Go to [wallet.enecuum.com](https://wallet.enecuum.com/). Login with your secret key or create an account. Make sure to save your secret key. Without it, you can't recover your account.
2. Get ENQ tokens. You can buy ENQ on exchanges.
3. At the end of the wallet page, there are several options available: "Send", "Receive", "History", "Token issue". Click the last tab.

<p align = "center"> <img src="./img/token-issue/4-web-wallet.jpg" width="500"> </p>

4. Fill out the required parameters.

<p align = "center"> <img src="./img/token-issue/5-web-token.jpg" width="500"> </p>

5. Confirm the issuing of your new token. You will receive a message that tokens have been successfully created. 1000.1 ENQ will be deducted from your account. 

<p align = "center"> <img src="./img/token-issue/6-web-confirm.jpg" width="500"> </p>

6. You should see a 1000.1 ENQ transaction in the “History” tab. If the transaction status is “confirmed”, that means you have successfully issued your own token. Otherwise, there must have been an error in the filled-out parameters. 

<p align = "center"> <img src="./img/token-issue/7-web-result.jpg" width="500"> </p>

## Add Description to Your Custom Token

If you want, you can add description in different languages and social media links to your custom token.

1. Fork Enecuum's [Blockchain Explorer repository](https://github.com/Enecuum/explorer).
2. Add token description in the `assets/info/token-info-storage-enq.json` file. Use the existing data as an example. 

::: tip TIP
You can optionally specify **coingecko_id**. It is used in Enecuum Blockchain Explorer, mining app and wallet to automatically display token prices. If your token is listed on CoinGecko, you can get coingecko_id from the address of your CoinGecko page. For example, Nayuta Coin's ([https://www.coingecko.com/en/coins/nayuta-coin](https://www.coingecko.com/en/coins/nayuta-coin)) coingecko_id is nayuta-coin.
:::

3. Do a pull request. You can use [Genesis Lab pull request](https://github.com/Enecuum/explorer/pull/2) as a reference. Note that the example describes a PoS contract, but a custom token description is done in a similar way.
4. In [web wallet](https://wallet.enecuum.com/), go to "Send" tab. 

<p align = "center"> <img src="./img/token-issue/AddDescStep4.png" width="600"> </p>

5. In the "Amount" field, type in 0. In the "Address", enter `02833f453fb8bf10cc5e8fd362d563851543559f3ea6e662ef114d8db8f72dda19` for Pulse (ENQ) Network and `029dd222eeddd5c3340e8d46ae0a22e2c8e301bfee4903bcf8c899766c8ceb3a7d` for BIT Network. In the "Data" field, type in the pull request number and confirm the transaction. 

<p align = "center"> <img src="./img/token-issue/AddDescStep5.png" width="600"> </p>

6. Wait until the transaction is processed. At the bottom of the page, search for the transaction that was done in the previous step. You may need to reload the page a few times.

<p align = "center"> <img src="./img/token-issue/AddDescStep6.png" width="600"> </p>

7. Copy the transaction hash.

<p align = "center"> <img src="./img/token-issue/AddDescStep7.png" width="600"> </p>

8. In the pull request, leave a comment with the transaction hash. Wait until the team reviews your pull request.

<p align = "center"> <img src="./img/token-issue/AddDescStep8.png" width="600"> </p>

## Errors When Creating Tokens

If you see an error when issuing your custom token, there can be several reasons:

- You do not have enough balance to issue the token. You need to have at least 1000.1 ENQ.
- The token ticker is not unique. Try typing another ticker.
- The block reward is greater than the max token supply allows it. 
- The maximum token supply is less than the emission.
- The emission is less the referral stake.
- The referral stake is less than the minimum stake.
- You might have used restricted characters. Use a point (.) instead of a comma (,) when typing numbers. Only use English letters when choosing a token ticker.