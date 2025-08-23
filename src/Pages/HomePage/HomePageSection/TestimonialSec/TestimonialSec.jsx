// import './TestimonialSec.css'
import './TestimonialSce.css'

const TestimonialSec = () => {
     const testimonials = [
    { id: 1, name: "রাহিমা আক্তার", location: "ধানমন্ডি, ঢাকা", comment: "ঘরে কাজ প্ল্যাটফর্মের মাধ্যমে আমি আমার বাসার জন্য একজন বিশ্বস্ত কাজের মেয়ে পেয়েছি। পেমেন্ট সিস্টেম খুব সহজ এবং নিরাপদ।" },
    { id: 2, name: "মরিয়ম বেগম", location: "কাজের মেয়ে", comment: "আমি কাজের মেয়ে হিসেবে এই প্ল্যাটফর্মে রেজিস্টার করেছি। নিয়মিত কাজ এবং সময়মতো পেমেন্ট পাচ্ছি। খুবই বিশ্বস্ত একটি প্ল্যাটফর্ম।" },
    { id: 3, name: "কামাল হোসেন", location: "গুলশান, ঢাকা", comment: "ডকুমেন্ট ভেরিফিকেশন এবং ব্যাকগ্রাউন্ড চেক করার জন্য ধন্যবাদ। আমার পরিবারের সদস্যদের নিয়ে আমি নিশ্চিন্তে থাকতে পারি।" }
  ];

  return (
    <section className="testimonials">
        <div className="container">
          <div className="section-title">
            <h2>সন্তুষ্ট ক্লায়েন্ট</h2>
            <p>আমাদের গ্রাহকরা কি বলছেন</p>
          </div>
          <div className="testimonial-cards">
            {testimonials.map(testimonial => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="testimonial-text">
                  "{testimonial.comment}"
                </div>
                <div className="testimonial-author">
                  <div className="author-avatar">{testimonial.name.charAt(0)}</div>
                  <div className="author-details">
                    <h4>{testimonial.name}</h4>
                    <p>{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default TestimonialSec
