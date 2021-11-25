class Member {
  constructor(
    member_id,
    email_id,
    password,
    fname,
    mname,
    lname,
    address,
    city,
    state,
    country,
    pincode
  ) {
    this.member_id = member_id;
    this.email_id = email_id;
    this.password = password;
    this.fname = fname;
    this.mname = mname;
    this.lname = lname;
    this.address = address;
    this.city = city;
    this.state = state;
    this.country = country;
    this.pincode = pincode;
  }

  validateLoginDetails(email_id, password) {
    return "vivek";
  }
}

export default Member;
