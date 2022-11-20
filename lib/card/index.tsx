import { CardI } from "../types/card";
import classes from "./card.module.css";

const Card: React.FC<CardI> = ({ children, style }) => {
  return (
    <div className={classes.card} style={style}>
      {children}
    </div>
  );
};

export default Card;
