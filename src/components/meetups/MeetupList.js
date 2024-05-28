import classes from "./MeetupList.module.css";
import MeetupItem from "./MeetupItem";

function MeetupList(props) {
  return (
    <ul className={classes.list}>
      {props.items.map((item) => {
        return <MeetupItem key={item.id} {...item} />;
      })}
    </ul>
  );
}
export default MeetupList;
