import { Link } from "react-router-dom"


const CallToActionSection = () => {
  return (
    <section className="flex flex-col lg:flex-row justify-center items-center bg-[url('/assets/images/abstractDesign/ctaLeft.png')]
    px-4 py-12.5">
      <div>
        <h2 className="">Start Your Real Estate Journey Today</h2>
        <p>Your dream property is just a click away. Whether you're looking for a new home, a strategic 
          investment, or expert real estate advice, Estatein is here to assist you every step of the way. 
          Take the first step towards your real estate goals and explore our available properties or get 
          in touch with our team for personalized assistance.
        </p>
      </div>
      <Link to="/properties">Explore Properties</Link>
    </section>
  )
}

export default CallToActionSection