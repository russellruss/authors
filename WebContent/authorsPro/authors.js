var nameBook=["EL PRINCIPITO","GRANDES PENSADORES DE MATEMATICAS","ALEGRIAS Y GOZOS DE LOS PADRES ADOPTIVOS","PSICOMETRIA APLICADA ","AUTOMOTIVACION","TESORO DE CUENTOS DE HADAS EL REGALO PERFECTO PARA NINOS DE TODAS LAS EDADES","ANALGESIA Y ANESTESIA EN ODONTOLOGIA","MANUAL DE ADMINISTRACION Y GASTRONOMIA","LO ESENCIAL DE LA ADMINISTRACION TODO LO QUE NECESITA PARA TRIUNFAR"];
var idAuthorProduction=[12,16,22,14,3,16,69,86,96];
var nameAuthorProduction=["LEIGH","MCCAUGHREAN","BERUMEN","ARVIZUR","MARTINEZ","URIBE","AYALA","MORALES","ANTOINE DE SAINT EXUPERY"];

function refresh(){
	$("#authorsForm").data('formValidation').destroy();
	getAuthors();
}

function getAuthors() {
	$.ajax({
		type : "POST",
		url : "../authorServlet",
		data : "flag=getAProduction",
		success : function(data) {
			console.debug(data)
			drawAuthors(data.BookA);
		},
		error : function(data) {
		}
	});
}

function drawAuthors(data){
//	console.debug(data)
	var tblAuthors = '';
	if (data != "") {
		for ( var i in data) {
			tblAuthors += '<tr role="row" class="odd">' + 
										'<td>'+data[i].authorproduction.idAuthorProduction+'</td>' +
										'<td>'+data[i].authorproduction.lastName+' '+ data[i].authorproduction.mlastName+' '+data[i].authorproduction.firstName+'</td>' + 
										'<td>'+data[i].book.title+'</td>' +
										'<td id="cell'+i+'">'+
												'<div class="form-group has-feedback inputContainer">'+
												'<input id="pseudonyms'+i+'" name="pseudonyms'+i+'" class="form-control pseudonymInput" type="text" maxlength="250" required size="3" data-fv-integer="true" data-fv-integer-decimalseparator=" ">'+
												'<a id="btnSave'+i+'" class="btn btn-animated btn-success disabled" onclick="savePseudonyms('+i+','+data[i].idBookAuthor+')">'+
													'Guardar'+
													'<i class="fa fa-floppy-o"></i>'+
												'</a>'+	
												'</div>'+
										'</td>' +
									'</tr>';
		}
	} else {
		alert("No existen obras nuevas");
	}
	$('#authorsList').html(tblAuthors);
	initDataTable("#authorsTable");
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

function savePseudonyms(idRow,idBookA){
	var idRealAuthor = $("#pseudonyms"+idRow).val();
	alert(idRealAuthor)
	$.ajax({
		type : "POST",
		url : "../authorServlet",
		data : "flag=updateBookA&idBookA="+idBookA+"&idRealAuthor="+idRealAuthor,
		success : function(data) {
			if(data.status=="ok"){
				$("#cell"+idRow).html("<label>GUARDADO ID:"+idRealAuthor+"</label>");
			}else{
				alert("error al guardar el autor")
			}
			
		},
		error : function(data) {
			alert("error al guardar el autor")
		}
	});
	
//	console.debug("guardando "+ author);
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