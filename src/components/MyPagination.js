import { Pagination } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import ShowProducts from "./ShowProducts";

const MyPagination = (props)=>{
    let { page }  = useParams()
    const [total,setTotal] = useState(0);
    const [items,setItems] = useState([]);
    const navigate = useNavigate();
    useEffect(()=>{
        // const fetchLink = 'http://localhost:5000/'
        fetch('http://localhost:5000/getPaginatedDummyData?page='+page)
        .then(response=>{
            console.log('response---',response);
            if(response.status!=200){
                let newError = new Error();
                newError.message = 'some error occurred..!!'
                throw newError
            }
            return response.json()
        })
        .then(result=>{
            console.log('result----',result)
            setTotal(result.totalItems);
            setItems(result.data);
        })
    },[page])
    const changePageHandler = (sp)=>{
        navigate('/dummy/'+sp)
    }
    return (
        <>      

                <Pagination count={Math.ceil(total/3)} defaultPage={page} onChange={(e,sp)=>{
                    changePageHandler(sp)
                }} color="secondary" />

                <ShowProducts products={items} />
        </>        
    )
}

export default MyPagination;