import { IconProps } from "@/components/svgs/Icon.type";

const FlutterIcon = ({ color, size }: IconProps) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
    >
      <title>Flutter</title>
      <path
        fill={color}
        d="M14.314 0L2.3 12 6 15.7 21.684.013h-7.357zm.014 11.072L7.857 17.53l6.47 6.47H21.7l-6.46-6.468 6.46-6.46h-7.37z"
      />
    </svg>
  );
};

export default FlutterIcon;
