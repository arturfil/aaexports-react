import { useState } from 'react'
import { loginUserToApi } from '../services/authService'

const LoginView = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    role: ''
  })

  const handleChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const userResponse = await loginUserToApi(user);
  }

  return (
    <div className="container mt-5">
      <form style={{width: '400px'}}>
        <h2>Login</h2>
        <input
          placeholder="name"
          value={user.name} 
          onChange={handleChange}
          name="name"
          type="text" 
          className="form-control" 
        />
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
        <button onClick={handleSubmit} className="btn-btn-success">
          Login
        </button>
      </form>
    </div>
  )
}

export default LoginView
