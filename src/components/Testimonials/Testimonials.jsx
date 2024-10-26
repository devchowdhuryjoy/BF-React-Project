
import Man1 from '../../assets/Man1.png'; 
import Man2 from '../../assets/Man2.png'; 
import Man3 from '../../assets/Man3.png'; 

const testimonials = [
  {
    image: Man1, 
    quote: "Buffer has made sharing our story and building our brand on social media so much easier.",
    company: "Huckberry",
    name: "Luis Cancel, Managing Editor",
  },
  {
    image: Man2,
    quote: "On social, we need to be fast, efficient, and intentional. Buffer allows us to be exactly that.",
    company: "DressUp",
    name: "Liz Gillis, Digital Marketer",
  },
  {
    image: Man3,
    quote: "For a marketing team with a lot on our plates, Buffer is a crucial tool in our brand-building efforts.",
    company: "Lensabl",
    name: "Troy Petrunoff, Marketing Manager",
  },
];

const stats = [
  { value: "10 years", label: "in business" },
  { value: "140,000", label: "users" },
  { value: "100k+", label: "monthly blog readers" },
  { value: "1.2m+", label: "social followers" },
];

export default function Testimonials() {
  return (
    <div className="container mx-auto py-10 px-4">
      {/* Testimonials */}
      <div className="flex flex-wrap justify-center gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300 rounded-lg p-8 max-w-xs md:max-w-sm text-center border-t-4"
          >
            <img
              src={testimonial.image}
              alt={testimonial.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-200 -mt-14"
            />
            <p className="text-gray-700 mb-4">{testimonial.quote}</p>
            <p className="text-blue-500 font-semibold">{testimonial.company}</p>
            <p className="mt-2 font-bold">{testimonial.name}</p>
          </div>
        ))}
      </div>

      {/* Stats */}
      <div className="flex flex-wrap justify-center gap-10 md:gap-32 mt-10 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="text-blue-600 font-bold text-2xl sm:text-3xl">
            <p>{stat.value}</p>
            <p className="text-gray-500 text-sm sm:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
