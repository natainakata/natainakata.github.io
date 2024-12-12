import { BASE_PATH } from "@/lib/constants";
import ExportedImage from "next-image-export-optimizer";
type Props = {
  ns: string;
  name: string;
  size: number;
  isRounded: boolean;
}

const Icon = (props: Props) => {
  return (
    <div>
      <ExportedImage
        className={`${props.isRounded ? "rounded-full" : ""}`}
        src={`${BASE_PATH}/assets/${props.ns}/${props.name}`}
        alt={props.name}
        width={props.size}
        height={props.size}
      />
    </div>
  );
};

export default Icon;
