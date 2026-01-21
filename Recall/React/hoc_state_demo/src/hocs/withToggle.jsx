import { useState } from "react";

const withToggle = (WrappedComponent) => {
  return function Enhanced() {
    const [isOn, setIsOn] = useState(false);
    const toggle = () => setIsOn(!isOn);

    return <WrappedComponent isOn={isOn} toggle={toggle} />;
  };
};

export default withToggle;
