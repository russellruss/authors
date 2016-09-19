package trillas.mx.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import trillas.mx.DAO.AuthorProductionDAO;
import trillas.mx.DAOImp.AuthorProductionImp;


@WebServlet("/authorServlet")
public class authorServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    AuthorProductionDAO authorProductionDAO = new AuthorProductionImp();

    public authorServlet() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JSONObject jsonO = new JSONObject();
		try {
			jsonO.put("authorsP", authorProductionDAO.getAllAuthorProduction());
			
			response.setContentType("application/json");
			response.getWriter().write(jsonO.toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	
	
	}

}
