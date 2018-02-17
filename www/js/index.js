var app = {
	initialize: function() {
		this.bindEvents();
	}
	
	bindEvents: function() {
		document.addEventListener('deviceready', this.onDeviceReady, false);
	}
	
	onDeviceReady: function() {
		app.receivedEvent('deviceready');
	},

	recievedEvent: function(id) {
		var parentElement = document.getElementById(id);
		var listeningElement = parentElement.querySelector('.listening');
		var receivedElement = parentElement.querySelector('.received');
		console.log('Received Event: ' + id);
	}
};