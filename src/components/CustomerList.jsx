import { useEffect, useState } from "react";
import { getAllCustomers, deleteCustomer } from "../services/customerService";
import { useNavigate } from "react-router-dom";

const CustomerList = () => {

const [customers,setCustomers] = useState([]);
const navigate = useNavigate();
const logout = () => {
  localStorage.removeItem("user");
  window.location.href = "/";
};

useEffect(()=>{
loadCustomers();
},[]);

const loadCustomers = ()=>{
getAllCustomers()
.then(res=>{
setCustomers(res.data);
})
.catch(err=>console.log(err));
};

const handleDelete = (id)=>{
deleteCustomer(id).then(()=>{
alert("Customer Deleted");
loadCustomers();
});
};

return(

<div className="form-card">

<h2>Customer Management</h2>
<button onClick={logout}>Logout</button>


<button onClick={()=>navigate("/add-customer")}>
Add Customer
</button>

<table className="customer-table">

<thead>
<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Phone</th>
<th>Created At</th>
<th>Updated At</th>
<th>Status</th>
<th>Actions</th>
</tr>
</thead>

<tbody>

{customers.map(c=>(
<tr key={c.userId}>

<td>{c.userId}</td>
<td>{c.firstName} {c.lastName}</td>
<td>{c.email}</td>
<td>{c.phone}</td>
<td>{new Date(c.createdAt).toLocaleString()}</td>
<td>{new Date(c.updatedAt).toLocaleString()}</td>
<td>{c.status ? "Active":"Inactive"}</td>

<td>

<button onClick={()=>navigate(`/update-customer/${c.userId}`)}>
Update
</button>

<button onClick={()=>handleDelete(c.userId)}>
Delete
</button>

</td>

</tr>
))}

</tbody>

</table>

</div>

);

};

export default CustomerList;