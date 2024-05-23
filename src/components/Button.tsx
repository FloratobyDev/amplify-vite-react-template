import React from "react";

type Props = {
  children: React.ReactNode;
  onClick: () => void;
};

function Button({ children, onClick }: Props) {
  return <button className="rounded-full p-0.5" onClick={onClick}>{children}</button>;
}

export default Button;
