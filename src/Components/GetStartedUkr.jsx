import { useState } from "react";

const GetStarted = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(""); // Reset dropdown back to "Get Started"
    let url = "";

    if (value === "Rec") url = "https://client.nujob.info/";
    else if (value === "Can") url = "https://candidate.nujob.info/";

    if (url) {
      window.location.href = url; // Open in same tab
    }
  };

  return (
    <div className="relative ">
      <select
        className="appearance-none text-wrap bg-black border rounded-full py-2 shadow-sm text-white text-center text-sm cursor-pointer"
        value={selected}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="" disabled hidden>
          Почати</option>
        <option value="Rec">Для рекрутерів</option>
        <option value="Can">Для пошукачів роботи</option>
        <option value="Can">Для студентів</option>
      </select>
    </div>
  );
};

export default GetStarted;
