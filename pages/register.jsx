import Swal from "sweetalert2";
import queries from "../data/queries";
import styles from "../styles/auth.module.scss";
import { useRouter } from "next/router";
import tokens from '../data/tokens';

const Register = () => {
  const router = useRouter();

  async function register() {
    const name = document.querySelector("#register-name")?.value;
    const email = document.querySelector("#register-email")?.value;
    const phone = document.querySelector("#register-phone")?.value;
    const password = document.querySelector("#register-password")?.value;
    const repeat_password = document.querySelector("#register-password2")?.value;
    if (repeat_password !== password) {
      Swal.fire('Помилка', "Паролі не співпадають", 'error');
      return;
    }
    queries.post('/auth/register', { 
      name, email, phone, password 
    }).then(({data}) => {
      tokens.setTokens(data.tokens);
      router.push('/');
    }).catch(err => {
      if (err?.response?.data?.status === 405) {
        Swal.fire('Помилка', "Така пошта вже існує", 'error');
      } else {
        Swal.fire('Помилка', undefined, 'error');
        console.error(err);
      }
    })
  }

  return (
    <div className={styles.auth__page} id="register-page">
      <div className={styles.auth__container}>
        <h1 className={styles.auth__title}>Register</h1>

        <p className={styles.auth__label}>ПІБ</p>
        <input className={styles.auth__input} 
        type="text" id="register-name"/>

        <p className={styles.auth__label}>Email</p>
        <input className={styles.auth__input} 
        type="text" id="register-email"/>

        <p className={styles.auth__label}>Phone (необов'язково)</p>
        <input className={styles.auth__input} 
        type="text" id="register-phone"/>

        <p className={styles.auth__label}>Password</p>
        <input className={styles.auth__input} 
        type="password" id="register-password"/>

        <p className={styles.auth__label}>Repeat password</p>
        <input className={styles.auth__input} 
        type="password" id="register-password2"/>

        <div className={styles.auth__buttons}>
          <button className={styles.auth__button} 
          onClick={register}>Register</button>
        </div>
      </div>
    </div>
  );
}
  
export default Register;