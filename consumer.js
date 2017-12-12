const EventEmitter = require('events').EventEmitter;
const Client = require('./redis_client');

class Consumer extends EventEmitter{
	constructor(queueName){
		super();
		this.queueName = queueName;
		this.client = Client.getInstance();
	}
	
	getMessage(){
		this.client.BRPOP(this.queueName, 0, (err, payload) => {
			this.emit('mess', payload);
		});
	}
	
	onNext(){
		this.getMessage();
	}
	
	run(){
		this.on('next', this.onNext);
        this.onNext();
	}
	
}

module.exports = Consumer;