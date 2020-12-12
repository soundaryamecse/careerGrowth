import React from 'react'
import axios from 'axios'

export const AuthContext=React.createContext();

class AuthContextProvider extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            email:"",
            password:"",
            token:"",
            isAuth:false
        }
    }
    handleChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=async()=>{
       await axios.post("https://reqres.in/api/login",{
           email:this.state.email,
           password:this.state.password})
           .then(res=>this.setState({token:res.data.token,
                                    isAuth:true}))
       
    }
    
    render()
    {
        const {email,password,token,isAuth}=this.state
        const {handleChange,handleSubmit}=this
        const value={email,password,handleChange,handleSubmit,token,isAuth}
        console.log(this.state)
        return (
            <AuthContext.Provider value={value}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider