import React, { useState } from 'react';
import './Chatbox.css';

function Chatbox() {
  const [name, setName] = useState('');
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [example, setExample] = useState('');
  const [showBookRide, setShowBookRide] = useState(false);
  const [showReportDriver, setShowReportDriver] = useState(false);
  const [showRateTrip, setShowRateTrip] = useState(false);
  const [place, setPlace] = useState('');
  const [destination, setDestination] = useState('');
  const [rating, setRating] = useState(0);
  const [reportMessage, setReportMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emptyString = '';
    if (name !== emptyString && question !== emptyString) {
      const greeting = 'hello';
      const bookRide = 'book ride';
      const reportDriver = 'report driver';
      const rateTrip = 'rate trip';
      const bestCarsQuestion = 'which are the best cars for 7 people';
      const cheapestCarQuestion = 'which is the most cheapest car i can find';
      if (question === greeting) {
        setResponse(`Hello, ${name}`);
        setExample('How may I assist you today?');
        setShowBookRide(false);
        setShowReportDriver(false);
        setShowRateTrip(false);
      } else if (question === bookRide) {
        setResponse(`${name},Please provide your pickup location and destination`);
        setExample('');
        setShowBookRide(true);
        setShowReportDriver(false);
        setShowRateTrip(false);
      } else if (question === reportDriver) {
        setResponse(` ${name},Please provide details of the issue.`);
        setExample('');
        setShowBookRide(false);
        setShowReportDriver(true);
        setShowRateTrip(false);
      } else if (question === rateTrip) {
        setResponse(`${name},How would you rate your trip?`);
        setExample('');
        setShowBookRide(false);
        setShowReportDriver(false);
        setShowRateTrip(true);
      } else if (question === bestCarsQuestion) {
        setResponse(`Most of the SUV cars are able to carry seven people at a go, ${name}.`);
        setExample('eg. landcruiser, RAV 4, Jimny');
        setShowBookRide(false);
        setShowReportDriver(false);
        setShowRateTrip(false);
      } else if (question === cheapestCarQuestion) {
        setResponse(`Go for the small cars, ${name}. They are also good in fuel consumption.`);
        setExample('eg. Alto, Vitz');
        setShowBookRide(false);
        setShowReportDriver(false);
        setShowRateTrip(false);
      } else {
        setResponse(`Our agents are currently unavailable, ${name}.`);
        setExample('Please wait and we will respond via email.');
        setShowBookRide(false);
        setShowReportDriver(false);
        setShowRateTrip(false);
      }
    } else {
      window.alert('Please enter your name and question.');
    }
  };

  const handleBookRideSubmit = (event) => {
    event.preventDefault();
    // code to save pickup location and destination using CRUD operations
    setShowBookRide(false);
  };
  
  const handleReportDriverSubmit = (event) => {
  event.preventDefault();
  // code to submit report using CRUD operations
  setResponse(`Thank you for reporting the issue, ${name}.`);
  setExample('We will investigate and take appropriate action.');
  setShowReportDriver(false);
  };
  
  const handleRateTripSubmit = (event) => {
  event.preventDefault();
  // code to submit rating using CRUD operations
  setResponse(`Thank you for rating your trip, ${name}.`);
  setExample('');
  setShowRateTrip(false);
  };
  
  return (
  <div className="chatbox-container">
  <div className="chatbox-header">
  <h1>Chatbox</h1>
  </div>
  <div className="chatbox-body">
  <div className="chatbox-messages">
  {response && (
  <div className="chatbox-response">
  <p>{response}</p>
  {example && <p className="example">{example}</p>}
  </div>
  )}
  </div>
  <form onSubmit={handleSubmit}>
  <input type="text" placeholder="Enter your name" value={name} onChange={handleNameChange} />
  <input type="text" placeholder="Enter your question" value={question} onChange={handleQuestionChange} />
  <button type="submit">Send</button>
  </form>
  {showBookRide && (
  <form onSubmit={handleBookRideSubmit}>
  <input type="text" placeholder="Enter pickup location" value={place} onChange={(event) => setPlace(event.target.value)} />
  <input type="text" placeholder="Enter destination" value={destination} onChange={(event) => setDestination(event.target.value)} />
  <button type="submit">Book Ride</button>
  </form>
  )}
  {showReportDriver && (
  <form onSubmit={handleReportDriverSubmit}>
  <textarea placeholder="Enter details of the issue" value={reportMessage} onChange={(event) => setReportMessage(event.target.value)} />
  <button type="submit">Submit Report</button>
  </form>
  )}
  {showRateTrip && (
  <form onSubmit={handleRateTripSubmit}>
  <label>Rate your trip:</label>
  <select value={rating} onChange={(event) => setRating(event.target.value)}>
  <option value={0}>Select rating</option>
  <option value={1}>1</option>
  <option value={2}>2</option>
  <option value={3}>3</option>
  <option value={4}>4</option>
  <option value={5}>5</option>
  </select>
  <button type="submit">Submit Rating</button>
  </form>
  )}
  </div>
  </div>
  );
  }
  
  export default Chatbox;
