package trillas.mx.pojos;
// Generated 19/09/2016 11:13:12 AM by Hibernate Tools 4.3.1



/**
 * Pseudonym generated by hbm2java
 */
public class Pseudonym  implements java.io.Serializable {


     private Integer idPseudonym;
     private Authorbluvista authorbluvista;
     private String pseudonymName;

    public Pseudonym() {
    }

    public Pseudonym(Authorbluvista authorbluvista, String pseudonymName) {
       this.authorbluvista = authorbluvista;
       this.pseudonymName = pseudonymName;
    }
   
    public Integer getIdPseudonym() {
        return this.idPseudonym;
    }
    
    public void setIdPseudonym(Integer idPseudonym) {
        this.idPseudonym = idPseudonym;
    }
    public Authorbluvista getAuthorbluvista() {
        return this.authorbluvista;
    }
    
    public void setAuthorbluvista(Authorbluvista authorbluvista) {
        this.authorbluvista = authorbluvista;
    }
    public String getPseudonymName() {
        return this.pseudonymName;
    }
    
    public void setPseudonymName(String pseudonymName) {
        this.pseudonymName = pseudonymName;
    }




}


