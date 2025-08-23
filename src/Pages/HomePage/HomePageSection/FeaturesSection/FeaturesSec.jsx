import React from 'react'
import './FeaturesSec.css'

const FeaturesSec = () => {
  return (
     <section className="features">
        <div className="container">
          <div className="section-title">
            <h2>আমাদের বিশেষ সুবিধাসমূহ</h2>
            <p>আমাদের প্ল্যাটফর্ম কেন আপনার জন্য সেরা পছন্দ</p>
          </div>
          <div className="feature-cards">
            <div className="feature-card">
              <div className="feature-img">ভেরিফাইড প্রোফাইল</div>
              <div className="feature-content">
                <h3>যাচাইকৃত প্রোফাইল</h3>
                <p>সকল কর্মীর ব্যক্তিগত তথ্য এবং ডকুমেন্টস আমাদের দ্বারা যাচাইকৃত</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-img">সুরক্ষিত পেমেন্ট</div>
              <div className="feature-content">
                <h3>সুরক্ষিত পেমেন্ট সিস্টেম</h3>
                <p>মাস শেষে নিরাপদে পেমেন্ট করুন, আমরা কর্মীকে তার বেতন বুঝিয়ে দেব</p>
              </div>
            </div>
            <div className="feature-card">
              <div className="feature-img">রেটিং সিস্টেম</div>
              <div className="feature-content">
                <h3>রেটিং ও রিভিউ সিস্টেম</h3>
                <p>অন্যান্য ব্যবহারকারীদের রেটিং এবং রিভিউ দেখে সিদ্ধান্ত নিন</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default FeaturesSec
