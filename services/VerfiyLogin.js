const MySQLBackend = require("./backend/MySQLBackend");
const util = require("util");

class VerifyLogin {
  async verifyLoginDetails(email, password) {
    const mysql_obj = new MySQLBackend();

    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select * from member where email_id=? and password=?`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var items = await query(sql, [email, password]);
        return items;
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }

  async verifyBuyer(member_id) {
    const mysql_obj = new MySQLBackend();

    try {
      const connect_obj = mysql_obj.connect();
      if (connect_obj != null) {
        console.log("connected to db");
        const sql = `select * from buyer where member_id=?`;
        const query = util.promisify(connect_obj.query).bind(connect_obj);
        var items = await query(sql, [member_id]);
        if (items.length == 0) {
          return false;
        } else {
          return true;
        }
      }
    } catch (err) {
      throw new Error(err);
    } finally {
      console.log("Disconnected from db");
      mysql_obj.disconnect();
    }
  }
}

module.exports = VerifyLogin;
