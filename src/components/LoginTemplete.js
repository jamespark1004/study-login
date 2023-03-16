import "./LoginTemplete.scss";

const LoginTemplete = ({ children }) => {
  return (
    <div className="LoginTemplete">
      <div className="app-title">로그인 페이지</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default LoginTemplete;
