import React, { useState } from "react"
import "./Accordian.css"
import open from "../../assets/images/icon-plus.svg"
import closed from "../../assets/images/icon-minus.svg"

type AccordianProps = {
  question: string
  answer: string
  index: number
}

const Accordian = ({ question, answer, index }: AccordianProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <div className='accordian'>
      <div className='question-row'>
        <h3 className='question'>{question}</h3>
        {openIndex === index && (
          <img
            src={closed}
            alt='closed accordian'
            onClick={() => setOpenIndex(null)}
          />
        )}
        {openIndex !== index && (
          <img
            src={open}
            alt='open accordian'
            onClick={() => setOpenIndex(index)}
          />
        )}
      </div>
      <p className='answer'>{openIndex === index && answer}</p>
      <hr />
    </div>
  )
}

export default Accordian
