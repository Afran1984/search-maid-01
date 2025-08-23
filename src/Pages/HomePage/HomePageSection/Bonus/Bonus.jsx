import React from 'react'
import './Bonus.css'

const Bonus = () => {
  return (
    <div>
        
    <section id="home" className="banner">
        <div className="container banner-content">
          <h1>আপনার জন্য উপযুক্ত গৃহকর্মী খুঁজুন</h1>
          <p>আমাদের প্ল্যাটফর্মের মাধ্যমে সহজেই আপনার বাসা-বাড়ির জন্য বিশ্বস্ত কাজের মেয়ে খুঁজে নিন এবং মাস শেষে নিরাপদ পেমেন্ট করুন</p>
          <div className="banner-buttons">
            <button className="btn-banner btn-primary">কাজের মেয়ে খুঁজুন</button>
            <button className="btn-banner btn-secondary">কাজের মেয়ে হিসাবে রেজিস্টার করুন</button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works">
        <div className="container">
          <div className="section-title">
            <h2>কিভাবে কাজ করে</h2>
            <p>মাত্র কয়েকটি সহজ ধাপ অনুসরণ করে আপনার জন্য উপযুক্ত গৃহকর্মী খুঁজে নিন</p>
          </div>
          <div className="steps">
            <div className="step">
              <div className="step-icon">১</div>
              <h3>রেজিস্টার করুন</h3>
              <p>আপনার প্রয়োজনীয় তথ্য দিয়ে ফ্রি অ্যাকাউন্ট তৈরি করুন</p>
            </div>
            <div className="step">
              <div className="step-icon">২</div>
              <h3>কর্মী খুঁজুন</h3>
              <p>আপনার প্রয়োজন অনুযায়ী দক্ষ গৃহকর্মী ব্রাউজ করুন</p>
            </div>
            <div className="step">
              <div className="step-icon">৩</div>
              <h3>নিয়োগ দিন</h3>
              <p>পছন্দের কর্মী নির্বাচন করে সরাসরি যোগাযোগ করুন</p>
            </div>
            <div className="step">
              <div className="step-icon">৪</div>
              <h3>পেমেন্ট করুন</h3>
              <p>মাস শেষে আমাদের সুরক্ষিত পদ্ধতিতে পেমেন্ট সম্পন্ন করুন</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Bonus
