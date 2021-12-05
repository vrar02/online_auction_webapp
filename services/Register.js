const MySQLBackend = require("./backend/MySQLBackend");
const util = require("util");

class Register {
    async register(request) {
      
     const mysql_obj = new MySQLBackend();
  
      try {
        
        const connect_obj = mysql_obj.connect();
        if (connect_obj != null) {
            
          var insert_values = [request.firstname,request.middlename,request.lastname,request.street,request.city,
            request.state,request.country,request.pincode,request.email,request.password]

          console.log("Register:",request)
          console.log("connected to db");

          const query = util.promisify(connect_obj.query).bind(connect_obj);
          
          const sql = `insert into member (fname,mname,lname,address,city,state,country,pincode,email_id,password) values(?,?,?,?,?,?,?,?,?,?)`;
          var items = await query(sql, insert_values);

        //   Get member_id of inserted value
          const member_id_query = `select member_id from member where fname=? and lname=? and email_id=?`
          var items = await query(member_id_query, [request.firstname,request.lastname,request.email]);
          
          var member_id = items[0]["member_id"]

          if (request["user_type"]=="1"){

            // Insert to buyer table
            const sql = `insert into buyer (member_id,shipping_address,shipping_city,shipping_state,shipping_country,shipping_pincode) values(?,?,?,?,?,?)`;
            var items = await query(sql, [member_id,request.ship_addrs,request.ship_city,request.ship_state,request.ship_country,request.ship_pincode]);
            
            return;
          }

          else{

            // Insert to seller table
            const sql = `insert into seller (member_id,bank_account_no,routing_no) values(?,?,?)`;
            var items = await query(sql, [member_id,request.acc_no,request.route_no]);
            
            return;
          
        }

        }
      } catch (err) {
        return {"err":err.sqlMessage}

        
      } finally {
        console.log("Disconnected from db");
        mysql_obj.disconnect();

      }
    }
  }
  
  module.exports = Register;