import { useState } from "react";

const LanguageSelector = () => {
  const [selected, setSelected] = useState("USA");

  const handleSelect = (value) => {
    setSelected(value);
    let url = "";

    if (value === "NG") url = "https://nujob.ai/ng/";
    else if (value === "UAE") url = "https://nujob.ai/ae/";
    else if (value === "UA") url = "https://nujob.ai/ua/";
    else if (value === "SP") url = "https://nujob.ai/sp/";

    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
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
