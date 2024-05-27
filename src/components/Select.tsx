import { useMemo, useRef, useState } from "react";
import FloatingCard from "./FloatingCard";
import Paragraph from "./Paragraph";
import ArrowUp01Icon from "../logos/ArrowUp01Icon";
import ArrowDown01Icon from "../logos/ArrowDown01Icon";
import useOutsideClick from "../hooks/useClickOutside";
import classNames from "classnames";

type Props = {
  options: string[];
  onSelect: (value: string) => void;
  label: string;
  selectedValue: string;
};

function Select({ options, onSelect, label, selectedValue }: Props) {
  const [show, setShow] = useState(false);
  const ref = useRef(null);

  useOutsideClick(ref, show, handleShow);

  function handleShow() {
    setShow(!show);
  }

  function handleSelect(value: string) {
    return () => {
      onSelect(value);
      setShow(false);
    };
  }

  const getHigherValueLength = useMemo(() => {
    const values = options.map((option) => option.length);
    return Math.max(...values!);
  }, [options]);

  const divClasses = classNames(
    "relative inline-flex flex-col items-start gap-y-1",
    {
      "min-w-20": getHigherValueLength! < 10,
      "min-w-28": getHigherValueLength! > 10,
    }
  );

  return (
    <div ref={ref} className={divClasses}>
      <button
        className="flex items-center justify-between gap-x-2 py-1.5 px-2 rounded-4 bg-secondary w-full"
        onClick={handleShow}
      >
        <Paragraph>
          {selectedValue || <span className="capitalize">{label}</span>}
        </Paragraph>
        {show ? <ArrowUp01Icon /> : <ArrowDown01Icon />}
      </button>
      {show && (
        <FloatingCard className="absolute top-9 max-h-56 overflow-auto">
          <div className="p-1 flex flex-col w-full">
            {options.map((option, index) => (
              <button
                key={index}
                className="py-1.5 px-2 w-full text-left hover:bg-secondary rounded-4"
                onClick={handleSelect(option)}
              >
                <Paragraph>{option}</Paragraph>
              </button>
            ))}
          </div>
        </FloatingCard>
      )}
    </div>
  );
}

export default Select;
