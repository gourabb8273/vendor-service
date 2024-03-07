const FirstStep = ({ style }: any) => {
  return (
    <div className={style["right-side"]}>
      <h3>Create Account</h3>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Mobile Number / Email Address</label>
        <input
          type="email"
          className={style["form-control"]}
          placeholder="Enter Mobile Number / Email"
        />
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Create Password</label>
        <input
          type="email"
          className={style["form-control"]}
          placeholder="Enter Password"
        />
      </div>
      <div className={"form-check"}>
        <input
          className={"form-check-input"}
          type="checkbox"
          value=""
        />
        <label className={"form-check-label"}>
          I accept the{" "}
          <a href="#" className={style.arr}>
            Terms & Conditions
          </a>{" "}
          of XYZ Platform
        </label>
      </div>
      <div className={style["form-group"]}>
        <button type="submit" className={style["login-btn"]}>
          Create Account
        </button>
      </div>
    </div>
  )
}

export default FirstStep