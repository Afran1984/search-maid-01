// About.jsx
import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="container">
          <h1>ঘরের কাজ Ltd. সম্পর্কে</h1>
          <p>বাংলাদেশের প্রথম এবং সবচেয়ে বিশ্বস্ত গৃহকর্মী সেবা প্রদানকারী প্ল্যাটফর্ম</p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="mission-vision">
        <div className="container">
          <div className="mv-grid">
            <div className="mv-card">
              <div className="mv-icon">🎯</div>
              <h2>আমাদের মিশন</h2>
              <p>বাংলাদেশের প্রতিটি পরিবারকে বিশ্বস্ত ও দক্ষ গৃহকর্মী সেবা দিয়ে তাদের দৈনন্দিন জীবনকে আরও সহজ ও স্বাচ্ছন্দ্যময় করা আমাদের লক্ষ্য। আমরা চাই প্রতিটি পরিবার নিশ্চিন্তে তাদের গৃহকর্মের প্রয়োজন মেটাতে পারে।</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">👁️</div>
              <h2>আমাদের ভিশন</h2>
              <p>২০২৫ সালের মধ্যে বাংলাদেশের সবচেয়ে বড় এবং বিশ্বস্ত গৃহকর্মী সেবা প্ল্যাটফর্ম হওয়া আমাদের লক্ষ্য। যেখানে হাজারো গৃহকর্মী ও পরিবার একে অপরের সাথে যুক্ত হবে এবং পারস্পরিক বিশ্বাসের ভিত্তিতে কাজ করবে।</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon">💼</div>
              <h2>আমাদের কাজ</h2>
              <p>আমরা পরিবার ও গৃহকর্মীদের জন্য একটি নিরাপদ ও বিশ্বাসযোগ্য প্ল্যাটফর্ম প্রদান করি, যেখানে উভয়ের প্রয়োজন ও প্রত্যাশা পূরণ হয়। আমরা গৃহকর্মীদের প্রশিক্ষণ দিই এবং পরিবারকে যাচাইকৃত কর্মী প্রদান করি।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="company-story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>আমাদের গল্প</h2>
              <p>ঘরের কাজ Ltd. ২০২০ সালে যাত্রা শুরু করে। তখন আমরা লক্ষ্য করি যে বাংলাদেশের অনেক পরিবারই বিশ্বস্ত গৃহকর্মী খুঁজে পেতে সমস্যায় পড়েন। অনেক সময় সঠিক মানুষ পাওয়া যায় না, আবার যোগাযোগ ও বিশ্বাসযোগ্যতার সমস্যাও থাকে।

এই সমস্যার সমাধান করতে আমরা একটি প্ল্যাটফর্ম তৈরি করেছি। এখানে পরিবারগুলো তাদের প্রয়োজন অনুযায়ী যাচাইকৃত (ভেরিফাইড) গৃহকর্মী খুঁজে পান। একইভাবে গৃহকর্মীরাও আমাদের মাধ্যমে পান নিয়মিত কাজ ও নিরাপদ আয়ের সুযোগ।

বর্তমানে ঘরের কাজ Ltd. বাংলাদেশের ১০টিরও বেশি শহরে সেবা দিচ্ছে এবং ১০০০-এর বেশি পরিবার ও গৃহকর্মী আমাদের সাথে যুক্ত আছেন।</p>
            </div>
            <div className="story-image">
              <div className="placeholder-image">
                <span>আমাদের টিম</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values">
        <div className="container">
          <h2>আমাদের মূল্যবোধ</h2>
          <div className="values-grid">
            <div className="value-card">
              <h3>বিশ্বস্ততা</h3>
              <p>আমরা বিশ্বাস করি যে পারস্পরিক বিশ্বাসই আমাদের কাজের মূল ভিত্তি। তাই আমরা নিশ্চিত করি, সব গৃহকর্মী যাচাইকৃত (ভেরিফাইড) এবং পরিবারগুলো আমাদের সেবার উপর নির্ভর করতে পারে।</p>
            </div>
            <div className="value-card">
              <h3>পারদর্শিতা</h3>
              <p>আমাদের গৃহকর্মীরা প্রশিক্ষিত এবং অভিজ্ঞ, যাতে তারা সর্বোচ্চ মানের সেবা দিতে পারেন। আমরা নিয়মিত প্রশিক্ষণের মাধ্যমে তাদের দক্ষতা আরও উন্নত করি।</p>
            </div>
            <div className="value-card">
              <h3>সুবিচার</h3>
              <p>আমরা নিশ্চিত করি যে গৃহকর্মীরা ন্যায্য মজুরি ও ভালো কাজের পরিবেশ পান, আর পরিবারগুলো তাদের টাকার সম্পূর্ণ মূল্য অনুযায়ী সেবা পায়।</p>
            </div>
            <div className="value-card">
              <h3>উদ্ভাবন!</h3>
              <p>আমরা আমাদের প্ল্যাটফর্ম ও সেবাকে নিয়মিত উন্নত করি। প্রযুক্তির ব্যবহার করে আমরা পুরো প্রক্রিয়াটিকে আরও সহজ, দ্রুত ও ব্যবহারবান্ধব করে তুলি—পরিবার এবং গৃহকর্মী উভয়ের জন্য।</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team">
        <div className="container">
          <h2>আমাদের Leadership টিম</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">CEO</div>
              </div>
              <h3>মো: আব্দুর রাজ্জাক</h3>
              <p>প্রতিষ্ঠাতা ও সিইও</p>
              <p>১০+ years of experience in service industry and technology</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">COO</div>
              </div>
              <h3>ফারহানা আহমেদ</h3>
              <p>Chief Operations Officer</p>
              <p>Operations management expert with background in HR</p>
            </div>
            <div className="team-member">
              <div className="member-photo">
                <div className="photo-placeholder">CTO</div>
              </div>
              <h3>রাজীব হাসান</h3>
              <p>Chief Technology Officer</p>
              <p>Software engineer with passion for social impact projects</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <h2>আমাদের Achievements</h2>
          <div className="stats-grid">
            <div className="stat">
              <h3>1000+</h3>
              <p>সন্তুষ্ট পরিবার</p>
            </div>
            <div className="stat">
              <h3>500+</h3>
              <p>verified গৃহকর্মী</p>
            </div>
            <div className="stat">
              <h3>10+</h3>
              <p>শহরে我们的服务</p>
            </div>
            <div className="stat">
              <h3>98%</h3>
              <p>সন্তুষ্টি Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="about-cta">
        <div className="container">
          <h2>আমাদের সাথে যুক্ত হোন</h2>
          <p>আপনি কি একজন গৃহকর্মী খুঁজছেন নাকি কাজের সন্ধানে আছেন? আজই আমাদের প্ল্যাটফর্মে join করুন</p>
          <div className="cta-buttons">
            <button className="btn btn-primary">কাজের মেয়ে খুঁজুন</button>
            <button className="btn btn-secondary">কাজের মেয়ে হিসাবে যোগ দিন</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;