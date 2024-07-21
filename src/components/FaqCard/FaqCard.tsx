import React from "react"
import "./FaqCard.css"
import star from "../../assets/images/icon-star.svg"
import Accordian from "../Accordian/Accordian"

const questionsAndAnswers = [
  {
    question: "This is a quesiton",
    answer: "This is an answer",
  },
  {
    question: "This is also another question",
    answer: "This is also another ans",
  },
]

const FaqCard = () => {
  return (
    <div className='faq-card'>
      <div className='faq-card-title'>
        <img src={star} alt='icon star' className='star-image' />
        <h1>FAQs</h1>
      </div>
      {questionsAndAnswers.map((faq, index) => (
        <Accordian
          question={faq.question}
          answer={faq.answer}
          index={index}
          key={`${faq.question} + index`}
        />
      ))}
    </div>
  )
}

export default FaqCard
