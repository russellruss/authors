package trillas.mx.DAOImp;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

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

	@Override
	public Authorregalias getAuthorRegaliasById(Authorregalias aRegalias)
			throws Exception {
		Session session = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			aRegalias =(Authorregalias) session.createCriteria(Authorregalias.class)
					.add(Restrictions.eq("idAuthorRegalias", aRegalias.getIdAuthorRegalias()))
					.uniqueResult();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return aRegalias;
	}

	@Override
	public void update(Authorregalias aRegalias) throws Exception {
		Session session = null;
		Transaction trans = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			trans = session.beginTransaction();
			session.update(aRegalias);
			trans.commit();
		} catch (Exception ex) {
			if (trans != null)
				trans.rollback();
			throw ex;
		} finally {
			if (session != null)
				session.close();
		}
		
	}
	
	

}
