import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

const MeetupItem = (props) => {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={props.image}></img>
        </div>
        <div className={classes.content}>
          <h3>{props.title}</h3>
          <address>{props.Address}</address>
          <p>{props.description}</p>
        </div>
        <div className={classes.actions}>
          <button className={classes.button}>To favourites</button>
        </div>
      </Card>
    </li>
  );
};
export default MeetupItem;
