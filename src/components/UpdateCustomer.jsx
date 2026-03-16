import { useEffect, useState } from "react";
import { getCustomerById, updateCustomer } from "../services/customerService";
import { useParams, useNavigate } from "react-router-dom";

const UpdateCustomer = () => {

const {id} = useParams();
const navigate = useNavigate();

const [customer,setCustomer] = useState({});

useEffect(()=>{

getCustomerById(id)
.then(res=>{
setCustomer(res.data);
})
.catch(err=>console.log(err));

},[id]);

const handleChange = (e)=>{
setCustomer({...customer,[e.target.name]:e.target.value});
};

const handleSubmit = (e)=>{
e.preventDefault();

updateCustomer(id,customer)
.then(()=>{
alert("Customer Updated");
navigate("/customers");
})
.catch(err=>console.log(err));

};

return(

<div className="form-card">

<h2>Update Customer</h2>

<form onSubmit={handleSubmit}>

<input
name="firstName"
value={customer.firstName || ""}
onChange={handleChange}
/>

<input
name="lastName"
value={customer.lastName || ""}
onChange={handleChange}
/>

<input
name="email"
value={customer.email || ""}
onChange={handleChange}
/>

<input
name="phone"
value={customer.phone || ""}
onChange={handleChange}
/>

<button type="submit">Update</button>

</form>

</div>

);

};

export default UpdateCustomer;