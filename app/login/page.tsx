import dynamic from "next/dynamic";

const LoginPage = dynamic(() => import ('../login/loginPage'), {ssr:false});


export default function loginPage() {
  return (
    <div>
    <LoginPage />
    </div>
  );
}
