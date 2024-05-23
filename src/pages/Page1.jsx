import useToggle from "../hooks/useToggle";
import "../styles/Page1.css";
const Page1 = () => {
  const [isBoxVisible, toggleBoxVisibility] = useToggle();
  return (
    <div className="container">
      <h1>Question 1</h1>
      <button className="button" onClick={toggleBoxVisibility}>
        {isBoxVisible ? "Hide Box" : "Show Box"}
      </button>
      <div className="box-container">
        {isBoxVisible && <div className="box">Box Content</div>}
      </div>
    </div>
  );
};
export default Page1;
