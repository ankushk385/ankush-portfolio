import React, { useState } from "react";
function Page4() {
  const [fullName, setFullName] = useState({
    fName: "",
    email: "",
  });

  const typedValue = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    setFullName((previousValue) => {
      if (name === "fName") {
        return {
          fName: value,
          email: previousValue.email,
        };
      } else if (name === "email") {
        return { email: value, fName: previousValue.fName };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    console.log(fullName.fName);
    console.log(fullName.email);
  };

  return (
    <>
      <div className="page4" data-aos="slide-up">
        <div>
          <div className="form">
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name </label>
                <input
                  type="text"
                  className="form-control"
                  name="fName"
                  onChange={typedValue}
                  value={fullName.fName}
                />
              </div>
              <div className="mb-3">
                <label for="exampleInputEmail1" className="form-label">
                  Your Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={typedValue}
                  value={fullName.email}
                />
              </div>

              <div className="form-floating">
                <textarea
                  className="txtArea"
                  placeholder="Enter Your Message Here"
                  name="message"
                ></textarea>
              </div>
              <button type="submit" className="submitBtn">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
export default Page4;
