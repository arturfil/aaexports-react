import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';
import { loginUserToApi } from '../services/authService'

const LoginView = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  // login function
  const handleSubmit = async (event) => {
    event.preventDefault();
    const userResponse = await loginUserToApi(user);
    setUser({
      email: '',
      password: ''
    })
    // window.location.reload();
    history.push('/')
  }

  return (
    <div className="container mt-5">

      <form className="productForm" style={{width: '400px'}}>
        <h2>Login</h2>
        <input
          placeholder="email"
          value={user.email} 
          onChange={handleChange}
          name="email"
          type="email" 
          className="form-control" 
        />
        <input
          placeholder="password"
          value={user.password} 
          onChange={handleChange}
          name="password"
          type="password" 
          className="form-control" 
        />
        <button onClick={handleSubmit} className="btn btn-outline-dark form-control">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginView


