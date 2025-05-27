import React from 'react';
import './contact.css';

const phones = [
  {
    name: 'iPhone 14',
    price: 'R18,000',
    image: 'https://fdn2.gsmarena.com/vv/pics/apple/apple-iphone-14-1.jpg',
    link: 'https://www.apple.com/za/iphone-14/'
  },
  {
    name: 'Huawei P50',
    price: 'R13,200',
    image: 'https://fdn2.gsmarena.com/vv/pics/huawei/huawei-p50-pro-1.jpg',
    link: 'https://www.gsmarena.com/huawei_p50_pro-10906.php'
  },
   

  {
    name: 'Google Pixel 7',
    price: 'R14,500',
    image: 'https://fdn2.gsmarena.com/vv/pics/google/google-pixel7-1.jpg',
    link: 'https://store.google.com/product/pixel_7'
  },
  {
    name: 'OnePlus 11',
    price: 'R15,999',
    image: 'https://fdn2.gsmarena.com/vv/pics/oneplus/oneplus-11-1.jpg',
    link: 'https://www.oneplus.com/oneplus-11'
  }
];


function Contact() {
  return (
    <div className="contact-container">
      <h2>Available Phones for online</h2>
      <div className="phone-grid">
        {phones.map((phone, index) => (
          <div className="phone-card" key={index}>
            <img src={phone.image} alt={phone.name} />
            <h3>{phone.name}</h3>
            <p>{phone.price}</p>
            <a
              href={phone.link}
              target="_blank"
              rel="noopener noreferrer"
              className="buy-button"
            >
              Buy Now
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Contact;
