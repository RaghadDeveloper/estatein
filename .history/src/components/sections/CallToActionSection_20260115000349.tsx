import { Link } from "react-router-dom"


const CallToActionSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify- items-center
    gap-7.5 bg-[url('/assets/images/abstractDesign/ctaLeft.png')]
    px-4 py-12.5">
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
      <Link to="/properties" className="font-medium text-[14px]
      text-white bg-primary-60">Explore Properties</Link>
    </section>
  )
}

export default CallToActionSection