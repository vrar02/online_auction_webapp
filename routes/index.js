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

  return router;
};
