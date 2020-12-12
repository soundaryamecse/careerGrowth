import React from 'react'
import Styled from 'styled-components'
import useObjectUrl from 'use-object-url'

const Wrapper=Styled.div`
    width:60%;
    margin:20px;
    display:flex;
    border:1px solid grey;
    box-shadow:10px 5px 10px grey;
    background:white;
    padding:10px;
    img{
        height:50px;
        width:50px;
        border-radius:50px;
    }
    div{
       margin:10px;
        flex:1;
    }
`


export default function Table(props)
{
    const {array,sort,filterloc}=props
    let images = array.map((item)=>item.company_logo)
    console.log(images)

    return(
        <div>
            {array && array.filter((item)=>(
                 filterloc==="" ? item : item.location===filterloc
            )).sort((a,b)=>(
                sort==="asc" ? Number(a.salary)-Number(b.salary)
                :sort==="desc"? Number(b.salary)-Number(a.salary)
                : 0
            )).map((item)=>(
                <Wrapper>
                  
                    {/* <div><img src={URL.createObjectURL(item.company_logo)} alt="logo" /></div> */}
                    {/* <div><img src="https://img.etimg.com/thumb/msid-75080944,width-1070,height-580,imgsize-52514,overlay-economictimes/photo.jpg" alt={item.title}/></div> */}
                    <div><img src={item.company_logo} alt ="error msg" height="40px" width="40px"/></div>
                    <div><h4>{item.company_name}</h4></div>
                    <div><h4>{item.title}</h4></div>
                    <div><h4>{item.salary}</h4></div>
                    <div><h4>{item.location}</h4></div>
                    <div><h4>{item.date}</h4></div>
                    <div style={{display:"flex"}}><h4>Remote</h4>
                    <div style={{height:"20px",maxWidth:"20px",borderRadius:"50%",background:item.remote==="true" ? "green" : "yellow"}}></div></div>                    
                </Wrapper>
            ))}
        </div>
    )
}