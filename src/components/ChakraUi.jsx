import React, { useState } from "react";

export default function Chakra() {
  const [form, setForm] = useState({});
  const [value, setValue] = useState(false);

  const click = () => {
    setValue(!value)
    console.log(value)
  }
   
  const handOnleChange = (e) => {
    let { name, checked, type, value, files } = e.target;
    //console.log(name,checked,type, value)
    if (type === "checkbox") {
      setForm({
        ...form,
        [name]: checked
      });
    } else if (type === "file") {
      setForm({
        ...form,
        [name]: files
      });
    } else {
      setForm({
        ...form,
        [name]: value
      });
    }
  };

  const handOnleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    alert("Verification Succeed!! View Your Card Now")
  };

  return (
    <div className="form" onSubmit={handOnleSubmit}>
      
      <h3>Payment Details</h3>
      <form>
        <h5>CardHolder Name</h5>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={form.name}
          onChange={handOnleChange}
        />
        <div className="line"></div>

        <h5>Card Number</h5>
        <input
          type="number"
          placeholder="Enter Card Number"
          name="cardnumber"
          value={form.cardnumber}
          onChange={handOnleChange}
        />
        <div className="line"></div>

        <div className="date">
          <h6>Expiry Month</h6>
          <h6>Expiry Year</h6>
          <h6 className="cvvt">CVV</h6>
        </div>

        <div>
          <input
            className="month"
            type="month"
            placeholder="Selcet Month"
            name="monthyear"
            value={form.monthyear}
            onChange={handOnleChange}
          />
          <input
            className="cvv"
            type="number"
            placeholder="CVV"
            name="cvv"
            value={form.cvv}
            onChange={handOnleChange}
          />{" "}
          <br /> <br />
          <div className="line"></div>
          <label>Paymemt amount :</label>
          <input
            className="amount"
            type="number"
            placeholder="Enter Amount"
            name="amount"
            value={form.amount}
            onChange={handOnleChange}
          />{" "}
          <label>₹</label> <br />
          <br />
        </div>
        <div className="line"></div>

        <input type="submit" className="pay" value="PAY" />
      </form>
   
       <button onClick={click}>{value ? "Hide Card" : "View Card"}</button>
       
      
       
        {value ?  <div className="card">
          <h1>Visa</h1>
          <div className="chip"></div>
           <div className="number">{form.cardnumber}</div>
           <div className="dummy"> <h5>Cardholder</h5> <h5>Expiry</h5> <h5>Cvv</h5></div>
           <div className="details"><h3>{form.name}</h3><h3>{form.monthyear}</h3> <h3>{form.cvv}</h3></div>
        </div> : null}
          
    </div>
  );
}
