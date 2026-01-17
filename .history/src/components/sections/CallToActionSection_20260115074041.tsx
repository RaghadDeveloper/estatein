import { Link } from "react-router-dom"


const CallToActionSection = () => {
  return (
    <section className="relative flex flex-col lg:flex-row justify-between items-center
      gap-7.5 bg-[url('/assets/images/abstractDesign/ctaLeft.png')]
      bg-no-repeat bg-bottom-left
      py-12.5">
        <img className="absolute right-0 bottom-0 -z-1" src="/assets/images/abstractDesign/ctaRight.png" alt="bg photo" />
      <div className="lg:w-244.75 2xl:w-288.5">
        <h2 className="font-semibold leading-normal
        text-[28px] lg:text-[38px] 2xl:text-[48px] text-white mb-1.5 lg:mb-2.5
        2xl:mb-3.5">Start Your Real Estate Journey Today</h2>
        <p className="font-medium leading-normal
        text-[14px] lg:text-[16px] 2xl:text-[18px] text-gray-60">Your dream property is just a click away. Whether you're looking for a new home, a strategic 
          investment, or expert real estate advice, Estatein is here to assist you every step of the way. 
          Take the first step towards your real estate goals and explore our available properties or get 
          in touch with our team for personalized assistance.
        </p>
      </div> 
      <Link to="/properties" className="flex justify-center items-center font-medium text-[14px] 2xl:text-[18px]
      text-white bg-primary-60 rounded-[10px] w-full lg:w-fit py-3.5 lg:px-5
      2xl:py-4.5 2xl:px-6 shrink-0">Explore Properties</Link>
    </section>
  )
}

export default CallToActionSection