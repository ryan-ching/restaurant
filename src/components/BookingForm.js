import React from "react";
import './BookingForm.css';
function BookingForm(props) {
    const [formState, setFormState] = React.useState({
        completed: false,
        name: "",
        date: "",
        hours: "",
        minutes: "",
        partySize: "",
        occasion: ""
    });
    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormState({...formState, [name]: value});
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        const validated = Object.values(formState)
            .filter((value) => value !== "completed")
            .every((value) => value !== "");
        setFormState({...formState, completed: validated});
        props.onSubmit(formState)
        if (validated) {
             props.onSubmit(formState);
             alert("Your reservation has been confirmed!");
        } else if(formState.name === "") {
            alert("Please enter your name.");
        } else if(formState.date === "") {
            alert("Please select a date.");
        } else if(formState.hours === "") {
            alert("Please select a time (Hour).");
        } else if(formState.mins === "") {
            alert("Please select a time (Mins).");
        } else if(formState.occasion === "") {
            alert("Please select an occasion.");
        } else {
             alert("Please fill out all fields.");
        }
    }

    const hoursOptions = [];
    hoursOptions.push(<option key="" value=""></option>);
    for (let i = 1; i <= 12; i++) {
        hoursOptions.push(<option key={i} value={i}>{i}</option>);
    }
    const minutesOptions = [];
    minutesOptions.push(<option key="" value=""></option>);
    minutesOptions.push(<option key="00" value="00">00</option>);
    for (let i = 15; i < 60; i += 15) {
        minutesOptions.push(<option key={i} value={i}>{i}</option>);
    }
    return (
        <form onSubmit={handleSubmit} className="form-grid">
            <h1>Book a Reservation Now!</h1>
            <div>
                <label htmlFor="name">Name</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formState.name} 
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="date">Date</label>
                <input 
                    type="date" 
                    id="date" 
                    name="date" 
                    value={formState.date} 
                    onChange={handleChange}
                    style={{fontSize: "2em"}}
                />
            </div>
            <div>
                <label htmlFor="time">Time</label>
                <div>
                    <select 
                        type="hours" 
                        id="hours" 
                        name="hours" 
                        value={formState.hours} 
                        onChange={handleChange}
                        style = {{width: "50px", fontSize: "1em"}}
                    >
                        {hoursOptions}
                    </select>
                    <select 
                        type="minutes" 
                        id="minutes" 
                        name="minutes" 
                        value={formState.minutes} 
                        onChange={handleChange}
                    >
                        {minutesOptions}
                </select>
                </div>
            </div>
            <div>
                <label htmlFor="partySize">Party Size</label>
                <input 
                    type="number" 
                    id="partySize" 
                    name="partySize" 
                    placeholder=""
                    min="1"
                    max="20"
                    value={formState.partySize} 
                    style={{width: "50px"}}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="occasion">Occasion</label>
                <select 
                    id="occasion" 
                    defaultValue="other"
                    name="occasion" 
                    value={formState.occasion} 
                    onChange={handleChange}
                >
                    <option value=""></option>
                    <option value="Birthday">Birthday</option>
                    <option value="Anniversary">Anniversary</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div className="sbutton">
                <button type="submit" className="submit-button">Reserve Now</button>
            </div>
        </form>
    );
  }
export default BookingForm;