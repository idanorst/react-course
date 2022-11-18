import React from 'react'
import '../style.css'
import Trip from './Trip'
import tripData from '../data'

export default function Journal() {
    const trips = tripData.map(trip => {
        return (<div>
                    <Trip 
                        key={trip.title}
                        item={trip}
                    />
                    <hr className='divider'/>
                </div> 
        )
    })
    return (
        <section>
            {trips}
        </section>
        
    )
}