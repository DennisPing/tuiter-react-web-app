import TuitList from "../tuits";
import WhatsHappening from "./whats-happening";

const HomeComponent = () => {
  return (
    <>
      <div className="list-group rounded-4">
        <WhatsHappening />
        <TuitList />
      </div>
    </>
  );
};
export default HomeComponent;
