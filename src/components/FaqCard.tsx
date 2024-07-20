import React from "react"
import "./FaqCard.css"
import star from "../assets/images/icon-star.svg"

const FaqCard = () => {
  return (
    <div className='faq-card'>
      <div className='faq-card-title'>
        <img src={star} alt='icon star' className='star-image' />
        <h1>FAQs</h1>
      </div>
    </div>
  )
}

export default FaqCard
