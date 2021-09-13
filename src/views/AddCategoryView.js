import { useState } from "react";
import { postCategoryToApi } from "../services/categoryService";

const AddCategoryView = () => {
  const [category, setCategory] = useState(
    {
      name: '',
    }
  )

  const handleChange = (event) => {
    setCategory({
      name: event.target.value 
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postCategoryToApi(category);
    setCategory({
      name: ''
    })
  }

  return (
    <div className="container mt-5">
      <form className="productForm">
        <h2>Add a Category</h2>
        <label>Category Name</label>
        <input
          placeholder="Category Name"
          className="form-control"
          onChange={handleChange}
          value={category.name}
          name="name"
          type="text" 
        />
        <button 
          onClick={handleSubmit}
          className="form-control btn btn-primary"
        >
          Create
        </button>
      </form>
    </div>
  )
}

export default AddCategoryView;