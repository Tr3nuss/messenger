import "../styles/Login.css";
import registerImage from "../assets/images/registerImage.jpg";
import { TextField, Checkbox, Button } from "@mui/material";

export default function Login() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="login-field">
            <header className="header">
              <div className="header-img">
                <img src={registerImage} alt="registerimg" />
              </div>
              <div className="header-title">
                <span>Вход в Allah.cc</span>
                <p>
                  Ещё нет аккаунта? <a href="#">Регистрация</a>
                </p>
              </div>

              <form
                action="http://localhost:4200/"
                method="post"
                className="input-field"
              >
                <TextField
                  size="small"
                  label="Логин"
                  placeholder="Логин"
                  variant="outlined"
                  type="text"
                  className="text-field"
                />

                <TextField
                  size="small"
                  label="Пароль"
                  placeholder="Пароль"
                  variant="outlined"
                  type="password"
                  className="text-field"
                />

                <div className="input-accept-rules">
                  <Checkbox size="small" />
                  <p className="checkbox-text">Оставаться в системе</p>
                  <a>Забыли пароль?</a>
                </div>

                <Button
                  sx={{
                    background: "#7c2d12",
                    height: "44px",
                    width: "320px",
                    borderRadius: "0.375rem",
                    color: "rgba(203, 213, 225, 1)",
                    textTransform: "none",
                    border: "1px solid #E6563D",
                    "&:hover": { background: "#E6563D" },
                  }}
                  variant="contained"
                >
                  Войти
                </Button>
              </form>
            </header>
          </div>
        </div>
      </div>
    </>
  );
}
