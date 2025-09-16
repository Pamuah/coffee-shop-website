import React from "react";

type TestimonialProps = {
  description: React.ReactNode;
  imageUrl: string;
  title: string;
};
const TestimonialWidget: React.FC<TestimonialProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <div className="w-36 h-36 rounded-full border border-gray-200">
        <img src={imageUrl} className="h-full w-full rounded-full" alt="logo" />
      </div>

      <div className="text-xl text-black font-semibold text-center">
        {title}
      </div>
      <div className="text-sm text-gray-600 font-medium text-center">
        {description}
      </div>
    </div>
  );
};

export default TestimonialWidget;
