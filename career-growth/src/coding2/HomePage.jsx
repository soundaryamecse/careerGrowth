import React from 'react'
import {AppContext} from './AppContext'
import Form from './Form'
import Technique from './Technique'
import Table from './Table'
import Styled from 'styled-components'

const contentWrapper=Styled.div` 
    
`
class HomePage extends React.Component{
    render(){
        const {handleChange,handleSubmit,handleFilter,sort,array,filterloc,...value}=this.context
        
        
        //console.log(value)
        return(
            <contentWrapper>
                <Form content={value} change={handleChange} submit={handleSubmit}/>
                <Technique sort={sort} filter={handleFilter} filterloc={filterloc} />
                <Table content={value} array={array}  sort={sort} filterloc={filterloc}/>
            </contentWrapper>
        )
        
    }
}

HomePage.contextType=AppContext

export default HomePage