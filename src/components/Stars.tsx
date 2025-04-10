import Star from "./Star";
import { StarsProps } from "../models/interfaces";

const Stars = ({ count }: StarsProps) => {
  if (count > 0 && count < 6) {
    return (
      <div className="container">
        <h2>Film's name goes here</h2>
        <ul className="card-body-stars u-clearfix">
          {new Array(count).fill("").map((_, index) => (
            <li key={index}>
              <Star />
            </li>
          ))}
        </ul>
      </div>
    );
  }
};

export default Stars;
