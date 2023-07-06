import React from "react";

interface Props {
  name?: string;
}

const Greet = ({ name }: Props) => {
  return <div>Hello {name}</div>;
};

export default Greet;
