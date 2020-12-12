import React from 'react'
import Styled from 'styled-components'

const LoginWrapper=Styled.div`
    background-image: linear-gradient(to right, #2196F3 , #E91E63);
    padding-left:50px;
    padding-top:50px;
   border:10px solid #4DB6AC;
   width:400px;
   height:300px;
   margin:auto;
   margin-top:100px;
   input,button{
       padding:10px;
       margin:10px;
   }
   button{
       margin-left:100px;
   }
`

export default class Login extends React.Component
{
    
    render()
    {
        return (
            <LoginWrapper>
                <div>
                <label>Email:
                    <input type="text" name="email" onChange={this.props.change} value={this.props.email} style={{marginLeft:"30px"}}/>
                </label>
                </div>
                <br/>
                <div>
                <label>Password:
                    <input type="text" name="password" onChange={this.props.change} value={this.props.password}/>
                </label>
                </div>
                <div>
                    <button onClick={this.props.submit}>Login</button>
                </div>
                
            </LoginWrapper>
        )
    }
    
}