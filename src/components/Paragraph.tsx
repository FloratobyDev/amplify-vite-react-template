import classNames from "classnames";
import React from "react";

type Props = {
  children: React.ReactNode;
  bold?: boolean;
};

function Paragraph({ children, bold }: Props) {
  const pClasses = classNames("font-poppins text-12 text-primary", {
    "font-medium": bold,
  });
  return <p className={pClasses}>{children}</p>;
}

export default Paragraph;
