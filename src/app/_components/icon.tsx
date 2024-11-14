import { BASE_PATH } from "@/lib/constants";
import ExportedImage from "next-image-export-optimizer";

const Icon = () => {
  return (
    <div>
      <ExportedImage
        src={`${BASE_PATH}/assets/icon/icon.svg`}
        alt="Icon"
        width={64}
        height={64}
      />
    </div>
  );
};

export default Icon;
