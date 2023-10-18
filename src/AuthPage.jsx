import axios from "axios";

const AuthPage = (props) => {
  const onSubmit = (e) => {
    e.preventDefault();
    const usernameValue = e.target.username.value;
    const passwordValue = e.target.password.value;

    axios
      .post("http://localhost:3001/authenticate", {
        username: usernameValue,
        password: passwordValue,
      })
      .then((r) => props.onAuth({ ...r.data, secret: passwordValue }))
      .catch((e) => console.log("error", e));
  };

  return (
    <div className="background">
      <form onSubmit={onSubmit} className="form-card">
        <div className="form-title">Welcome 👋</div>
        <div className="form-subtitle">Sign in to get started</div>
        <div className="auth">
          <div className="auth-section">
            <div className="auth-label">Username</div>
            <input className="auth-input" name="username" required />
          </div>
          <div className="auth-section">
            <div className="auth-label">Password</div>
            <input
              className="auth-input"
              name="password"
              type="password"
              required
            />
          </div>
          <button className="auth-button" type="submit">
            Enter
          </button>
        </div>
      </form>
    </div>
  );
};

export default AuthPage;

