---
sidebarDepth: 2
---

# Frequently Asked Questions

## General

###  About Enecuum

#### What is Enecuum?

Enecuum is a blockchain mobile network for decentralized applications. It was created as a decentralized ecosystem to be able to bring the blockchain and cryptocurrencies to the real mainstream, involving a crowd with regular mobile and desktop devices into the blockchain network. Enecuum allows each smartphone owner to be a part of our global network.

#### What consensus algorithms does Enecuum use?

In Enecuum, the consensus is achieved through interaction between the following three mining algorithms: Proof-of-Work (“PoW”), Proof-of-Activity (“PoA”) and Proof-of-Stake (“PoS”). This combination makes it possible to achieve a high degree of network decentralization, while significantly increasing both the network security level and its speed.

To find out more, please read our [Tech paper.](https://enecuum.com/documentation)

#### What is PoA?

PoA publishers are involved in the microblock publishing process. Microblocks contain transactions. PoA  validates PoSLeader.

To find out more, please read our [Tech paper.](https://enecuum.com/documentation)

#### Can I be a PoW or PoS miner?

Currently, BIT network with non-tradable tokens is used for testing the team's PoW and PoS. Please read the tutorial on [How to Mine BIT](/bit/how-to-mine-bit.html) to find out more. ENQ PoW and PoS mining will be released after the tests are done.

#### What can the Enecuum App do?

The main purpose of the app is PoA mining. You can also see the blockchain explorer, send transactions and use ROI calculator, but these features are not limited to the app and they are available on our [website.](https://pulse.enecuum.com/)

#### Do you have an Airdrop?

Media activity stage of Airdrop is over now. Mining stage of Airdrop is active. You can gain tokens from mining or buying at cryptoexchanges.

#### What is Enecuum's circulating supply?

126,880,563.75 ENQ.

Equals to Total Supply in [Etherscan](https://etherscan.io/token/0x16ea01acb4b0bca2000ee5473348b6937ee6f72f). Details [here.](https://enecuum.com/emission-model#conversion-plan)

#### What is Enecuum's max supply?

The upper limit of all ENQ in the system is proposed to be 845,870,425 ENQ. Details [here.](https://enecuum.com/emission-model#emission-model)

#### How can I receive news about Enecuum?

The main platforms for updates are our [Telegram news channel](https://t.me/ENQbeam) and [Telegram discussion group](https://t.me/Enecuum_EN).

###  Getting Started

#### What are the requirements for running the App?

All you need is a smartphone with an Android 4.4 or higher.

#### How do I earn/mine?

To mine, you need a minimum stake of 25 ENQ (check [How to buy on exchange guide](/enq/how-to-buy.html)). Once you have it, all you need to do is press "Start activity" button in the app. Remember that the higher the stake (balance), the bigger the reward.

#### How do I stake?

The balance is counted as a stake automatically at the time of the microblock publication. You do not need to freeze/lock coins to stake. So, all you need to do to stake is press "Start activity". 

You can check the reward for staking in the ROI calculator in the app or on [our website](https://pulse.enecuum.com/#!/roi). To receive the full day reward listed in the calculator, you need to mine for 24 hours. If you are mining with breaks or with a weak internet connection, you will not get the full reward.

#### What are the private key and the address?

The address is used as an identification of your wallet, and the private key is used to access it. You can think of the address as an e-mail and the key as a password. Be careful: **if you lose your private key, you won't be able to access your wallet**, so please, do a back-up copy.

#### What is the block reward?

Generally, a block reward refers to the coins you get as a reward for contributing to the network for each successfully mined block. As a PoA miner, you are awarded with ENQ by our blockchain network for participating in the microblock publishing process. 

#### Is Enecuum app available for iOS?

[Wallet App](https://testflight.apple.com/join/EhGhg78t) is available for iOS.

#### Why is Enecuum App not present in Google Play Store?

Google Play has restrictions on phone mining. Since PoA is not a cloud mining, formally, it is forbidden. But PoA does not do Proof of Work mining so we can possibly avoid this restriction. But we want to tune the system first and gather enough statistics about power and network load to prove that PoA mining is not PoW. 

###  Running the App

#### Can I run the app in the background?

Yes, the app was designed for that. But check Android settings and permissions for background activity. It may restrict Enecuum App by default.

#### Can I use one private key on multiple devices?

You can import one account on several phones to send transactions or view balance, but only one device at a time will be able to mine.

#### Can I run multiple instances of the App on one device?

You can use Spaces/Parallels apps to run several instances of Enecuum app. But this will increase network and battery load. It is better to run with a powerful phone and good internet connection. 

#### Is there a list of top wallets?

[Yes.](https://pulse.enecuum.com/#!/tops)

#### How can I determine that my device is online?

There are several options available to see your device status:

1. Use our official [Telegram bot](https://t.me/enecuum_notify_bot) to receive notifications about your nodes' status change (online/offline) and your daily rewards. Multiple devices monitoring is available.
2. Another option is to input your address in [masternodes.online](https://explorer.masternodes.online/search/) search field. Be aware that the node's status change is displayed with a significant delay in comparison to Enecuum's Telegram bot.
3. You can check the map or see recent blocks in the [Blockchain Explorer](https://pulse.enecuum.com). Try searching your address in the Explorer (on the top right of the page) and see if you published any microblocks.
4. You can also check our [API](https://pulse.enecuum.com/api/v1/poa_nodes_online) which lists all the active nodes in Enecuum blockchain. Search for your address using Ctrl+F.

#### Does the performance of the phone affect the productivity of the node?

This is not a Proof of Work, no hash guessing by phones. Phones do cryptographic tasks of validating PoS leader and signing microblocks. It does not require heavy computation.  So different phones will do this in a different time, but this difference is much less than the time between k-blocks that determine microblock publication window. 

You can get more details from our [Tech paper.](https://enecuum.com/documentation)

#### What is the difficulty right now?

There is no PoW mining on phones, so no difficulty. But the PoA macroblock reward is split between all phone miners that published microblocks in the macroblock.  

So indeed, the more miners the less reward for each one.

#### Can I use a rooted or emulated device for mining?

Yes, you can. Currently, we do not have any restrictions on this.

###  Mining Rewards

#### How are PoA miner rewards calculated?

Macroblock reward is fixed. Macroblock contains one k-block and arbitrary number of microblocks. K-blocks are created by PoW nodes (1 k-block per 15 seconds on average). Microblocks are created by PoA nodes. 86% of macroblock reward is shared between all PoA publishers (or "miners"). For each published microblock the reward is shared in proportion to the publisher balance. Referral rewards are not included here and have separate budget as stated in the [Emission Model](https://enecuum.com/emission-model). 

#### Why do rewards differ?

The reward is divided between the miners in proportion to the balance of PoA nodes within one macroblock. Thus, the reward depends on the number of macroblock neighbors the miner has and their ENQ balance. Neighbors are determined randomly. In rare cases, when the publication time between k-blocks is less than a second, the PoA miner may not have enough time to publish the signed microblock. In this case, the microblock won't be added to the blockchain, therefore the PoA miner won't receive the reward for it.

To learn more about the distribution of ENQ mining rewards, refer to [the corresponding article.](https://medium.com/@ENQBlockchain/enecuum-referral-program-and-miner-rewards-62209ead9f6a)

#### How does ROI calculation work?

It is based on the last 24h mining history. We replay this history assuming there was 1 more miner online for 24h with the specified stake.

#### What happens when the account balance exceeds max PoA stake?

The amount above max stake is ignored for staking rewards. The balance above the max stake will be counted as max stake when the rewards are calculated. You can send exceeding coins to a new address and start a second miner with these coins. 

#### Does the amount of staked ENQ affect the mining speed?

It affects microblock reward amount but doesn't affect the number of blocks you mine. So, the higher the stake, the more you receive.

###  Buying

#### Where do I buy ENQ? 

You can buy ENQ on the [available exchanges](https://enecuum.com/buy) using our [guide](/enq/how-to-buy.html). The ERC20 -> Native coin swap is closed.

#### How do I manage my ENQ assets?

In [wallet.enecuum.com](https://wallet.enecuum.com/).

###  Referral Program

#### Can I be both an agent and a referral?

Yes, you can.

#### How many agents and referrals can I have?

You can have one agent and as many referrals as you can get.

#### How do I change the referral code I entered?

Please back up a copy of your private key and reinstall the app.  It is more reliable if you clear app's cache and storage in your phone's settings before uninstalling. You can enter a new referral code when you import your wallet.

#### How do I check who is my referrer?

You can check your referrer in the [Blockchain Explorer.](https://pulse.enecuum.com/) Enter your wallet address (public key) in the search field on the top right of the page. Click the hash that has "refreward" description. You will see your address in the "publisher" field and your referrer's address in the corresponding field.

## Troubleshooting

###  Running the App

#### The app won't install

- Make sure you have Android 4.4 or higher.
- If you are updating the app, check that its version is above the one you already have.

#### The app won't launch

- Reinstall the app.  

#### The app is crashing/stopping

- Make sure you have Android 4.4 or higher.
- The servers might be under maintenance. 

###  Mining

#### It's not mining

- If you are mining on multiple devices, check that they are using different wallet addresses. 
- If you have battery saving apps, try disabling them or adding Enecuum app to the exceptions.
- Check your phone settings and enable background data.

#### The app keeps showing "Connecting"

- If you are mining on multiple devices, check that they are using different wallet addresses. 
- The servers might be under maintenance. 

#### Mining is too slow/The reward is too little/My wife earns more than I do

- Background activity may be restricted by default. Check Android settings. Try to mine with always on screen and with locked screen. Compare your microblock rewards at [Blockchain Explorer](https://pulse.enecuum.com).
- Weak Internet connection is the second most common problem.

#### ROI calculator is incorrect

- Make sure you are mining for the whole day without any breaks, that way you will receive the full reward.

#### No referral reward

- *As a referral*: search for you address (public key) history in the [Blockchain Explorer.](https://pulse.enecuum.com/) Click on the microblock hash and make sure that you have a referrer (agent) listed in the "referrer" field. If you don't, back up your private key, reinstall the app, import your private key and enter the referral code again.
- *As an agent*: search for your referral's address (public key) in the [Blockchain Explorer.](https://pulse.enecuum.com/) Click on the microblock hash and make sure it is your address that is listed in the "referrer" field. If that is correct, check that your referral is actually mining.

###  Buying

#### I transferred my ENQ to smart contract instead of Crex24

- There is no way to get tokens from the smart contact address. Unfortunately you have lost your tokens.

## Support

If you can't find your issue or the solution doesn't work for you, please report it to our [Telegram group.](https://t.me/Enecuum_EN)

