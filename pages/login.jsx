import Swal from "sweetalert2";
import queries from "../data/queries";
import styles from "../styles/auth.module.scss";
import { useRouter } from "next/router";
import tokens from '../data/tokens';

const Login = () => {
  const router = useRouter();

  async function login() {
    const email = document.querySelector("#login-page #login-email")?.value;
    const password = document.querySelector("#login-page #login-password")?.value;
    queries.post('/auth/login', { email, password }).then(({data}) => {
      tokens.setTokens(data.tokens);
      router.push('/');
    }).catch(err => {
      console.error(err);
      Swal.fire('Помилка', "Невірна пошта або пароль", 'error');
    })
  }

  return (
    <div className={styles.auth__page} id="login-page">
      <div className={styles.auth__container}>
        <h1 className={styles.auth__title}>Login</h1>
        
        <p className={styles.auth__label}>Email</p>
        <input className={styles.auth__input} 
        type="text" id="login-email"/>

        <p className={styles.auth__label}>Password</p>
        <input className={styles.auth__input} 
        type="password" id="login-password"/>

        <div className={styles.auth__buttons}>
          <button className={styles.auth__button} 
          onClick={login}>Login</button>
        </div>
      </div>
    </div>
  );
}
  
export default Login;