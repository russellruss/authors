

function refresh(){
	$("#authorsForm").data('formValidation').destroy();
	getAuthors();
}

function getAuthors() {
	$.ajax({
		type : "POST",
		url : "../authorServlet",
		data : "flag=getARegalias",
		success : function(data) {
			drawAuthors(data.authorsRegalias);
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
							'<td>'+data[i].idAuthorRegalias+'</td>' +
							'<td>'+data[i].authorRegalias+'</td>' + 
							'<td>'+data[i].authorBook+'</td>' +
							'<td>'+data[i].book+'</td>' +
							'<td id="cell'+i+'">'+
								'<div class="form-group has-feedback inputContainer">'+
									'<input id="regalias-'+i+'" name="regalias-'+i+'" class="form-control pseudonymInput" type="text" required data-fv-integer="true" data-fv-between="true" data-fv-between-min="1" data-fv-between-max="100000" data-fv-integer-decimalseparator=" "'+
					                	' data-fv-between-message="Id maestro fuera de rango">'+
									'<a id="btnSave'+i+'" class="btn btn-animated btn-success disabled" onclick="saveIdMaster('+i+','+data[i].idAuthorRegalias+')">'+
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


function saveIdMaster(idRow,idARegalias){
	var idRealAuthor=$("#regalias-"+idRow).val();
	$.ajax({
		type : "POST",
		url : "../authorServlet",
		data : "flag=updateARegalias&idAregalias="+idARegalias+"&idRealAuthor="+idRealAuthor,
		success : function(data) {
			if(data.status=="ok"){
				$("#authorsForm").formValidation('removeField',"regalias-"+idRow);
				$("#cell"+idRow).html("<label>GUARDADO ID:"+idRealAuthor+"</label>");
			}else{
				alert("error al guardar el autor")
			}
			
		},
		error : function(data) {
			alert("error al guardar el autor")
		}
	});
	
//	var pseudonyms = $("#pseudonyms"+id).val().split("|");
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


function validateRealId(){
	$("body").on("input",".pseudonymInput",function(e){
		if($("#authorsForm").data("formValidation").isValidField(""+e.target.id+""))
		{	//ACTIVATE BUTTON
			$("#btnSave"+e.target.id.substring(9)).removeClass( "disabled" );
		}
		else
		{
			$("#btnSave"+e.target.id.substring(9)).addClass( "disabled" );
		}
	});
}


function initDataTable(id){
	$(id).DataTable({
	    responsive: true,
	    paging: true,
	    "aoColumnDefs": 
	    	[  {"aTargets": [ 4 ], "orderable": false },
	    	   { "bSearchable": false, "aTargets": [ 4 ] }
	    	 ],
	    "order": [[ 0, "asc" ]],
	    "language": {
            "url": "../Resources/DataTables/Spanish.json"
        }
	});
}





$( document ).ready(function() {
	getAuthors();
	initDataTable("#authorsTable");
	validateRealId();
	
//	var values = [];
//	for (var ln = 0; ln < authorBluvista.length; ln++) {
//	    var item1 = {
//	         "id":idAuthorBluvista[ln],
//	         "author":authorBluvista[ln],
//	    	 "authorBook":authorBook[ln] 
//	    };
//	    values.push(item1);
//	}
//	$.extend(todo, values);
//	
//	console.debug(todo);
//	//getAuthors();
//	
//	
//	initDataTable("#authorsTable");
//	

});