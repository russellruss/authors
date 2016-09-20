<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=ISO-8859-1">
<title>Insert title here</title>
<%@include file="headerIncludes.jsp" %>
<script type="text/javascript" src="index.js"></script>
</head>
<body>
	<div class="row">
		<div class="col-md-4">
			<a class="btn btn-default btn-lg" href="<%=request.getContextPath() %>/authorP/authorP.jsp"> Asignación de seudónimo</a> 
		</div>
		<div class="col-md-4">
			<a class="btn btn-default btn-lg" href="<%=request.getContextPath() %>/authorsPro/authors.jsp">Autores Producción</a> 
		</div>
		<div class="col-md-4">
			<a class="btn btn-default btn-lg" href="<%=request.getContextPath() %>/authorsList/authorsList.jsp">Autores Regalias</a> 
		</div>
	</div>
</body>
</html>