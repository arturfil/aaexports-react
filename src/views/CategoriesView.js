import { useEffect, useState } from 'react'
import { useHistory } from 'react-router'
import { deleteCategoryFromApi, getCategoriesFromApi } from '../services/categoryService';
import { Table } from 'react-bootstrap'

const CategoriesView = () => {
  const [categories, setCategories] = useState([]);
  const history = useHistory();

  useEffect(() => {
    getCategories();
  }, [])

  const getCategories = async () => {
    const response = await getCategoriesFromApi();
    setCategories(response.data);
  }

  const handleDelete = async (event, id) => {
    event.preventDefault();
    await deleteCategoryFromApi(id);
    let filtered = categories.filter(category => {
      return category._id != id
    });
    setCategories(filtered);
  }

  return (
    <div className="container mt-5">
      <Table bordered style={{borderColor: 'black'}}>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, i) => (
            <tr>
              <td>{i+1}</td>
              <td>{category.name}</td>
              <td>
                <button 
                  onClick={(event) => handleDelete(event, category._id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}

export default CategoriesView;