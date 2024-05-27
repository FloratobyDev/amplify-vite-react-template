import { ChangeEvent, useRef, useState } from "react";
import Paragraph from "./Paragraph";
type Props = {
  onUpload: (file: File) => void;
  currentImage?: string | null;
};

function ImageUploadWCustomDropdown({ onUpload, currentImage }: Props) {
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onUpload(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  function handleClickInput() {
    inputRef.current?.click();
  }

  const imgUrl = imagePreviewUrl || currentImage;
  console.log("imgUrl", imagePreviewUrl, "cImage", currentImage);

  return (
    <div
      className="flex flex-col items-center justify-center aspect-square rounded-4 border border-primary border-dashed bg-secondary cursor-pointer relative"
      onClick={handleClickInput}
    >
      <input
        ref={inputRef}
        type="file"
        id="fileInput"
        className="absolute"
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
        alt="Image Upload"
      />
      {!imgUrl && <Paragraph bold>Upload Image</Paragraph>}
      {imgUrl && (
        <img
          src={imgUrl as string}
          alt="Image Preview"
          className="w-full h-full object-fill"
        />
      )}
    </div>
  );
}

export default ImageUploadWCustomDropdown;
