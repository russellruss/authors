package trillas.mx.DAOImp;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;

import trillas.mx.DAO.AuthorProductionDAO;
import trillas.mx.HibernateUtil.HibernateUtil;
import trillas.mx.pojos.Authorproduction;

public class AuthorProductionImp implements AuthorProductionDAO {

	@Override
	public List<Authorproduction> getAllAuthorProduction() throws Exception {
		Session session = null;
		List<Authorproduction> listAP = new ArrayList<>();
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			listAP = session.createCriteria(Authorproduction.class)
					.list();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listAP;
	}

}
