package trillas.mx.servlets;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import trillas.mx.DAO.AuthorProductionDAO;
import trillas.mx.DAO.AuthorRegaliasDAO;
import trillas.mx.DAOImp.AuthorProductionImp;
import trillas.mx.DAOImp.AuthorRegaliasDAOImp;


@WebServlet("/authorServlet")
public class authorServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    AuthorProductionDAO authorProductionDAO = new AuthorProductionImp();
    AuthorRegaliasDAO authorRegaliasDAO = new AuthorRegaliasDAOImp();

    public authorServlet() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JSONObject jsonO = new JSONObject();
		try {
			String flag = request.getParameter("flag");
			
			switch (flag) {
			case "getARegalias":
				jsonO.put("authorsRegalias", authorRegaliasDAO.getAllAuthorRegalias());
				
				
				break;
			case "getAProduction":
				jsonO.put("authorsP", authorProductionDAO.getAllAuthorProduction());
				break;
			default:
				break;
			}
			
			
			response.setContentType("application/json");
			response.getWriter().write(jsonO.toString());
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	
	}

}
