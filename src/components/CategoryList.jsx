
const CategoryList = ({ categories, onDelete }) => {
  //const user = JSON.parse(localStorage.getItem("user"));

//if(user?.role !== "ADMIN"){
 // return <h2>Access Denied</h2>
//}
  return (
    <div className="grid">
      {categories.map((cat) => (
        <div key={cat.categoryId} className="card">
          <h3>{cat.categoryName}</h3>
          <p>{cat.description}</p>
          <button onClick={() => onDelete(cat.categoryId)}>Deactivate</button>
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
