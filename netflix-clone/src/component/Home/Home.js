import axios from "axios";
import { useState, useEffect } from 'react';
import Movielist from "../Movielist/Movielist";


function Home(){
    const [data,setData]=useState([]);
    const getAllMovie=async()=>{

        return await axios.get(`https://movielibrarywebsite.herokuapp.com/trending`).then(result=>{
           return result.data;

        }).catch((err)=>{
            console.log(err);
        })
    }
    useEffect(()=>{
        void(async()=>{
            let data=await getAllMovie();
            setData(data);
        })();
    },[]);
    return(
        <>
        <Movielist data={data}/>


        </>
    );
}
export default Home;