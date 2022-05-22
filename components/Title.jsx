import React from "react";

const Title = ({ tag, smallTag, text, smallText }) => {
  const Tag = tag || "h2";
  const SmallTag = smallTag || "div";

  return (
    <div className="mb-20">
      <Tag className="mb-2 text-4xl font-medium text-center uppercase">
        {text}
      </Tag>
      <SmallTag className="text-xl font-medium text-center uppercase text-main-color">
        {smallText}
      </SmallTag>
    </div>
  );
};

export default Title;
