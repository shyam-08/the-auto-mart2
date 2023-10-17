import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'

function FetchData() {
    const [contacts, setContacts] = useState([]);
    const [items, setItems] = useState(data);

    useEffect(()=>{
        axios.get('sample.json')
        .then(response => {
            console.log(response)
            setContacts(response.data)
        })
    })
    const removeItem = (index) => {
      setItems([
                 ...items.slice(0, index),
                 ...items.slice(index + 1)
               ]);
    }
    
    return (
        <div>
            <ul>
               {contacts.map(contacts => (<li>{contacts.contacts}</li>)
               )}
            </ul>
            <button onClick={removeItem }>Delete</button>
        </div>

    )
}

export default FetchData;