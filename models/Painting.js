class Painting {
  constructor(
    painting_id,
    seller_id,
    title,
    description,
    width,
    length,
    date_posted,
    start_date,
    end_date,
    initial_bid_price,
    increment
  ) {
    this.painting_id = painting_id;
    this.seller_id = seller_id;
    this.title = title;
    this.description = description;
    this.width = width;
    this.length = length;
    this.date_posted = date_posted;
    this.start_date = start_date;
    this.end_date = end_date;
    this.initial_bid_price = initial_bid_price;
    this.increment = increment;
  }
}

export default Painting;
