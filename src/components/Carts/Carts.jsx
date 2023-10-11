import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';

const Carts = () => {
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        // fetch('https://openapi.programming-hero.com/api/ai/tools')
        // .then(res=>res.json())
        // .then(data=>setCart())

        const loadData = async () => {
            const res = await fetch(' https://openapi.programming-hero.com/api/ai/tools')
            const data = await res.json();
            // console.log();
            setCarts(data.data.tools)
        }
        loadData()
    }, [])
    return (
        <div>
            <h1>Cart data hello:{carts.length}</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:px-12 my-6'>
                {
                    carts.map(card => <Card
                        key={card.id}
                        card={card}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Carts;