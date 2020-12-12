import React from 'react'
import data from './data.json'


export const AppContext=React.createContext()

class AppContextProvider extends React.Component{
    constructor(props)
    {
        super(props)
        this.state={
            title:"",
            salary:"",
            company_name:"",
            location:"",
            remote:false,
            company_logo:React.createRef(),
            date:"",
            data:data,
            array:data,
            sort:"all",
            filterloc:""
        }
    }
    handleChange=(e)=>{
        const {name,type,checked,value}=e.target       
        
        const val=type==="checked" ? checked :value        
        this.setState({[name] : val})
        
        
    }
    handleSubmit=(e)=>{
        e.preventDefault()       
        
        var {company_logo,...formData} = this.state
      
        let obj ={
            ...formData,
            company_logo:URL.createObjectURL(company_logo.current.files[0]),
            
        }


        this.setState({array:[{...obj},...this.state.array],
            data:[...this.state.array,{...obj}]
        })
    }
    handleFilter=(e)=>{        
        this.setState({[e.target.name]:e.target.value,
                        array:this.state.data})     
        

    }
    componentDidMount()
    {
        console.log(data)
    }
    render()
    {
        
        const {title,salary,company_name,location,remote,company_logo,date,array,sort,filterloc}=this.state
        const {handleChange,handleSubmit,handleFilter}=this
        const value={title,salary,company_name,location,remote,company_logo,date,array,sort,filterloc,handleChange,handleSubmit,handleFilter}        
        console.log(this.state.array)
        // console.log(company_logo)
        return(
            <AppContext.Provider value={value}>
                    {this.props.children}
            </AppContext.Provider>
        )
    }
}

export default AppContextProvider