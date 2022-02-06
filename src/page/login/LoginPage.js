import {useState} from 'react';
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
            
            {
              pending ? 
              <button className='btn btn--disabled' disabled>Loading</button> :
              <button className='btn'>Submit</button>
            }

          </form>
      </div>
  )
}

export default LoginPage;
