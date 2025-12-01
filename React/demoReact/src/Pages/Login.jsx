export default function Login() {
  const handleLogin = () => {
    localStorage.setItem("token", "abc123");
    window.location.href = "/dashboard";
  };

  return (
    <>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </>
  );
}