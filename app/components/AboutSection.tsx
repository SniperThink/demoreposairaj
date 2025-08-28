import Image from "next/image";

export default function AboutSniperThink() {
  return (
    <section id="about-us" className="relative flex flex-col lg:flex-row items-center justify-center isolate overflow-hidden px-[10px] sm:px-[80px] lg:px-[80px] pt-10 pb-10 lg:pt-20 lg:pb-20" style={{
      width: '100%',
      minHeight: 'clamp(600px, 80vh, 749px)',
      height: 'auto',
      opacity: 1,
      gap: 'clamp(40px, 5vw, 80px)',

    }}>

      {/* Rectangle Container */}
      <div className="absolute flex items-center justify-center pointer-events-none" style={{
        width: 'clamp(300px, 50vw, 650px)',
        height: 'clamp(300px, 50vw, 650px)',
        opacity: 1,
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <img
          src="/img/69-1@3x.svg"
          alt="Abstract spherical design"
          className="w-full h-full object-contain"
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.4,
            mixBlendMode: 'soft-light',
            filter: 'brightness(1.3) contrast(1.1) saturate(1.2)'
          }}
        />
      </div>

      <div className="relative p-0 min-h-[700px] sm:min-h-[500px] md:min-h-[580px] lg:min-h-[630px]" style={{
        width: '100%',
        opacity: 1,
        gap: '40px',
        borderRadius: 'clamp(40px, 4vw, 80px)',
        background: 'linear-gradient(180deg, rgba(255, 134, 51, 0.2) 0%, rgba(246, 204, 124, 0.2) 100%)',
        backdropFilter: 'blur(10px)'
      }}>
        {/* Overlay Layer */}
        <div className="absolute inset-[10px] sm:inset-[20px] w-auto h-auto" style={{
          opacity: 1,
          borderRadius: 'clamp(40px, 4vw, 80px)',
          background: 'linear-gradient(180deg, rgba(26, 98, 98, 0.2) 0%, rgba(19, 63, 63, 0.2) 100%)',
          backdropFilter: 'blur(293px)'
        }}>
          {/* Child Container */}
          <div className="absolute inset-[10px] sm:inset-[20px] w-auto h-auto" style={{
            borderRadius: 'clamp(40px, 4vw, 80px)',
            background: 'linear-gradient(180deg, rgba(76, 109, 79, 0.2) 0%, rgba(0, 0, 0, 0.08) 100%)',
          }}>
            {/* Second Child Container */}
            <div className="absolute inset-[10px] sm:inset-[20px] w-auto h-auto" style={{
              borderRadius: 'clamp(40px, 4vw, 80px)',
              background: 'linear-gradient(180deg, rgba(26, 98, 98, 0.2) 0%, rgba(167, 206, 206, 0.2) 100%)',
              backdropFilter: 'blur(70px)'
            }}>
              {/* Content Container */}
              <div className="relative z-10 flex flex-col items-start justify-center gap-4 sm:gap-5 w-full p-[40px] sm:p-[30px] lg:p-[40px] min-h-full">
                {/* Title */}
                <h2 className="text-white font-poppins font-semibold text-xl sm:text-2xl lg:text-4xl leading-tight sm:leading-snug uppercase mb-2 sm:mb-0">
                  About SniperThink
                </h2>

                {/* Description */}
                <div className="text-white font-poppins text-sm sm:text-base lg:text-lg leading-relaxed w-full max-w-full sm:max-w-[90%] lg:max-w-[80%] space-y-3 sm:space-y-4">
                  <p className="m-0">
                    We built SniperThink because we lived the chaos. The dashboards that didn't talk.
                    The leads that slipped through. The analysis that came too late. We believe clarity
                    shouldn't be a luxury. So we created a system that listens, thinks, and acts—for
                    people building fast and leading hard.
                  </p>

                  <blockquote className="m-0 p-0">
                    <p className="m-0 text-[#e1a940] font-medium">
                      "Our mission is simple: Bring clarity to every business decision—before it's too late."
                    </p>
                  </blockquote>

                  <p className="m-0">
                    SniperThink is for business owners, ops heads, sales leaders—anyone tired of reacting.
                    We're here to help you lead with confidence, not guesswork.
                  </p>
                </div>

                {/* CTA Button */}
                <button className="flex items-center justify-center text-white font-inter text-sm font-medium mt-4 sm:mt-0">
                  <Image
                    src="/img/CTA.svg"
                    alt="CTA Icon"
                    width={220}
                    height={220}
                    className="w-220 h-220 mr-2 ml-[-40px]"
                  />
                </button>

              </div>
            </div>
          </div>
        </div>

        {/* Circles SVG - Bottom Right */}
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <img
            src="/img/circles.svg"
            alt="Decorative circles"
            className="w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[300px] lg:h-[300px] opacity-60"
          />
        </div>
      </div>

    </section>
  );
}
