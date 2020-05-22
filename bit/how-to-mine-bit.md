# How to Mine BIT

## What is BIT

Currently, Enecuum offers two coins: *ENQ* and *BIT*. Each coin has its own purpose and platform. 

*ENQ* is used in Enecuum's [Neuro Testnet](http://neuro.enecuum.com/) and can be mined in our mobile mining application utilizing the Proof-of-Activity algorithm. ENQ can be swapped to a tradable ERC20 token and vice versa. 

Unlike ENQ, *BIT* is not intended for trading; its sole purpose is testing of Enecuum's Trinity protocol: a combination of Proof-of-Activity, Proof-of-Work, and Proof-of-Stake algorithms. By launching BIT, Enecuum allows users to experience mobile mining without buying minimal stake and to try out PoW and PoS nodes before the Mainnet release with a tradable ENQ. 

After the successful launch of Enecuum's mining app, i.e., PoA node, the team is ready to share with the public the PoW nodes. The testing is done on another platform, [BIT Testnet](http://bit.enecuum.com/), but after the tests are complete, PoW will be available on [Neuro Testnet](http://neuro.enecuum.com/) alongside PoA. And of course, PoS nodes will be shared as well; stay tuned for the updates.

To learn more about Enecuum's Trinity protocol, please read our [Tech paper.](https://enecuum.com/documentation)

## BIT Testnet Components

Currently, we deploy four components of the BIT Network:  **Proof-of-Activity,** **Proof-of-Stake,** **Proof-of-Work,** and **Fullnode.** Each of them has a specific purpose in the network, and the components can also work separately. 

**Proof-of-Activity** nodes contribute to the network by validating m-blocks containing transactions. PoA is distributed through Enecuum BIT App which can be downloaded at [bit.enecuum.com](https://bit.enecuum.com/). As usual, it requires a minimal stake to start mining; but since BIT is not tradable, you can get it with our [faucet.](https://faucet-bit.enecuum.com/)

**Proof-of-Stake** nodes receive rewards for voting for a PoS leader that publishes macroblocks. In our current BIT implementation, the conditions for becoming a PoS node are simplified -- all you need is to have is a non-zero balance and specify an arbitrary secret PoS share. In the final protocol version, a PoS candidate is supposed to be in the top 100 wallets list and get a secret PoS share from a PoS coalition according to the corresponding Trinity protocol.

**Proof-of-Work** nodes generate k-blocks, which are the basic structure of our blockchain, with your PC's CPU power. No minimal stake is required. Currently, BIT PoW mining difficulty is low, and as a result, CPU resources are not used a lot. But HDD usage is still high, as it is required to sync with the blockchain history. 

**Fullnode** consists of the Blockchain Explorer and a module that recalculates referral rewards. Since the Blockchain Explorer demands a lot of resources, it was separated from PoW. Fullnode synchronizes with [BIT Testnet](http://bit.enecuum.com/).

**PoW+Fullnode** is an upcoming solution that allows users to both mine BIT and use Blockchain Explorer. More details on that later!

*In short, here are your options:*

- on your mobile device:
  - run PoA;
- on your PC:
  - run PoS if you are a holder;
  - run PoW to mine;
  - run Fullnode to use Blockchain Explorer;
  - run PoW+Fullnode to mine and use Blockchain Explorer if your PC is powerful enough.

## Join BIT Testnet on Mobile

### How to Run PoA

1. Download Enecuum BIT App via [bit.enecuum.com](https://bit.enecuum.com/) using *How to Mine Bit* -> *Download App* menu.
2. Get BIT coins using our [faucet.](https://faucet-bit.enecuum.com/)
3. Start mining!

## Join BIT Testnet on PC

### Prerequisites 

::: tip
Note that PoW and Fullnode can only work with **public IP addresses.** The IP address can be static or dynamic.
:::

::: danger NOTICE
Current build nodes work stable only on Linux OS. There are network issues running nodes on Windows and Mac.
:::

- BIT components are deployed through *Docker*, a platform meant for building, sharing, and running applications with containers. So first of all, [download Docker](https://www.docker.com/) for your OS using official guides. For Windows users, we recommend [Docker Toolbox](https://github.com/docker/toolbox/releases). Linux users can follow [Docker guide for Ubuntu.](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

- After installing Docker, download the database that will be used in your Fullnode, PoW or PoS. **This is a mandatory step**.

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

### How to Run PoS

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

2. Generate public and private keys using Enecuum App or [BIT Web Wallet](https://bit-wallet.enecuum.com/). Do a backup copy. You can use the same key pair for PoA, PoS and PoW.

3. Create a PoS contract via web-wallet as [this guide states](how-to-pos.md).

4. Download PoS container:

   ```
   docker run -ti --name bit_pos -p8000:8000 --link bit_db:dbhost -e POS_ID=<your_pos_contract_hash>  -e POS_SHARE=<your_secret_pos_share>  -e DB_PASS='root' -e DB_PORT=3306 -d  enecuum/bit_pos
   ```

   Change the `POS_ID` parameter value to the PoS contract hash *without* brackets <>.  Choose a secret combination of characters and use it for your `POS_SHARE` parameter. `POS_SHARE` mechanism is not used and will be turned on later with new rules for receiving your `POS_SHARE`. 

5. Check if your container is running:

   ```
   docker ps
   ```

   A list with *bit_db* and *bit_pos* containers should appear.

6. Search for your public key in the [Bit Testnet](http://bit.enecuum.com/). You should be able to see new S-rewards. These are the rewards for your PoS node taking part in voting for a PoS leader. This process is stored in the blockchain in s-blocks. You can use BIT Testnet Blockchain Explorer, your Fullnode or [BIT Web Wallet](https://bit-wallet.enecuum.com/) to check your PoS balance. The installation is finished. If you need to, check logs using `docker logs bit_pos` command. 


### How to Run PoW

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

2. Generate public and private keys using Enecuum App or [BIT Web Wallet](https://bit-wallet.enecuum.com/). Do a backup copy. You can use the same key pair for PoA, PoS and PoW.

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

### How to Run Fullnode

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

## Update BIT Components

::: tip

Please, always make sure to back up your private key before updating.

:::

### Mobile

Whenever there's a mobile app update, a pop-up message should appear on the application's main screen. Clicking the message would open a download link in your browser. Download the new installation file, open it and tap the *Update* button. When the process is finished, you would get a notification about a successful application update.

**If the update wasn't successful,** back up your private key, delete the app, and [download and install Enecuum BIT app](how-to-mine-bit.html#how-to-run-poa) again.

### PC

When the BIT PoS, PoW or Fullnode updates are released, the old versions running on your PC will stop working properly because of compatibility issues. Running `docker logs <container-name>` command would show errors -- that is your indication that the update is required.

To ensure a successful update, it is best to not only reinstall the specific component (PoW, PoS or Fullnode), but also to reinstall the database it uses. The instructions below explain how to do it.

1. Stop and remove containers: the database (*bit_db*) and the component you wish to update (*bit_pow, bit_pos* or/and *bit_fullnode*).  

   ```
   docker stop bit_db
   docker stop <container-name>
   docker rm bit_db
   docker rm <container-name>
   ```

   If you want to stop and remove all of your containers, you can enter `$(docker ps -a -q)` instead of a container name. This will make the process more efficient.

2. Remove images:

   ```
   docker images -a -q
   docker rmi <image-name>
   ```

   Here, the first command shows the list of images. Search for the ones you need to remove and enter the names in the second command. If you wish to remove all of them, enter `$(docker images -a -q)` instead of an image name.

3. Download the containers again using the [instructions above.](how-to-mine-bit.html#join-bit-testnet-on-pc) In the process, use the back-up copies of your keys for PoW and PoS.