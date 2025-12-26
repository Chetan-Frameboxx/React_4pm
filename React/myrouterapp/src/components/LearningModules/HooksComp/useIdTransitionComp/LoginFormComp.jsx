import { useId } from "react";

function LoginFormComp() {
  const usernameId = useId();
  const passwordId = useId();
  console.log(usernameId);
  console.log(passwordId);
  

  return (
    <form>
      <div>
        <label htmlFor={usernameId}>Username</label>
        <input id={usernameId} type="text" />
      </div>

      <div>
        <label htmlFor={passwordId}>Password</label>
        <input id={passwordId} type="password" />
      </div>
    </form>
  );
}

export default LoginFormComp;