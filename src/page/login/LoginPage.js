import {useState} from 'react';
import './LoginPage.css'

function LoginPage() {

  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {

      e.preventDefault()

      console.log({
        email,
        password
      })
  }

  return (
      <div className="login__container">

          <form className="login__form" onSubmit={(e) => handleSubmit(e)}>

          <div className="login__title">
            Login
          </div> 

            <div className="form__controle">

              <label>Email</label>
              <input 
                type="email" 
                placeholder='Email'
                value={email} 
                onChange={({target}) => setEmail(target.value)}
                required
              />

            </div>

            <div className="form__controle">

              <label>Password</label>
              <input 
                type="password" 
                placeholder='Password'
                value={password} 
                onChange={({target}) => setPassword(target.value)}
                required
              />

            </div>
            
            <button className='btn'>Submit</button>
          </form>
      </div>
  )
}

export default LoginPage;
