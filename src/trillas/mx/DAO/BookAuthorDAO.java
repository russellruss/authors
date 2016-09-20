package trillas.mx.DAO;

import java.util.List;

import trillas.mx.pojos.Bookauthor;

public interface BookAuthorDAO {

	public List<Bookauthor> getAllBookAuthors() throws Exception;
	public void update(Bookauthor bookA) throws Exception;
	public Bookauthor getBookAuthorById( Bookauthor bookA) throws Exception;
	
}
