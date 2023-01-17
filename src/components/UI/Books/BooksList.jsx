import React, {useEffect, useState} from 'react';
import axios from "axios";
import baseUrl from '../../../books.json'

const BooksList = () => {
    const [booksData,setBooksData]=useState([])
    useEffect(()=>{
        getData()

    },[])
    async function getData(){
        await axios.get(baseUrl)
            .then(res=>{
                setBooksData(res.data)
            })
            .catch(err=>{
                console.log(err)
            })
    }
    console.log('booksData', booksData)
    return (
        <div>

        </div>
    );
};

export default BooksList;
