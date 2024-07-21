import React, { useState } from "react"
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
    <div>
      <div>
        <p>{question}</p>
        {openIndex === index && (
          <img
            src={open}
            alt='open accordian'
            onClick={() => setOpenIndex(null)}
          />
        )}
        {openIndex !== index && (
          <img
            src={closed}
            alt='closed accordian'
            onClick={() => setOpenIndex(index)}
          />
        )}
        <p>{openIndex === index && answer}</p>
      </div>
    </div>
  )
}

export default Accordian
