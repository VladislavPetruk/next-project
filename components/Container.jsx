import React from "react";

const Container = ({wrapper, children}) => {
  const Container = wrapper || "div";

  return <Container className='container'>
      {children}
  </Container>;
};

export default Container;
