package trillas.mx.DAOImp;

import java.util.ArrayList;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.criterion.Restrictions;

import trillas.mx.DAO.BookAuthorDAO;
import trillas.mx.HibernateUtil.HibernateUtil;
import trillas.mx.pojos.Bookauthor;

public class BookAuthorDAOImp implements BookAuthorDAO {

	


	@Override
	public List<Bookauthor> getAllBookAuthors() throws Exception {
		Session session = null;
		List<Bookauthor> listBA = new ArrayList<>();
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			listBA = session.createCriteria(Bookauthor.class)
					.createAlias("book", "book")
					.createAlias("authorproduction", "authorPro")
					.list();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return listBA;
	}

	@Override
	public void update(Bookauthor bookA) throws Exception {
		Session session = null;
		Transaction trans = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			trans = session.beginTransaction();
			session.update(bookA);
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
	public Bookauthor getBookAuthorById(Bookauthor bookA) throws Exception {
		Session session = null;
		try {
			session = HibernateUtil.getSessionFactory().openSession();
			bookA = (Bookauthor) session.createCriteria(Bookauthor.class)
					.add(Restrictions.eq("idBookAuthor", bookA.getIdBookAuthor()))
					.uniqueResult();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		return bookA;
	}
	
	

}
