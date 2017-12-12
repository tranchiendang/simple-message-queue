const Client = require('./redis_client');

class Producer {
	constructor(queueName){
		this.queueName = queueName;
		this.client = Client.getInstance();
	}
	
	send(message, cb){
		this.client.lpush(this.queueName, message, (err) => {
			if(err) cb(err);
			else {
				cb();
			}
		});
	}
}

module.exports = Producer;