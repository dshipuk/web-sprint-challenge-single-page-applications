import { Link } from "react-router-dom";
import "../styling/home.css";

const homeForm = () => {
  return (
    <div className="container">
      <form>
        <h1>Home Page</h1>
        <Link id="order-pizza" to="/pizza">
          <button>order now</button>
        </Link>
      </form>
    </div>
  );
};

export default homeForm;
