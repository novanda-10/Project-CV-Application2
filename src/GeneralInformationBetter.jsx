import { useState } from "react";

export default function GeneralInformationBetter() {
  //or we can use a class and change its props by ...class  '''''
  const [infoClass, setInfoClass] = useState({
    fullname: "",
    email: "",
    PhoneNumber: "",
  });

  const [isButtonVisible, setButtonVisible] = useState(false);

  function handleSaveButton() {
    setInfoClass({
      ...infoClass,
      fullname: document.getElementById("fullName").value,
      email: document.getElementById("email").value,
      PhoneNumber: document.getElementById("PhoneNumber").value,
    });

    let isVsible;
    if (
      document.getElementById("fullName").value === "" &&
      document.getElementById("email").value === "" &&
      document.getElementById("PhoneNumber").value === ""
    ) {
      isVsible = false;
    } else {
      isVsible = true;
    }

    setButtonVisible(isVsible);
  }

  return (
    <>
      <div className="allcontent">
        <div className="fildes">
          <ul>
            <label htmlFor="fullName">Full name </label>
            <li>
              <input
                type="text"
                name="fullName"
                placeholder="enter fullName"
                id="fullName"
              />
            </li>
            <label htmlFor="email">Email </label>
            <li>
              <input
                type="email"
                name="email"
                placeholder="enter email"
                id="email"
              />
            </li>

            <label htmlFor="PhoneNumber">PhoneNumber </label>
            <li>
              <input
                type="text"
                name="PhoneNumber"
                placeholder="enter PhoneNumber"
                id="PhoneNumber"
              />
            </li>
          </ul>
        </div>

        {!isButtonVisible && <button onClick={handleSaveButton}>save</button>}
        {isButtonVisible && <button onClick={handleSaveButton}>edit</button>}
      </div>
      <div className="showInformation">
        <ul>
          <li> {infoClass.fullname}</li>
          <li> {infoClass.email}</li>
          <li> {infoClass.PhoneNumber}</li>
        </ul>
      </div>
    </>
  );
}
