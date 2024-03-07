import React, { useState } from "react";
import style from "./create.module.scss";
import Image from "next/image";
import Base from "@/template/base";
import { Steps } from "antd";
import Wizard from "@/shared/wizard";
import FirstStep from "./First";
import SecondStep from "./Second";
import ThirdStep from "./Third";
import FourthStep from "./Fourth";
import FifthStep from "./Fifth";

const STEPS = [
  {
    title: "Create Account",
    description: "Please provide your name, email and address",
  },
  {
    title: "Business Details",
    description:
      "If you have experience than please share your details",
  },
  {
    title: "Vendor Details",
    description:
      "If you have experience than please share your details",
  },
  {
    title: "Photo Upload",
    description:
      "If you have experience than please share your details",
  },
  {
    title: "Add Socials",
    description:
      "If you have experience than please share your details",
  },
];

const Register = () => {
  const [current, setCurrent] = useState(0);

  const onChange = (value: any) => {
    setCurrent(value);
  };

  return (
    <Base hideFooter isNeedHelp>
      <div className="registration">
        <div className="registration-steps">
          <h1>Vendor Registration</h1>

          <Steps
            current={current}
            onChange={onChange}
            direction="vertical"
            items={STEPS}
          />
        </div>
        <div className="registration-content px-5">
          {current === 0 && <FirstStep style={style} />}
          {current === 1 && <SecondStep style={style} />}
          {current === 2 && <ThirdStep style={style} />}
          {current === 3 && <FourthStep style={style} />}
          {current === 4 && <FifthStep style={style} />}

        </div>
      </div>
    </Base>
  );
};

export default Register;
