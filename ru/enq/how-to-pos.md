# Как запустить PoS узел

Вместе с Enecuum вы можете использовать протокол Trinity (комбинацию PoA, PoS и PoW узлов) наряду с ETM (Enecuum Token Machine), делегировать средства на PoS узлы (смарт стейкинг), выпускать различные виды токенов – майнинговые, с нефиксированной эмссией и другие.

## Стейкинг и PoS-контракты

Общая идея стейкинга состоит в том, чтобы вносить (или «делегировать») ваши средства на PoS-узлы, чтобы увеличить их долю («stake power»), чтобы оставаться в топ-100 кошельков (поскольку только самые богатые кошельки могут выполнять работу PoS) для получения части наград от PoS-майнинга. Чтобы гарантировать это, эта часть награды рассчитывается полностью, и со временем вводятся PoS-контракты. Эти контракты контролируют делегированные средства таким образом, что их можно использовать только для PoS-майнинга, а делегатор всегда может вернуть монеты.

Поэтому, если вы хотите запустить PoS-узел, вы должны сначала создать PoS-контракт (сделать специальную транзакцию). Затем вы можете запустить узел - часть программного обеспечения, связанную с контрактом PoS.

Можете представить это так: когда вы создаете PoS-контакт, вы основываете банк. Когда вы делегируете свои средства на PoS-контракт, вы создаёте вклад в банке.

### Создание PoS-контракта

Для создания PoS-контракта используйте интерфейс [веб-кошелька](https://wallet.enecuum.com/).

<p align = "center"> <img src="./img/how-to-pos/CreatePoS.png" width="500"> </p>

В интерфейсе два поля ввода: название PoS-контракта, которое можно оставить пустым, и комиссия за PoS-контракт. Комиссия за контракт определяет, какую «зарплату» получает владелец PoS за работу сервера. Тщательно выберите это значение, т.к. если оно будет установлено слишком маленьким, вы можете потерять деньги, платя за ваш сервер; но если вы установите его слишком высоким, никто не будет делегировать вам средства, и вы можете пропасть из списка топ-100 кошельков без какого-либо заработка. Этот процент комиссии будет изменяться в будущем, но в первом обновлении системы он не может быть изменен после создания.

После подтверждения транзакции PoS-контракта и оплаты комиссии за транзакцию, пожалуйста, подождите немного. Вы увидите новую запись в блокчейне. Пожалуйста, найдите ваш контракт на [странице PoS-контрактов](https://pulse.enecuum.com/#!/pos-contracts). Если название PoS отсутствует, вы можете найти свой контракт по адресу владельца. Это должен быть кошелек, который вы использовали для отправки транзакции создания контракта PoS.

<p align = "center"> <img src="./img/how-to-pos/FindMyPoScontractHash.png" width="500"> </p>

Нажмите на хэш вашего контракта и скопируйте его. В случае изображения выше, хэшем является последовательность 17d0b43aafb141dbc4e36ae0abefc2b28b3979f96a84cdecf7e26dc25bd1c042, которая обозначена красным цветом. Этот хэш будет использован в следующем шаге.

Чтобы ваш PoS-контракт стал активным, необходимо выполнить 3 условия:

- на счету PoS-контракта должно быть 25001 ENQ, делегированных с того же кошелька, с которого создавался PoS-контракт;
- PoS-контракт должен входить в топ-100 самых богатых контрактов;
- должен быть запущен узел PoS с указанием id вашего PoS-контракта

### Делегирование PoS-контракту


В следующих обновлениях появится минимальный стейк для самоделегирования. Но на данный момент делегировать собственные средства на свой контракт необязательно. Итак, **вы можете пропустить этот шаг.** Просто создайте контракт PoS и запустите узел. Но если вы хотите увеличить ваши вознаграждения, вы можете делегировать свой собственный PoS-контракт так же, как и любой другой.

Чтобы узнать, как делегировать свои средства, обратитесь к [соответствующему руководству.](how-to-delegate.md)

### Запуск PoS-узла

#### Предварительные требования

::: tip ВНИМАНИЕ
PoW и Fullnode могут работать только с **публичными (белыми) IP-адресами**. IP-адрес может быть как статическим, так и динамическим.
:::

::: danger ПРЕДУПРЕЖДЕНИЕ
В текущей версии узлы стабильно работают только под управлением ОС Linux. На OC Windows и Mac возникают проблемы с сетью.
:::

- Компоненты BIT развёртываются через *Docker* -- платформу, предназначенную для создания, совместного использования и запуска приложений с контейнерами. Поэтому в первую очередь [скачайте Docker](https://www.docker.com/) для вашей ОС, следуя официальным руководствам. Для пользователей Windows мы рекомендуем [Docker Toolbox](https://github.com/docker/toolbox/releases). Пользователи Linux могут воспользоваться [руководством Docker для Ubuntu.](https://docs.docker.com/install/linux/docker-ce/ubuntu/)

- После установки Docker скачайте базу данных, которая будет использоваться в Fullnode, PoW или PoS. **Это обязательный шаг**.

```
docker run -d --name pulse_db -e MYSQL_ROOT_PASSWORD=<ваш_пароль_к_базе> enecuum/pulse_db
```
- Работать с Docker просто. Вам будет достаточно следующих команд:
	- остановить контейнер: `docker stop <имя-контейнера>`; 
	- показать остановленные контейнеры: `docker ps -a`;
	- запустить контейнер: `docker start <имя-контейнера>`;
	- показать активные контейнеры: `docker ps`.
	- показать логи: `docker logs <container-name>`;
	- показать использование диска: `docker system df -v`.


При остановке и перезапуске контейнера скачанные данные не будут утеряны.

#### Как запустить PoS

1. Внимательно прочитайте [предварительные требования](how-to-pos.html#предваритеnьные-требования) выше. Убедитесь, что у вас установлена база данных:

   ```
   docker ps
   ```
   
   Должен появиться контейнер *pulse_db*:
   
   ```
   CONTAINER ID        IMAGE                      COMMAND                  CREATED             STATUS              PORTS             NAMES
   0f59855cf0ea        enecuum/pulse_db             "docker-entrypoint.s…"   6 seconds ago       Up 5 seconds        33060/tcp         pulse_db
   ```
   
   Если вы не видите контейнер в списке, следуйте инструкциям, приведенным в предварительных требованиях.

2. Сгенерируйте публичный и приватный ключ с помощью мобильного приложения или [веб-кошелька](https://wallet.enecuum.com/). Сделайте резервную копию. Вы можете использовать одну и ту же пару ключей для PoA, PoS и PoW.

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

### Просмотр делегаторов и наград

<p align = "center"> <img src="./img/how-to-pos/PoSContractDelegators.png" width="500"> </p>

<p align = "center"> <img src="./img/how-to-pos/PoSContractRewards.png" width="500"> </p>

На странице контракта PoS вы можете найти количество делегированных монет и вознаграждений, которые получает ваш контракт. Обратите внимание, что вознаграждения, показанные в Blockchain Explorer, распределяются между владельцем PoS и его делегаторами в соответствии с вашей комиссией  контракта.