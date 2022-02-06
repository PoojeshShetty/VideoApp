import {useState} from 'react';
import { Link } from 'react-router-dom';
import useLogin from '../../hooks/useLogin';
import './LoginPage.css'

function LoginPage() {

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {login,pending,error} = useLogin()

  const handleSubmit = (e) => {

      e.preventDefault()

      login(email,password)
  }

  const handleGuestCredential = (e) => {

    e.preventDefault()

    setEmail("test@gmail.com")

    setPassword("test@gmail.com")
  }

  return (
      <div className="login__container">

          <form className="login__form" onSubmit={(e) => handleSubmit(e)}>

            <div className="login__title">
              Login
            </div> 

            {
              error && <div className="error--info">
                {error}
              </div>
            }

            <div className="form__controle">

              <label>Email</label>
              <input 
                type="email" 
                placeholder='Email'
                value={email} 
                onChange={({target}) => setEmail(target.value.trim())}
                required
              />

            </div>

            <div className="form__controle">

              <label>Password</label>
              <input 
                type="password" 
                placeholder='Password'
                value={password} 
                onChange={({target}) => setPassword(target.value.trim())}
                required
              />

            </div>
            
            <div className="loginbtn__collection">
            {
              pending ? 
              <button className='btn btn--disabled' disabled>Loading</button> :
              <button className='btn'>Submit</button>
            }
            <button className='btn' onClick={(e) => handleGuestCredential(e)}>Guest Credential</button>

            </div>

            <div className="login__links">
              Don't have an account ? <Link to="/signup">Sign Up</Link>
            </div>
          </form>
      </div>
  )
}

export default LoginPage;
