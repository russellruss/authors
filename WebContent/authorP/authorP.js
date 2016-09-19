var idAuthorBluvista=[12,16,22,14,3,16,69,86,96];
var authorBook=["LEIGH","MCCAUGHREAN","BERUMEN","ARVIZUR","MARTINEZ","URIBE","AYALA","MORALES","ANTOINE DE SAINT EXUPERY"];
var authorBluvista=["LEIGH","MCCAUGHREAN","BERUMEN","ARVIZUR","MARTINEZ","URIBE","AYALA","MORALES","ANTOINE DE SAINT EXUPERY"];

function refresh(){
	$("#authorsForm").data('formValidation').destroy();
	getAuthors();
}

function getAuthors() {
//	$.ajax({
//		type : "POST",
//		url : "",
//		data : "bandera=0",
//		success : function(data) {
////		console.debug(data);
			drawAuthors();
//		},
//		error : function(data) {
//			alert('Se encontro un error al cargar las obras nuevas');
//		}
//	});
}

function drawAuthors(){
	var tblAuthors = '';
//	showNewBooks();
//	if (data != "") {
//		for ( var i in data) {
		for (var i = 1; i  < 25; i++) {
			var id = idAuthorBluvista[Math.floor(Math.random() * (3 - 0 + 1)) + 0];
			tblAuthors += '<tr role="row" class="odd">' + 
										'<td>'+id+'</td>' +
										'<td>'+authorBluvista[Math.floor(Math.random() * (3 - 0 + 1)) + 0]+'</td>' + 
										'<td>'+authorBook[Math.floor(Math.random() * (3 - 0 + 1)) + 0]+'</td>' +
										'<td id="cell'+i+'">'+
												'<div class="form-group has-feedback inputContainer">'+
												'<input id="pseudonyms'+i+'" name="pseudonyms'+i+'" class="form-control pseudonymInput" type="text" maxlength="250" required size="45">'+
												'<a id="btnSave'+i+'" class="btn btn-animated btn-success disabled" onclick="savePseudonyms('+i+')">'+
													'Guardar'+
													'<i class="fa fa-floppy-o"></i>'+
												'</a>'+	
												'</div>'+
										'</td>' +
									'</tr>';
		}
//	} else {
//		alert("No existen obras nuevas");
//	}
	$('#authorsList').html(tblAuthors);
	$("#authorsForm").formValidation();
}

function initDataTable(id){
	$(id).DataTable({
	    responsive: true,
	    paging: true,
	    "aoColumnDefs": 
	    	[  {"aTargets": [ 3 ], "orderable": false },
	    	   { "bSearchable": false, "aTargets": [ 3 ] }
	    	 ],
	    "order": [[ 0, "asc" ]],
	    "language": {
            "url": "../Resources/DataTables/Spanish.json"
        }
	});
}

function validateNickname(){
	$("body").on("input",".pseudonymInput",function(e){
		if($("#authorsForm").data("formValidation").isValidField(""+e.target.id+""))
		{	//ACTIVATE BUTTON
			$("#btnSave"+e.target.id.substring(10)).removeClass( "disabled" );
			
		}
		else
			$("#btnSave"+e.target.id.substring(10)).addClass( "disabled" );
	});
}

function savePseudonyms(id){
	var pseudonyms = $("#pseudonyms"+id).val().split("|");
	console.debug("Guardando:")
	for(var i = 0;i<pseudonyms.length;i++)
		if(pseudonyms[i] != "")
			console.debug(pseudonyms[i]);
	$("#btnSave"+id).hide();
	$("#authorsForm").data("formValidation").resetField( "pseudonyms"+id);
	$("#pseudonyms"+id).hide();
	
	$("#cell"+id).append("<label>GUARDADO</label>");
}

$( document ).ready(function() {
	getAuthors();
	initDataTable("#authorsTable");
	validateNickname();
	

});