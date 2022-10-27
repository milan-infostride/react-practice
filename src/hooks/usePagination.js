import { useState } from "react";

const usePagination = (cp=1,pageCount=3)=>{
    const [currentPage,setCurrentPage] = useState(cp);
    const [pageLabel1,setPageLabel1] = useState(1);
    const [pageLabel2,setPageLabel2] = useState(2);
    const [pageLabel3,setPageLabel3] = useState(3);
    const nextClicked = ()=>{
        setCurrentPage((prevState)=>{
            return prevState++;
        })
        set
    }
    const prevClicked = ()=>{
        setCurrentPage((prevState)=>{
            return prevState--;
        })
    }

    return {
        currentPage,
        nextClicked,
        prevClicked
    }
}