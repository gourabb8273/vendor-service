import Image from "next/image"
import Upload from "../../public/images/upload.png";

const SecondStep = ({ style }: any) => {
  return (
    <div className={style["right-side"]}>
      <h3>Business Details</h3>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Business Email</label>
        <input
          type="email"
          className={style["form-control"]}
          placeholder="Enter Business Email"
        />
      </div>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Business Name</label>
            <input
              type="text"
              className={style["form-control"]}
              placeholder="Enter Business Name"
            />
          </div>
        </div>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Operating Since</label>
            <input
              type="text"
              className={style["form-control"]}
              placeholder="Enter Operating Since"
            />
          </div>
        </div>
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Business Website</label>
        <input
          type="text"
          className={style["form-control"]}
          placeholder="Enter Business Website"
        />
      </div>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Phone Number</label>
            <input
              type="text"
              className={style["form-control"]}
              placeholder="Enter Phone Number"
            />
          </div>
        </div>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Licensed / Certified</label>
            <select className={style["form-select"]}>
              <option value="">Select Service</option>
            </select>
          </div>
        </div>
      </div>
      <div className={"row"}>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Operating Hours From</label>
            <input
              type="text"
              className={style["form-control"]}
              placeholder="Enter Start Time"
            />
          </div>
        </div>
        <div className={"col-md-6"}>
          <div className={`${style["form-group"]} mb-4`}>
            <label>Operating Hours To</label>
            <input
              type="text"
              className={style["form-control"]}
              placeholder="Enter End Time"
            />
          </div>
        </div>
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Locally Owned</label>
        <select className={style["form-select"]}>
          <option value="">
            Select Is your Business Locally Owned or not
          </option>
        </select>
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>About Business</label>
        <textarea
          className={style["form-control"]}
          rows={3}
          placeholder="Describe about your Business"
        ></textarea>
      </div>
      <div className={`${style["form-group"]} mb-4`}>
        <label>Upload Logo</label>

        <div className={style["upload-images"]}>
          <h1>
            <Image alt="" src={Upload} /> Upload Logo
          </h1>
          <p>
            Image can be JPEG, JPG, PNG and cannot exceed 5MB.
          </p>
        </div>
      </div>
      <div className={style["form-group"]}>
        <button type="submit" className={style["login-btn"]}>
          Continue
        </button>
      </div>
    </div>
  )
}

export default SecondStep