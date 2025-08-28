'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function ProductsSection() {
  const [activeProduct, setActiveProduct] = useState('product1')
  const [activeFeature, setActiveFeature] = useState(0)

  const toggleFeature = (index: number) => {
    setActiveFeature(activeFeature === index ? -1 : index)
  }

  const switchProduct = (productId: string) => {
    setActiveProduct(productId)
    setActiveFeature(0)
  }

  const product2Features = [
    { title: "Real Conversations, Real Leads", content: "AI agents that talk, listen, and learn. They answer queries, guide users, and surface real intent—not just forms filled." },
    { title: "Lead Segmentation Engine", content: "Automatically categorize and prioritize leads based on behavior, intent, and engagement signals." },
    { title: "Instant CRM Sync- CRM integration", content: "Seamlessly connect with your existing CRM systems for unified data flow and management." },
    { title: "First Response in Seconds", content: "Immediate engagement with prospects when interest is highest, dramatically increasing conversion rates." }
  ]

  const product1Features = [
    { title: "Live KPI Intelligence", content: "Track critical metrics in real-time—from AOV to churn—without hunting across platforms or building complex dashboards." },
    { title: "Predictive Growth Signals", content: "Identify trends and opportunities before they become obvious, giving you the competitive edge in your market." },
    { title: "Smart Alert System", content: "Get notified about significant changes and anomalies that require your attention, before they impact your bottom line." },
    { title: "Auto-Generated Reports", content: "Save hours with AI-generated reports that highlight key insights and actionable recommendations." }
  ]

  const currentFeatures = activeProduct === 'product1' ? product1Features : product2Features
  const currentImage = activeProduct === 'product1' ? '/img/products-brief-image.svg' : '/img/product-brief-image-2.svg'

  const products = [
    {
      id: 'product1',
      title: 'Intelligence Growth Engine',
      desc: 'A 6-layer intelligence system that turns scattered data into structured, strategic insights. From KPIs to predictions, alerts to reporting—this is your all-in-one growth command centre.',
      gradient: 'from-[rgba(187,222,209,0.45)] to-[rgba(108,145,111,0.95)]',
      badge: 'from-[#4c6d4f] to-[#6c916f]',
      img: '/img/Pattern.svg'
    },
    {
      id: 'product2',
      title: 'AI Chat + Voice Agents',
      desc: 'Our agents are your first-touch sales team—qualifying leads in real time, detecting urgency and intent, and flagging the hottest opportunities for precision outreach.',
      gradient: 'from-[rgba(250,216,145,0.6)] via-[rgba(210,159,52,0.6)] to-[rgba(154,115,31,0.6)]',
      badge: 'from-[rgba(225,169,64,0.6)] to-[rgba(225,169,64,0.8)]',
      img: '/img/Hexagons.svg'
    }
  ]

  return (
    <div
      id="our-products"
      className="relative w-full flex flex-col lg:flex-row items-start justify-start"
      style={{
        display: 'flex',
        padding: '80px',
        flexDirection: 'column',
        alignItems: 'flex-start',
        gap: '10px',
        alignSelf: 'stretch'
      }}
    >
      {/* Decorative gradient */}
      <Image
        className="absolute top-[-40px] sm:top-[-78px] left-1/2 sm:left-[400px] transform -translate-x-1/2 sm:translate-x-0 w-48 sm:w-[445px] h-48 sm:h-[445px]"
        src="/img/Gradient-3.svg"
        alt="Gradient"
        width={445}
        height={445}
      />
      <div className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-poppins font-semibold text-white leading-snug tracking-[-1px] lg:tracking-[-2px] text-left lg:text-left">
          OUR PRODUCTS
        </div>

        {/* Description */}
        <p className="font-poppins font-normal text-white/80 text-sm sm:text-base leading-[24px] max-w-full lg:max-w-[40%] text-left pb-12">
          SniperThink offers two powerful growth products. Whether you&apos;re looking to unify your business data or
          automate and segment customer interactions, our tools are designed to replace chaos with clarity and
          help you move faster with intelligence.
        </p>
      {/* Main content */}
      <div className="w-full flex lg:flex-col flex-col-reverse slg:flex-col items-start text-left gap-8 lg:gap-10 relative">
        <div className="flex flex-col lg:flex-row items-stretch justify-start w-full gap-4 lg:gap-6">
          {products.map(product => (
            <div
              key={product.id}
              id={product.id}
              className={`flex flex-col gap-4 overflow-hidden bg-gradient-to-b ${product.gradient} relative transition-all duration-500 ease-in-out cursor-pointer
                ${activeProduct === product.id ? 'shadow-xl' : ''} w-full sm:w-full lg:w-1/2`}
              style={{
                minHeight: '240px',
                height: 'auto',
                gap: '16px',
                borderRadius: '12px',
                paddingTop: 'clamp(80px, 8vw, 112px)',
                paddingRight: 'clamp(16px, 2vw, 20px)',
                paddingBottom: 'clamp(24px, 3vw, 32px)',
                paddingLeft: 'clamp(16px, 2vw, 20px)',
                opacity: 1
              }}
              onClick={() => switchProduct(product.id)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault()
                  switchProduct(product.id)
                }
              }}
            >
              {/* Background overlay for unselected cards */}
              <div 
                className={`absolute inset-0 bg-black/40 rounded-[12px] pointer-events-none transition-all duration-500 ease-in-out ${
                  activeProduct !== product.id ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ zIndex: 1 }}
              />
              
              <div className="absolute top-4 lg:top-6 left-4 lg:left-5 flex items-center justify-center" style={{
                width: 'clamp(80px, 8vw, 97px)',
                height: 'clamp(28px, 3vw, 32px)',
                opacity: 1,
                gap: '10px',
                paddingTop: '2px',
                paddingRight: 'clamp(12px, 1.5vw, 16px)',
                paddingBottom: '2px',
                paddingLeft: 'clamp(12px, 1.5vw, 16px)',
                borderRadius: '50px',
                borderWidth: '1px',
                borderColor: 'rgba(255, 255, 255, 0.1)',
                background: product.id === 'product1' 
                  ? 'linear-gradient(0deg, #4C6D4F 1.52%, #6C916F 101.52%)'
                  : 'linear-gradient(0deg, #9A731F 1.52%, #BA8C27 101.52%)'
              }}>
                <span className="text-white text-[9px] lg:text-[10px] font-poppins">Our Products</span>
              </div>
              <Image
                className="absolute top-4 lg:top-6 right-4 lg:right-5 w-12 sm:w-16 lg:w-[169px] opacity-50"
                src={product.img}
                alt={`${product.title} pattern`}
                width={169}
                height={169}
              />
              <div className="font-sora font-semibold text-white text-base sm:text-lg lg:text-xl">
                {product.title}
              </div>
             <p className="text-white text-sm sm:text-base leading-relaxed max-w-md">
  {product.desc}
</p>

            </div>
          ))}
        </div>

        {/* Feature Section */}
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 w-full">
          {currentFeatures && (
            <div className="flex flex-col-reverse md:flex-row gap-6 p-4 sm:p-6 md:p-8 shadow-lg relative backdrop-blur-[30px] overflow-hidden"
              style={{
                width: '100%',
                minHeight: 'clamp(400px, 60vh, 588px)',
                height: 'auto',
                borderRadius: 'clamp(20px, 4vw, 60px)',
                opacity: 1,
                background: 'linear-gradient(0deg, rgba(26, 98, 98, 0.16), rgba(26, 98, 98, 0.16)), linear-gradient(180deg, rgba(26, 98, 98, 0.2) 0%, rgba(189, 239, 244, 0.2) 100%)'
              }}>
              {/* Circles Inverted Background */}
              <Image
                className="absolute bottom-0 left-0 w-32 sm:w-40 md:w-48 lg:w-56 h-auto opacity-80 z-0"
                src="/img/circles-inverted.svg"
                alt="Circles decoration"
                width={226}
                height={226}
              />

              {/* Features List */}
              <div className="flex flex-col flex-1 min-h-[400px] lg:h-[600px] overflow-y-auto pt-[40px] lg:pt-[60px] scrollbar-hide">
                {currentFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="w-full"
                    style={{ 
                      borderBottom: '1px solid rgba(255, 255, 255, 0.2)'
                    }}
                  >
                    <div
                      className="flex justify-between items-center py-4 lg:py-6 px-3 sm:px-4 cursor-pointer"
                      onClick={() => toggleFeature(index)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          toggleFeature(index);
                        }
                      }}
                    >
                      <h3 className="font-sora font-medium text-white text-sm sm:text-base lg:text-lg pr-4">
                        {feature.title}
                      </h3>
                      <span
                        className={`inline-block transition-transform duration-300 ${
                          activeFeature === index ? "rotate-90" : ""
                        }`}
                      >
                        <Image src="/img/Chevron-Right.svg" alt="Expand" width={10} height={16} />
                      </span>
                    </div>

                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        activeFeature === index
                          ? "max-h-[200px] pb-4 px-3 sm:px-4 bg-[#e1a940]/8 opacity-100"
                          : "max-h-0 py-0 px-3 sm:px-4 opacity-0"
                      }`}
                    >
                      <p className="text-white/80 text-xs sm:text-sm lg:text-base pt-2 leading-relaxed">{feature.content}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-4 pt-6 lg:pt-9 pl-[-50px]">
                  <a
                    href="#"
                    className="inline-block transition-all hover:opacity-90"
                  >
                    <Image
                      src="/img/start-scaling.svg"
                      alt="START SCALING"
                      width={240}
                      height={80}
                      className="h-[60px] ml-[-20px] lg:h-[80px]"
                    />
                  </a>
                </div>

              </div>

              {/* Product Image (visible on mobile; absolute positioned on md+) */}
              <div className="flex-1 relative block md:block">
                <Image
                  className="object-contain w-full md:w-auto md:absolute md:bottom-[-30px] md:right-[-100px]"
                  src={currentImage}
                  alt="Product Overview"
                  width={567}
                  height={588}
                  style={{ opacity: 1 }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}