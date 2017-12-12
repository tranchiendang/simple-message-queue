const Consumer = require('./consumer');

class Worker extends Consumer{
	
	constructor(queueName){
		super(queueName);
		this.on('mess', this.onMessage);
		this.isExec = false;
	}
	
	async onMessage(message){
		// do something
		console.log(message);
		this.emit("next");
	}
	
}

module.exports = Worker;