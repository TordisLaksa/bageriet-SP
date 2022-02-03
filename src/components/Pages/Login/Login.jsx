import axios from "axios"
import { useContext, useState } from "react"
import { useForm } from "react-hook-form";
import { AuthContext } from "../../Context/AuthProvider";

export const Login = () => {
    const {register, handleSubmit, formState: { errors }} = useForm()
    
    const [message, setMessage] = useState('');
    const {loginData, setLoginData} = useContext(AuthContext);

    const SubmitLoginForm = async data => {
        
        const formData = new FormData()
        //Username/password er key
        formData.append('username', data.username)
        formData.append('password', data.password)

        try{
            //axios pakker vores formData ind i et object
            const result = await axios.post('https://api.mediehuset.net/token', formData)
            handleSessionData(result)
            
        }
        catch(err){
            console.error(err);
            alert('Kunne ikke logge ind')
        }
    }
    
    const handleSessionData = resp => {
        if(resp.status === 201){
            //token er et variabel navn
            sessionStorage.setItem('token', JSON.stringify(resp.data))
            //den er vigtig! ellers refresher den ikke når jeg logger ind
            setLoginData(resp.data)
        }
    }

    const logOut = () => {
        sessionStorage.removeItem('token')
        setLoginData('')
    }
    
    return(
        <>
        <h2>Login</h2>
        {message ? message : null}
        {!loginData ?
        <>
        <p>Indtast dit brugernavn og din adgangskode for at logge ind:</p>
            <form method="post" onSubmit={handleSubmit(SubmitLoginForm)}>
            <div>
                {/* label henviser til id */}
                    <label htmlFor="username" >Brugernavn: </label>
                    <input {...register('username', {required: true })} />
                    {errors.username && <span>Du skal udfylde dit brugernavn: </span>}
                </div>            
                <div>
                    <label htmlFor="password" >Kodeord: </label>
                    <input type="password" {...register('password', {required: true })} />
                    {errors.password && <span>Du skal udfylde dit kodeord: </span>}
                </div>
                <div>
                    <button type="submit">Login</button>
                    <button type="reset">Nulstil felter</button>
                </div>
            </form>
            </>
            :
            <>
            <p>Du er logget ind som {loginData.username}</p>
            <form>
                <button type="button" onClick={logOut}>Log ud</button>
            </form>
            </>
        }
        </>
    )
}