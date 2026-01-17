import type { Testimonial } from "../../interfaces";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="bg-gray-08 border border-gray-15 p-7.5 lg:p-10 2xl:p-12.5 rounded-xl flex flex-col h-full font-urbanist">
      <div className="flex gap-2 lg:gap-2 mb-6 lg:mb-7.5 2xl:mb-10">
        {[...Array(testimonial.stars)].map((_, i) => (
          <div
            key={i}
            className="bg-gray-10 border border-gray-15 w-7.5 h-7.5 lg:w-9.5 lg:h-9 éxl:w-11 2xl:h-11 rounded-full flex items-center justify-center"
          >
            <img
              src="/assets/icons/GoldenStar.svg"
              alt="star"
              className="w-4.5 h-4.5 lg:w-5 lg:h-5 2xl:w-6 2xl:h-6 object-contain"
            />
          </div>
        ))}
      </div>

      <div className="grow">
        <h3 className="text-white text-lg lg:text-xl 2xl:text-2xl font-semibold mb-1.5 lg:mb-2.5 2xl:mb-3.5 leading-[150%]">
          {testimonial.title}
        </h3>

        <p className="text-sm lg:text-base 2xl:text-lg leading-relaxedw mb-6 lg:mb-7.5 2xl:mb-10 leading-[150%]">
          {testimonial.content}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <img
          src={testimonial.userImage}
          alt={testimonial.userName}
          className="w-12.5 h-12.5 2xl:w-15 2xl:h-15 rounded-full object-cover"
        />
        <div className="min-w-0">
          <h4 className="text-white text-base lg:text-lg font-medium leading-tight truncate 2xl:mb-0.5">
            {testimonial.userName}
          </h4>
          <p className="text-gray-400 text-sm lg:text-base 2xl:text-lg truncate">
            {testimonial.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
