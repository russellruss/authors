package trillas.mx.servlets;

import java.io.IOException;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import trillas.mx.DAO.AuthorProductionDAO;
import trillas.mx.DAO.AuthorRegaliasDAO;
import trillas.mx.DAO.BookAuthorDAO;
import trillas.mx.DAOImp.AuthorProductionImp;
import trillas.mx.DAOImp.AuthorRegaliasDAOImp;
import trillas.mx.DAOImp.BookAuthorDAOImp;
import trillas.mx.pojos.Authorproduction;
import trillas.mx.pojos.Authorregalias;
import trillas.mx.pojos.Bookauthor;
import trillas.mx.pojos.Pseudonym;


@WebServlet("/authorServlet")
public class authorServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
    AuthorProductionDAO authorProductionDAO = new AuthorProductionImp();
    AuthorRegaliasDAO authorRegaliasDAO = new AuthorRegaliasDAOImp();
    BookAuthorDAO bookAuthorDAO = new BookAuthorDAOImp();

    public authorServlet() {
        super();
    }


	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		response.getWriter().append("Served at: ").append(request.getContextPath());
	}


	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		JSONObject jsonO = new JSONObject();
		Authorproduction authorPro = new  Authorproduction();
		Authorregalias authorRegalias = new Authorregalias();
		Pseudonym seudonimo = new Pseudonym();
		Bookauthor bookauthor = new Bookauthor();
		try {
			String flag = request.getParameter("flag");
			
			switch (flag) {
			case "getARegalias":
				jsonO.put("authorsRegalias", authorRegaliasDAO.getAllAuthorRegalias());
				response.setContentType("application/json");
				response.getWriter().write(jsonO.toString());
				break;
			case "updateARegalias":
				authorRegalias.setIdAuthorRegalias(Integer.parseInt(request.getParameter("idAregalias")));
				authorRegalias=authorRegaliasDAO.getAuthorRegaliasById(authorRegalias);
				authorRegalias.setIdRealAuthor(Integer.parseInt(request.getParameter("idRealAuthor")));
				authorRegaliasDAO.update(authorRegalias);
				jsonO.put("status", "ok");
				response.setContentType("application/json");
				response.getWriter().write(jsonO.toString());
				break;
			case "updateBookA":
				bookauthor.setIdBookAuthor(Integer.parseInt(request.getParameter("idBookA")));
				bookauthor=bookAuthorDAO.getBookAuthorById(bookauthor);
				bookauthor.setIdRealAuthor(Integer.parseInt(request.getParameter("idRealAuthor")));
				bookAuthorDAO.update(bookauthor);
				jsonO.put("status", "ok");
				response.setContentType("application/json");
				response.getWriter().write(jsonO.toString());
				break;
			case "saveSeudonimo":
				authorPro.setIdAuthorProduction(Integer.parseInt(request.getParameter("idAproduction")));
				seudonimo.setAuthorproduction(authorPro);
				seudonimo.setPseudonymName(request.getParameter("seudonimo"));
				authorProductionDAO.saveSeudonimo(seudonimo);
				break;
			case "getAProduction":
				
				jsonO.put("BookA", bookAuthorDAO.getAllBookAuthors());
				jsonO.put("status", "ok");
				response.setContentType("application/json");
				response.getWriter().write(jsonO.toString());
				break;
			default:
				break;
			}
		} catch (Exception e) {
			try {
				jsonO.put("status", "error");
				jsonO.put("data", e.getMessage());
				response.setContentType("application/json");
				response.getWriter().write(jsonO.toString());
			} catch (JSONException e1) {
				e1.printStackTrace();
			}
		}
	
	}

}
