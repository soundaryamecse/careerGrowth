import React from 'react'
import Styled from 'styled-components'

const TechniqueWrapper=Styled.div`
    width:50%;
  
    float:right;
    margin:30px;
    select{
        margin:10px;
        width:100px;
    }

`

export default function Technique(props)
{
    const {sort,filter,filterloc}=props
    return(
        <TechniqueWrapper>
            <div style={{display:"flex"}}><h2>Sort By Salary</h2>

            <select value={sort} name="sort" onChange={filter} style={{borderRadius:"10px",border:"none",backgroundColor:"yellow"}}>
               { ['all','asc','desc'].map(item=>(<option value={item}>{item}</option>))}
            </select></div>

            <div style={{display:"flex"}}><h2>Sort By Salary</h2>

            <select value={filterloc} name="filterloc" onChange={filter} style={{borderRadius:"10px",border:"none",backgroundColor:"yellow"}}>
               { ['bangalore','chennai','delhi','mumbai'].map(item=>(<option value={item}>{item}</option>))}
            </select></div>
        </TechniqueWrapper>
    )
}