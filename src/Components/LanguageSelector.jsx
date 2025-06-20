import { useState } from "react";

const LanguageSelector = () => {
  const getCountryFromURL = () => {
  const path = window.location.pathname.toLowerCase();
  if (path.startsWith("/ng")) return "NG";
  if (path.startsWith("/ae")) return "UAE";
  if (path.startsWith("/ua")) return "UA";
  if (path.startsWith("/sp")) return "SP";
  return "USA";
};

const [selected, setSelected] = useState(getCountryFromURL());
const SpanishSpeakingCountries = [
  "AR", // Argentina
  "BO", // Bolivia
  "CL", // Chile
  "CO", // Colombia
  "CR", // Costa Rica
  "CU", // Cuba
  "DO", // Dominican Republic
  "EC", // Ecuador
  "SV", // El Salvador
  "GQ", // Equatorial Guinea
  "GT", // Guatemala
  "HN", // Honduras
  "MX", // Mexico
  "NI", // Nicaragua
  "PA", // Panama
  "PY", // Paraguay
  "PE", // Peru
  "ES", // Spain
  "UY", // Uruguay
  "VE"  // Venezuela
];

  const handleSelect = (value) => {
  let url = "";

  if (value === "NG") url = "https://nujob.ai/ng/";
  else if (value === "UAE") url = "https://nujob.ai/ae/";
  else if (value === "UA") url = "https://nujob.ai/ua/";
  else if (SpanishSpeakingCountries.includes(value)) url = "https://nujob.ai/sp/";
  else if (value === "USA") url = "https://nujob.ai/";

  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
    setSelected(value); // Update after open
  }
};


  return (
    <div className="relative">
      <select
        className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm cursor-pointer"
        value={selected}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="USA">USA - EN</option>
        <option value="NG">NG - EN</option>
        <option value="UAE">UAE - EN</option>
        <option value="UA">UA - Ukrainian</option>
        <option value="SP">SP - Spanish</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
