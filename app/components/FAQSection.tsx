'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState(-1)

  const faqs = [
    {
      question: "1. How is SniperThink different from other chatbots or call bots?",
      answer: "Our AI agents sound real, speak fluent Hinglish, follow Indian sales flows, and can be trained on your own tone, script, and follow-up strategy."
    },
    {
      question: "2. What are SniperThink's Agents?",
      answer: "Answer to question 2 goes here."
    },
    {
      question: "3. Can I customize the agent for my industry or scripts?",
      answer: "Answer to question 3 goes here."
    },
    {
      question: "4. What platforms does SniperThink support?",
      answer: "Answer to question 4 goes here."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? -1 : index)
  }

  return (
    <div
      id="faq-section"
      className="relative w-full max-w-[100%] pt-20 pb-20 mb-10 lg:mb-20 mx-auto h-auto"
      style={{
        display: 'flex',
        padding: '0 80px',
        alignItems: 'flex-start',
        gap: '80px',
        alignSelf: 'stretch'
      }}
    >
      {/* Background Hexagons */}
      <Image
        src="/img/Hexagons2.svg"
        alt="Hexagons decoration"
        width={550}
        height={550.895}
        style={{
          position: 'absolute',
          left: '-80.5px',
          top: '20.012px',
          width: '550px',
          height: '550px',
          zIndex: 0
        }}
      />

      <div className="relative z-10 w-full">
        {/* Mobile & Tablet */}
        <div className="block lg:hidden">
          {/* Image & Description */}
          <div className="flex flex-col gap-5 p-8 sm:p-12 w-full mx-0 sm:mx-6 mb-8 rounded-[30px] sm:rounded-[60px] overflow-hidden backdrop-blur-[15px] bg-gradient-to-b from-[rgba(26,98,98,0.2)] to-[rgba(189,238,244,0.2)]">
            <Image
              className="w-full max-w-md sm:max-w-lg lg:max-w-xl mx-auto"
              src="/img/frequently-asked-questions.svg"
              alt="FAQ"
              width={448}
              height={300}
            />
            <p className="text-white/80 text-sm sm:text-base leading-6 text-left">
              Here's what businesses like yours often ask before switching to SniperThink.
            </p>
          </div>


          {/* FAQ Items - Full Width */}
          <div className="flex flex-col gap-4 sm:gap-[18px] w-full">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="relative w-full min-h-[60px] p-4 sm:p-5 cursor-pointer transition-all duration-300 ease-in-out overflow-hidden"
                style={{
                  borderRadius: '9.643px',
                  border: openFAQ === index ? '0.804px solid #EDBA5A' : '',
                  opacity: openFAQ === index ? 1 : 1,
                  background: openFAQ === index ? '#1C1A1A' : 'linear-gradient(127deg, rgba(255, 255, 255, 0.02) 6.63%, rgba(255, 255, 255, 0.06) 91.75%)',
                  backdropFilter: openFAQ === index ? 'none' : 'blur(16.072235107421875px)',
                  boxShadow: openFAQ === index ? '0 0.804px 9.643px 0 rgba(255, 215, 0, 0.10)' : 'none'
                }}
                onClick={() => toggleFAQ(index)}
              >
                <p className="font-semibold text-white text-sm sm:text-base pr-8 sm:pr-10">
                  {faq.question}
                </p>

                <div
                  className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-40 mt-2 sm:mt-2.5' : 'max-h-0'}`}
                >
                  <p className="font-normal text-white/80 text-xs sm:text-sm leading-5">
                    {faq.answer}
                  </p>
                </div>

                <div className={`absolute right-4 sm:right-5 top-4 sm:top-5 w-5 h-5 transition-transform duration-300 ease-in-out ${openFAQ === index ? 'rotate-45' : ''}`}>
                  <Image className="w-full h-full" src="/img/plus.svg" alt="Toggle" width={20} height={20} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden lg:flex items-stretch lg:gap-[80px] xl:gap-[80px] pt-20 w-full">
          {/* Left Side */}
          <div className="max-w-lg basis-auto">
            <div className="flex flex-col gap-5 xl:p-[120px_40px] rounded-[60px] overflow-hidden backdrop-blur-[15px] bg-gradient-to-b from-[rgba(26,98,98,0.2)] to-[rgba(189,238,244,0.2)] min-h-[600px]">
              <Image
                className="w-full"
                src="/img/frequently-asked-questions.svg"
                alt="FAQ"
                width={448}
                height={300}
              />
              <p className="text-white/80 text-base leading-6">
                Here's what businesses like yours often ask before switching to SniperThink.
              </p>
            </div>
          </div>

          {/* Right Side - Full Width Stretch */}
          
          <div className="flex-1 basis-0 w-full min-w-0">
            <div className="flex flex-col gap-[18px] py-10 xl:py-[140px] w-full">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="relative w-full min-h-[60px] p-5 cursor-pointer transition-all duration-300 ease-in-out overflow-hidden"
                  style={{
                    borderRadius: '9.643px',
                    border: openFAQ === index ? '0.804px solid #EDBA5A' : '',
                    opacity: openFAQ === index ? 1 : 1,
                    background: openFAQ === index ? '#1C1A1A' : 'linear-gradient(127deg, rgba(255, 255, 255, 0.02) 6.63%, rgba(255, 255, 255, 0.06) 91.75%)',
                    backdropFilter: openFAQ === index ? 'none' : 'blur(16.072235107421875px)',
                    boxShadow: openFAQ === index ? '0 0.804px 9.643px 0 rgba(255, 215, 0, 0.10)' : 'none'
                  }}
                  onClick={() => toggleFAQ(index)}
                >
                  <p className="font-semibold text-white text-base pr-10">
                    {faq.question}
                  </p>

                  <div
                    className={`transition-all duration-500 ease-in-out overflow-hidden ${openFAQ === index ? 'max-h-40 mt-2.5' : 'max-h-0'}`}
                  >
                    <p className="font-normal text-white/80 text-sm leading-5">
                      {faq.answer}
                    </p>
                  </div>

                  <div className={`absolute right-5 top-5 w-5 h-5 transition-transform duration-300 ease-in-out ${openFAQ === index ? 'rotate-45' : ''}`}>
                    <Image className="w-full h-full" src="/img/plus.svg" alt="Toggle" width={20} height={20} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
