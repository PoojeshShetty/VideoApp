import {useState} from 'react';
import './SignupPage.css'

function SignupPage() {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {

        e.preventDefault()
  
        console.log({
          username,
          email,
          password
        })
    }
  
    return (
        <div className="signup__container">
            <div className="signup__container">

                <form className="signup__form" onSubmit={(e) => handleSubmit(e)}>

                    <div className="signup__title">
                        Signup
                    </div> 

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
                    
                    <button className='btn'>Submit</button>
                </form> 
            </div>
        </div>
    )
}

export default SignupPage;
