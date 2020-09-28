export default function Form() {
  return (
    <div className="signup__form">
      <h2>Sign up with your email and password</h2>
      <form>
        <input
          type="text"
          name="disiplayName"
          placeholder="Display Name"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="E-mail"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Confirm Password"
          required
        />
        <button type="submit">SIGN UP</button>
      </form>
    </div>
  );
}
