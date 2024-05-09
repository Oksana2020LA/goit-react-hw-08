import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import { Link } from "react-router-dom";
import css from "./Home.module.css";

const Home = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.mainBlock}>
      <p className={css.text}>
       Wellcome to you PhoneBook! <br/> This is the place where you can easily manage your contacts.
      </p>
      {!isLoggedIn && (
        <p className={css.textLast}>
          If you want to see a your phone numbers, please to{" "}
          <Link className={css.link} to="/register">
            Register
          </Link>{" "}
          or{" "}
          <Link className={css.link} to="/login">
            Login
          </Link>{" "}
          in this application.
        </p>
      )}
    </div>
  );
};

export default Home;