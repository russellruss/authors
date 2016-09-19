package trillas.mx.pojos;
// Generated 19/09/2016 02:39:09 PM by Hibernate Tools 4.3.1


import java.util.HashSet;
import java.util.Set;

/**
 * Authorproduction generated by hbm2java
 */
public class Authorproduction  implements java.io.Serializable {


     private Integer idAuthorProduction;
     private String firstName;
     private String lastName;
     private String mlastName;
     private String nationality;
     private Set bookauthors = new HashSet(0);
     private Set pseudonyms = new HashSet(0);

    public Authorproduction() {
    }

    public Authorproduction(String firstName, String lastName, String mlastName, String nationality, Set bookauthors, Set pseudonyms) {
       this.firstName = firstName;
       this.lastName = lastName;
       this.mlastName = mlastName;
       this.nationality = nationality;
       this.bookauthors = bookauthors;
       this.pseudonyms = pseudonyms;
    }
   
    public Integer getIdAuthorProduction() {
        return this.idAuthorProduction;
    }
    
    public void setIdAuthorProduction(Integer idAuthorProduction) {
        this.idAuthorProduction = idAuthorProduction;
    }
    public String getFirstName() {
        return this.firstName;
    }
    
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getLastName() {
        return this.lastName;
    }
    
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getMlastName() {
        return this.mlastName;
    }
    
    public void setMlastName(String mlastName) {
        this.mlastName = mlastName;
    }
    public String getNationality() {
        return this.nationality;
    }
    
    public void setNationality(String nationality) {
        this.nationality = nationality;
    }
    public Set getBookauthors() {
        return this.bookauthors;
    }
    
    public void setBookauthors(Set bookauthors) {
        this.bookauthors = bookauthors;
    }
    public Set getPseudonyms() {
        return this.pseudonyms;
    }
    
    public void setPseudonyms(Set pseudonyms) {
        this.pseudonyms = pseudonyms;
    }




}


