import React from "react";

const Footer = () => {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const dateYear = setInterval(() => setDate(new Date()), 1000);
    return function clear() {
      clearInterval(dateYear);
    };
  });

  return (
    <footer className="py-5 text-xl text-center">
      Created By{" "}
      <a
        className="text-main-color"
        href="https://github.com/VladislavPetruk"
        target="_blank"
        rel="noreferrer"
      >
        Vladyslav Petruk
      </a>{" "}
      | {date.getFullYear()} All rights reserved.
    </footer>
  );
};

export default Footer;
