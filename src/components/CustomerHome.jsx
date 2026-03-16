const CustomerHome = () => {

const user = JSON.parse(localStorage.getItem("user"));

const logout = () => {
  localStorage.removeItem("user");
  window.location.href="/";
};

return(

<div className="form-card">

<div style={{display:"flex",justifyContent:"space-between"}}>
<h2>Welcome {user?.firstName}</h2>

<button onClick={logout}>Logout</button>
</div>

<p>You are logged in as CUSTOMER</p>

<p>Here customer can browse products and place orders.</p>

</div>

);

};

export default CustomerHome;