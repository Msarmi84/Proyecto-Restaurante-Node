-- MySQL dump 10.13  Distrib 8.0.22, for macos10.15 (x86_64)
--
-- Host: localhost    Database: restaurant
-- ------------------------------------------------------
-- Server version	8.0.22

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `chef`
--

DROP TABLE IF EXISTS `chef`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `chef` (
  `chef_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(150) NOT NULL,
  `password` varchar(200) NOT NULL,
  `description` text,
  `phone_number` varchar(15) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`chef_id`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chef`
--

LOCK TABLES `chef` WRITE;
/*!40000 ALTER TABLE `chef` DISABLE KEYS */;
INSERT INTO `chef` VALUES (3,'Karolina','Santisteban','karo@hotmail.com','5858ef5a75c9c7c9465f600c2490f5a4f6e72cc0','undefined','600600600','1616502640339-chef.jpg'),(23,'dwdawas','sS','bdsbjh@jfeke.com','a1bce781b2e80575d4fa727837bb5c5f3bec8643','undefined','','1616613446936-chef2.jpg'),(24,'sw','swewq','kuja@fd.com','c23d7e0d6075e34ac5f7533d917a825ea35d3480','undefined','weweqw223','1616631886912-chef4.jpg');
/*!40000 ALTER TABLE `chef` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `dish`
--

DROP TABLE IF EXISTS `dish`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `dish` (
  `dish_id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(60) NOT NULL,
  `description` text,
  `image` varchar(100) DEFAULT NULL,
  `chef_id` int unsigned NOT NULL,
  PRIMARY KEY (`dish_id`),
  KEY `fk_chef_id` (`chef_id`),
  CONSTRAINT `fk_chef_id` FOREIGN KEY (`chef_id`) REFERENCES `chef` (`chef_id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dish`
--

LOCK TABLES `dish` WRITE;
/*!40000 ALTER TABLE `dish` DISABLE KEYS */;
INSERT INTO `dish` VALUES (18,'t5t5t','treere','1616663917065-burger.jpg',23),(20,'dwewq','deaw','1616664002156-salad3.jpg',24),(21,'sSa','DASDSD','1616664034260-pasta_albondigas.jpg',23),(22,'pasta rellena con tomate','pasta con tomate ','1616664059100-pasta_rellena.jpg',3),(24,'weaeqwq','fdsfsfd','1616664134395-sushi-2020287_1280.jpg',24),(25,'sWEQEE','SDA<DA','1616664181171-steak.jpg',24),(28,'ytut','jgyty','1616686629427-salad1.jpg',24),(29,'dsdassa','<sadadscfvfwefc','1616697999510-pasta_penne.jpg',3),(30,'dasaaad','dsaxsx','1616698026826-sushi-1197838_640.jpg',3),(32,'ewedxdss','saxs','1616750191875-salad2.jpg',3);
/*!40000 ALTER TABLE `dish` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-15 15:13:31
