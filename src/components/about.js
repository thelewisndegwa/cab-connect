import { useState, useEffect } from "react";

function About() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "https://media.istockphoto.com/id/1391517615/photo/close-up-on-a-couple-using-the-gps-while-driving-a-car.webp?s=1024x1024&w=is&k=20&c=-dvwoX1Kk_-CntuuIUmk7EzyuRBdrxqwBGQ58JGbeXk=",
    
    "https://media.istockphoto.com/id/986112112/photo/nfc-near-field-communication-credit-card-payment.jpg?s=612x612&w=0&k=20&c=QqbmBFvct1tMkE8gM7iWtxxG_YGhPWmsA9l5beZGyiI=",
    
    "https://images.unsplash.com/photo-1600320254374-ce2d293c324e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8ZHJpdmVyc3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="cab-connect">
      { <div className="image-container">
        {images.map((imageUrl, index) => (
          <img
            key={imageUrl}
            src={imageUrl}
            alt={`Cab Connect ${index + 1}`}
            className={`fade ${
              currentImageIndex === index ? "active" : ""
            }`}
          />
        ))}
      </div> }
      <div className="content">
        <h1>Welcome to Cab Connect</h1>
        <p>
          Cab Connect is your one-stop solution for all your transportation needs.
          Our experienced drivers and well-maintained vehicles ensure a safe and
          comfortable journey. We offer a wide range of services including airport
          transfers, corporate travel, and sightseeing tours. With Cab Connect,
          you can sit back, relax, and enjoy the ride.
        </p>
        <p>
          Our mission is to provide our customers with the highest level of
          service and professionalism. We believe that every journey should be a
          positive experience, and we strive to exceed your expectations every
          time you ride with us.
        </p>
        <p>
          So why wait? Book your ride today and experience the comfort and
          convenience of Cab Connect.
        </p>
      </div>
    </div>
  );
}
export default About;