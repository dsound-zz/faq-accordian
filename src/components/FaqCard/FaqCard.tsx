import React from "react"
import "./FaqCard.css"
import star from "../../assets/images/icon-star.svg"
import Accordian from "../Accordian/Accordian"

const questionsAndAnswers = [
  {
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers imporve their frontend coding skills with projects in HTML, CSS and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    question: "Is Frontend Mentor free?",
    answer:
      "There are 2 levels of Frontend Mentor: free version and paid. The Paid version allows you to access Figma files and upload your work to the community.",
  },
  {
    question: "Can I use Frontend Mentor projects in my portfilio?",
    answer:
      "Yes! The whole point of Frontend mentor is to practice a develop your frontend skills and add them to your portfolio.",
  },
  {
    question: "How can I get help if I am stuck on an issue?",
    answer:
      "Easy! Just reach out to the community. There are plenty of developers ready to help when the time comes. There is a user forum and Slack.",
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
