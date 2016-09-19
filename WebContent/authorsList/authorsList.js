var idAuthorBluvista=[12,16,22,14,3,16,69,86,96];
var authorBook=["LEIGH","MCCAUGHREAN","BERUMEN","ARVIZUR","MARTINEZ","URIBE","AYALA","MORALES","ANTOINE DE SAINT EXUPERY"];
var authorBluvista=["LEIGH","MCCAUGHREAN","BERUMEN","ARVIZUR","MARTINEZ","URIBE","AYALA","MORALES","ANTOINE DE SAINT EXUPERY"];
var editor; 

var todo = {
};


function refresh(){
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
									'</tr>';
		}
//	} else {
//		alert("No existen obras nuevas");
//	}
	$('#authorsList').html(tblAuthors);
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
	
	var values = [];
	for (var ln = 0; ln < authorBluvista.length; ln++) {
	    var item1 = {
	         "id":idAuthorBluvista[ln],
	         "author":authorBluvista[ln],
	    	 "authorBook":authorBook[ln] 
	    };
	    values.push(item1);
	}
	$.extend(todo, values);
	
	console.debug(todo);
	//getAuthors();
	
	
	initDataTable("#authorsTable");
	

});