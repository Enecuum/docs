---
sidebarDepth: 2
---

# How to Mine BIT

## What is BIT

Currently, Enecuum offers two coins: *ENQ* and *BIT*. Each coin has its own purpose and platform. 

*ENQ* is used in Enecuum's [Neuro Testnet](http://neuro.enecuum.com/) and can be mined in our mobile mining application utilizing the Proof-of-Activity algorithm. ENQ can be swapped to a tradable ERC20 token and vice versa. 

Unlike ENQ, *BIT* is not intended for trading; its sole purpose is testing of Enecuum's Trinity protocol: a combination of Proof-of-Activity, Proof-of-Work, and Proof-of-Stake algorithms. By launching BIT, Enecuum allows users to experience mobile mining without buying minimal stake and to try out PoW and PoS nodes before the Mainnet release with a tradable ENQ. 

After the successful launch of Enecuum's mining app, i.e., PoA node, the team is ready to share with the public the PoW nodes. The testing is done on another platform, [BIT Testnet](http://bit.enecuum.com/), but after the tests are complete, PoW will be available on [Neuro Testnet](http://neuro.enecuum.com/) alongside PoA. And of course, PoS nodes will be shared as well; stay tuned for the updates.

To learn more about Enecuum's Trinity protocol, please read our [Tech paper.](https://enecuum.com/Documentation.html)

## BIT Testnet Components

Currently, we deploy three components of the BIT Network:  **Proof-of-Activity,** **Proof-of-Work,** and **Fullnode.** Each of them has a specific purpose in the network, and the components can also work separately. 

**Proof-of-Activity** is [Enecuum BIT App.](https://app.enecuum.com/bit/bit-app-v.0.11.3.apk) The only difference from Enecuum Masternode App is a little redesign to distinguish our two applications. As usual, it requires a minimal stake to start mining; but since BIT is not tradable, you can get it with our [faucet.](https://faucet-bit.enecuum.com/) PoA contributes to the network by validating m-blocks.

**Proof-of-Work** is self-explanatory; it generates k-blocks with your PC's CPU power. No minimal stake is required.

**Fullnode** consists of the Blockchain Explorer and a module that recalculates referral rewards. Since the Blockchain Explorer demands a lot of resources, it was separated from PoW. Fullnode synchronizes with [BIT Testnet](http://bit.enecuum.com/).

**PoW+Fullnode** is an upcoming solution that allows users to both mine BIT and use Blockchain Explorer. More details on that later!

*In short, here are your options:*

- on your mobile device:
  - run PoA;

- on your PC:
  - run PoW to mine;
  - run Fullnode to use Blockchain Explorer;
  - run PoW+Fullnode to do both if your PC is powerful enough.

## How to Join BIT Testnet

### Mobile

#### How to Run PoA

1. Download [Enecuum BIT App.](https://app.enecuum.com/bit/bit-app-v.0.11.3.apk)
2. Get BIT coins using our [faucet.](https://faucet-bit.enecuum.com/)
3. Start mining!

### PC

#### Prerequisites 

::: tip
Note that PoW and Fullnode can only work with **public IP addresses.** The IP address can be static or dynamic.
:::

::: danger NOTICE
Current buid nodes work stable only on Linux OS. There are network issues running nodes on Windows and Mac.
:::

- BIT components are deployed through *Docker*, a platform meant for building, sharing, and running applications with containers. So first of all, [download Docker](https://www.docker.com/) for your OS using official guides. For Windows users, we recommend [Docker Toolbox](https://github.com/docker/toolbox/releases). Linux users can follow [Docker guide for Ubuntu.](https://docs.docker.com/install/linux/docker-ce/ubuntu/)
- After installing Docker, download the database that will be used in your Fullnode or PoW. **This is a mandatory step**.
```
docker run -d --name bit_db -e MYSQL_ROOT_PASSWORD=root enecuum/bit_db
```
- Working with Docker is easy. The following list of commands should be enough for basic use:
	- stop the container: `docker stop <container-name>`;
	- show stopped containers: `docker ps -a`;
	- start the container: `docker start <container-name>`; 
	- show active containers: `docker ps`;
	- show logs: `docker logs <container-name>`;
	- show Docker disk usage: `docker system df -v`.
	
You can stop/restart the container without worrying; no data will be lost.
	
#### How to Run PoW

::: tip

Currently, BIT PoW mining difficulty is low, and as a result, CPU resources are not used a lot. But HDD usage is still high; it is required to sync with the blockchain history. 

:::

1. Carefully read the [prerequisites](how-to-mine-bit.html#prerequisites) above. Check that you have the database installed:
```
docker ps
```
A container named *bit_db* should appear:
```
CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS             NAMES
0f59855cf0ea        enecuum/bit_db             "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        33060/tcp         bit_db
```
If you don't see the container in the list, please follow the instructions provided in the prerequisites.

2. Generate public and private keys using Enecuum App or [BIT Web Wallet](https://bit-wallet.enecuum.com/). Do a backup copy. 

3. Download PoW container:
```
docker run -ti --name bit_pow -p8000:8000 --link bit_db:dbhost -e PUB_KEY=<your_pub_key> -e DB_PASS='root' -e DB_PORT=3306 -d  enecuum/bit_pow
```
Change the `PUB-KEY` parameter value to the generated public key *without* brackets <>. 

4. Check if your container is running:
```
docker ps
```
A list with *bit_db* and *bit_pow* containers should appear.

5. Search for your public key in the [Bit Testnet](http://bit.enecuum.com/). You should be able to see new k-blocks generating. You can use BIT Testnet Blockchain Explorer, your Fullnode or [BIT Web Wallet](https://bit-wallet.enecuum.com/) to check your PoW balance. The installation is finished. If you need to, check logs using `docker logs bit_pow` command. 

#### How to Run Fullnode

1. Carefully read the [prerequisites](how-to-mine-bit.html#prerequisites) above. Check that you have the database installed:
```
docker ps
```
A container named *bit_db* should appear:
```
CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS                NAMES
0f59855cf0ea        enecuum/bit_db             "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        33060/tcp            bit_db
```
If you don't see the container in the list, please follow the instructions provided in the prerequisites.

2. Download Fullnode container:
```
docker run -ti --name bit_fullnode -p8000:8000 -p80:80 --link bit_db:dbhost -e DB_PASS='root' -e DB_PORT=3306 -d  enecuum/bit_fullnode
```
3. Check if your container is running:
```
docker ps
```
A list with *bit_db* and *bit_fullnode* containers should appear.

4. Enter your IP address in a browser to check if your Fullnode works. You should be able to see a Blockchain Explorer running. It should take a few minutes to synchronize with [BIT Testnet](http://bit.enecuum.com/). You can use your newly installed Fullnode to check your PoW balance. The installation is finished. If you need to, check logs using `docker logs bit_fullnode` command.
