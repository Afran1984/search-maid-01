import React from 'react'
import './PricesingSec.css'

const PricesingSec = () => {
  return (
    <section id="pricing" className="pricing">
        <div className="container">
          <div className="section-title">
            <h2>সাশ্রয়ী প্যাকেজ</h2>
            <p>আপনার প্রয়োজন অনুযায়ী প্যাকেজ নির্বাচন করুন</p>
          </div>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>বেসিক</h3>
              <div className="price">৳৫০০ <span>/মাস</span></div>
              <ul className="pricing-features">
                <li>১ জন কর্মী পর্যন্ত</li>
                <li>প্রোফাইল ব্রাউজিং</li>
                <li>সীমিত যোগাযোগ</li>
                <li>সাপোর্ট</li>
              </ul>
              <button className="btn btn-register">চয়েস প্ল্যান</button>
            </div>
            <div className="pricing-card featured">
              <div className="popular-badge">সবচেয়ে জনপ্রিয়</div>
              <h3>স্ট্যান্ডার্ড</h3>
              <div className="price">৳৮০০ <span>/মাস</span></div>
              <ul className="pricing-features">
                <li>৩ জন কর্মী পর্যন্ত</li>
                <li>অগ্রাধিকার প্রোফাইল</li>
                <li>সরাসরি যোগাযোগ</li>
                <li>সাপোর্ট</li>
              </ul>
              <button className="btn btn-register">চয়েস প্ল্যান</button>
            </div>
            <div className="pricing-card">
              <h3>প্রিমিয়াম</h3>
              <div className="price">৳১২০০ <span>/মাস</span></div>
              <ul className="pricing-features">
                <li>অসীম কর্মী</li>
                <li>ভিআইপি সাপোর্ট</li>
                <li>ডেডিকেটেড অ্যাডভাইজার</li>
                <li>এডভান্সড ফিল্টারিং</li>
              </ul>
              <button className="btn btn-register">চয়েস প্ল্যান</button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default PricesingSec
