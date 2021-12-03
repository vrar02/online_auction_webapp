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

  async fetchPaintingsWon(buyer_id) {
    const mysql_obj = new MySQLBackend();

    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select * from winner_painting where buyer = ?`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var won_paintings = await query(sql, [buyer_id]);
        return won_paintings;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }

  async fetchBuyerWatchlist(buyer_id) {
    const mysql_obj = new MySQLBackend();

    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select picture, title, max(bid_price) as buyer_bid_price,current_bid_price,increment from paintings_auction_view as pa,bids where buyer_id=? and bids.painting_id=pa.picture group by picture  ;`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var watch_list = await query(sql, [buyer_id]);
        return watch_list;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }

  async fetchPaintingsWon(buyer_id) {
    const mysql_obj = new MySQLBackend();

    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select * from winner_painting where buyer_id = ?`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var won_paintings = await query(sql, [buyer_id]);
        return won_paintings;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }

  async fetchMemberDetails(member_id) {
    const mysql_obj = new MySQLBackend();

    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select * from member where member_id = ?`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var members = await query(sql, [member_id]);
        return members;
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

  async fetchPaintingDetails(painting_id) {
    const mysql_obj = new MySQLBackend();
    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select * from painting where painting_id=?`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var painting_details = await query(sql, [painting_id]);
        return painting_details;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }

  async fetchPostedPaintings(seller_id) {
    const mysql_obj = new MySQLBackend();
    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select * from paintings_auction_view where seller=?`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var posted_paintings = await query(sql, [seller_id]);
        console.log("posted paintings", posted_paintings);
        return posted_paintings;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }

  async fetchPaintingsSold(seller_id) {
    const mysql_obj = new MySQLBackend();
    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select * from winner_seller_painting where seller=?`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var paintings_sold = await query(sql, [seller_id]);
        console.log("sold paintings", paintings_sold);
        return paintings_sold;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }

  async fetchPaintingsUnSold(seller_id) {
    const mysql_obj = new MySQLBackend();
    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select * from unsold_paintings where seller_id=?`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var paintings_unsold = await query(sql, [seller_id]);
        console.log("unsold paintings", paintings_unsold);
        return paintings_unsold;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }

  async insertIntoPainting(request,seller_id){
    const mysql_obj = new MySQLBackend();
    
    console.log("Request",request,)
    console.log("Seller",seller_id)

    try{
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {

      var today = new Date();
      var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
      var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      var date_posted = date+' '+time;

      var insert_values = [seller_id,request.title,request.description,request.width,request.length,date_posted,
      request.start_date,request.end_date,
      request.initial_bid_price,request.increment]

      var sql = `insert into painting(seller_id,title,description,width,length,date_posted,start_date,end_date,initial_bid_price,increment) values(?,?,?,?,?,?,?,?,?,?)`
      const query = util.promisify(connect_obj.query).bind(connect_obj);
      await query(sql, insert_values);
      
      sql = `select max(painting_id) as painting_id from painting`
      var  painting_id  = (await query(sql, insert_values))[0]["painting_id"];

      if (request.painting_type=="1"){
        sql = `insert into digitalpainting (painting_id,brushstrokes,resolution) values(?,?,?)`
        await query(sql, [painting_id,request.brushstrokes,request.resolution]);
      }
      else if (request.painting_type=="2"){
        sql = `insert into oilpainting (painting_id,oil_type) values(?,?)`
        await query(sql, [painting_id,request.oiltype]);
      }
      else if (request.painting_type=="3"){
        sql = `insert into sandpainting (painting_id,captured_with) values(?,?)`
        await query(sql, [painting_id,request.capturedwith]);
      }
      return;
      
    }


    } catch (err){
        throw new Error(err);
    }

  }

}

module.exports = OnlineAction;
