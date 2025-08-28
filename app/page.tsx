'use client'

import Image from 'next/image'

// Import all components directly for immediate loading
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import WhyChooseSection from './components/WhyChooseSection'
import ProductsSection from './components/ProductsSection'
import StepsSection from './components/StepsSection'
import AboutSection from './components/AboutSection'
import TestimonialsSection from './components/TestimonialsSection'
import FAQSection from './components/FAQSection'
import Footer from './components/Footer'

export default function Home() {
  return (
    <div className="relative w-full min-h-screen overflow-x-hidden bg-[#000]">
      {/* Base background layer */}
      <div 
        className="fixed inset-0 w-full h-full bg-[#000] -z-30 object-cover"
      />
      
      {/* Texture layer */}
      <div 
        className="fixed inset-0 w-full h-full -z-20 bg-[#0F0F11]/80 object-cover"
      >
        <Image 
          className="w-full h-full object-cover mix-blend-color-burn brightness-75"
          src="/img/bg-texture.svg" 
          alt="Background texture"
          fill
          priority
          quality={100}
          sizes="100vw"
        />
      </div>
      
      {/* Gradient layer */}
      <div 
        className="fixed inset-0 w-full h-full -z-10 object-cover"
      >
        <Image 
          className="absolute top-[375px] left-0 w-full mix-blend-soft-light"
          src="/img/Gradient.svg" 
          alt="Background gradient"
          width={1920}
          height={1080}
          priority
          quality={100}
          sizes="100vw"
        />
        

        </div>
        <div className="absolute w-[445px] h-[445px] left-[750px] top-[900px] rounded-full bg-[#1A6262] opacity-70 blur-[200px] z-10"/>

    

      {/* Main body content */}
      <div className="relative flex flex-col w-full z-10">
        <HeroSection />
        <WhyChooseSection />
        <ProductsSection />
        <StepsSection />
        <AboutSection />
        <TestimonialsSection />
        <FAQSection />
        <Footer />
      </div>

      {/* Header stays above */}
      <Header />
    </div>
  )
}
