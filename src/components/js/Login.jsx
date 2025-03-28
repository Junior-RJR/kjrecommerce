"use client"

import { useState } from "react"
import "../css/Login.css"

function Login() {
  const [activeTab, setActiveTab] = useState("login")
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  })
  const [registerData, setRegisterData] = useState({
    email: "",
    username: "",
    phone: "",
    password: "",
    confirmPassword: "",
  })
  const [errors, setErrors] = useState({})
  const [successMessage, setSuccessMessage] = useState("")

  const handleLoginChange = (e) => {
    const { name, value } = e.target
    setLoginData({
      ...loginData,
      [name]: value,
    })
  }

  const handleRegisterChange = (e) => {
    const { name, value } = e.target
    setRegisterData({
      ...registerData,
      [name]: value,
    })
  }

  const validateLogin = () => {
    const newErrors = {}

    if (!loginData.email) {
      newErrors.loginEmail = "Email é obrigatório"
    }

    if (!loginData.password) {
      newErrors.loginPassword = "Senha é obrigatória"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const validateRegister = () => {
    const newErrors = {}

    if (!registerData.email) {
      newErrors.registerEmail = "Email é obrigatório"
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      newErrors.registerEmail = "Email inválido"
    }

    if (!registerData.username) {
      newErrors.registerUsername = "Nome de usuário é obrigatório"
    }

    if (!registerData.phone) {
      newErrors.registerPhone = "Telefone é obrigatório"
    }

    if (!registerData.password) {
      newErrors.registerPassword = "Senha é obrigatória"
    } else if (registerData.password.length < 6) {
      newErrors.registerPassword = "A senha deve ter pelo menos 6 caracteres"
    }

    if (registerData.password !== registerData.confirmPassword) {
      newErrors.registerConfirmPassword = "As senhas não coincidem"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault()

    if (validateLogin()) {
      console.log("Login data:", loginData)
      setSuccessMessage("Login realizado com sucesso!")

      setTimeout(() => {
        setSuccessMessage("")
      }, 3000)
    }
  }

  const handleRegisterSubmit = (e) => {
    e.preventDefault()

    if (validateRegister()) {
      console.log("Register data:", registerData)
      setSuccessMessage("Cadastro realizado com sucesso!")

      setRegisterData({
        email: "",
        username: "",
        phone: "",
        password: "",
        confirmPassword: "",
      })

      setTimeout(() => {
        setActiveTab("login")
        setSuccessMessage("")
      }, 2000)
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-tabs">
          <button
            className={`tab-button ${activeTab === "login" ? "active" : ""}`}
            onClick={() => setActiveTab("login")}
          >
            Entrar
          </button>
          <button
            className={`tab-button ${activeTab === "register" ? "active" : ""}`}
            onClick={() => setActiveTab("register")}
          >
            Cadastrar
          </button>
        </div>

        {successMessage && <div className="success-message">{successMessage}</div>}

        {activeTab === "login" ? (
          <form className="login-form" onSubmit={handleLoginSubmit}>
            <div className="form-group">
              <label htmlFor="login-email">Email ou Usuário</label>
              <input
                type="text"
                id="login-email"
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                className={errors.loginEmail ? "error" : ""}
              />
              {errors.loginEmail && <span className="error-message">{errors.loginEmail}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="login-password">Senha</label>
              <input
                type="password"
                id="login-password"
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                className={errors.loginPassword ? "error" : ""}
              />
              {errors.loginPassword && <span className="error-message">{errors.loginPassword}</span>}
            </div>

            <div className="form-options">
              <label className="remember-me">
                <input type="checkbox" /> Lembrar-me
              </label>
              <a href="#" className="forgot-password">
                Esqueceu a senha?
              </a>
            </div>

            <button type="submit" className="submit-button">
              Entrar
            </button>
          </form>
        ) : (
          <form className="register-form" onSubmit={handleRegisterSubmit}>
            <div className="form-group">
              <label htmlFor="register-email">Email</label>
              <input
                type="email"
                id="register-email"
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                className={errors.registerEmail ? "error" : ""}
              />
              {errors.registerEmail && <span className="error-message">{errors.registerEmail}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="register-username">Nome de Usuário</label>
              <input
                type="text"
                id="register-username"
                name="username"
                value={registerData.username}
                onChange={handleRegisterChange}
                className={errors.registerUsername ? "error" : ""}
              />
              {errors.registerUsername && <span className="error-message">{errors.registerUsername}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="register-phone">Telefone</label>
              <input
                type="tel"
                id="register-phone"
                name="phone"
                value={registerData.phone}
                onChange={handleRegisterChange}
                className={errors.registerPhone ? "error" : ""}
              />
              {errors.registerPhone && <span className="error-message">{errors.registerPhone}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="register-password">Senha</label>
              <input
                type="password"
                id="register-password"
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                className={errors.registerPassword ? "error" : ""}
              />
              {errors.registerPassword && <span className="error-message">{errors.registerPassword}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="register-confirm-password">Confirmar Senha</label>
              <input
                type="password"
                id="register-confirm-password"
                name="confirmPassword"
                value={registerData.confirmPassword}
                onChange={handleRegisterChange}
                className={errors.registerConfirmPassword ? "error" : ""}
              />
              {errors.registerConfirmPassword && (
                <span className="error-message">{errors.registerConfirmPassword}</span>
              )}
            </div>

            <div className="form-options">
              <label className="terms-conditions">
                <input type="checkbox" required /> Concordo com os <a href="#">Termos e Condições</a>
              </label>
            </div>

            <button type="submit" className="submit-button">
              Cadastrar
            </button>
          </form>
        )}

        <div className="social-login">
          <p>Ou entre com</p>
          <div className="social-buttons">
            <button className="social-button facebook">Facebook</button>
            <button className="social-button google">Google</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

