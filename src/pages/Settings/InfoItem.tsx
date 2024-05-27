import { useRef, useState } from "react";
import Paragraph from "../../components/Paragraph";
import SubTitle from "../../components/SubTitle";
import ProfileLogo from "../../logos/ProfileLogo";
import useOutsideClick from "../../hooks/useClickOutside";

type Props = {
  label: string;
  currentValue: string;
  onSave: (name: string) => void;
};

function InfoItem({ label, currentValue, onSave }: Props) {
  const [change, setChange] = useState<boolean>(false);
  const [input, setInput] = useState<string>("");
  const divRef = useRef<HTMLDivElement>(null);

  useOutsideClick(divRef, change, handleCancel);

  function handleSubmit() {
    if (change) onSave(input);
    setChange(!change);
  }

  function handleCancel() {
    setChange(false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  return (
    <div
      ref={divRef}
      className="flex w-full justify-between rounded-4 select-none"
    >
      <div className="flex flex-col gap-y-1 basis-1/2">
        <SubTitle>{label}</SubTitle>
        {!change && <Paragraph>{currentValue}</Paragraph>}
        {change && (
          <div className="border-b text-12 font-poppins text-primary font-medium w-full">
            <input
              placeholder="Type here"
              type="text"
              value={input}
              onChange={handleChange}
              className="outline-none bg-transparent w-full"
              autoFocus
              alt={`Input for ${label}`}
            />
          </div>
        )}
      </div>
      <div className=" flex gap-x-2">
        {change && (
          <Paragraph
            className="flex gap-x-1 justify-center hover:underline cursor-pointer"
            bold
            onClick={handleCancel}
          >
            <ProfileLogo /> Cancel
          </Paragraph>
        )}
        <Paragraph
          className="flex gap-x-1 justify-center hover:underline cursor-pointer"
          bold
          onClick={handleSubmit}
        >
          <ProfileLogo /> {change ? "Save" : "Change"}
        </Paragraph>
      </div>
    </div>
  );
}

export default InfoItem;
