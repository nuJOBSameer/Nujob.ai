import { useState } from "react";

const LanguageSelector = () => {
  const [selected, setSelected] = useState("USA");

  const handleSelect = (value) => {
    setSelected(value);
    if (value === "NG") {
      window.location.href = "https://nujob.ai/ng/";
    } else if (value === "UAE") {
      window.location.href = "https://nujob.ai/ae/";
    }
  };

  return (
    <div className="relative">
      <select
        className="appearance-none bg-white border border-gray-300 rounded-full px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
        value={selected}
        onChange={(e) => handleSelect(e.target.value)}
      >
        <option value="USA">USA - EN</option>
        <option value="NG">NG - EN</option>
        <option value="UAE">UAE - EN</option>
      </select>
    </div>
  );
};

export default LanguageSelector;
