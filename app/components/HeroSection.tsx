'use client'

import { useState, useEffect, useRef } from 'react';
import { useCountup } from '../../hooks/useCountup';
import Image from 'next/image';

export default function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const header = document.getElementById('main-header');
      const headerHeight = header ? header.offsetHeight : 64;
      
      // Calculate position with header offset
      const yOffset = -headerHeight;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  // Countup hooks for stats - using a single intersection observer for the container
  const [isStatsVisible, setIsStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Use regular countup hooks with manual trigger
  const revenueGrowth = useCountup({ end: 200, duration: 2500, delay: 200, autoStart: false });
  const speedToMarket = useCountup({ end: 3, duration: 2000, delay: 400, autoStart: false });
  const newLeads = useCountup({ end: 84, duration: 2500, delay: 600, autoStart: false });
  const activeUsers = useCountup({ end: 20000, duration: 3000, delay: 800, autoStart: false });

  // Intersection observer for the stats container
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isStatsVisible) {
          setIsStatsVisible(true);
          // Start all countup animations with a small delay to ensure they're ready
          setTimeout(() => {
            revenueGrowth.start();
            speedToMarket.start();
            newLeads.start();
            activeUsers.start();
          }, 100);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, [isStatsVisible, revenueGrowth, speedToMarket, newLeads, activeUsers]);

  return (
    <div id="section-hero" className="relative overflow-hidden pt-20" style={{ 
      width: '100%',
      minHeight: 'clamp(600px, 80vh, 922px)',
      height: 'auto',
      opacity: 1,
      paddingLeft: 'clamp(16px, 4vw, 80px)', 
      paddingRight: 'clamp(16px, 4vw, 80px)',
      paddingTop: '80px',
      paddingBottom: '80px'
    }}>
      <Image 
        className="hidden xl:block absolute w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[337px] xl:h-[361px] right-[-20px] sm:right-[-40px] lg:right-[-60px] xl:right-[-80px] top-[30px] md:top-[20px] xl:top-[0px] z-0" 
        src="/img/ellipse-1.svg" 
        alt="Decorative element" 
        width={337} 
        height={361} 
      />
      
      
      {/* Background gradients */}
      <div className="absolute w-full h-full lg:w-[1619px] lg:h-[1342px] lg:-top-[521px] lg:-left-[52px] top-0 left-0 z-0">
        <div className="relative h-full lg:h-[1342px]">
          <div className="absolute w-full h-full lg:w-[1619px] lg:h-[1342px] top-0 left-0">
            {/* Main gradient */}
            <div className="absolute w-[300px] h-[200px] md:w-[500px] md:h-[400px] lg:w-[800px] lg:h-[600px] xl:w-[1000px] xl:h-[784px] top-[100px] md:top-[150px] lg:top-[228px] left-1/2 transform -translate-x-1/2 lg:left-[261px] lg:transform-none rounded-full lg:rounded-[500px/392px] blur-[50px] md:blur-[100px] lg:blur-[150px] bg-[radial-gradient(50%_50%_at_50%_50%,rgba(26,98,98,1)_0%,rgba(52,21,57,0)_100%)]"></div>
            
            
            {/* Ellipse decorations */}
            <Image 
              className="absolute w-[150px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[326px] xl:h-[326px] top-[400px] md:top-[500px] lg:top-[749px] left-0" 
              src="/img/ellipse-6.svg" 
              alt="Ellipse" 
              width={326} 
              height={326} 
            />

            <Image
              className="relative w-[300px] h-[150px] md:w-[200px] md:h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[326px] xl:h-[326px] top-[400px] md:top-[500px] lg:top-[719px] left-[700px] "
              src="/img/main-hero-graphic.svg"
              alt="Decorative element"
              width={300}
              height={150}
            />
 
            <div className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[400px] lg:h-[400px] xl:w-[461px] xl:h-[461px] top-[600px] md:top-[700px] lg:top-[881px] right-0 lg:left-[1158px] rounded-full lg:rounded-[230.5px] blur-[50px] md:blur-[100px] lg:blur-[173.5px] bg-gradient-to-b from-[rgba(26,98,98,1)] opacity-30"></div>
          </div>
          <div className="absolute w-[100px] h-[100px] md:w-[150px] md:h-[150px] lg:w-[200px] lg:h-[200px] xl:w-[260px] xl:h-[260px] top-[300px] md:top-[350px] lg:top-[467px] -left-[20px] md:-left-[30px] lg:-left-[40px] rounded-full lg:rounded-[130px] blur-[50px] md:blur-[100px] lg:blur-[173.5px] bg-gradient-to-b from-[rgba(26,98,98,1)]"></div>
        </div>
      </div>
      
      {/* Hero graphic */}
      <Image 
        className="absolute w-[200px] h-[200px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[416px] xl:h-[431px] top-[150px] md:top-[200px] lg:top-[279px] -left-[40px] md:-left-[60px] lg:-left-[80px] object-fill z-0" 
        src="/img/b7ceabc2-0165-4ca7-9848-81da4af58456-2.svg" 
        alt="Hero graphic" 
        width={416} 
        height={431} 
      />
      
      {/* Main content */}
      <div className="flex flex-col items-center justify-center pt-8 md:pt-12 lg:pt-16 xl:pt-20 pb-8 md:pb-12 lg:pb-16 w-full relative z-20" style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '48px',
        alignSelf: 'stretch'
      }}>
        <div className="flex flex-col items-center gap-3 md:gap-4 lg:gap-[48px] relative w-full max-w-full">
          {/* Header with icon and title */}
          <div className="inline-flex items-center gap-2 md:gap-[10px] py-2 md:py-4 px-0 relative">
            <Image 
              className="relative w-full h-6 md:w-8 md:h-8 -ml-2 md:-ml-[30px]" 
              src="/img/mdi-magic.svg" 
              alt="Magic icon" 
              width={32} 
              height={32} 
            />
            <Image
              className="relative w-[120px] h-4 md:w-[150px] md:h-5 lg:w-[200px] lg:h-6"
              src="/img/meet-your-growth-partner.svg"
              alt="Meet your growth partner"
              width={200} 
              height={24} 
            />
          </div>
          
          {/* Main heading */}
          <h1 className="relative w-full max-w-full font-poppins text-white text-center mx-auto px-4 text-2xl md:text-4xl lg:text-5xl xl:text-[62px] font-semibold leading-tight"
          style={{
          wordWrap: 'break-word',
          }}>
            Your business is growing, but are your systems ready to scale it?
          </h1>


          <p className="relative w-full bg-[linear-gradient(90deg,#7BAF7F_24.04%,#FF8633_77.88%,#F6CC7C_100%)] bg-clip-text text-transparent font-poppins font-normal text-lg md:text-xl lg:text-2xl xl:text-[24px] text-center lg:leading-[50px] md:leading-[28px]">
            Don&apos;t let poor systems hold you back
          </p>
          <p className="relative w-full max-w-4xl lg:w-[920px] font-poppins font-normal text-white text-sm md:text-base text-center lg:leading-[32px] md:leading-relaxed sm:leading-[16px] px-4">
            SniperThink turns your business data into growth systems.<br className="hidden sm:block" />
            You&apos;re building a great business — SniperThink gives you clarity, speed, and control to scale confidently.<br className="hidden sm:block" />
            Most businesses hustle without data.
          </p>
        </div>
        
        {/* CTA Button */}
                  <button 
            onClick={() => scrollToSection('about-us')} 
            className="inline-flex items-center justify-center relative cursor-pointer transition-all duration-300"
            style={{
              width: 'clamp(200px, 50vw, 244.5791778564453px)',
              height: 'clamp(44px, 8vh, 51px)',
              gap: '12.08px',
              opacity: 1,
              paddingTop: '12.08px',
              paddingRight: '30.21px',
              paddingBottom: '12.08px',
              paddingLeft: '30.21px',
              borderRadius: '10.07px',
              border: '0.5px transparent',
              borderImageSource: 'linear-gradient(180deg, rgba(26, 98, 98, 0.4) 17.19%, rgba(26, 98, 98, 0.77) 100%), linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), linear-gradient(180deg, rgba(26, 98, 98, 0) -4.69%, rgba(189, 252, 254, 0.3) 100%)',
              borderImageSlice: '1',
              background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) -40.91%, #1A6262 132.95%)',
              boxShadow: '0px 10.07px 30.21px 0px #1A6262B2 inset, 0px 10.07px 40.28px 0px #1A626280',
              backdropFilter: 'blur(20.13793182373047px)'
            }}
          >
          <div className="relative w-fit font-inter font-medium text-white text-sm md:text-base text-center leading-tight md:leading-[20px] whitespace-nowrap">Book Your Audit Call</div>
          <Image 
            className="relative w-3 h-3 md:w-4 md:h-4" 
            src="/img/Chevron-Right.svg" 
            alt="Arrow" 
            width={10} 
            height={16} 
          />
        </button>
        
        {/* Stats section */}
        <div 
          ref={statsRef}
          className="inline-flex flex-col items-center gap-4 md:gap-[10px] py-4 md:py-8 lg:py-8 relative w-full max-w-4xl sm:min-h-[100px]"
          style={{
            display: 'flex',
            padding: '40px 56px',
            flexDirection: 'column',
            alignItems: 'flex-start',
            gap: '10px'
          }}
        >
          <div className="grid grid-cols-2 md:flex md:items-center md:justify-center gap-4 md:gap-[49px] relative w-full px-4">
            <div className="flex flex-col w-full md:w-[158px] items-center relative">
              <div className="relative w-fit -mt-px bg-gradient-to-r from-[rgba(255,103,0,1)] to-[rgba(237,186,90,1)] bg-clip-text text-transparent font-poppins font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[51px] whitespace-nowrap">
                {revenueGrowth.count}%
              </div>
              <div className="relative w-fit font-poppins font-normal text-white text-xs md:text-sm leading-tight md:leading-[22px] whitespace-nowrap text-center">Revenue Growth</div>
            </div>
            <div className="flex flex-col w-full md:w-[159px] items-center relative">
              <div className="relative w-fit -mt-px bg-gradient-to-r from-[rgba(255,103,0,1)] to-[rgba(237,186,90,1)] bg-clip-text text-transparent font-poppins font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[51px] whitespace-nowrap">
                {speedToMarket.count}X
              </div>
              <div className="relative w-fit font-poppins font-normal text-white text-xs md:text-sm leading-tight md:leading-[22px] whitespace-nowrap text-center">Speed to Market</div>
            </div>
            <div className="flex flex-col w-full md:w-[114px] items-center relative">
              <div className="relative w-fit -mt-px bg-gradient-to-r from-[rgba(255,103,0,1)] to-[rgba(237,186,90,1)] bg-clip-text text-transparent font-poppins font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[51px] whitespace-nowrap">
                {newLeads.count}%
              </div>
              <div className="relative w-fit font-poppins font-normal text-white text-xs md:text-sm leading-tight md:leading-[22px] whitespace-nowrap text-center">New Leads</div>
            </div>
            <div className="flex flex-col w-full md:w-[127px] items-center relative">
              <div className="relative w-fit -mt-px bg-gradient-to-r from-[rgba(255,103,0,1)] to-[rgba(237,186,90,1)] bg-clip-text text-transparent font-poppins font-semibold text-xl md:text-2xl lg:text-[32px] leading-tight md:leading-[51px] whitespace-nowrap">
                {(activeUsers.count / 1000).toFixed(0)}K+
              </div>
              <div className="relative w-fit font-poppins font-normal text-white text-xs md:text-sm leading-tight md:leading-[22px] whitespace-nowrap text-center">Active Users</div>
            </div>
          </div>
        </div>
      </div>
      
    </div>
  )
}
