import React, {useEffect, useState} from 'react';
import axios from "axios";
import BookItem from "./BookItem";
import Card from "./Card";
import BooksFilter from "./BooksFilter";
// import baseUrl from '../../../books.json'

const BooksList = () => {
    const [booksData, setBooksData] = React.useState([])
    const [orderBy, setOrderBy] = React.useState(false)
    const [totalOrders, setTotalOrders] = React.useState([])
    const [ordersPrice, setOrdersPrice] = React.useState(0)


    React.useEffect(() =>{
        getData()
    },[])

    async function getData(){
        try{
            let response = await axios.get('../../../books.json')
            setBooksData(response.data)
        }catch(err){
            console.log(err)
        }
    }

    const filterBooks = (value) =>{
        const filteredData = booksData.filter(book =>{
            return book.category.toLowerCase().includes(value.toLowerCase())
        })
        setBooksData(filteredData)
    }

    const sortBooks = () =>{
        const copyData = booksData.slice()
        if(!orderBy){
            const sortedByAsc = copyData.sort((a,b) => a.price > b.price ? 1 : -1)
            setBooksData(sortedByAsc)
            setOrderBy(!orderBy)
        }else{
            const sortedByDesc = copyData.sort((a,b) => a.price > b.price ? -1 : 1)
            setBooksData(sortedByDesc)
            setOrderBy(!orderBy)
        }
    }

    const totalPrice = (book) => {
        totalOrders.push(book)
        let ordersSum = totalOrders.reduce((sum, current) => sum + current.price, 0)
        setOrdersPrice(ordersSum)
    }
    return (
        <div className="wrapper">
            <div className="app">
                <div className="app__body">
                    <h2>Books</h2>
                    <div>
                        <BooksFilter orderBy={orderBy} sortBooks={sortBooks} filterBooks={filterBooks} />
                    </div>
                    {booksData.map(book => (
                        <BookItem totalPrice={totalPrice} key={book.id} book={book} />
                    ))
                    }
                </div>
                <div className="app__cart">
                    <Card ordersPrice={ordersPrice} />
                </div>
            </div>
        </div>
    );
};

export default BooksList;
