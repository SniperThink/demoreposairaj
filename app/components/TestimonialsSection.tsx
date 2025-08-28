import React, { useState } from 'react';
import Image from 'next/image';

export default function TestimonialsSection() {
  const [activeCard, setActiveCard] = useState(0);
  
  const testimonials = [
    {
      id: 0,
      quote: "Before SniperThink, we had scattered dashboards and missed signals. Now, we act on what matters—fast.",
      name: "Rohit M.",
      title: "Growth Lead",
      quoteIcon: "/img/quote-yellow.svg",
      isHighlighted: true
    },
    {
      id: 1,
      quote: "The AI agents segment leads better than any human SDR we've hired. Massive efficiency boost.",
      name: "Divya K",
      title: "SaaS Founder",
      quoteIcon: "/img/quote-blue.svg",
      isHighlighted: false
    },
    {
      id: 2,
      quote: "With the growth engine, we finally see predictive KPIs instead of just historical ones. Total game-changer.",
      name: "Arjun P",
      title: "COO",
      quoteIcon: "/img/quote-blue.svg",
      isHighlighted: false
    }
  ];

  const nextCard = () => {
    setActiveCard((prev) => (prev + 1) % testimonials.length);
  };

  const prevCard = () => {
    setActiveCard((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToCard = (index: number) => {
    setActiveCard(index);
  };

  return (
    <div id="testimonials-section" className="flex flex-col items-start gap-4 sm:gap-6 md:gap-10 relative w-full max-w-100% mx-auto" style={{ paddingLeft: 'clamp(16px, 4vw, 80px)', paddingRight: 'clamp(16px, 4vw, 80px)', paddingTop: '80px', paddingBottom: '80px' }}>
      
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 w-full mb-6 md:mb-8 lg:mb-12">
        {/* Heading */}
        <div className="flex-1 text-center lg:text-left">
          <div className="font-semibold text-white text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] leading-normal mb-2">
            WHAT OUR CLIENTS SAY
          </div>
          <p className="text-white/80 lg:pt-5 text-sm sm:text-base leading-6 max-w-none">
            SniperThink transforms how teams operate, qualify, and scale. But don't take our word for it.
          </p>
        </div>
        
        {/* Desktop Navigation - Chevrons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Left Chevron */}
          <button
            onClick={prevCard}
            className="flex w-10 h-10 items-center justify-center"
            aria-label="Previous testimonial"
          >
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md">
              <Image className="w-3.5 h-3" src="/img/arrow-left.svg" alt="Previous" width={14} height={12} />
            </div>
          </button>

          {/* Right Chevron */}
          <button
            onClick={nextCard}
            className="flex w-10 h-10 items-center justify-center"
            aria-label="Next testimonial"
          >
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md">
              <Image className="w-3.5 h-3" src="/img/arrow-rigth.svg" alt="Next" width={14} height={12} />
            </div>
          </button>
        </div>
      </div>

      {/* Desktop View - 3 Cards Fixed Layout */}
      <div className="hidden lg:block relative w-full">
        <div className="grid grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={testimonial.id} className="w-full">
              <div
                className={`flex flex-col w-full items-start justify-center gap-2.5 p-6 relative rounded-xl transition-all duration-300 ease-in-out ${
                  index === activeCard
                    ? 'bg-gradient-to-b from-[rgba(252,230,178,0.5)] to-[rgba(210,159,52,0.5)] scale-105 shadow-lg'
                    : 'bg-[hsla(214,23%,96%,0.05)] rounded-[10px] opacity-70'
                }`}
              >
                {/* Quote Icon */}
                <div className="relative w-8 h-8 mb-2">
                  <Image className="absolute w-[30px] h-[30px] top-0 left-1.5" src={testimonial.quoteIcon} alt="Quote" width={30} height={30} />
                </div>

                {/* Content */}
                <div className="flex flex-col items-start justify-center gap-6 w-full">
                  <div className="flex min-h-[120px] items-start justify-center gap-2.5 w-full">
                    <p className={`flex-1 self-stretch -mt-0.5 font-semibold text-base leading-6 ${
                      index === activeCard ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                    }`}>
                      {testimonial.quote}
                    </p>
                  </div>

                  <div className="flex flex-col items-end justify-center gap-1 w-full">
                    <div className="w-fit -mt-0.5 font-bold text-white text-sm leading-5 whitespace-nowrap">{testimonial.name}</div>
                    <div className="w-fit opacity-60 font-normal text-white text-xs leading-[18px] whitespace-nowrap">{testimonial.title}</div>
                  </div>
                </div>

                <Image className="w-full h-px -mb-px object-cover" src="/img/line.svg" alt="Line" width={352} height={1} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tablet View - Single Card with Navigation */}
      <div className="hidden md:block lg:hidden relative w-full">
        <div className="w-full max-w-[600px] mx-auto">
          <div className={`flex flex-col w-full items-start justify-center gap-2.5 p-6 md:p-8 relative rounded-xl lg:rounded-[20px] transition-all duration-300 ease-in-out ${
            testimonials[activeCard].isHighlighted
              ? 'bg-gradient-to-b from-[rgba(252,230,178,0.5)] to-[rgba(210,159,52,0.5)]'
              : 'bg-[#bdd5f40d] rounded-[10px]'
          }`}>
            {/* Quote Icon */}
            <div className="relative w-8 h-8 mb-2">
              <Image className="absolute w-[30px] h-[30px] top-0 left-1.5" src={testimonials[activeCard].quoteIcon} alt="Quote" width={30} height={30} />
            </div>

            {/* Content */}
            <div className="flex flex-col items-start justify-center gap-6 w-full">
              <div className="flex min-h-[120px] md:min-h-[160px] items-start justify-center gap-2.5 w-full">
                <p className={`flex-1 self-stretch -mt-0.5 font-semibold text-base md:text-lg leading-6 md:leading-7 ${
                  testimonials[activeCard].isHighlighted ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'
                }`}>{testimonials[activeCard].quote}</p>
              </div>

              <div className="flex flex-col items-end justify-center gap-1 w-full">
                <div className="w-fit -mt-0.5 font-bold text-white text-sm md:text-base leading-5 whitespace-nowrap">{testimonials[activeCard].name}</div>
                <div className="w-fit opacity-60 font-normal text-white text-xs md:text-sm leading-[18px] whitespace-nowrap">{testimonials[activeCard].title}</div>
              </div>
            </div>

            <Image className="w-full h-px -mb-px object-cover" src="/img/line.svg" alt="Line" width={352} height={1} />
          </div>
        </div>

        {/* Tablet Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button onClick={prevCard} className="flex flex-col w-10 h-10 md:w-14 md:h-14 items-center justify-center" aria-label="Previous testimonial">
            <div className="flex flex-col w-8 h-8 md:w-10 md:h-10 items-center justify-center relative bg-white/20 rounded-full overflow-hidden shadow-md">
              <Image className="w-3.5 h-3" src="/img/arrow-left.svg" alt="Previous" width={14} height={12} />
            </div>
          </button>

          <div className="flex justify-center items-center gap-2">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToCard(index)} 
                className={`testimonial-dot ${index === activeCard ? 'active' : 'inactive'}`}
                aria-label={`Go to testimonial ${index + 1}`} 
              />
            ))}
          </div>

          <button onClick={nextCard} className="flex w-10 h-10 md:w-14 md:h-14 items-center justify-center" aria-label="Next testimonial">
            <div className="flex w-8 h-8 md:w-10 md:h-10 items-center justify-center relative bg-white/20 rounded-full overflow-hidden shadow-md">
              <Image className="w-3.5 h-3" src="/img/arrow-rigth.svg" alt="Next" width={14} height={12} />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile View - Single Card with Navigation */}
      <div className="md:hidden w-full">
        <div className="w-full">
          <div className={`flex flex-col w-full mx-auto items-start justify-center gap-3 p-5 sm:p-6 relative rounded-xl transition-all duration-300 ease-in-out ${
            testimonials[activeCard].isHighlighted
              ? 'bg-gradient-to-b from-[rgba(252,230,178,0.5)] to-[rgba(210,159,52,0.5)]'
              : 'bg-[#bdd5f40d] rounded-[10px]'
          }`}>
            <div className="relative w-8 h-8 mb-2">
              <Image className="absolute w-[28px] h-[28px] top-0 left-1.5" src={testimonials[activeCard].quoteIcon} alt="Quote" width={30} height={30} />
            </div>

            <div className="flex flex-col items-start justify-center gap-4 w-full">
              <div className="flex min-h-[100px] items-start justify-center w-full">
                <p className={`flex-1 font-medium text-sm sm:text-base leading-6 ${testimonials[activeCard].isHighlighted ? 'text-[var(--collection-1-colours-accent-light-green-light-green-300)]' : 'text-white'}`}>
                  {testimonials[activeCard].quote}
                </p>
              </div>

              <div className="flex flex-col items-start gap-1 w-full">
                <div className="font-bold text-white text-sm sm:text-base leading-5">{testimonials[activeCard].name}</div>
                <div className="opacity-60 font-normal text-white text-xs sm:text-sm leading-[18px]">{testimonials[activeCard].title}</div>
              </div>
            </div>

            <Image className="w-full h-px mt-3 object-cover" src="/img/line.svg" alt="Line" width={352} height={1} />
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex items-center justify-center gap-3 mt-6">
          <button onClick={prevCard} className="flex w-10 h-10 items-center justify-center" aria-label="Previous testimonial">
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md">
              <Image className="w-3.5 h-3" src="/img/arrow-left.svg" alt="Previous" width={14} height={12} />
            </div>
          </button>

          <div className="flex justify-center items-center gap-2 flex-nowrap">
            {testimonials.map((_, index) => (
              <button 
                key={index} 
                onClick={() => goToCard(index)} 
                className={`testimonial-dot ${index === activeCard ? 'active' : 'inactive'}`}
                aria-label={`Go to testimonial ${index + 1}`} 
                style={{ minWidth: '8px', minHeight: '8px' }}
              />
            ))}
          </div>

          <button onClick={nextCard} className="flex w-10 h-10 items-center justify-center" aria-label="Next testimonial">
            <div className="flex w-9 h-9 items-center justify-center bg-white/20 rounded-full backdrop-blur-[10px] shadow-md">
              <Image className="w-3.5 h-3" src="/img/arrow-rigth.svg" alt="Next" width={14} height={12} />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
