import classNames from "classnames";
import { HTMLAttributes } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

function FloatingCard({ children, className, ...rest }: Props) {
  const divClasses = classNames(
    "shadow-custom border-[.5px] border-secondary rounded-4 w-full z-20 bg-white",
    className
  );

  return (
    <div {...rest} className={divClasses}>
      {children}
    </div>
  );
}

export default FloatingCard;
