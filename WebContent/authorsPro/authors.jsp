<!DOCTYPE html>
<!--[if IE 9]> <html lang="en" class="ie9"> <![endif]-->
<!--[if !IE]><!-->
<html lang="es">
	<!--<![endif]-->

	<head>
		<meta charset="utf-8">
		<title>Admin Autores</title>
		<meta name="description" content="The Project a Bootstrap-based, Responsive HTML5 Template">
		<meta name="author" content="htmlcoder.me">
		<!-- Mobile Meta -->
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<!-- Favicon -->
		<link rel="shortcut icon" href="template/images/favicon.ico">
		<%@include file="../headerIncludes.jsp" %>
		<script type="text/javascript" src="authors.js"></script>
	</head>
	
	<body class="no-trans   ">

		<!-- scrollToTop -->
		<!-- ================ -->
		<div class="scrollToTop circle"><i class="icon-up-open-big"></i></div>
		
		<!-- page wrapper start -->
		<!-- ================ -->
		<div class="page-wrapper">
		
			<!-- header-container start -->
			<div class="header-container">
				
				<!-- Menu-->
				<div class="header-container">
<%-- 			 		<%@include file="../../../menu.jsp" %> --%>
			 
				</div>
				<!-- Menu FIN-->
			</div>	
		
		
			

<!-- MAIN-CONTAINER BEGIN -->
<!-- ================ -->
			<section class="main-container">

				<div class="container">
					<div class="row">

<!-- MAIN START -->
<!-- ================ -->
						<div class="main col-md-12">
							
							<!-- PAGE-TITLE END -->

							<!--BOOKS CONSULT TABLE BEGIN ------------------------>	
							<div id="consultTable">
								<div class="row">
									<div class="col-md-6">
										<h3 id="pageTitle" class="page-title" style="margin-top:10px;">AUTORES</h3>
									</div>
									<div class="col-md-3">
										<a id="returnButton" class="btn btn-animated btn-default pull-right"  onClick="refresh()" >
								 			Actualizar
											<i class="fa fa-refresh"></i>
										</a>
									</div>
									<div class="col-md-3">
										<a id="returnButton" class="btn btn-animated btn-primary pull-right"  href="<%=request.getContextPath()%>" >
								 			Regresar
											<i class="icon-left-1"></i>
										</a>
									</div>
								</div>
								<div class="separator-2"></div>
								<div class="row">
										<div class="main col-md-12" id="booksTableDiv">
											<!-- Inicio de tabla consulta obras -->
											<form id="authorsForm" role="form" data-fv-framework="bootstrap" data-fv-icon-valid="glyphicon glyphicon-ok" data-fv-icon-invalid="glyphicon glyphicon-remove" data-fv-icon-validating="glyphicon glyphicon-refresh">
												<div class="row">
													<div id="teamLeadersTable" class="col-md-12">				
														<table class="table table-bordered table-hover table-colored" id="authorsTable">
															<thead>
																<tr>
																	<th>id Autor Prod.</th>
																	<th>nombre AutorProd.</th>
																	<th>nombre Obra</th>
																	<th>id Autor Real</th>
																</tr>
															</thead>
															<tbody id="authorsList">
															</tbody>
														</table>
													</div>
												</div>
											</form>
										</div>
									</div>
									
							
							</div>
<!--BOOKS CONSULT TABLE END ------------------------>	
<!------------------------------------------------------------------------------------ ASSIGNMENT DIV SECTION END ------------------------>
<!--MODALS SECTION BEGIN -->
<!--ERROR MODAL BEGIN -->
							<div class="modal fade" id="errorModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
        						<div class="modal-dialog">
            						<div class="modal-content">
                						<div class="modal-header modal-header-danger">
                    						<button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
                    						<h4 class="modal-title" id="myModalLabel">
                    							<label id="errorTitle">Error en los campos</label>
                    						</h4>
                						</div>
		                				<div class="modal-body">
		                					<p id="errorMessage">Verificar los campos faltantes y/o err&oacute;neos.</p>
		                				</div>
		                				<div class="modal-footer">
		                   					<button type="button" class="btn btn-sm btn-default" data-dismiss="modal">Aceptar</button>
		                				</div>
            						</div>
        						</div>
    						</div>
  <!--ERROR MODAL END -->
  <!-- SUCCESS MODAL BEGIN -->
							<div class="modal fade" id="successModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
								<div class="modal-dialog">
									<div class="modal-content">
										<div class="modal-header modal-header-success">
											<button type="button" class="close" data-dismiss="modal"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
											<h4 class="modal-title" id="myModalLabel">
												<label id="successTitle">Éxito</label>
											</h4>
										</div>
										<div class="modal-body">
											<p id="mensajeError">Notas modificadas exitosamente</p>
										</div>
										<div class="modal-footer">
											<button type="button" class="btn btn-sm btn-default" data-dismiss="modal" onClick="showBooksTable()">Aceptar</button>
										</div>
									</div>
								</div>
							</div>
<!-- SUCCESS MODAL END -->
<!--MODALS SECTION END -->
							
						</div>
<!-- MAIN END -->
					</div>
				</div>
			</section>
<!-- MAIN-CONTAINER END -->
			

			
		</div>
		
	</body>
</html>
