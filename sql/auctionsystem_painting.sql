-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: auctionsystem
-- ------------------------------------------------------
-- Server version	8.0.27

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
-- Table structure for table `painting`
--

DROP TABLE IF EXISTS `painting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `painting` (
  `painting_id` int NOT NULL,
  `seller_id` int NOT NULL,
  `title` varchar(20) NOT NULL,
  `description` varchar(70) NOT NULL,
  `width` float DEFAULT NULL,
  `length` float DEFAULT NULL,
  `date_posted` datetime NOT NULL,
  `start_date` datetime NOT NULL,
  `end_date` datetime NOT NULL,
  `initial_bid_price` float NOT NULL,
  `increment` int NOT NULL,
  PRIMARY KEY (`painting_id`,`seller_id`),
  KEY `seller_id` (`seller_id`),
  CONSTRAINT `painting_ibfk_1` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`member_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `painting`
--

LOCK TABLES `painting` WRITE;
/*!40000 ALTER TABLE `painting` DISABLE KEYS */;
INSERT INTO `painting` VALUES (1,1,'The Desperate Man','AAAA',4,5,'2021-10-02 03:14:07','2021-11-30 03:14:07','2021-11-03 03:14:07',500,50),(2,6,' The Short Winter ','BBBB',3,6,'2021-10-28 04:14:07','2021-11-29 04:14:07','2021-10-31 04:14:07',600,50),(3,5,'Thunder Bird','CCCC',6,5,'2021-10-27 05:14:07','2021-11-28 05:14:07','2021-10-31 05:14:07',700,50),(4,5,'Sun and Eagle','DDDD',7,8,'2021-10-26 06:14:07','2021-10-27 06:14:07','2021-10-29 06:14:07',200,50),(5,6,'Coyote Steeling Fire','EEEE',5,6,'2021-10-25 07:14:07','2021-10-26 07:14:07','2021-10-28 05:14:07',600,50),(6,1,'The Long Winter','FFFF',9,8,'2021-10-24 08:14:07','2021-10-25 08:14:07','2021-10-29 07:14:07',300,50),(7,1,'The Titanic','GGGG',5,6,'2021-10-23 09:14:07','2021-11-24 09:14:07','2021-11-28 05:14:07',800,50),(8,5,'Stories in Snow','HHHH',5,7,'2021-10-29 01:14:07','2021-11-30 01:14:07','2021-12-05 05:14:07',900,50),(9,6,'Golden Stillness','IIII',8,9,'2021-10-25 02:14:07','2021-11-26 02:14:07','2021-12-28 05:14:07',1000,50),(10,5,'Another Day Gone','JJJJ',8,9,'2021-10-24 03:14:07','2021-11-25 03:14:07','2021-12-28 05:14:07',500,50);
/*!40000 ALTER TABLE `painting` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-11-09 15:57:37
