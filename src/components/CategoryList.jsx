const CategoryList = ({ categories, onDelete }) => {
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
