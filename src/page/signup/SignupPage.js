import {useState} from 'react';
import { Link } from 'react-router-dom';
import useSignup from '../../hooks/useSignup';
import './SignupPage.css'

function SignupPage() {

    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [formError, setFormError] = useState(null)
    const {pending, error, signup} = useSignup()

    const handleSubmit = (e) => {

        e.preventDefault()

        if(checkFormError())
        {
            setTimeout(()=> setFormError(null), 7000)
            return
        }

        signup(email,password, username)
    }
  
    const checkFormError = () => {

        if(username.length>20)
        {
            setFormError("username cannot be greater than 20 characters")
            return true
        }

        if(password.length<10)
        {
            setFormError("password length should be greater than or equal to 10")
            return true
        }

        return false
    }

    return (
        <div className="signup__container">
            <div className="signup__container">

                <form className="signup__form" onSubmit={(e) => handleSubmit(e)}>

                    <div className="signup__title">
                        Signup
                    </div> 

                    {
                        error && <div className='error--info'>{error}</div>
                    }

                    {
                        formError && <div className="error--info">
                            {formError}
                        </div>
                    }

                    <div className="form__controle">

                        <label>Username</label>
                        <input 
                        type="text" 
                        placeholder='Username'
                        value={username} 
                        onChange={({target}) => setUsername(target.value.trim())}
                        required
                        />

                    </div>

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
                        <button className='btn btn--disabled' disabled>Submit</button> :
                        <button className='btn'>Submit</button>
                    }

                    <div className="signup__links">
                        Have an account ? <Link to="/login">Login</Link>
                    </div>
                </form> 
            </div>
        </div>
    )
}

export default SignupPage;
