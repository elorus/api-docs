$(function () {
	if($('#swagger-ui-container').length == 1) {
		window.swaggerUi = new SwaggerUi({
			url: swaggerUrl,
			apiKey: "",
			dom_id: "swagger-ui-container",
			supportedSubmitMethods: ["get", "post", "put", "patch", "delete"],
			onComplete: function(swaggerApi, swaggerUi){
				log("Loaded SwaggerUI");
				$('pre code').each(function(i, e) {hljs.highlightBlock(e)});
			},
			onFailure: function(data) {
				log("Unable to Load SwaggerUI");
			},
			docExpansion: "none",
		});
		$('#input_apiKey').change(function() {
			var key = $('#input_apiKey')[0].value;
			log("key: " + key);
			if(key && key.trim() != "") {
				console.log("added key " + key);
				window.authorizations.add("key", new ApiKeyAuthorization("Authorization", "Token " + key, "header"));
			}
		});
		$('#input_orgID').change(function() {
			var key = $('#input_orgID')[0].value;
			log("orgID: " + key);
			if(key && key.trim() != "") {
				console.log("added org " + key);
				window.authorizations.add("org", new ApiKeyAuthorization("X-Elorus-Organization", key, "header"));
			}
		});
		window.authorizations.add("demo", new ApiKeyAuthorization("X-Elorus-Demo", true, "header"));
		window.swaggerUi.load();
	}
});
