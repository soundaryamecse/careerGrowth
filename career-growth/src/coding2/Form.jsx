import React from 'react'
import Styled from 'styled-components'

const FormWrapper=Styled.div`    
    width:40%;    
    padding:10px;
    
    float:left;
    input{
        padding:10px;
        border-radius:10px;
        border:none;
        width:250px;
    }
    div{
        margin:10px;
        font-weight:bold;
    }
    
    label>div{
        margin-left:100px;      
        
    }
`

export default class Form extends React.Component
{      
    render(){
    const {content,change,submit,company_logo}=this.props    
    return(
        <FormWrapper>
            <form onSubmit={submit}>
            {Object.keys(content).map(item=>(                
                 <>
                    {item!=="company_logo"?                  
                    <label>
                      <div  style={{display:"flex"}}>  
                          {item==="remote" && item }
                           <input type={item==="salary"
                        ? "number" : item==="date" ? "date"
                         : item==="remote" 
                         ? "checkbox" : "text"} name={item} key={item}
                         placeholder={item} 
                         value={this.props.content[item]}
                          onChange={change} /></div>
                    </label>
                    :
                   <label>
                       {console.log(this.props.content[item])}
                        <div style={{display:"flex"}}> {item}<input type="file" name="company_logo" key={item}
                         placeholder={item} 
                         ref={this.props.content[item]}
                           /></div>
                    </label>}                
            </>
            ))}
            <div style={{marginLeft:"110px"}}><input type="submit" value="SUBMIT" style={{background:"#E91E63",color:"white"}}/></div>
         </form>
        </FormWrapper>
    )
     }
}