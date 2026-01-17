import type { Testimonial } from "../../data/homeData";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-gray-08 border border-gray-15 p-6 md:p-8 lg:p-10 rounded-xl flex flex-col h-full font-urbanist">
      
      <div className="flex gap-1.5 md:gap-2 mb-6 md:mb-8">
        {[...Array(testimonial.stars)].map((_, i) => (
          <div key={i} className="bg-gray-10 border border-gray-15 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center">
            <img 
              src="/assets/icons/GoldenStar.svg" 
              alt="star" 
              className="w-4 h-4 md:w-5 md:h-5 object-contain" 
            />
          </div>
        ))}
      </div>

      <div className="flex-grow">
        <h3 className="text-white text-lg md:text-xl lg:text-2xl font-semibold mb-3 md:mb-4">
            {testimonial.title}
        </h3>
      
        <p className="text-gray-60 text-sm md:text-base lg:text-lg leading-relaxed mb-6 md:mb-8">
          {testimonial.content}
        </p>
      </div>

      <div className="flex items-center gap-3  pt-6 md:pt-8 mt-auto">
        <img 
          src={testimonial.userImage} 
          alt={testimonial.userName} 
          className="w-10 h-10 md:w-12 md:h-14 lg:w-14 lg:h-14 rounded-full object-cover"
        />
        <div className="min-w-0"> 
          <h4 className="text-white text-base md:text-lg font-medium leading-tight truncate">{testimonial.userName}</h4>
          <p className="text-gray-400 text-xs md:text-sm lg:text-base truncate">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;