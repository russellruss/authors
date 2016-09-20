package trillas.mx.DAO;

import java.util.List;

import trillas.mx.pojos.Authorproduction;
import trillas.mx.pojos.Pseudonym;

public interface AuthorProductionDAO {
	
	public List<Authorproduction> getAllAuthorProduction() throws Exception;
	public void update(Authorproduction AProduction)throws Exception;
	public Authorproduction getAuthorProById(Authorproduction AProduction) throws Exception;
	
	public void saveSeudonimo(Pseudonym seudonimo)throws Exception;
}
