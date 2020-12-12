import React from 'react'
import { AuthContext } from './AuthContext'
import Login from './Login'
import Dashboard from './Dashboard'

class HomePage extends React.Component{
    
    render()
    {
        const {email,password,isAuth,token,handleChange,handleSubmit}=this.context
       return (
           <>
           {!isAuth?
                <Login change={handleChange} email={email} password={password} submit={handleSubmit}/> 
                :<Dashboard email={email} token={token}/>
           }
           </>
       )
        
    }
}

HomePage.contextType=AuthContext

export default HomePage