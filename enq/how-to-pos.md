# How to Run PoS Node 

With Enecuum, it is possible to use the Trinity protocol (a combination of PoA, PoS and PoW) as well as functionality such as ETM (Enecuum Token Machine), delegation to PoS nodes (delegated smart staking), issuing of different types of tokens - mining, NFT and other.

## Staking and PoS Contracts

General idea of staking is depositing (or "delegating" as we call it below) your funds to PoS-nodes to increase their stake power to remain in top 100 wallets (as only the richest wallets are allowed to perform PoS work) for a share from PoS mining rewards. To guarantee it, this share is calculated thoroughly, and in time, PoS contracts are introduced. These contracts control delegated funds in a way that they can be used only for PoS mining and a delegator can always return coins. 

So if you want to run a PoS node you should create a PoS contract first (make a special transaction). Then, you can run a node - a piece of software associated with the PoS contract.

Think of it this way: when you create a PoS contact, you establish a bank. When you delegate your funds to a PoS contract, you open a bank deposit.

### Create a PoS Contract

To create a PoS contract, use a [web-wallet](https://wallet.enecuum.com/) interface.

<p align = "center"> <img src="./img/how-to-pos/CreatePoS.png" width="500"> </p>

There two input fields. PoS contract name, which can be left blank, and a PoS contract fee. Contract fee determines the "salary" PoS owner receives for running a server. Choose it wisely, as if you set it too small, you can loose money paying for your sever; but if you set it too high, nobody will delegate funds to you and you can be out of top 100 with no earning at all. This commission percent will be adjustable in the future but with first release it cannot be changed after creation. 

After confirming PoS contract transaction and paying a transaction fee, please wait a bit. You will see a new record in the blockchain. Please find you contract at [PoS contracts page](https://pulse.enecuum.com/#!/pos-contracts). If your PoS name is blank, you can find your contract by owner address. It should be the wallet you used to send PoS contract creation transaction.

<p align = "center"> <img src="./img/how-to-pos/FindMyPoScontractHash.png" width="500"> </p>

Click Hash value of your contract to copy your PoS contract hash (address).  In this test case, it is 17d0b43aafb141dbc4e36ae0abefc2b28b3979f96a84cdecf7e26dc25bd1c042, as can be seen in the figure above, marked with red. The hash will be used in the next step.

In order for the contact to become active, you need to fulfill these requirements:

- delegate 25001 ENQ to the created contract from the same wallet (the one used for the contract creation);
- be in the top 100 rating of PoS contracts;
- run the PoS node.

### Delegate to Your PoS Contract

In order for the contract to become active, you need to delegate to it. A minimal self-delegated stake is 25001 ENQ.

To find out how to delegate your funds, refer to [the according guide.](how-to-delegate.md)

## Run a PoS Node

### Prerequisites 

::: tip
Note that PoW and Fullnode can only work with **public IP addresses.** The IP address can be static or dynamic.  
:::

::: tip
Minimal hardware requirements are **1 CPU, 2 GB of RAM, 20 GB of disk**. These are like of a small VPS server offered by the majority of hosting providers. Disk requirements will rise with the size of the blockchain and are estimated as **1 TB** in 1-2 years. Please note this minimal hardware may **not** let your node to achieve maximum performance (and rewards). Recommended hardware requirements will be published after PoS software updates bringing planned optimizations. 
:::

::: danger NOTICE
Current build nodes work stable only on Linux OS. There are network issues running nodes on Windows and Mac.
:::

- components are deployed through *Docker*, a platform meant for building, sharing, and running applications with containers. So first of all, [download Docker](https://www.docker.com/) for your OS using official guides. For Windows users, we recommend [Docker Toolbox](https://github.com/docker/toolbox/releases). Linux users can follow [Docker guide for Ubuntu.](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

- After installing Docker, download the database that will be used in your Fullnode, PoW or PoS. **This is a mandatory step**.

  ```
  docker run -d --name pulse_db -e MYSQL_ROOT_PASSWORD=<your_db_password> enecuum/pulse_db
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

1. Carefully read the [prerequisites](how-to-pos.html#prerequisites) above. Check that you have the database installed:

   ```
   docker ps
   ```

   A container named *pulse_db* should appear:

   ```
   CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS             NAMES
   0f59855cf0ea        enecuum/pulse_db           "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        33060/tcp         pulse_db
   ```

   If you don't see the container in the list, please follow the instructions provided in the prerequisites.

2. Generate public and private keys using Enecuum App or [Web Wallet](https://wallet.enecuum.com/). Do a backup copy. You can use the same key pair for PoA, PoS and PoW.

3. If you have not done it yet, create a PoS contract using the instructions above.

4. Download and run PoS container:

   ```
   docker run -ti --name pulse_pos --link pulse_db:dbhost -p8000:8000 -e POS_ID=<your_pos_id> -e PORT=8000 -e DB_PASS='<your_db_password>' -e PEER='95.216.68.221:8000' -e DB_PORT=3306 -d  enecuum/pulse_pos
   ```

   Change the `<your_pos_id>` parameter value to the PoS contract hash *without* brackets <>. You can use the hash from the previous step as the POS_ID parameter. Type your database password in `<your_db_password>`.

5. Check if your container is running:

   ```
   docker ps
   ```

   A list with *pulse_db* and *pulse_pos* containers should appear.

6. Wait for synchronization to be completed. After that your PoS contract will be displayed as "Active" and its performance will rise with each published s-block. You can compare current block number from the Blockchain Explorer with your nodes current block with `docker logs pulse_pos | grep n: | tail` command. 

## Update the PoS Node

Periodically, the Enecuum team releases PoS node updates. When it happens, your node may stop running. To update your node, please follow the steps.

1. Stop the node:

   ``` 
   docker stop pulse_pos
   ```
   
2. Remove the PoS node container:

   ``` 
   docker rm pulse_pos
   ```
   
3. Remove the PoS node image:
   ``` 
   docker rmi enecuum/pulse_pos
   ```
   
4. Restart the PoS node. Please remember to change the `<your_pos_id>` parameter value to the PoS contract hash and the `<your_db_password>` to your database password:

   ``` 
   docker run -ti --name pulse_pos --link pulse_db:dbhost -p8000:8000 -e POS_ID=<your_pos_id> -e PORT=8000 -e DB_PASS='<your_db_password>' -e PEER='95.216.68.221:8000' -e DB_PORT=3306 -d  enecuum/pulse_pos
   ```
   

You can check your PoS node page in the Blockchain Explorer to see if it is running. It might take a few minutes. If the node is not operating, contact the [support](/faq.md#support).

## Additional Commands

### Erase logs

You might need to erase your PoS logs if you want to free up disk space. 

1. Empty logs of the PoS node:

   ``` 
   docker exec pulse_pos pm2 flush
   ```
   
2. Empty docker logs. Note that this will empty logs for **ALL** docker containers of you server, not only PoS node:

   ``` 
   truncate -s 0 /var/lib/docker/containers/*/*-json.log;
   ```

### Save logs

if there are problems with running the node, you might need to save your docker logs and share them with the Enecuum team. No personal information will be saved.

1. Upload your log file:

   ```
   docker logs pulse_pos > pulse.log && curl -F "file=@pulse.log" https://file.io
   ```

   You should see the following message:

   ```
   {"success":true,"key":"jaoNuk3Q5umj","link":"<LINK_TO_FILE>","expiry":"14 days"}
   ```
   
2. If the team asks you for the logs, send the link to the file.

## View Your Delegators and Rewards

<p align = "center"> <img src="./img/how-to-pos/PoSContractDelegators.png" width="500"> </p>

<p align = "center"> <img src="./img/how-to-pos/PoSContractRewards.png" width="500"> </p>

At the PoS contract page (list of all contracts is [here](https://pulse.enecuum.com/#!/pos-contracts)), you can find the amount of delegated coins and rewards that your contract receives. Please note that rewards shown in the Blockchain Explorer are split between PoS owner and its delegators according to your PoS fee value. 