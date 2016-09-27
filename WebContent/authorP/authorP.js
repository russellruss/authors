
function refresh(){
	$("#authorsForm").data('formValidation').destroy();
	getAuthors();
}

function getAuthors() {
	$.ajax({
		type : "POST",
		url : "../authorServlet",
		data : "flag=seudonimo",
		success : function(data) {
			console.debug(data)
			drawAuthors(data.authorPro);
		},
		error : function(data) {
		}
	});
}

function drawAuthors(data){
	table = $("#authorsTable").DataTable().destroy();
	var tblAuthors = '';
	if (data != "") {
		for ( var i in data) {
			tblAuthors += '<tr role="row" class="odd">' + 
			'<td>'+data[i].idAuthorProduction+'</td>' +
			'<td>'+data[i].lastName+' '+ data[i].mlastName+' '+data[i].firstName+'</td>' + 
			'<td id="cell'+i+'">'+
					'<div class="form-group has-feedback inputContainer">'+
					'<input id="pseudonyms'+i+'" name="pseudonyms'+i+'" class="form-control pseudonymInput" type="text" required >'+
					'<a id="btnSave'+i+'" class="btn btn-animated btn-success disabled" onclick="savePseudonyms('+i+','+data[i].idAuthorProduction+')">'+
						'Guardar'+
						'<i class="fa fa-floppy-o"></i>'+
					'</a>'+	
					'</div>'+
			'</td>' +
		'</tr>';
		}
	}else {
		alert("No existen Autores");
	}
	$('#authorsList').html(tblAuthors);
	$("#authorsForm").formValidation();
	initDataTable("#authorsTable");
}

function initDataTable(id){
	$(id).DataTable({
	    responsive: true,
	    paging: true,
	    "aoColumnDefs": 
	    	[  {"aTargets": [ 2 ], "orderable": false },
	    	   { "bSearchable": false, "aTargets": [ 2 ] }
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

function savePseudonyms(idRow,idAuthorPro){
	var pseudonyms = $("#pseudonyms"+idRow).val();
	$.ajax({
		type : "POST",
		url : "../authorServlet",
		data : "flag=saveSeudonimo&idAproduction="+idAuthorPro+"&seudonimo="+pseudonyms,
		success : function(data) {
			if(data.status=="ok"){
				$("#cell"+idRow).html("<label>GUARDADO</label>");
			}else{
				alert("error al guardar el autor")
			}
		},
		error : function(data) {
			alert("error al guardar el autor")
		}
	});
	
//	console.debug("Guardando:")
//	for(var i = 0;i<pseudonyms.length;i++)
//		if(pseudonyms[i] != "")
//			console.debug(pseudonyms[i]);
//	$("#btnSave"+id).hide();
//	$("#authorsForm").data("formValidation").resetField( "pseudonyms"+id);
//	$("#pseudonyms"+id).hide();
//	
//	$("#cell"+id).append("<label>GUARDADO</label>");
}

$( document ).ready(function() {
	getAuthors();
	validateNickname();
	

});