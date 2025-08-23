import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
     <footer id="contact">
        <div className="container">
          <div className="footer-content">
            <div className="footer-column">
              <h3>ঘরের কাজ </h3>
              <p>বাসা-বাড়ির জন্য উপযুক্ত গৃহকর্মী খোঁজার সবচেয়ে সহজ এবং নিরাপদ প্ল্যাটফর্ম</p>
            </div>
            <div className="footer-column">
              <h3>দ্রুত লিংক</h3>
              <ul className="footer-links">
                <li><a href="#home">হোম</a></li>
                <li><a href="#find">কাজের মেয়ে খুঁজুন</a></li>
                <li><a href="#how-it-works">কিভাবে কাজ করে</a></li>
                <li><a href="#pricing">প্রাইসিং</a></li>
                <li><a href="#contact">যোগাযোগ</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>সাপোর্ট</h3>
              <ul className="footer-links">
                <li><a href="#">সাধারণ প্রশ্ন</a></li>
                <li><a href="#">সাহায্য কেন্দ্র</a></li>
                <li><a href="#">কন্ডিশনস</a></li>
                <li><a href="#">প্রাইভেসি পলিসি</a></li>
              </ul>
            </div>
            <div className="footer-column">
              <h3>যোগাযোগ</h3>
              <ul className="footer-links">
                <li>ইমেইল: info@ghorekaj.com</li>
                <li>ফোন: +৮৮০১৭১৭৬৬৩৪৪৭</li>
                <li>ঠিকানা: ৪২০৯ পূর্ব নাসিরাবাদ, চিটাগাং।</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; ২০২৩ ঘরের কাজ - সকল права সংরক্ষিত</p>
          </div>
        </div>
      </footer>
  )
}

export default Footer
