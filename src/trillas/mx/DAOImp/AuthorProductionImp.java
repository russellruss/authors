package trillas.mx.DAOImp;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import trillas.mx.DAO.AuthorProductionDAO;
import trillas.mx.HibernateUtil.HibernateUtil;
import trillas.mx.pojos.Authorproduction;
import trillas.mx.pojos.Pseudonym;

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
		}finally {
			if (session != null)
				session.close();
		}
		return listAP;
	}

	@Override
	public void update(Authorproduction AProduction) throws Exception {
		Session session = null;
		Transaction trans = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			trans = session.beginTransaction();
			session.update(AProduction);
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

	@Override
	public Authorproduction getAuthorProById(Authorproduction AProduction) throws Exception {
		Session session = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			AProduction = (Authorproduction) session.createCriteria(Authorproduction.class)
					.add(Restrictions.eq("idAuthorProduction", AProduction.getIdAuthorProduction()))
					.uniqueResult();
			
		} catch (Exception e) {
			e.printStackTrace();
		}finally {
			if (session != null)
				session.close();
		}
		return AProduction;
	}

	@Override
	public void saveSeudonimo(Pseudonym seudonimo) throws Exception {
		Session session = null;
		Transaction trans = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			trans = session.beginTransaction();
			session.save(seudonimo);
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
