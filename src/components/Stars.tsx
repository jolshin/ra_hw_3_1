import Star from "./Star";
import { StarsProps } from "../models/interfaces";

const Stars = ({ count }: StarsProps) => {
  return (
    <div className="container">
      <h2>Film's name goes here</h2>
      <Star count={count} />
    </div>
  );
};

export default Stars;
