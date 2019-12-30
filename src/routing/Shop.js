import React, { useState, useEffect } from 'react'

export default function Shop() {

    useEffect(() => {
        fetchItems();
    }, [])

    const fetchItems = async () => {
        const data = await fetch('https://fortnite-api.theapinetwork.com/items/list');
        const items = await data.json();
        console.log(items);
    }

    return (
        <div>
            Shop
        </div>
    )
}
