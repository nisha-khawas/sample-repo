import { getAllUsers } from "../apis/users";
import "./common.css";

export default function Home(props) {
  const handleData = () => {
    getAllUsers().then((res) => {
      console.log(res);
      props.onHandleClick(res);
    });
  };

  return (
    <div>
      <span className="text-2xl text-red-400">HEllo</span>
      Hello,{props.name}
      <button
        id="btn"
        onClick={() => {
          console.log("Ram");
          props.onHandelClick();
          handleData();
        }}
      >
        Get Data
      </button>
    </div>
  );
}
