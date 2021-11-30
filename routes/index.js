const express = require("express");

const router = express.Router();

const OnlineAction = require("../services/OnlineAuction");

module.exports = () => {
  router.get("/auction", async (request, response) => {
    const oa = new OnlineAction();
    const items = await oa.fetchCurrentAuctionItems();

    console.log("current_auction_items", items);
    response.render("current_auction_items", {
      pageTitle: "Present Auction Items",
      auction_items: items,
    });
  });

  router.get("/auction/:shortname", async (request, response, next) => {
    var painting_id = request.params.shortname;
    const oa = new OnlineAction();
    const painting_details = await oa.fetchPaintingDetails(painting_id);
    console.log(painting_details);
    response.render("product_details", {
      pageTitle: "Painting Details",
      painting_item: painting_details,
    });
  });

  router.get("/paintings_won", async (request, response) => {
    const oa = new OnlineAction();
    var buyer_email = request.session.userInfo;
    var buyer_ids = await oa.fetchBuyerId(buyer_email);
    var buyer_id = buyer_ids[0].member_id;

    var paintings_won = await oa.fetchPaintingsWon(buyer_id);

    console.log("paintings won", paintings_won);
    response.render("paintings_won", {
      pageTitle: "Paintings Won",
      won_paintings: paintings_won,
    });
  });

  router.get("/watch_list", async (request, response) => {
    const oa = new OnlineAction();
    var buyer_email = request.session.userInfo;
    var buyer_ids = await oa.fetchBuyerId(buyer_email);
    var buyer_id = buyer_ids[0].member_id;

    var watch_list = await oa.fetchBuyerWatchlist(buyer_id);

    console.log("buyer watchlist", watch_list);
    response.render("watch_list", {
      pageTitle: "Watch List",
      watch_list: watch_list,
    });
  });

  router.get("/profile_details", async (request, response) => {
    const oa = new OnlineAction();
    var member_email = request.session.userInfo;
    var member_ids = await oa.fetchBuyerId(member_email);
    var member_id = member_ids[0].member_id;

    var profile_details = await oa.fetchMemberDetails(member_id);

    console.log("profile details", profile_details);
    response.render("profile_details", {
      pageTitle: "Profile",
      details_profile: profile_details,
    });
  });

  router.post("/biditem", async (request, response) => {
    var { bid_details } = request.body;
    console.log("bid_details", bid_details);
    const bid_obj = JSON.parse(bid_details);

    const oa = new OnlineAction();
    var buyer_email = request.session.userInfo;
    var buyer_ids = await oa.fetchBuyerId(buyer_email);
    var buyer_id = buyer_ids[0].member_id;

    var date_obj = new Date().toISOString().slice(0, 19).replace("T", " ");
    console.log(date_obj);
    var price = 0;
    if (bid_obj.current_bid_price == 0) {
      price = bid_obj.initial_bid_price + bid_obj.increment;
    } else {
      price = bid_obj.current_bid_price + bid_obj.increment;
    }
    console.log("pirce", price);
    await oa.insertIntoBids(buyer_id, bid_obj.painting_id, date_obj, price);
    //console.log("io/port", request.io);
    //request.io.on("connection", (socket) => {
    // either with send()
    var data = {
      painting_id: bid_obj.painting_id,
      current_bid_price: price,
      start_price: bid_obj.initial_bid_price,
      increment: bid_obj.increment,
    };
    request.io.on("connection", (socket) => {
      socket.broadcast.emit("bid_done", data);
    });

    response.redirect("/auction");
  });

  // seller routes

  router.get("/paintings", async (request, response) => {
    const oa = new OnlineAction();
    var member_email = request.session.userInfo;
    var member_ids = await oa.fetchBuyerId(member_email); //this should be member_id
    var member_id = member_ids[0].member_id;

    //var paintings = await oa.fetchPostedPaintings(member_id);
    var paintings = null;
    console.log("Paintings", paintings);
    response.render("seller_paintings", {
      pageTitle: "Paintings in Auction",
      paintings: paintings,
    });
  });

  return router;
};
