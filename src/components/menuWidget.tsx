import React from "react";

type MenuWidgetProps = {
  title: string;
  description: React.ReactNode;
  imageUrl: string;
};

const MenuWidget: React.FC<MenuWidgetProps> = ({
  title,
  description,
  imageUrl,
}) => {
  return (
    <div className="flex flex-col items-center space-y-2">
      <img src={imageUrl} className="w-16 h-16 rounded" alt="logo" />
      <div className="text-xl text-white font-semibold text-center">
        {title}
      </div>
      <div className="text-sm text-white text-center">{description}</div>
    </div>
  );
};

export default MenuWidget;
