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
import trillas.mx.pojos.Authorproduction;
import trillas.mx.pojos.Pseudonym;


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
		Authorproduction authorPro = new  Authorproduction();
		Pseudonym seudonimo = new Pseudonym();
		try {
			String flag = request.getParameter("flag");
			
			switch (flag) {
			case "getARegalias":
				jsonO.put("authorsRegalias", authorRegaliasDAO.getAllAuthorRegalias());
				
				
				break;
			case "updateAuthorPro":
				authorPro.setIdAuthorProduction(Integer.parseInt(request.getParameter("idAproduction")));
				authorPro=authorProductionDAO.getAuthorProById(authorPro);
				authorProductionDAO.update(authorPro);
				
				break;
			case "saveSeudonimo":
				authorPro.setIdAuthorProduction(Integer.parseInt(request.getParameter("idAproduction")));
				seudonimo.setAuthorproduction(authorPro);
				seudonimo.setPseudonymName(request.getParameter("seudonimo"));
				
				authorProductionDAO.updateSeudonimo(seudonimo);
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
