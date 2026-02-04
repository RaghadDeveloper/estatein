import type { Testimonial } from "../../interfaces";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="relative border border-gray-15 p-7.5 lg:p-10 2xl:p-12.5 rounded-xl flex flex-col h-full font-urbanist transition-all duration-500 ease-out group overflow-hidden">
      <div
        className={`absolute inset-0 bg-linear-to-br from-primary-60/5 via-transparent to-primary-60/5 opacity-0 transition-opacity duration-700 group-hover:opacity-100`}
      />

      <div className="absolute -top-2 -right-2 w-4 h-4 bg-primary-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-primary-60 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />

      <div className="flex gap-2 lg:gap-2 mb-6 lg:mb-7.5 2xl:mb-10">
        {[...Array(testimonial.stars)].map((_, i) => (
          <div
            key={i}
            className="bg-bg-secondary border border-gray-15 w-7.5 h-7.5 lg:w-9.5 lg:h-9.5 2xl:w-11 2xl:h-11 rounded-full flex items-center justify-center transition-all duration-700 ease-in-out group-hover:scale-110 group-hover:border-primary-60 group-hover:bg-primary-60/20"
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <img
              src="/assets/icons/GoldenStar.svg"
              alt="star"
              className="w-4.5 h-4.5 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 object-contain  transition-all duration-500 ease-in-out group-hover:scale-125 group-hover:rotate-12 group-hover:brightness-125"
            />
          </div>
        ))}
      </div>

      <div className="grow relative z-10">
        <h3 className="text-lg lg:text-xl 2xl:text-2xl font-semibold mb-1.5 lg:mb-2.5 2xl:mb-3.5 leading-[150%] transition-all duration-300 hover:text-primary-60 hover:translate-x-2">
          {testimonial.title}
        </h3>

        <p className="text-sm lg:text-base 2xl:text-lg leading-relaxedw mb-6 lg:mb-7.5 2xl:mb-10 leading-[150%] transition-colors duration-500 hover:text-text-main">
          {testimonial.content}
        </p>
      </div>

      <div className="flex items-center gap-3 transition-all duration-300 group-hover:gap-4 relative z-10">
        <img
          src={testimonial.userImage}
          alt={testimonial.userName}
          className="w-12.5 h-12.5 2xl:w-15 2xl:h-15 rounded-full object-cover transition-all duration-500 ease-in-out"
        />
        <div className="min-w-0">
          <h4 className="text-base lg:text-lg font-medium leading-tight truncate 2xl:mb-0.5 transition-colors duration-300 hover:text-primary-60">
            {testimonial.userName}
          </h4>
          <p className="text-gray-400 text-sm lg:text-base 2xl:text-lg truncate  transition-colors duration-300 group-hover:text-text-main">
            {testimonial.location}
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 h-0.5 bg-primary-60 transition-all duration-500 w-0 group-hover:w-full" />
    </div>
  );
};

export default TestimonialCard;
