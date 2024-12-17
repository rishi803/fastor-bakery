import React, { useState } from 'react';
import { Star, Wallet, Gift } from 'lucide-react';


const MobileEntryPage = ({ onSendCode }) => {
  const [mobileNumber, setMobileNumber] = useState('');

  return (
    <div className="container center-screen">
      <div className="card">
        <h2 className="card-title">Enter Mobile Number</h2>
        <input
          type="tel"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
          className="input-field"
          placeholder="Enter mobile number"
        />
        <button onClick={() => onSendCode(mobileNumber)} className="button-primary">
          Send Code
        </button>
      </div>
    </div>
  );
};

const OTPVerificationPage = ({ onVerify, onResend }) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');

  const handleChange = (element, index) => {
    if (isNaN(element.value)) return false;
    setOtp([...otp.map((d, idx) => (idx === index ? element.value : d))]);
    if (element.nextSibling) {
      element.nextSibling.focus();
    }
  };

  return (
    <div className="container center-screen">
      <div className="card">
        <h2 className="card-title">Enter Verification Code</h2>
        <h3>Please use verification code as 123456</h3>
        <div className="otp-container">
          {otp.map((data, index) => (
            <input
              key={index}
              type="text"
              maxLength="1"
              value={data}
              onChange={(e) => handleChange(e.target, index)}
              className="otp-box"
            />
          ))}
        </div>
        {error && <p className="error-text">{error}</p>}
        <button onClick={() => onVerify(otp.join(''))} className="button-primary">
          Verify
        </button>
        <p className="resend-text">
          Didn't receive code? <button onClick={onResend} className="button-link">Resend</button>
        </p>
      </div>
    </div>
  );
};

const Navbar = () => (
  <nav className="navbar">
    <h1 className="navbar-title">Pre Order From Connaught Place</h1>
  </nav>
);

const Header = () => (
  <div className="header">
    <div className="header-text">
      <h2 className="header-title">Karan</h2>
      <p className="header-subtitle">Let's explore this evening</p>
    </div>
    <div className="header-buttons">
      <button className="header-button"><Gift /> Offers</button>
      <button className="header-button"><Wallet /> Wallet</button>
    </div>
  </div>
);

const TasteSection = () => {
  const dummyCards = [
    {
    image: "https://via.placeholder.com/200x200.png?text=Cake",
    name: "Nik Bakery",
    address: "123 Baker Street",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Cake",
    name: "It's Bakery",
    address: "Cannaught place, New Delhi",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Cake",
    name: "Sweet Bakery",
    address: "123 Baker Street",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Cake",
    name: "Sweet Bakery",
    address: "123 Baker Street",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Cake",
    name: "Sweet Bakery",
    address: "123 Baker Street",
  },
  {
    image: "https://via.placeholder.com/200x200.png?text=Cake",
    name: "Sweet Bakery",
    address: "123 Baker Street",
  },


];

  return (
    <div className="section">
      <div className="section-header">
        <h2>Your Taste</h2>
        <button className="button-link">See all</button>
      </div>
      <div className="card-container">
        {dummyCards.map((card, index) => (
          <div key={index} className="card taste-card">
            <img src={card.image} alt={card.name} className="card-image" />
            <h4 className='taste-name'>{card.name}</h4>
            <p className='taste-address'>{card.address}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample slide data
  const slides = Array(5).fill({
    image: "https://via.placeholder.com/800x400.png?text=Food",
    title: "Delicious Food",
    description: "Try our special dishes",
  });

  // Handle dot indicator click
  const handleDotClick = (index) => {
    setCurrentSlide(index);
  };

  // Handle keyboard navigation
  const handleKeyDown = (e) => {
    if (e.key === "ArrowLeft") {
      setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
    } else if (e.key === "ArrowRight") {
      setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
    }
  };

  return (
    <div className="carousel" tabIndex={0} onKeyDown={handleKeyDown}>
      {/* Slide container */}
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div className="carousel-item" key={index}>
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel-image"
            />
            <div className="carousel-caption">
              <h3>{slide.title}</h3>
              <p>{slide.description}</p>
              <button className="button-primary">Try Now</button>
            </div>
          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="carousel-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`indicator ${currentSlide === index ? "active" : ""}`}
          />
        ))}
      </div>
    </div>
  );
};



const RestaurantCards = () => {
  const restaurants = [{
    image: "https://via.placeholder.com/120x120.png?text=Food",
    name: "Restaurant Name",
    address: "456 Food Street",
    offers: "6 offers trending",
    rating: 4.7,
    price: "$302",
  },
  {
    image: "https://via.placeholder.com/120x120.png?text=Food",
    name: "Restaurant Name",
    address: "Delhi Food Street",
    offers: "2 offers trending",
    rating: 4.3,
    price: "$205",
  },
  {
    image: "https://via.placeholder.com/120x120.png?text=Food",
    name: "Restaurant Name",
    address: "45/5 Food Street",
    offers: "6 offers trending",
    rating: 4.5,
    price: "$300",
  }
  ,
  {
    image: "https://via.placeholder.com/120x120.png?text=Food",
    name: "Restaurant Name",
    address: "Goa Food Street",
    offers: "4 offers trending",
    rating: 4.8,
    price: "$104",
  },
  {
    image: "https://via.placeholder.com/120x120.png?text=Food",
    name: "Restaurant Name",
    address: "42q Food Street",
    offers: "5 offers trending",
    rating: 4.1,
    price: "$203",
  },
  {
    image: "https://via.placeholder.com/120x120.png?text=Food",
    name: "Restaurant Name",
    address: "Food cafe Street",
    offers: "4 offers trending",
    rating: 4.5,
    price: "$300",
  }
];

  return (
    <div className="section">
      <h3 className="section-header">Popular Ones</h3>
      {restaurants.map((restaurant, index) => (
        <div key={index} className="restaurant-card">
          <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
          <div className="restaurant-details">
            <h4>{restaurant.name}</h4>
            <p>{restaurant.address}</p>
            <p className="offers-text">{restaurant.offers}</p>
            <div className="rating-price">
              <div className="rating">
                <Star /> <span>{restaurant.rating}</span>
              </div>
              <span>{restaurant.price}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const App = () => {
  const [page, setPage] = useState('mobile');

  const handleSendCode = (mobileNumber) => {
    setPage('otp');
  };

  const handleVerifyOTP = (otp) => {
    if (otp === '123456') {
      setPage('home');
    } else {
      console.error("Invalid OTP");
    }
  };

  const handleResendOTP = () => {
    console.log("OTP Resent");
  };

  return (
    <div className="app-container">
      {page === 'mobile' && <MobileEntryPage onSendCode={handleSendCode} />}
      {page === 'otp' && <OTPVerificationPage onVerify={handleVerifyOTP} onResend={handleResendOTP} />}
      {page === 'home' && (
        <>
          <Navbar />
          <Header />
          <TasteSection />
          <Carousel />
          <RestaurantCards />
        </>
      )}
    </div>
  );
};

export default App;