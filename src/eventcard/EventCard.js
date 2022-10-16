import React from "react";
import "./eventcard.css";


const EventCard = ({event}: EventCardProps) => {
    return (
        <div className="conteiner">
            <div className="event">
                <div  className="when">
                    <h3>Дата проведения: </h3>
                        <p>{event.date_of_event_start} - {event.date_of_event_end}</p>
                </div>
                <div className="event_title">
                    <h3>{event.title}</h3>
                </div>     
                <div className="place">
                    <h3>Место проведения: </h3>
                    <p>{event.location}</p>
                </div>
                <button className="button" onClick={() => {window.open( `${event.url}`, '_blank');}}>
                    <span>Подробнее</span>
                </button>
            </div>
        </div>
    );
};

export default EventCard;
