import React from "react";
interface CheckboxSettingProps {
  text: string,
  checked: boolean,
  onChange: () => void
}

const CheckboxSetting: React.FC<CheckboxSettingProps> = ({ text, checked, onChange }) => {
  return (
    <div className="flex gap-x-2.5 items-center">
      <input type="checkbox" checked={checked} onChange={onChange}/>
      <p>{text}</p>
    </div>
  );
}

export default CheckboxSetting;