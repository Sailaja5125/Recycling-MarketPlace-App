import React, { useState, useEffect } from "react";
import { appwriteService } from "../../Appwrite/app_write";
import { useNavigate } from "react-router-dom";

function Otp() {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [email, setEmail] = useState("");

  useEffect(() => {
    const fetchCurrentUser = async () => {
      const user = await appwriteService.getCurrentUser();
      if (user) {
        setEmail(user.email);
      }
    };

    fetchCurrentUser();
  }, []);

  const sendOtp = async (otpValue) => {
    try {
      const url = "http://localhost:8800/api/user/update";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          email: email,
        },
        body: JSON.stringify({ requiredOtp: otpValue }),
      });
      const data = await response.json();
      if (data) {
        console.log("Verified Successfully");
        console.log(data);
      }
    } catch (error) {
      console.log("Couldn't send OTP", error);
    }
  };

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      const nextInput = document.getElementById(`otp-input-${index + 1}`);
      if (nextInput) {
        nextInput.focus();
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpValue = otp.join("");
    console.log(otpValue);
    sendOtp(otpValue);
    navigate("/main");
  };

  return (
    <div className="flex justify-center items-center w-screen h-1/2 p-6 m-6">
      <div className="[--shadow:rgba(60,64,67,0.3)_0_1px_2px_0,rgba(60,64,67,0.15)_0_2px_6px_2px] w-4/5 max-w-xs h-auto space-y-4">
        <div className="flex flex-col items-center justify-center relative rounded-xl p-4 bg-white [box-shadow:var(--shadow)] overflow-hidden">
          <h6 className="text-2xl font-bold">OTP Verification</h6>

          <div className="my-6 w-full grid grid-flow-col grid-cols-6 items-center justify-center justify-items-center">
            {otp.map((value, index) => (
              <input
                key={index}
                id={`otp-input-${index}`}
                className="aria-[disabled='true']:cursor-not-allowed aria-[disabled='true']:opacity-50 block focus:placeholder:opacity-0 placeholder:text-muted-foreground/80 placeholder:text-[24px] text-[20px] leading-[20px] font-bold text-center h-10 w-10 max-w-full rounded-md p-0 border border-input bg-white [box-shadow:var(--shadow)] transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-0 focus-visible:border-transparent focus-visible:ring-2 focus-visible:ring-c1 focus-visible:ring-offset-0 placeholder:select-none"
                spellCheck="false"
                autoComplete="one-time-code"
                placeholder="○"
                aria-invalid="false"
                type="tel"
                aria-disabled="false"
                inputMode="numeric"
                value={value}
                onChange={(e) => handleChange(e, index)}
                maxLength="1"
              />
            ))}
          </div>

          <span className="text-zinc-500 text-[12px] text-center">
            Please enter the 6-digit one-time password (OTP) that we sent to
            your registered email
          </span>

          <div>
            <button
              type="button"
              className="mt-[14px] text-base text-white font-medium tracking-wider rounded-md w-full px-4 py-1 transition-colors duration-200 border border-solid border-transparent bg-c1 hover:bg-c1/80"
              onClick={handleSubmit}
            >
              Verify
            </button>
            <button
              type="button"
              className="mt-[14px] text-base text-c1 font-medium tracking-wider rounded-md w-full px-4 py-1 transition-colors duration-200 border border-solid border-c1 hover:bg-c1/80 hover:text-white"
            >
              Resend
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Otp;
