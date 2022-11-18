import React from 'react'
import '../style.css'

export default function Trip(props) {
    const startDate = props.item.startDate.split(/\s+/)
    const endDate = props.item.endDate.split(/\s+/)
    
    return (
        <div className='trip'>
            <img className='trip--photo' src={props.item.imageUrl} alt={`Photo of ${props.item.title}`} title={`Photo of ${props.item.title}`}/>
            <div className='trip--info'>
                <div className='trip--location'>
                    <span className='trip--country'><img src={require('../images/pin.png')} className="trip--location-icon"/>{props.item.location}
                    </span>
                    <span className='trip--link'><a href={props.item.googleMapsLink} target="_blank">View on Google Maps</a></span>
                </div>
                <h2 className='trip--title'>{props.item.title}</h2>
                <p className='trip--date'>{startDate[0]} {startDate[1]}, {startDate[2]} - {endDate[0]} {endDate[1]}, {endDate[2]}</p>
                <p className='trip--description'>{props.item.description}</p>
            </div>
        </div>
        
    )
}