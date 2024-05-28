import NewMeetupForm from "../components/meetups/NewMeetupForm";

function NewMeetUpPage() {
  function addMeetupHandler(meeetUpData) {
    fetch();
  }

  return (
    <div>
      <h1>New MeetUpPage </h1>
      <NewMeetupForm onAddMeetUp={addMeetupHandler} />
    </div>
  );
}
export default NewMeetUpPage;
