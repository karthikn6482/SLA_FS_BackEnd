import { useState } from "react";

const withShowHide = (WrappedComponent) => {
  return function Enhanced() {
    const [show, setShow] = useState(true);

    const toggle = () => setShow(!show);

    return (
      <WrappedComponent show={show} toggle={toggle} />
    );
  };
};

export default withShowHide;
