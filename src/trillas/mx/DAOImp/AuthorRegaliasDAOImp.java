package trillas.mx.DAOImp;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import trillas.mx.DAO.AuthorRegaliasDAO;
import trillas.mx.HibernateUtil.HibernateUtil;
import trillas.mx.pojos.Authorregalias;

public class AuthorRegaliasDAOImp implements AuthorRegaliasDAO {

	

	@Override
	public List<Authorregalias> getAllAuthorRegalias() throws Exception {
		Session session = null;
		List<Authorregalias> listAR = new ArrayList<>();
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			listAR = session.createCriteria(Authorregalias.class)
					.list();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listAR;
	}

}
