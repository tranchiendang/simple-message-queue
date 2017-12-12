**Introduction**:
------------
This project has built for aim is to create a simple message broker with **Redis queue**.

**Usage**:
-----------------------
-	**Producer**: this class will push new message to redis by using *lpush* command, please create object of this class and send any message.
-   **Consumer**: this class extends EventEmitter, and do listen new message from redis, by using *brpop*, then emit message to the all listeners.
-   **Worker**: this example class extends Consumer class above, implement mechanism to receive message and process it, otherwise, we can use it to config our worker can receive new message immediately or later when completed for first come message.

**Example**:
----------
-   Producer: 
```
const producer = new Producer(queueName);

producer.send(params, (err) => {
	if (err) throw err;
	else {
		console.log(`Sent message to queue ${producer.queueName} sucessfully`);
		process.exit(0);
	}
});
```
-   Worker:
```
const worker = new Worker(queueName);

worker.run();
```