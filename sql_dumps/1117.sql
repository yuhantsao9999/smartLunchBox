-- MySQL dump 10.13  Distrib 8.0.23, for macos10.15 (x86_64)
--
-- Host: localhost    Database: rent
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Contract`
--

DROP TABLE IF EXISTS `Contract`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Contract` (
  `contract_id` int NOT NULL AUTO_INCREMENT,
  `product_id` int DEFAULT NULL,
  `publish_id` int DEFAULT NULL,
  `rent_id` int DEFAULT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `c_status` varchar(12) NOT NULL DEFAULT 'continue',
  PRIMARY KEY (`contract_id`),
  KEY `product_id` (`product_id`),
  KEY `publish_id` (`publish_id`),
  KEY `rent_id` (`rent_id`),
  CONSTRAINT `contract_ibfk_1` FOREIGN KEY (`product_id`) REFERENCES `Product` (`product_id`) ON DELETE CASCADE,
  CONSTRAINT `contract_ibfk_2` FOREIGN KEY (`publish_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE,
  CONSTRAINT `contract_ibfk_3` FOREIGN KEY (`rent_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Contract`
--

LOCK TABLES `Contract` WRITE;
/*!40000 ALTER TABLE `Contract` DISABLE KEYS */;
INSERT INTO `Contract` VALUES (1,1,1,2,'2021-05-29','2021-05-31','continue'),(2,2,2,3,'2021-05-30','2021-06-01','continue'),(3,3,3,4,'2021-06-17','2021-06-30','continue'),(4,4,4,5,'2021-03-12','2021-04-30','continue'),(5,5,5,1,'2021-02-22','2021-03-21','continue'),(6,8,1,8,'2021-06-23','2021-06-24','finish'),(7,9,8,8,'2021-06-23','2021-07-03','finish'),(8,9,8,8,'2021-06-23','2021-07-03','finish'),(9,9,8,8,'2021-06-23','2021-07-03','finish'),(10,9,8,8,'2021-06-23','2021-07-03','finish'),(11,10,8,8,'2021-06-23','2021-06-24','finish'),(12,10,8,8,'2021-06-23','2021-06-24','continue');
/*!40000 ALTER TABLE `Contract` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `unavail_prod` AFTER INSERT ON `contract` FOR EACH ROW BEGIN
    UPDATE Product
    SET p_status = 'renting' WHERE product_id = New.product_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `avail_prod` AFTER UPDATE ON `contract` FOR EACH ROW BEGIN
    UPDATE Product
    SET p_status = 'waiting', rent_times = rent_times + IF (Old.c_status = 'continue' and New.c_status = 'finish', 1, 0)
    WHERE product_id = New.product_id;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `Eval`
--

DROP TABLE IF EXISTS `Eval`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Eval` (
  `contract_id` int NOT NULL,
  `publish_star` int DEFAULT NULL,
  `publish_comment` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `rent_star` int DEFAULT NULL,
  `rent_comment` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  PRIMARY KEY (`contract_id`),
  CONSTRAINT `eval_ibfk_1` FOREIGN KEY (`contract_id`) REFERENCES `Contract` (`contract_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Eval`
--

LOCK TABLES `Eval` WRITE;
/*!40000 ALTER TABLE `Eval` DISABLE KEYS */;
INSERT INTO `Eval` VALUES (6,5,'ＯＫ',5,'qwe'),(7,3,'爛人',5,'好東西');
/*!40000 ALTER TABLE `Eval` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Product`
--

DROP TABLE IF EXISTS `Product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Product` (
  `product_id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `p_name` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `category` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `brand` varchar(30) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `price` int NOT NULL,
  `days` int NOT NULL,
  `intro` varchar(150) CHARACTER SET utf8 COLLATE utf8_general_ci DEFAULT NULL,
  `photo` varchar(100) DEFAULT NULL,
  `place` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `rent_times` int NOT NULL DEFAULT '0',
  `p_status` varchar(9) DEFAULT 'waiting',
  `uploaded_date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`product_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `product_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `Users` (`user_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Product`
--

LOCK TABLES `Product` WRITE;
/*!40000 ALTER TABLE `Product` DISABLE KEYS */;
INSERT INTO `Product` VALUES (1,1,'冰箱','其他','HITACHI',1000,2,'intro1','~/photo1.png','NTNU',0,'renting','2021-06-23 12:41:46'),(2,2,'IPHONE','3C產品','APPLE',500,5,'intro2','~/photo2.png','NTNU',0,'renting','2021-06-23 12:41:46'),(3,3,'腳踏車','交通','捷安特',700,4,'intro3','~/photo3.png','板橋',0,'renting','2021-06-23 12:41:46'),(4,4,'演算法聖經','課程相關','無',666,7,'intro4','~/photo4.png','NTNU',0,'renting','2021-06-23 12:41:46'),(5,5,'電鍋','其他','大同',999,9,'intro5','~/photo5.png','台南',0,'renting','2021-06-23 12:41:46'),(6,5,'筆記型電腦','3C相關','ASUS',999,9,'intro6','~/photo6.png','台北',0,'waiting','2021-06-23 12:41:46'),(7,1,'map','交通','APPLE',1,1,'map','image-1624423351418.png','ntnu',0,'waiting','2021-06-23 12:42:34'),(8,1,'巧克力醬','其他','APPLE',10,1,'sweet','image-1624423416830.png','1',1,'waiting','2021-06-23 12:43:39'),(9,8,'截圖','交通','APPLE',1,10,'圖片','image-1624423497868.png','1',4,'waiting','2021-06-23 12:45:14'),(10,8,'map','交通','APPLE',1,1,'map','image-1624424152243.png','1',1,'renting','2021-06-23 12:55:57');
/*!40000 ALTER TABLE `Product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `Users`
--

DROP TABLE IF EXISTS `Users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Users` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `email` varchar(50) NOT NULL,
  `password` varchar(30) NOT NULL,
  `name` varchar(20) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `phone` varchar(10) NOT NULL,
  `authority` int NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `email` (`email`),
  UNIQUE KEY `phone` (`phone`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES (1,'abc@gmail.com','aaa111','John','0912345678',0),(2,'def@gmail.com','bbb222','Amy','0987654321',0),(3,'ghi@gmail.com','ccc333','Kevin','0900000000',-1),(4,'jkl@gmail.com','ddd444','Emily','0988888888',0),(5,'mno@gmail.com','eee555','Allen','0977777777',-1),(6,'root@gmail.com','root','root','0999999999',1),(8,'yuhan@gmail.com','yuhan','yuhan','0926738172',0);
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-17 15:11:04
