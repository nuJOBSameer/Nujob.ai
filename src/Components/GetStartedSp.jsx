import { useState } from "react";

const GetStartedSp = () => {
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
        style={{
          textAlign: "center",            // For Firefox
          textAlignLast: "center",        // For Chrome/Edge/Opera
          WebkitTextAlignLast: "center",  // For Safari
        }}
      >
        <option value="" disabled hidden>
          Comenzar</option>
        <option value="Rec">Para Reclutadores</option>
        <option value="Can">Para candidatos</option>
        <option value="Stu">Para estudiantes</option>
      </select>
    </div>
  );
};

export default GetStartedSp;
