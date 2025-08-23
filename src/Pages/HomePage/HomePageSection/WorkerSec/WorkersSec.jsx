import React from 'react'
import './WorkerSec.css'

const WorkersSec = () => {
  const workers = [
    { id: 1, name: "আয়শা আক্তার", experience: "৩ বছর", location: "ঢাকা", rating: 4.5, skills: ["রান্না", "ঘর পরিষ্কার", "কাপড় ধোয়া"] },
    { id: 2, name: "ফাতেমা বেগম", experience: "৫ বছর", location: "গুলশান", rating: 4.8, skills: ["বাচ্চা দেখাশোনা", "রান্না"] },
    { id: 3, name: "জেসমিন আক্তার", experience: "২ বছর", location: "উত্তরা", rating: 4.2, skills: ["ঘর পরিষ্কার", "কাপড় ইস্ত্রি"] },
    { id: 4, name: "নাজমা খাতুন", experience: "৪ বছর", location: "মিরপুর", rating: 4.7, skills: ["রান্না", "বাজার করা", "বৃদ্ধ看护"] }
  ];
  return (
     <section id="find" className="workers">
        <div className="container">
          <div className="section-title">
            <h2 className='font-bold'>আমাদের কাজের মেয়েরা</h2>
            <p>আমাদের verified কাজের মেয়েদের তালিকা</p>
          </div>
          <div className="worker-cards">
            {workers.map(worker => (
              <div key={worker.id} className="worker-card">
                <div className="worker-img">
                  <div className="worker-avatar">{worker.name.charAt(0)}</div>
                </div>
                <div className="worker-details">
                  <h3>{worker.name}</h3>
                  <p><strong>অভিজ্ঞতা:</strong> {worker.experience}</p>
                  <p><strong>লোকেশন:</strong> {worker.location}</p>
                  <p><strong>রেটিং:</strong> {worker.rating}/5</p>
                  <div className="worker-skills">
                    {worker.skills.map((skill, index) => (
                      <span key={index} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                  <button className="btn btn-view">প্রোফাইল দেখুন</button>
                </div>
              </div>
            ))}
          </div>
        </div>

      </section>
  )
}

export default WorkersSec
