function test() {
	$.ajax({
		type : "POST",
		url : "authorServlet",
		data : "bandera=0",
		success : function(data) {
			console.debug(data);
		},
		error : function(data) {
		}
	});
}