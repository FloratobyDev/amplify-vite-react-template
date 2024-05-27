import { useNavigate } from "react-router-dom";
import BrandLogo from "../logos/BrandLogo";

function Brand() {
  const navigate = useNavigate();
  return (
    <div className="flex gap-x-2 items-center cursor-pointer" onClick={() => navigate("/")}>
      <BrandLogo />
      <h1 className="font-poppins font-regular text-20 text-primary">
        Culture
      </h1>
    </div>
  );
}

export default Brand;
