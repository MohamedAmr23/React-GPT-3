import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
import people from '../../assets/people.png'
const Header = () => {
  return (
   <>
   <div className="container section__padding " id='home'>
    <div className="header-content">
      <h1 className='gradient__text'>Let's Build Something amazing with GPT-3 OpenAI</h1>
      <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
      <div className="input">
    <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
      <div className="img-poeple">
      <img src={people} alt="GPT-3" />
      <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>
  
    <div className="img-ai">
      <img src={ai} alt="GPT-3" />
    </div>
   </div>
   
   
   </>
  )
}

export default Header