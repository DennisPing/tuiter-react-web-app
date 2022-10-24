import { useSelector } from "redux-react";

const HelloReduxExampleComponent = () => {
  const message = useSelector((hello) => hello.message);
  return <h3>{message}</h3>;
};
export default HelloReduxExampleComponent;
