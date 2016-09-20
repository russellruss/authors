

function refresh(){
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
//	console.debug(data);
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
									'<input id="regalias-'+i+'" name="regalias-'+i+'" class="form-control pseudonymInput" type="text" required data-fv-integer="true" min="1" max="100000">'+
									'<a id="btnSave'+i+'" class="btn btn-animated btn-success " onclick="saveIdMaster('+i+','+data[i].idAuthorRegalias+')">'+
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
}


function saveIdMaster(idRow,idARegalias){
	var idRealAuthor=$("#regalias-"+idRow).val();
	$.ajax({
		type : "POST",
		url : "../authorServlet",
		data : "flag=updateARegalias&idAregalias="+idARegalias+"&idRealAuthor="+idRealAuthor,
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
			$("#btnSave"+e.target.id.substring(10)).removeClass( "disabled" );
			
		}
		else
			$("#btnSave"+e.target.id.substring(10)).addClass( "disabled" );
	});
}


function initDataTable(id){
	// Set up the editor
    editor = new $.fn.dataTable.Editor( {
    	table: "#authorsTable",
        idSrc:  "id",
        fields: [
            {
                label: "id Autor Bluvista:",
                name: "id"
            }, {
                label: "Autor Bluvista:",
                name: "author"
            },{
                label: "Autor obra:",
                name: "authorBook"
            }
        ],
        ajax: function ( method, url, d, successCallback, errorCallback ) {
            var output = { data: [] };
 
            if ( d.action === 'create' ) {
                // Create new row(s), using the current time and loop index as
                // the row id
                var dateKey = +new Date();
 
                $.each( d.data, function (key, value) {
                    var id = dateKey+''+key;
 
                    value.DT_RowId = id;
                    todo[ id ] = value;
                    output.data.push( value );
                } );
            }
            else if ( d.action === 'edit' ) {
                // Update each edited item with the data submitted
                $.each( d.data, function (id, value) {
                    value.DT_RowId = id;
                    alert(id);
                    $.extend( todo[ id ], value );
                    output.data.push( todo[ id ] );
                } );
            }
            else if ( d.action === 'remove' ) {
                // Remove items from the object
                $.each( d.data, function (id) {
                    delete todo[ id ];
                } );
            }
 
            // Store the latest `todo` object for next reload
            localStorage.setItem( 'todo', JSON.stringify(todo) );
 
            // Show Editor what has changed
            successCallback( output );
        },
    
    
    } );
	$(id).DataTable({
		dom: "Bfrtip",
        data: $.map( todo, function (value, key) {
            return value;
        } ),
        columns: [
            { data: "id"},
            { data: "author"},
            { data: "authorBook" }
        ],
        select: true,
        buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]
	});
}





$( document ).ready(function() {
	
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