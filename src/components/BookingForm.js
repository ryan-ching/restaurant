import React from "react";
import PageView from './PageView';

function BookingForm() {
    const [date, setDate] = React.useState("");
    const [time, setTime] = React.useState("");
    const [partySize, setPartySize] = React.useState("");
    const [occasion, setOccasion] = React.useState("");

    const handleChange = (event) => {
        const {name, value} = event.target;
        if (name === "date") {
            setDate(value);
        } else if (name === "time") {
            setTime(value);
        } else if (name === "partySize") {
            setPartySize(value);
        } else if (name === "occasion") {
            setOccasion(value);
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(date, time, partySize, occasion);
    }
    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input 
                type="date" 
                id="date" 
                name="date" 
                value={date} 
                onChange={handleChange}
            />
            <label htmlFor="time">Time:</label>
            <input 
                type="time" 
                id="time" 
                name="time" 
                value={time} 
                onChange={handleChange}
            />
            <label htmlFor="partySize">Party Size:</label>
            <input 
                type="number" 
                id="partySize" 
                name="partySize" 
                placeholder="1"
                min="1"
                max="20"
                value={partySize} 
                onChange={handleChange}
            />
            <label htmlFor="occasion">Occasion:</label>
            <select id="occasion">
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="other">Other</option>
            </select>
            <input 
                type="text" 
                id="occasion" 
                name="occasion" 
                value={occasion} 
                onChange={handleChange}
            />
            <button type="submit">Reserve Now</button>
        </form>
    );
  }
export default BookingForm;