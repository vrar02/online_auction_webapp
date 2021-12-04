-- Views

-- View -1: Create a view which displays the seller, the painting id and the price it sold for?

-- Create view sold_price_painting as
-- select bids.painting_id as painting, painting.title as title, painting.initial_bid_price as start_price, max(bids.bid_price) as sold_price, painting.seller_id as seller, member.fname from painting,bids,member where bids.painting_id=painting.painting_id and member.member_id =painting.seller_id and now()>painting.end_date group by painting;

-- Create view winner_painting as select * from sold_price_painting, bids where sold_price_painting.sold_price=bids.bid_price and sold_price_painting.painting=bids.painting_id;


-- View-2: Create a view which displays the feedback on items sold by a particular seller with id=1?

-- Create view buyers_feedback as
-- Select feedback.painting_id,feedback.ratings, feedback.comment from feedback, winner_painting where winner_painting.seller = 1 and winner_painting.painting=feedback.painting_id;


 
-- View-3: Create a view which displays the current paintings in auction?

-- Ans. create view current_paintings as
-- select painting_id,title from painting where NOW()>=start_date and NOW() <= end_date;



-- View-4: Create a view which displays the current paintings of category digital in auction?

-- Ans. create view current__digital_paintings as
-- select painting_id,title from painting p join digital_painitng d on p.painitng_id=d.painting_id where NOW() <= end_date;









-- paintings_in_auction :
-- Create view paintings_in_auction as Select * from painting where now()<=end_date and now()>=start_date;

-- paintings_auction_view:

-- create view paintings_auction_view as select pa.painting_id as picture, pa.title as title ,pa.increment as increment,pa.initial_bid_price as start_price, COALESCE(max(bids.bid_price),0) as current_bid_price, pa.seller_id as seller from paintings_in_auction as pa left join bids on pa.painting_id=bids.painting_id  group by picture ;





-- watch list for buyer

-- select picture, title, max(bid_price) as buyer_bid_price ,current_bid_price from paintings_auction_view as pa,bids where buyer_id=9 and bids.painting_id=pa.picture group by picture;


-- winner_seller_painting

-- create view winner_seller_painting as SELECT painting,winner_painting.start_price, winner_painting.fname as seller_name,seller, title,sold_price,member.fname as buyer FROM auctionsystem.winner_painting, member where member.member_id=winner_painting.buyer_id;


-- create view  feedback_table as select feedback_id,fname,painting_id,feedback.comment from member, feedback where member.member_id=feedback.member_id order by feedback_id;



-- CREATE 
--     ALGORITHM = UNDEFINED 
--     DEFINER = `root`@`localhost` 
--     SQL SECURITY DEFINER
-- VIEW `auctionsystem`.`unsold_paintings` AS
--     SELECT 
--         `auctionsystem`.`painting`.`painting_id` AS `painting_id`,
--         `auctionsystem`.`painting`.`seller_id` AS `seller_id`,
--         `auctionsystem`.`painting`.`title` AS `title`,
--         `auctionsystem`.`painting`.`description` AS `description`,
--         `auctionsystem`.`painting`.`width` AS `width`,
--         `auctionsystem`.`painting`.`length` AS `length`,
--         `auctionsystem`.`painting`.`date_posted` AS `date_posted`,
--         `auctionsystem`.`painting`.`start_date` AS `start_date`,
--         `auctionsystem`.`painting`.`end_date` AS `end_date`,
--         `auctionsystem`.`painting`.`initial_bid_price` AS `initial_bid_price`,
--         `auctionsystem`.`painting`.`increment` AS `increment`
--     FROM
--         `auctionsystem`.`painting`
--     WHERE
--         ((NOW() > `auctionsystem`.`painting`.`end_date`)
--             AND `auctionsystem`.`painting`.`painting_id` IN (SELECT 
--                 `auctionsystem`.`bids`.`painting_id`
--             FROM
--                 `auctionsystem`.`bids`)
--             IS FALSE)
