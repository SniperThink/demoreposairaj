import Image from "next/image";

export default function BusinessSteps() {
  return (
    <div className="flex flex-col lg:flex-row items-start w-full pt-10 pb-10" style={{ display: 'flex', padding: '0 80px', alignItems: 'flex-start', gap: '80px', alignSelf: 'stretch' }}>
      {/* Left Section */}
      <div className="relative w-full lg:w-[560px] flex flex-col items-start gap-2 py-10">
        {/* Background Abstract Image */}
        <div className="absolute w-[500px] h-[400px] sm:w-[600px] sm:h-[500px] md:w-[650px] md:h-[550px] lg:w-[650px] lg:h-[700px] lg:aspect-square top-8 sm:top-8 md:top-8 lg:top-5 left-[-280px] sm:left-[-350px] md:left-[-380px] lg:left-[-420px]">
          <div className="absolute h-full left-[50%]">
            <Image
              src="/img/abstract-image.svg"
              alt="Abstract decoration"
              width={700}
              height={700}
              className="w-full h-full object-contain opacity-100"
            />
          </div>
        </div>

        {/* Content Card */}
        <div className="flex flex-col items-start gap-5 p-6 sm:p-10 md:p-12 rounded-[40px] sm:rounded-[60px] backdrop-blur-[15px] bg-gradient-to-b from-[rgba(26,98,98,0.2)] to-[rgba(189,238,244,0.2)] w-full lg:min-h-[650px] sm:min-h-[700px] relative z-10 order-2 lg:order-1">
          <Image
            src="/img/our-work.svg"
            alt="Our work"
            width={500}
            height={500}
            className="w-full h-auto pt-20 sm:pt-36 lg:pt-40"
          />
          <p className="text-white/80 text-sm sm:text-base leading-6 font-normal line-clamp-4">
            SniperThink helps you scale smarter—not harder. In just three steps,
            we take your business from scattered systems to streamlined
            growth—so you can analyse, automate, and accelerate your outcomes.
          </p>
        </div>
      </div>

      {/* Steps Section */}
      <div className="flex flex-col gap-8 sm:gap-10 py-10 lg:py-[220px] flex-1 order-1 lg:order-2">
        {/* Step 01 */}
        <div className="flex items-start gap-6 sm:gap-10">
          <div className="bg-gradient-to-tr from-[#ff6700] to-[#e1a940] bg-clip-text text-transparent opacity-60 font-semibold text-3xl sm:text-4xl">
            01
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 flex-1">
            <div className="text-white text-base sm:text-lg font-semibold">Analyze</div>
            <p className="text-white/80 text-sm sm:text-base leading-6 font-normal line-clamp-3">
              Connect your tools and uncover insights. From KPIs to lead flows,
              SniperThink shows you where you are—and where you're stuck.
            </p>
          </div>
        </div>

        {/* Step 02 */}
        <div className="flex items-start gap-6 sm:gap-10">
          <div className="bg-gradient-to-tr from-[#ff6700] to-[#e1a940] bg-clip-text text-transparent opacity-60 font-semibold text-3xl sm:text-4xl">
            02
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 flex-1">
            <div className="text-white text-base sm:text-lg font-semibold">Automate</div>
            <p className="text-white/80 text-sm sm:text-base leading-6 font-normal line-clamp-3">
              Let the system do the work. Automate alerts, reports, responses,
              and lead qualification without sacrificing control.
            </p>
          </div>
        </div>

        {/* Step 03 */}
        <div className="flex items-start gap-6 sm:gap-10">
          <div className="bg-gradient-to-tr from-[#ff6700] to-[#e1a940] bg-clip-text text-transparent opacity-60 font-semibold text-3xl sm:text-4xl">
            03
          </div>
          <div className="flex flex-col gap-3 sm:gap-4 flex-1">
            <div className="text-white text-base sm:text-lg font-semibold">Accelerate</div>
            <p className="text-white/80 text-sm sm:text-base leading-6 font-normal line-clamp-3">
              Act faster, scale smoother. With smart signals and agent-driven
              outreach, your team focuses only where it counts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
