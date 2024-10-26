
import { IoTriangleSharp } from "react-icons/io5";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";

export default function SocialStats() {
  const socialCards = [
    {
      percentage: "269%",
      metric: "Increment and Engagement",
      platformIcon: <FaInstagram className="absolute bottom-0 right-0 text-[#f00276] text-2xl mb-1 mr-1" />,
      username: "miajwl",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      percentage: "115k",
      metric: "Grow Following",
      platformIcon: <FaTwitter className="absolute bottom-0 right-0 text-[#1da1f2] text-2xl mb-1 mr-1" />,
      username: "redious",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      percentage: "2x",
      metric: "More Follower",
      platformIcon: <FaInstagram className="absolute bottom-0 right-0 text-[#f00276] text-2xl mb-1 mr-1" />,
      username: "midmod mod",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      percentage: "12%",
      metric: "Increment and Engagement",
      platformIcon: <CiLinkedin className="absolute bottom-0 right-0 text-[#2867b2] text-2xl mb-1 mr-1" />,
      username: "Aniansurrte",
      imgUrl: "https://via.placeholder.com/150"
    },
    {
      percentage: "2,000",
      metric: "New Follower",
      platformIcon: <CiLinkedin className="absolute bottom-0 right-0 text-[#2867b2] text-2xl mb-1 mr-1" />,
      username: "pdelabaur",
      imgUrl: "https://via.placeholder.com/150"
    },
  ];

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 p-4 mb-10">
      {socialCards.map((card, index) => (
        <div key={index} className="flex justify-center items-center">
          <div className="shadow-lg p-4 bg-white rounded-lg w-[252px] h-[200px] flex flex-col justify-between">
            {/* Percentage and Icon Section */}
            <div className="flex items-center">
              <h3 className="text-lg font-semibold">{card.percentage}</h3>
              <IoTriangleSharp className="text-[#abd464] ml-1" aria-label="Increase Icon" />
            </div>
            <p className="text-gray-600">{card.metric}</p>

            {/* Social Icon and Profile Image */}
            <div className="flex items-center">
              <div className="w-[60px] h-[60px] rounded-full bg-gray-300 flex items-center justify-center relative shadow-lg overflow-hidden">
                <img
                  src={card.imgUrl}
                  alt={`${card.username}'s profile`}
                  className="md:w-full md:h-full object-cover"
                />
                {card.platformIcon}
              </div>
              <p className="ml-4 text-gray-800 font-medium">{card.username}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

