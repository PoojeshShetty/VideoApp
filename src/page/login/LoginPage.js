import {useState} from 'react';
import './LoginPage.css'

function LoginPage() {

  const [username,setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {

      e.preventDefault()

      console.log({
        username,
        email,
        password
      })
  }

  return (
      <div className="login__container">
          
          <form className="login__form" onSubmit={(e) => handleSubmit(e)}>

            <div className="form__controle">

              <label>Username</label>
              <input 
                type="text" 
                placeholder='Username'
                value={username} 
                onChange={({target}) => setUsername(target.value)}
                required
              />

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
            
            <button>Submit</button>
          </form>
      </div>
  )
}

export default LoginPage;
