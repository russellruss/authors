package trillas.mx.pojos;
// Generated 19/09/2016 02:39:09 PM by Hibernate Tools 4.3.1



/**
 * Authorregalias generated by hbm2java
 */
public class Authorregalias  implements java.io.Serializable {


     private Integer idAuthorRegalias;
     private String authorRegalias;
     private String authorBook;
     private String book;
     private Integer idRealAuthor;

    public Authorregalias() {
    }

    public Authorregalias(String authorRegalias, String authorBook, String book, Integer idRealAuthor) {
       this.authorRegalias = authorRegalias;
       this.authorBook = authorBook;
       this.book = book;
       this.idRealAuthor = idRealAuthor;
    }
   
    public Integer getIdAuthorRegalias() {
        return this.idAuthorRegalias;
    }
    
    public void setIdAuthorRegalias(Integer idAuthorRegalias) {
        this.idAuthorRegalias = idAuthorRegalias;
    }
    public String getAuthorRegalias() {
        return this.authorRegalias;
    }
    
    public void setAuthorRegalias(String authorRegalias) {
        this.authorRegalias = authorRegalias;
    }
    public String getAuthorBook() {
        return this.authorBook;
    }
    
    public void setAuthorBook(String authorBook) {
        this.authorBook = authorBook;
    }
    public String getBook() {
        return this.book;
    }
    
    public void setBook(String book) {
        this.book = book;
    }
    public Integer getIdRealAuthor() {
        return this.idRealAuthor;
    }
    
    public void setIdRealAuthor(Integer idRealAuthor) {
        this.idRealAuthor = idRealAuthor;
    }




}

