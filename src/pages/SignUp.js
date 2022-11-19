const SignUp = () => {
  return (
    <>
      <div className="signup">
        <h1>Sign Up</h1>
        <section>
          <form>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    </>
  );
};

export default SignUp;
