-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: auctionsystem3
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
-- Temporary view structure for view `feedback_table`
--

DROP TABLE IF EXISTS `feedback_table`;
/*!50001 DROP VIEW IF EXISTS `feedback_table`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `feedback_table` AS SELECT 
 1 AS `feedback_id`,
 1 AS `fname`,
 1 AS `painting_id`,
 1 AS `comment`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `paintings_auction_view`
--

DROP TABLE IF EXISTS `paintings_auction_view`;
/*!50001 DROP VIEW IF EXISTS `paintings_auction_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `paintings_auction_view` AS SELECT 
 1 AS `picture`,
 1 AS `title`,
 1 AS `increment`,
 1 AS `start_price`,
 1 AS `current_bid_price`,
 1 AS `seller`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `paintings_in_auction`
--

DROP TABLE IF EXISTS `paintings_in_auction`;
/*!50001 DROP VIEW IF EXISTS `paintings_in_auction`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `paintings_in_auction` AS SELECT 
 1 AS `painting_id`,
 1 AS `seller_id`,
 1 AS `title`,
 1 AS `description`,
 1 AS `width`,
 1 AS `length`,
 1 AS `date_posted`,
 1 AS `start_date`,
 1 AS `end_date`,
 1 AS `initial_bid_price`,
 1 AS `increment`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `sold_price_painting`
--

DROP TABLE IF EXISTS `sold_price_painting`;
/*!50001 DROP VIEW IF EXISTS `sold_price_painting`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `sold_price_painting` AS SELECT 
 1 AS `painting`,
 1 AS `title`,
 1 AS `start_price`,
 1 AS `sold_price`,
 1 AS `seller`,
 1 AS `fname`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `unsold_paintings`
--

DROP TABLE IF EXISTS `unsold_paintings`;
/*!50001 DROP VIEW IF EXISTS `unsold_paintings`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `unsold_paintings` AS SELECT 
 1 AS `painting_id`,
 1 AS `seller_id`,
 1 AS `title`,
 1 AS `description`,
 1 AS `width`,
 1 AS `length`,
 1 AS `date_posted`,
 1 AS `start_date`,
 1 AS `end_date`,
 1 AS `initial_bid_price`,
 1 AS `increment`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `winner_painting`
--

DROP TABLE IF EXISTS `winner_painting`;
/*!50001 DROP VIEW IF EXISTS `winner_painting`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `winner_painting` AS SELECT 
 1 AS `painting`,
 1 AS `title`,
 1 AS `start_price`,
 1 AS `sold_price`,
 1 AS `seller`,
 1 AS `fname`,
 1 AS `bid_id`,
 1 AS `buyer_id`,
 1 AS `painting_id`,
 1 AS `bid_time`,
 1 AS `bid_price`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `winner_seller_painting`
--

DROP TABLE IF EXISTS `winner_seller_painting`;
/*!50001 DROP VIEW IF EXISTS `winner_seller_painting`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `winner_seller_painting` AS SELECT 
 1 AS `painting`,
 1 AS `start_price`,
 1 AS `seller_name`,
 1 AS `seller`,
 1 AS `title`,
 1 AS `sold_price`,
 1 AS `buyer`*/;
SET character_set_client = @saved_cs_client;

--
-- Final view structure for view `feedback_table`
--

/*!50001 DROP VIEW IF EXISTS `feedback_table`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `feedback_table` AS select `feedback`.`feedback_id` AS `feedback_id`,`member`.`fname` AS `fname`,`feedback`.`painting_id` AS `painting_id`,`feedback`.`comment` AS `comment` from (`member` join `feedback`) where (`member`.`member_id` = `feedback`.`member_id`) order by `feedback`.`feedback_id` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `paintings_auction_view`
--

/*!50001 DROP VIEW IF EXISTS `paintings_auction_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `paintings_auction_view` AS select `pa`.`painting_id` AS `picture`,`pa`.`title` AS `title`,`pa`.`increment` AS `increment`,`pa`.`initial_bid_price` AS `start_price`,coalesce(max(`bids`.`bid_price`),0) AS `current_bid_price`,`pa`.`seller_id` AS `seller` from (`paintings_in_auction` `pa` left join `bids` on((`pa`.`painting_id` = `bids`.`painting_id`))) group by `picture` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `paintings_in_auction`
--

/*!50001 DROP VIEW IF EXISTS `paintings_in_auction`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `paintings_in_auction` AS select `painting`.`painting_id` AS `painting_id`,`painting`.`seller_id` AS `seller_id`,`painting`.`title` AS `title`,`painting`.`description` AS `description`,`painting`.`width` AS `width`,`painting`.`length` AS `length`,`painting`.`date_posted` AS `date_posted`,`painting`.`start_date` AS `start_date`,`painting`.`end_date` AS `end_date`,`painting`.`initial_bid_price` AS `initial_bid_price`,`painting`.`increment` AS `increment` from `painting` where ((now() <= `painting`.`end_date`) and (now() >= `painting`.`start_date`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `sold_price_painting`
--

/*!50001 DROP VIEW IF EXISTS `sold_price_painting`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `sold_price_painting` AS select `bids`.`painting_id` AS `painting`,`painting`.`title` AS `title`,`painting`.`initial_bid_price` AS `start_price`,max(`bids`.`bid_price`) AS `sold_price`,`painting`.`seller_id` AS `seller`,`member`.`fname` AS `fname` from ((`painting` join `bids`) join `member`) where ((`bids`.`painting_id` = `painting`.`painting_id`) and (`member`.`member_id` = `painting`.`seller_id`) and (now() > `painting`.`end_date`)) group by `painting` */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `unsold_paintings`
--

/*!50001 DROP VIEW IF EXISTS `unsold_paintings`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `unsold_paintings` AS select `painting`.`painting_id` AS `painting_id`,`painting`.`seller_id` AS `seller_id`,`painting`.`title` AS `title`,`painting`.`description` AS `description`,`painting`.`width` AS `width`,`painting`.`length` AS `length`,`painting`.`date_posted` AS `date_posted`,`painting`.`start_date` AS `start_date`,`painting`.`end_date` AS `end_date`,`painting`.`initial_bid_price` AS `initial_bid_price`,`painting`.`increment` AS `increment` from `painting` where ((now() > `painting`.`end_date`) and `painting`.`painting_id` in (select `bids`.`painting_id` from `bids`) is false) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `winner_painting`
--

/*!50001 DROP VIEW IF EXISTS `winner_painting`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `winner_painting` AS select `sold_price_painting`.`painting` AS `painting`,`sold_price_painting`.`title` AS `title`,`sold_price_painting`.`start_price` AS `start_price`,`sold_price_painting`.`sold_price` AS `sold_price`,`sold_price_painting`.`seller` AS `seller`,`sold_price_painting`.`fname` AS `fname`,`bids`.`bid_id` AS `bid_id`,`bids`.`buyer_id` AS `buyer_id`,`bids`.`painting_id` AS `painting_id`,`bids`.`bid_time` AS `bid_time`,`bids`.`bid_price` AS `bid_price` from (`sold_price_painting` join `bids`) where ((`sold_price_painting`.`sold_price` = `bids`.`bid_price`) and (`sold_price_painting`.`painting` = `bids`.`painting_id`)) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `winner_seller_painting`
--

/*!50001 DROP VIEW IF EXISTS `winner_seller_painting`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `winner_seller_painting` AS select `auctionsystem`.`winner_painting`.`painting` AS `painting`,`auctionsystem`.`winner_painting`.`start_price` AS `start_price`,`auctionsystem`.`winner_painting`.`fname` AS `seller_name`,`auctionsystem`.`winner_painting`.`seller` AS `seller`,`auctionsystem`.`winner_painting`.`title` AS `title`,`auctionsystem`.`winner_painting`.`sold_price` AS `sold_price`,`member`.`fname` AS `buyer` from (`auctionsystem`.`winner_painting` join `member`) where (`member`.`member_id` = `auctionsystem`.`winner_painting`.`buyer_id`) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-04 17:29:14
