import ExportedImage from "next-image-export-optimizer";

const Icon = () => {
  return (
    <div>
      <ExportedImage
        src="/assets/icon/icon.svg"
        alt="Icon"
        width={64}
        height={64}
      />
    </div>
  );
};

export default Icon;
