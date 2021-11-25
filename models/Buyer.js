class Buyer {
  constructor(
    buyer_id,
    shipping_address,
    shipping_city,
    shipping_state,
    shipping_country,
    shipping_pincode
  ) {
    this.buyer_id = buyer_id;
    this.shipping_address = shipping_address;
    this.shipping_city = shipping_city;
    this.shipping_state = shipping_state;
    this.shipping_country = shipping_country;
    this.shipping_pincode = shipping_pincode;
  }
}

export default Buyer;
