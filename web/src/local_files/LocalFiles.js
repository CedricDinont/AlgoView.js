AlgoViewApp.prototype.loadFile = function(fileName) {
	var self = this;
/*	$j.ajax({
   		type: "POST",
   		data: {
			fileText: fileName,
		},
		url: "local_files/load_local_program.php",
		error: function() {
			
		},
		success: function(messageText) {
			var message;
			console.log(messageText);
			try {
				message = JSON.parse(messageText);
			} catch (exception) {
				console.log(exception);
				return;
			}
			self.executeCommand(message);
		},
		dataType: "text",
	}); */
}

jQuery.download = function(url, data, method) {
	//url and data options required
	if( url && data ){ 
		//data can be string of parameters or array/object
		data = typeof data == 'string' ? data : jQuery.param(data);
		//split params into form inputs
		var inputs = '';
		jQuery.each(data.split('&'), function(){ 
			var pair = this.split('=');
			inputs+='<input type="hidden" name="'+ pair[0] +'" value="'+ pair[1] +'" />'; 
		});
		//send request
		jQuery('<form action="'+ url +'" method="'+ (method||'post') +'">'+inputs+'</form>')
		.appendTo('body').submit().remove();
	};
};

AlgoViewApp.prototype.downloadFile = function() {
	var self = this;
	
	// On met ce flag à faux avant de lancer la requête sinon Firefox appelle window.onbeforeunload
	this.mainFrame.setProgramTextChanged(false);
	
	$j.download("local_files/download_program.php", 
		{
			fileName: Ext.getCmp('editor-1').title, 
			fileContent: self.mainFrame.editors[0].editor.getSession().getDocument().getValue(),
		}, 
		"POST");
}
