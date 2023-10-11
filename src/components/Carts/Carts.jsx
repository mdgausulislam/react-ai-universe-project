import React, { useEffect, useState } from 'react';

const Cart = () => {
    const [cart,setCart]=useState([]);
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/ai/tools')
        // .then(res=>res.json())
        // .then(data=>setCart())

        const loadData=async()=>{
            const res=await fetch(' https://openapi.programming-hero.com/api/ai/tools')
            const data=await res.json();
            // console.log();
            setCart(data.data.tools)
        }
        loadData()
    },[])
    return (
        <div>
            <h1>Cart data hello:{cart.length}</h1>
            
        </div>
    );
};

export default Cart;