import { useState } from "react";

function AddressForm() {
  const [data, setData] = useState({
    name: "",
    address: {
      street: "",
      city: "",
      pincode: ""
    }
  });

  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    if (e.target.name in data.address) {
      setData({
        ...data,
        address: { ...data.address, [e.target.name]: e.target.value }
      });
    } else {
      setData({ ...data, [e.target.name]: e.target.value });
    }
  };

  return (
    <>
      <h2>Address Form</h2>

      <form onSubmit={(e) => { e.preventDefault(); setShow(true); }}>
        <input name="name" placeholder="Name" onChange={handleChange} />
        <input name="street" placeholder="Street" onChange={handleChange} />
        <input name="city" placeholder="City" onChange={handleChange} />
        <input name="pincode" placeholder="Pincode" onChange={handleChange} />
        <button>Submit</button>
      </form>

      {show && (
        <div className="card">
          <p>{data.name}</p>
          <p>{data.address.street}</p>
          <p>{data.address.city}</p>
          <p>{data.address.pincode}</p>
        </div>
      )}
    </>
  );
}

export default AddressForm;
