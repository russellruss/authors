

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema AuthorBD
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema AuthorBD
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `AuthorBD` DEFAULT CHARACTER SET utf8 ;
USE `AuthorBD` ;

-- -----------------------------------------------------
-- Table `AuthorBD`.`AuthorRegalias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AuthorBD`.`AuthorRegalias` (
  `idAuthorRegalias` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `authorRegalias` VARCHAR(255) NULL,
  `authorBook` VARCHAR(255) NULL,
  `Book` VARCHAR(255) NULL,
  `idRealAuthor` INT NULL,
  PRIMARY KEY (`idAuthorRegalias`),
  UNIQUE INDEX `idAuthor_UNIQUE` (`idAuthorRegalias` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AuthorBD`.`AuthorProduction`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AuthorBD`.`AuthorProduction` (
  `idAuthorProduction` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(255) NULL,
  `lastName` VARCHAR(255) NULL,
  `mLastName` VARCHAR(255) NULL,
  `nationality` VARCHAR(255) NULL,
  PRIMARY KEY (`idAuthorProduction`),
  UNIQUE INDEX `idAuthorProduction_UNIQUE` (`idAuthorProduction` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AuthorBD`.`Pseudonym`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AuthorBD`.`Pseudonym` (
  `idPseudonym` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `pseudonymName` VARCHAR(255) NOT NULL,
  `AuthorProduction_idAuthorProduction` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`idPseudonym`),
  UNIQUE INDEX `idPseudonym_UNIQUE` (`idPseudonym` ASC),
  INDEX `fk_Pseudonym_AuthorProduction1_idx` (`AuthorProduction_idAuthorProduction` ASC),
  CONSTRAINT `fk_Pseudonym_AuthorProduction1`
    FOREIGN KEY (`AuthorProduction_idAuthorProduction`)
    REFERENCES `AuthorBD`.`AuthorProduction` (`idAuthorProduction`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AuthorBD`.`Book`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AuthorBD`.`Book` (
  `idBook` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL,
  PRIMARY KEY (`idBook`),
  UNIQUE INDEX `idBook_UNIQUE` (`idBook` ASC))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `AuthorBD`.`BookAuthor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `AuthorBD`.`BookAuthor` (
  `idBookAuthor` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `f_book` INT UNSIGNED NOT NULL,
  `f_authorProduction` INT UNSIGNED NOT NULL,
  `idRealAuthor` INT NULL,
  PRIMARY KEY (`idBookAuthor`),
  UNIQUE INDEX `idBookAuthor_UNIQUE` (`idBookAuthor` ASC),
  INDEX `fk_BookAuthor_Book1_idx` (`f_book` ASC),
  INDEX `fk_BookAuthor_AuthorProduction1_idx` (`f_authorProduction` ASC),
  CONSTRAINT `fk_BookAuthor_Book1`
    FOREIGN KEY (`f_book`)
    REFERENCES `AuthorBD`.`Book` (`idBook`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_BookAuthor_AuthorProduction1`
    FOREIGN KEY (`f_authorProduction`)
    REFERENCES `AuthorBD`.`AuthorProduction` (`idAuthorProduction`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
