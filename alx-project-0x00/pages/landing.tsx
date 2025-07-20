import Button from "@/components/Button";
import Card from "@/components/Card";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className=" text-xl font-extralight">Landing Page</h1>
      <Card />
      <Button
        sizes="medium"
        shapes="rounded-md rounded-full rounded-sm rounded-lg"
        styles="${sizes} ${shapes}"
      />
    </div>
  );
};
export default Landing;
