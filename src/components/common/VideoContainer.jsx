// components/VideoContainer.js

import PropTypes from "prop-types";
import ButtonWithArrow from "./ButtonWithArrow";

const VideoContainer = ({ videos, heading, subheading, noText }) => {
  return (
    <div className="w-full bg-[#F7FBF4] flex flex-col items-center justify-center py-20">
      {heading && (
        <div className="text-4xl font-bold mb-4 text-gray-700 text-center">
          {heading}
        </div>
      )}
      {subheading && <div className="text-lg mb-4">{subheading}</div>}
      <div className="flex flex-wrap gap-4 mb-10 w-full justify-center">
        {videos.map((link, index) => (
          <div
            key={index}
            className={`flex-1 min-w-[400px] max-w-[calc(25%-1rem)] ${
              noText ? "h-[300px]" : "h-[450px]"
            } text-gray-600`}
          >
            <iframe
              width="100%"
              height="200"
              src={link}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="flex-1 min-w-[400px] max-w-[calc(25%-1rem)] h-[300px] bg-gray-500"
            ></iframe>
            {!noText && (
              <>
                <p className="font-bold mt-3">Title</p>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Possimus enim neque sit excepturi corporis explicabo
                  aspernatur laborum officiis iusto fugit!
                </p>
              </>
            )}
          </div>
        ))}
      </div>
      {/* <ButtonWithArrow buttonText="Find us on YouTube" /> */}
    </div>
  );
};

VideoContainer.propTypes = {
  videos: PropTypes.arrayOf(PropTypes.string).isRequired,
  heading: PropTypes.string,
  subheading: PropTypes.string,
};

export default VideoContainer;
