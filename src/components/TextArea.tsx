import Paragraph from "./Paragraph";

type Props = {
  label: string;
  onChange: () => void;
};

function TextArea({ label, onChange }: Props) {
  return (
    <div className="">
         <Paragraph bold>{label}</Paragraph>
      <div className="">
        <textarea
          onChange={onChange}
          id="textarea"
          name="textarea"
          rows={3}
          className="w-full sm:text-sm border-secondary border rounded-4 outline-none p-2 text-primary text-12"
        />
      </div>
    </div>
  );
}

export default TextArea;
