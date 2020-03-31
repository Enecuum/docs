---
sidebarDepth: 2
---

# How to Run PoS Node 

BIT is a test network of the Enecuum blockchain. With BIT, it is possible to test the Trinity protocol (a combination of PoA, PoS and PoW) as well as new functionality such as ETM (Enecuum Token Machine), delegation to PoS nodes (delegated smart stacking), issuing and testing of different types of tokens - mining, NFT and other.

The network is created for public testing for Enecuum community members, partners and developers of decentralized applications. All new features developed by the Enecuum team will be publicly tested in the BIT network and then added to the main network.

## How to Use BIT

Go to [bit.enecuum.com](https://bit.enecuum.com/), download the Android app, create a wallet and save your secret key. Of course, you can also create an account from your computer at [bit-wallet.enecuum.com/login](). Transaction fees are introduced in BIT network, so you need to pay extra 0.01 BIT for every "write access" to the blockchain, like creating PoS-contract or claiming PoS-staking rewards. To pay these fees, you can get BIT coins from [faucet-bit.enecuum.com]() (25 BIT once every 10 minutes per address).

## Staking and PoS Contracts

General idea of staking is depositing (or "delegating" as we call it below) your funds to PoS-nodes to increase their stake power to remain in top 100 wallets (as only the richest wallets are allowed to perform PoS work) for a share from PoS mining rewards. To guarantee it, this share is calculated thoroughly, and in time, PoS contracts are introduced. These contracts control delegated funds in a way that they can be used only for PoS mining and a delegator can always return coins. So if you want to run a PoS node you should create a PoS contract first (make a special transaction). Then, you can run a node - a piece of software associated with the PoS contract.

Think of it this way: when you create a PoS contact, you establish a bank. When you delegate your funds to a PoS contract, you open a bank deposit.

### Creating a PoS Contract

To create a PoS contract, use a [web-wallet](https://bit-wallet.enecuum.com/) interface.

<p align = "center"> <img src="./img/how-to-pos/CreatePoS.png" width="500"> </p>
There two input fields. PoS contract name, which can be left blank, and a PoS contract fee. Contract fee determines the "salary" PoS owner receives for running a server. Choose it wisely, as if you set it too small, you can loose money paying for your sever; but if you set it too high, nobody will delegate funds to you and you can be out of top 100 with no earning at all. This commission percent will be adjustable in the future but with first release it cannot be changed after creation. 

After confirming PoS contract transaction and paying a transaction fee, please wait a bit. You will see a new record in the blockchain. Please find you contract at https://bit.enecuum.com/#!/pos-contracts. If your PoS name is blank, you can find your contract by owner address. It should be the wallet you used to send PoS contract creation transaction.

<p align = "center"> <img src="./img/how-to-pos/FindMyPoScontractHash.png" width="500"> </p>
Click Hash value of your contract to copy your PoS contract hash (address).  In this test case, it is 17d0b43aafb141dbc4e36ae0abefc2b28b3979f96a84cdecf7e26dc25bd1c042, as can be seen in the figure above, marked with red. The hash will be used in the next step.

### Delegating to Your PoS Contract

There is a minimal self-delegated stake to be introduced later. But with initial release, no self-delegating is required. So, **you can skip this step.** Just create a PoS contract and run the node. But if you want to increase your rewards, you can delegate to you own PoS contract in the way any other delegation takes place.

To find out how to delegate your funds, refer to [the according guide.](how-to-delegate)

### Running a PoS Node

Follow the [PoS section](how-to-mine-bit.html#how-to-run-pos) of How to Mine Bit guide. Use the hash from the previous step as the POS_ID parameter. 

### View Your Delegators and Rewards

<p align = "center"> <img src="./img/how-to-pos/PoSContractDelegators.png" width="500"> </p>
<p align = "center"> <img src="./img/how-to-pos/PoSContractRewards.png" width="500"> </p>
At PoS contract page, you can find the amount of delegated coins and rewards that your contract receives. Please note that rewards shown in the Blockchain Explorer are split between PoS owner and its delegators according to your PoS fee value. 