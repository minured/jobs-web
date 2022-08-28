import http from "@/utils/http";
import { Button } from 'antd-mobile';
import styles from './index.scss';



interface LoginPageProps {

}

const Login = (props: LoginPageProps) => {
  const handleLogin = () => {
    console.log('login');
    http.get('/').then(res => {
      console.log(res);
    }).catch(r => {
      console.log(r);
      
    })
  }
  return <div className={styles.loginPage}>
    <Button onClick={handleLogin}>登陆</Button>
  </div>
}

export default Login
