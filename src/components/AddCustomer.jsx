import { useState } from "react";
import { addCustomer } from "../services/customerService";
import { useNavigate } from "react-router-dom";

const AddCustomer = () => {

const navigate = useNavigate();

const [customer,setCustomer] = useState({
firstName:"",
lastName:"",
email:"",
phone:"",
password:""
});

const handleChange = (e)=>{
setCustomer({...customer,[e.target.name]:e.target.value});
};

const handleSubmit = (e)=>{
e.preventDefault();

addCustomer(customer)
.then(()=>{
alert("Customer Added Successfully");
navigate("/customers");
})
.catch(err=>console.log(err));

};

return(

<div className="form-card">

<h2>Add Customer</h2>

<form onSubmit={handleSubmit}>

<input
name="firstName"
placeholder="First Name"
onChange={handleChange}
required
/>

<input
name="lastName"
placeholder="Last Name"
onChange={handleChange}
/>

<input
name="email"
placeholder="Email"
onChange={handleChange}
required
/>

<input
name="phone"
placeholder="Phone"
onChange={handleChange}
/>

<input
type="password"
name="password"
placeholder="Password"
onChange={handleChange}
/>

<button type="submit">Save</button>

</form>

</div>

);

};

export default AddCustomer;