import { useState } from "react";

const GetStarted = () => {
  const [selected, setSelected] = useState("");

  const handleSelect = (value) => {
    setSelected(""); // Reset dropdown back to "Get Started"
    let url = "";

    if (value === "Rec") url = "https://candidate.nujob.info";
    else if (value === "Can") url = "https://candidate.nujob.ai/";
    else if (value === "Stu") url = "https://candidate.nujob.ai/";

    if (url) {
      window.location.href = url; // Open in same tab
    }
  };

  return (
    <div className="relative ">
      <select
        className="appearance-none bg-black border rounded-full px-2 py-2 shadow-sm text-white text-center text-sm cursor-pointer"
        value={selected}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="" disabled hidden>
          Get Started</option>
        <option value="Rec">For Recruiter</option>
        <option value="Can">For Job-seekers</option>
        <option value="Stu">For Students</option>
      </select>
    </div>
  );
};

export default GetStarted;
