import "../styles/btn-styles.css";
const LogInLogOutBtn = ({ btnTitle, btnAction }) => {
  return (
    <button className="login-logout" onClick={() => btnAction()}>
      {btnTitle}
    </button>
  );
};
export default LogInLogOutBtn;
