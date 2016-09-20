package trillas.mx.DAO;

import java.util.List;

import trillas.mx.pojos.Authorregalias;

public interface AuthorRegaliasDAO {
	public List<Authorregalias> getAllAuthorRegalias() throws Exception;
	public Authorregalias getAuthorRegaliasById(Authorregalias aRegalias) throws Exception;
	public void update(Authorregalias aRegalias) throws Exception;

}
