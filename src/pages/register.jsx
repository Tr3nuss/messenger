import "../styles/Register.css";
import registerImage from "../assets/images/registerImage.jpg";
import { TextField, Checkbox, Button } from "@mui/material";

export default function Register() {
  return (
    <>
      <div className="container">
        <div className="wrapper">
          <div className="register-field">
            <header className="header">
              <div className="header-img">
                <img src={registerImage} alt="registerimg" />
              </div>
              <div className="header-title">
                <h1>Регистрация</h1>
                <p>
                  Уже зарегистрированы? <a href="#">Войти</a> в аккаунт
                </p>
              </div>
            </header>

            <form
              action="http://localhost:4200/"
              method="post"
              className="input-field"
            >

              
              <TextField
                size="small"
                label="Отображаемое имя"
                placeholder="Отображаемое имя"
                variant="outlined"
                type="text"
                className="text-field"
              />
              <TextField
                size="small"
                label="Логин"
                variant="outlined"
                type="text"
                className="text-field"
              />
              <TextField
                size="small"
                label="Пароль"
                variant="outlined"
                type="password"
                className="text-field"
              />
              <TextField
                size="small"
                label="Подтверждение пароля"
                variant="outlined"
                type="password"
                className="text-field"
              />

              <div className="input-accept-rules">
                <Checkbox
                  sx={{
                    border: "none",
                    borderRadius: "0.25rem",
                    textAlign: "none",
                    alignItems: "none",
                  }}
                />
                <p>
                  Согласие с <a>правилами ресурса</a>
                </p>
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
                Создать аккаунт
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
