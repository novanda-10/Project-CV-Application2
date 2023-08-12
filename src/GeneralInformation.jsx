import { useState } from "react";

export default function GeneralInformation() {
  //or we can use a class and change its props by ...class  '''''
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [PhoneNumber, setPhoneNumber] = useState("");

  function handleSaveButton() {
    setFullname(document.getElementById("fullName").value);
    setEmail(document.getElementById("email").value);
    setPhoneNumber(document.getElementById("PhoneNumber").value);
  }
  return (
    <>
      <label htmlFor="fullName">Full name </label>
      <input
        type="text"
        name="fullName"
        placeholder="enter fullName"
        id="fullName"
      />
      <label htmlFor="email">Email </label>
      <input type="email" name="email" placeholder="enter email" id="email" />

      <label htmlFor="PhoneNumber">PhoneNumber </label>
      <input
        type="text"
        name="PhoneNumber"
        placeholder="enter PhoneNumber"
        id="PhoneNumber"
      />

      <button onClick={handleSaveButton}>save</button>

      <div className="showInformation">
        {fullname}
        {email}
        {PhoneNumber}
      </div>
    </>
  );
}
