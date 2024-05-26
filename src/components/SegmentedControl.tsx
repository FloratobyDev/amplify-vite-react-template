import React, { useState, useEffect, useRef } from "react";
import anime from "animejs";
import classNames from "classnames";

type SegmentedControlOption = {
  label: string;
  value: string;
};

type Props = {
  options: SegmentedControlOption[];
  onChange: (value: string) => void;
  direction: "horizontal" | "vertical"; // Direction prop
};

// Custom hook to create and manage refs for each segment
function useRefs(options: SegmentedControlOption[]) {
  const refs = useRef<Array<React.RefObject<HTMLButtonElement>>>([]);
  refs.current = options.map(
    (_option, i) => refs.current[i] ?? React.createRef()
  );
  return refs.current;
}

const SegmentedControl = ({ options, onChange, direction }: Props) => {
  const [selected, setSelected] = useState(options[0].value);
  const [isInitial, setInitial] = useState(true); // Initial state to handle first animation
  const handleRef = useRef<HTMLDivElement>(null);
  const segmentRefs = useRefs(options);

  useEffect(() => {
    const selectedIndex = options.findIndex((opt) => opt.value === selected);
    const selectedElement = segmentRefs[selectedIndex].current;
    if (selectedElement) {
      const { width, height, x, y } = selectedElement.getBoundingClientRect();
      const parentNode = selectedElement.parentNode as HTMLElement;

      const parentX = parentNode.getBoundingClientRect().x;
      const parentY = parentNode.getBoundingClientRect().y;

      // Use anime.set for the initial setup to avoid any animation on first render
      if (isInitial) {
        anime.set(handleRef.current, {
          translateX: direction === "horizontal" ? x - parentX : 0,
          translateY: direction === "vertical" ? y - parentY : 0,
          width: direction === "horizontal" ? width : "100%",
          height: direction === "vertical" ? height : "100%",
        });
        setInitial(false); // Update the initial state after setting up
      } else {
        anime({
          targets: handleRef.current,
          translateX: direction === "horizontal" ? x - parentX : 0,
          translateY: direction === "vertical" ? y - parentY : 0,
          width: direction === "horizontal" ? width : "100%",
          height: direction === "vertical" ? height : "100%",
          duration: 250,
          easing: "easeInOutExpo",
        });
      }
    }
  }, [selected, segmentRefs, options, direction, isInitial]);

  const containerClasses = classNames(
    "inline-block p-1 border border-gray-200",
    {
      "rounded-3xl": direction === "vertical",
      "rounded-md": direction === "horizontal",
    }
  );

  const parentClasses = classNames("relative flex", {
    "flex-row": direction === "horizontal",
    "flex-col": direction === "vertical",
  });

  return (
    <div className={containerClasses}>
      <div className={parentClasses}>
        <div
          ref={handleRef}
          className="absolute top-0 left-0 bg-white rounded-md h-login z-10 border border-gray-200"
        ></div>
        {options.map((option: SegmentedControlOption, index: number) => {
          const buttonClasses = classNames(
            "relative z-20 md:p-2 px-4 rounded-md focus:outline-none transition-colors duration-300 text-gray-700 text-10 md:text-16 leading-24 w-full",
            {
              "hover:bg-gray-200": selected !== option.value,
              "font-bold": selected === option.value,
            }
          );

          return (
            <button
              key={option.value}
              ref={segmentRefs[index]}
              className={buttonClasses}
              onClick={() => {
                setSelected(option.value);
                onChange(option.value);
              }}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default SegmentedControl;
