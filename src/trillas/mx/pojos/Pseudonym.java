package trillas.mx.pojos;
// Generated 19/09/2016 02:39:09 PM by Hibernate Tools 4.3.1



/**
 * Pseudonym generated by hbm2java
 */
public class Pseudonym  implements java.io.Serializable {


     private Integer idPseudonym;
     private Authorproduction authorproduction;
     private String pseudonymName;

    public Pseudonym() {
    }

    public Pseudonym(Authorproduction authorproduction, String pseudonymName) {
       this.authorproduction = authorproduction;
       this.pseudonymName = pseudonymName;
    }
   
    public Integer getIdPseudonym() {
        return this.idPseudonym;
    }
    
    public void setIdPseudonym(Integer idPseudonym) {
        this.idPseudonym = idPseudonym;
    }
    public Authorproduction getAuthorproduction() {
        return this.authorproduction;
    }
    
    public void setAuthorproduction(Authorproduction authorproduction) {
        this.authorproduction = authorproduction;
    }
    public String getPseudonymName() {
        return this.pseudonymName;
    }
    
    public void setPseudonymName(String pseudonymName) {
        this.pseudonymName = pseudonymName;
    }




}


