const MySQLBackend = require("./backend/MySQLBackend");
const util = require("util");

class OnlineAction {
  async fetchCurrentAuctionItems() {
    const mysql_obj = new MySQLBackend();

    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `SELECT * FROM auctionsystem.paintings_auction_view`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var items = await query(sql);
        return items;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }

  async fetchBuyerId(email) {
    const mysql_obj = new MySQLBackend();

    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select member_id from member where email_id = ?`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var member_id = await query(sql, [email]);
        return member_id;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }

  async insertIntoBids(buyer_id, painting_id, bid_time, bid_price) {
    const mysql_obj = new MySQLBackend();

    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `insert into bids(buyer_id, painting_id, bid_time, bid_price) values(?,?,?,?)`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        await query(sql, [buyer_id, painting_id, bid_time, bid_price]);
        return;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }
}

module.exports = OnlineAction;
