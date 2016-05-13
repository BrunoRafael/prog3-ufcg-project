(function(){
	const server_url= "http://localhost",
		  port= 8080,
		  libraryc3po_url= server_url + ":" + port,
		  allBooks_url= libraryc3po_url + "/books"

	app.constant("URL", {
		server_url: server_url,
		port: port,
		libraryc3po_url: libraryc3po_url,
		allBooks_url: allBooks_url
	});
})();