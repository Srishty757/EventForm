import React from "react";


function Event (){
    const [location, setCategory] = React.useState('');
 const handleCategoryChange = (location) => {
       setCategory(location);
       console.log(location);
   }

   const [organiserDetails, setOrg] = React.useState('');
 const handleOrg = (organiserDetails) => {
       setOrg(organiserDetails);
       console.log(organiserDetails);
   }

   const [eventStartDate, setDate] = React.useState('');
 const handleDateChanges = (eventStartDate) => {
  setDate(eventStartDate);
       console.log(eventStartDate);
   }

   const [eventEndDate, setC] = React.useState('');
 const handleChanges = (eventEndDate) => {
  setC(eventEndDate);
       console.log(eventEndDate);
   }

   const [eventType, setCate] = React.useState('');
   const handleCateChange = (eventType) => {
      setCate(eventType);
       console.log(eventType);
   }

   const [EventName,setCat] = React.useState('');
   const handleChange= (EventName) => {
    setCat(EventName);
     console.log(EventName);
   }
   
    return(
      
        
<div className="wrapper">
        <div className="form-wrapper">
          <h1>Create Event</h1>
                   <div className="EventName">
              <label htmlFor="EventName">Event Name</label>
              <input
                type="text"
                name="eventName"
                value={EventName} onChange={event => handleChange(event.target.value)}
                 />
              </div>

            <div className="eventType">
              <label htmlFor="eventType">Event Type:</label>&nbsp;
              <select name="eventType" value={eventType} onChange={event => handleCateChange(event.target.value)}>
              <option id="0" >Wedding</option>
              <option id="1" >birthdays</option>
              <option id="1" >Anniversary</option>
          </select>
          
            </div>
<br></br>
            <div className="organiserDetails">
              <label htmlFor="organiserDetails">Organiser Details</label>
              <input
                type="organiserDetails"
                name="organiserDetails"
                value={organiserDetails} onChange={event => handleOrg(event.target.value)}></input>
              </div>

              <div className="eventStartDate">
              <label htmlFor="eventStartDate">Event Start Date</label>
              <input
                type="date"
                name="eventStartDate"
                value={eventStartDate} onChange={event => handleDateChanges(event.target.value)}></input>
  
              </div>

              <div className="eventEndDate">
              <label htmlFor="eventEndDate">Event End Date</label>
              <input
                type="date"
                name="eventEndDate"
                value={eventEndDate} onChange={event => handleChanges(event.target.value)}></input>
              </div>
              
            
            <div className="Location">
              <label htmlFor="Location">Location:</label>&nbsp;
                <select name="location" value={location} onChange={event => handleCategoryChange(event.target.value)}>
              <option id="0" >Chandigarh</option>
              <option id="1" >Punjab</option>
              <option id="1" >Varanasi</option>
          </select>
          
          </div>   
              
            <br></br>
            <div className="createEvent">
            <button type="submit" value="submit" onClick={create}className="btn btn-info">Create</button>
             
            </div>
          
        </div>
      </div>
    );
  }
 function create(){
alert('Event Created')
  }


export default Event;