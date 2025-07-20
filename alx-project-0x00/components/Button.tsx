import { ButtonProps } from "@/interfaces";
const Button: React.FC<ButtonProps> = ({ sizes, shapes }) => {
  return (
    <button
      className={`px-4 py-2 text-white ${sizes} ${shapes} bg-blue-500 hover:bg-blue-700 rounded`}
    >
      Click Me
    </button>
  );
};
export default Button;
