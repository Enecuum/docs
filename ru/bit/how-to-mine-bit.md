# Как майнить BIT

## Что такое BIT

У Enecuum две монеты: *ENQ* и *BIT*. У каждой монеты своё назначение и платформа.

*ENQ* используется в [Neuro Testnet](http://neuro.enecuum.com/) Enecuum; монету можно майнить с помощью мобильного приложения, которое применяет алгоритм Proof-of-Activity. Для ENQ возможен своп (конвертация) в торгуемый ERC20 токен (и наоборот). 

В отличие от ENQ, *BIT* не предназначен для торговли; его единственная цель -- тестирование протокола Trinity: комбинации алгоритмов Proof-of-Activity, Proof-of-Work и Proof-of-Stake. Запустив BIT, Enecuum открывает возможность пользователям попробовать мобильный майнинг, не покупая минимальный стейк, и испытать узлы PoW и PoS перед запуском основной сети Mainnet с торгуемой монетой ENQ.

После успешного запуска майнинг-приложения Enecuum (узла PoA), команда готова поделиться с пользователями узлами PoW. Тестирование проводится на другой платформе, [BIT Testnet](http://bit.enecuum.com/), но после завершения тестов PoW будет доступен на [Neuro Testnet](http://neuro.enecuum.com/) вместе с PoA. И, конечно же, узлы PoS также появятся в скором времени; следите за обновлениями.

Чтобы узнать больше о протоколе Trinity, пожалуйста, прочитайте нашу [Техническую документацию.](https://enecuum.com/documentation)

## Компоненты BIT Testnet

На данный момент распространяются 4 компоненты сети BIT: **Proof-of-Activity,** **Proof-of-Stake,** **Proof-of-Work** и **Fullnode.** У каждого компонента есть свое назначение в сети, но они могут работать отдельно друг от друга.

**Proof-of-Activity** узлы вносят свой вклад в сеть, валидируя m-блоки, в которых хранится информация о транзакциях. PoA распространяется через Enecuum BIT, которое можно скачать на [bit.enecuum.com](https://bit.enecuum.com/). Как и в Enecuum Masternode, для майнинга нужен минимальный стейк, но т.к. BIT - неторгуемая монета, её можно получить через [кран.](https://faucet-bit.enecuum.com/)

**Proof-of-Stake** узлы получают вознаграждения за участие в голосовании PoS-лидера, который публикует макроблоки. В текущей реализации BIT условия для того, чтобы стать PoS, упрощены: достаточно иметь ненулевой баланс и задать произвольную долю ключа. В финальной версии Enecuum кандидат на роль PoS ноды должен входить в топ 100 кошельков по балансу и получить секретную долю ключа от коалиции PoS'ов согласно соответствующему протоколу из Trinity.

**Proof-of-Work** узлы генерируют k-блоки, которые составляют структуру нашего блокчейна, используя мощность процессора вашего ПК. Минимальный стейк не требуется. На данный момент сложность майнинга низкая, из-за чего ресурсы процессора мало используются. Тем не менее, жёсткий диск используется активно -- это необходимо для синхронизации с историей блокчейна.

**Fullnode** состоит из Блокчейн Эксплорера и модуля, который пересчитывает реферальные вознаграждения. Поскольку Блокчейн Эксплорер требует много ресурсов, он был отделен от PoW. Fullnode синхронизируется с [BIT Testnet](http://bit.enecuum.com/).

**PoW+Fullnode** -- это грядущее решение, которое позволит пользователям как майнить BIT, так и использовать Блокчейн Эксплорер. Подробности будут позже!

*Если кратко, то у вас следующий выбор:*

- на мобильном устройстве:
  - используйте PoA;
- на ПК:
  - используйте PoS, если вы "удерживаете" валюту;
  - используйте PoW для майнинга;
  - используйте Fullnode для Блокчейн Эксплорера;
  - используйте PoW+Fullnode для обоих вариантов, если ваш ПК обладает достаточной мощностью.

## Присоединиться к BIT Testnet на мобильных устройствах

### Как запустить PoA

1. Скачайте приложение Enecuum BIT на сайте [bit.enecuum.com](https://bit.enecuum.com/) через меню *Как майнить BIT* -> *Скачать приложение*.
2. Получите монеты BIT через наш [кран.](https://faucet-bit.enecuum.com/)
3. Начинайте майнинг!

## Присоединиться к BIT Testnet на ПК

### Предварительные требования

::: tip ВНИМАНИЕ
PoW и Fullnode могут работать только с публичными (белыми) IP-адресами. IP-адрес может быть как статическим, так и динамическим.
:::

::: danger ПРЕДУПРЕЖДЕНИЕ
В текущей версии узлы стабильно работают только под управлением ОС Linux. На OC Windows и Mac возникают проблемы с сетью.
:::

- Компоненты BIT развёртываются через *Docker* -- платформу, предназначенную для создания, совместного использования и запуска приложений с контейнерами. Поэтому в первую очередь [скачайте Docker](https://www.docker.com/) для вашей ОС, следуя официальным руководствам. Для пользователей Windows мы рекомендуем [Docker Toolbox](https://github.com/docker/toolbox/releases). Пользователи Linux могут воспользоваться [руководством Docker для Ubuntu.](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

- После установки Docker скачайте базу данных, которая будет использоваться в Fullnode, PoW или PoS. **Это обязательный шаг**.

```
docker run -d --name bit_db -e MYSQL_ROOT_PASSWORD=root enecuum/bit_db
```
- Работать с Docker просто. Вам будет достаточно следующих команд:
	- остановить контейнер: `docker stop <имя-контейнера>`; 
	- показать остановленные контейнеры: `docker ps -a`;
	- запустить контейнер: `docker start <имя-контейнера>`;
	- показать активные контейнеры: `docker ps`.
	- показать логи: `docker logs <container-name>`;
	- показать использование диска: `docker system df -v`.


При остановке и перезапуске контейнера скачанные данные не будут утеряны.

### Как запустить PoS

1. Внимательно прочитайте [предварительные требования](how-to-mine-bit.html#предваритеnьные-требования) выше. Убедитесь, что у вас установлена база данных:

   ```
   docker ps
   ```
   
   Должен появиться контейнер *bit_db*:
   
   ```
   CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS             NAMES
   0f59855cf0ea        enecuum/bit_db             "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        33060/tcp         bit_db
   ```
   
   Если вы не видите контейнер в списке, следуйте инструкциям, приведенным в предварительных требованиях.

2. Сгенерируйте публичный и приватный ключ с помощью мобильного приложения или [веб-кошелька BIT](https://bit-wallet.enecuum.com/). Сделайте резервную копию. Вы можете использовать одну и ту же пару ключей для PoA, PoS и PoW.

3. Создать PoS-контракт с помощью [руководства.](how-to-pos.md)

4. Скачайте контейнер PoS:

   ```
   docker run -ti --name bit_pos -p8000:8000 --link bit_db:dbhost -e POS_ID=<хэш_pos_контракта>  -e POS_SHARE=<ваша_секретная_доля>  -e DB_PASS='root' -e DB_PORT=3306 -d  enecuum/bit_pos
   ```

   Измените значение параметра `POS_ID` на хэш вашего PoS контракта, который был сгенерирован в предыдущем пункте, *без* угловых скобок <>. Придумайте секретную последовательность символов, чтобы использовать её в качестве вашей секретной доли PoS. Введите последовательность в параметр `POS_SHARE`. Механизм `POS_SHARE`  на данный момент не используется, но он будет реализован в скором времени с новыми правилами. 

5. Проверьте, работают ли контейнеры:

   ```
   docker ps
   ```

   Должен появиться список с двумя контейнерами: *bit_db* и *bit_pos.*

6. Введите ваш публичный ключ в поле поиска [Bit Testnet](http://bit.enecuum.com/). Вы должны увидеть вознаграждения s-rewards. Ваш PoS-узел получает вознаграждения за участие в голосовании PoS-лидера. Этот процесс хранится в блокчейне в s-блоках. Для проверки баланса PoS вы можете использовать BIT Testnet Blockchain Explorer, вашу Fullnode или [веб-кошелёк BIT](https://bit-wallet.enecuum.com/). Установка завершена. Если в этом есть необходимость, вы можете посмотреть логи, используя команду `docker logs bit_pos`. 

### Как запустить PoW

1. Внимательно прочитайте [предварительные требования](how-to-mine-bit.html#предваритеnьные-требования) выше. Убедитесь, что у вас установлена база данных:

   ```
   docker ps
   ```
   
   Должен появиться контейнер *bit_db*:
   
   ```
   CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS             NAMES
   0f59855cf0ea        enecuum/bit_db             "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        33060/tcp         bit_db
   ```
   
   Если вы не видите контейнер в списке, следуйте инструкциям, приведенным в предварительных требованиях.

2. Сгенерируйте публичный и приватный ключ с помощью мобильного приложения или [веб-кошелька BIT](https://bit-wallet.enecuum.com/). Сделайте резервную копию. Вы можете использовать одну и ту же пару ключей для PoA, PoS и PoW.

3. Скачайте контейнер PoW:

   ```
   docker run -ti --name bit_pow -p8000:8000 --link bit_db:dbhost -e PUB_KEY=<ваш_публичный_ключ> -e DB_PASS='root' -e DB_PORT=3306 -d  enecuum/bit_pow
   ```
   
   Измените значение параметра `PUB-KEY` на публичный ключ, который был сгенерирован в предыдущем пункте, *без* угловых скобок <>.
   
4. Проверьте, работают ли контейнеры:

   ```
   docker ps
   ```

   Должен появиться список с двумя контейнерами: *bit_db* и *bit_pow.*

5. Введите свой публичный ключ в поле поиска [Bit Testnet](http://bit.enecuum.com/). Вы должны увидеть сгенерированные k-блоки. Для проверки баланса PoW вы можете использовать BIT Testnet Blockchain Explorer, вашу Fullnode или [веб-кошелёк BIT](https://bit-wallet.enecuum.com/). Установка завершена. Если в этом есть необходимость, вы можете посмотреть логи, используя команду `docker logs bit_pow`. 

### Как запустить Fullnode

1. Внимательно прочитайте [предварительные требования](how-to-mine-bit.html#предваритеnьные-требования) выше. Убедитесь, что у вас установлена база данных:

   ```
   docker ps
   ```
   
   Должен появиться контейнер *bit_db*:
   
   ```
   CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS                NAMES
   0f59855cf0ea        enecuum/bit_db             "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        33060/tcp            bit_db
   ```
   
   Если вы не видите контейнер в списке, следуйте инструкциям, приведенным в предварительных требованиях.

2. Скачайте контейнер Fullnode:

   ```
   docker run -ti --name bit_fullnode -p8000:8000 -p80:80 --link bit_db:dbhost -e DB_PASS='root' -e DB_PORT=3306 -d  enecuum/bit_fullnode
   ```

3. Проверьте, работают ли контейнеры:

   ```
   docker ps
   ```

   Должен появиться список с двумя контейнерами: *bit_db* и *bit_fullnode.*

4. Введите ваш IP-адрес в адресную строку браузера, чтобы проверить работоспособность Fullnode. Вы должны увидеть Блокчейн эксплорер. Потребуется пара минут для синхронизации с [BIT Testnet](http://bit.enecuum.com/). Вы можете использовать только что установленную Fullnode для проверки баланса вашего PoW. Установка завершена. Если в этом есть необходимость, вы можете посмотреть логи, используя команду `docker logs bit_fullnode`. 

## Обновить компоненты BIT

::: tip СОВЕТ

Пожалуйста, всегда делайте резервную копию вашего закрытого ключа перед обновлением.

:::

### Мобильные устройства

Всякий раз, когда происходит обновление мобильного приложения, должно появиться всплывающее сообщение на главном экране вашего приложения. При нажатии на сообщение откроется ссылка для скачивания в браузере. Загрузите новый установочный файл, откройте его и нажмите кнопку *Обновить*. По завершении процесса вы получите уведомление об успешном обновлении приложения.

**Если обновление не было успешным,** создайте резервную копию своего закрытого ключа, удалите приложение и [загрузите и установите приложение Enecuum BIT](how-to-mine-bit.html#как-запустить-poa) ещё раз.

### ПК

Когда будут выпущены обновления BIT PoS, PoW или Fullnode, старые версии, работающие на вашем компьютере, перестанут работать должным образом из-за проблем совместимости. Выполнение команды `docker logs <container-name>` покажет ошибки -- это означает, что требуется обновление.

Чтобы обеспечить успешное обновление, лучше не только переустановить определенный компонент (PoW, PoS или Fullnode), но и используемую базу данных. В инструкции ниже описано, как это сделать.

1. Остановите и удалите контейнеры: базу данных (*bit_db*) и компонент, который вы хотите обновить (*bit_pow, bit_pos* or/and *bit_fullnode*).  

   ```
   docker stop bit_db
   docker stop <имя-контейнера>
   docker rm bit_db
   docker rm <имя-контейнера>
   ```

   Если вы хотите остановить и удалить все ваши контейнеры, вы можете ввести `$(docker ps -a -q)` вместо имени контейнера. Это упростит процесс.

2. Удалите образы:

   ```
   docker images -a -q
   docker rmi <имя-образа>
   ```

   Здесь первая команда показывает список образов. Найдите те, которые вам нужно удалить, и введите имена во второй команде. Если вы хотите удалить все образы, введите `$ (docker images -a -q)` вместо имени образа.

3. Снова загрузите контейнеры, используя [инструкции выше.](how-to-mine-bit.html#join-bit-testnet-on-pc) В процессе используйте резервные копии ваших ключей для PoW и PoS.