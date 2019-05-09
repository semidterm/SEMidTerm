-- MySQL dump 10.13  Distrib 8.0.15, for Win64 (x86_64)
--
-- Host: localhost    Database: data
-- ------------------------------------------------------
-- Server version	8.0.15

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `cauhoiluyentap`
--

DROP TABLE IF EXISTS `cauhoiluyentap`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `cauhoiluyentap` (
  `groupID` int(11) NOT NULL,
  `chapterID` int(11) NOT NULL,
  `questionID` int(11) NOT NULL,
  `question` text,
  `answer` text NOT NULL,
  `image` text,
  PRIMARY KEY (`groupID`,`chapterID`,`questionID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cauhoiluyentap`
--

LOCK TABLES `cauhoiluyentap` WRITE;
/*!40000 ALTER TABLE `cauhoiluyentap` DISABLE KEYS */;
INSERT INTO `cauhoiluyentap` VALUES (1,1,1,NULL,'1','../public/images/1voi.png'),(1,1,2,NULL,'2','../public/images/2cauVong.png'),(1,1,3,NULL,'3','../public/images/3ca.png'),(1,1,4,NULL,'8','../public/images/8ngua.png'),(1,1,5,NULL,'9','../public/images/9nguoi.png'),(1,2,1,NULL,'A','../public/images/cau1.png'),(1,2,2,NULL,'B','../public/images/cau2.png'),(1,2,3,NULL,'8','../public/images/cau3.png'),(1,2,4,NULL,'7','../public/images/cau4.png'),(1,2,5,NULL,'6','../public/images/cau5.png'),(2,1,1,'5 + 2 = ?','7',NULL),(2,1,2,'4 + 5 = ?','9',NULL),(2,1,3,'2 + 6 = ?','8',NULL),(2,1,4,'1 + 3 = ?','4',NULL),(2,1,5,'3 + 2 = ? ','5',NULL),(2,2,1,'4 - 1 = ?','3',NULL),(2,2,2,'8 - 2 = ?','6',NULL),(2,2,3,'9 - 8 = ?','1',NULL),(2,2,4,'7 - 3 = ?','4',NULL),(2,2,5,'6 - 1 = ?','5',NULL),(2,3,1,'3 + 1 - 2 = ?','2',NULL),(2,3,2,'2 + 5 - 7 = ?','0',NULL),(2,3,3,'5 + 1 - 3 = ?','3',NULL),(2,3,4,'2 + 7 - 1 = ?','8',NULL),(2,3,5,'4 + 3 - 2 = ?','5',NULL),(3,1,1,'42','bốn mươi hai',NULL),(3,1,2,'23','hai mươi ba',NULL),(3,1,3,'71','bảy mươi mốt',NULL),(3,1,4,'56','năm mươi sáu',NULL),(3,1,5,'87','tám mươi bảy',NULL),(3,2,1,'Hai mươi ba','23',NULL),(3,2,2,'Ba mươi tám','38',NULL),(3,2,3,'Sáu mươi bảy','67',NULL),(3,2,4,'Năm mươi chín','59',NULL),(3,2,5,'Chín mươi','90',NULL),(4,1,1,'13 + 21 =?','34',NULL),(4,1,2,'32 + 15=?','47',NULL),(4,1,3,'17+54=?','71',NULL),(4,1,4,'23+62=?','85',NULL),(4,1,5,'22+71=?','93',NULL),(4,2,1,'56-11=?','45',NULL),(4,2,2,'35-16=?','19',NULL),(4,2,3,'87-31=?','56',NULL),(4,2,4,'45-22=?','23',NULL),(4,2,5,'73-26=?','47',NULL),(4,3,1,'45+23-37=?','31',NULL),(4,3,2,'52+41-18=?','75',NULL),(4,3,3,'13+52-35=?','30',NULL),(4,3,4,'22+69-43=?','48',NULL),(4,3,5,'32+47-61=?','18',NULL);
/*!40000 ALTER TABLE `cauhoiluyentap` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-05-04 21:34:48
