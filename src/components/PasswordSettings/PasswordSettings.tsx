import { useContext } from "react";
import { GeneratorContext } from "../../Context";
import CheckboxSetting from "./components/CheckboxSetting";
import StrengthMeterSetting from "./components/StrengthMeterSetting";
import RangeSetting from "./components/RangeSetting";
import { FaChevronRight } from "react-icons/fa6";

function PasswordSettings(props) {
  const {
    generatePassword,
    includeUppercase,
    includeLowercase,
    includeNumbers,
    includeSymbols,
    onSettingsChange
  } = useContext(GeneratorContext);

  return (
    <div className="flex flex-col gap-y-7 p-4 bg-neutral-500 text-zinc-300 tracking-wide rounded-sm">
      <RangeSetting/>
      <div className="flex flex-col gap-y-1.5">
        <CheckboxSetting checked={includeUppercase}
                         onChange={() => onSettingsChange('uppercase')}
                         text="Include Uppercase Letters"/>
        <CheckboxSetting checked={includeLowercase}
                         onChange={() => onSettingsChange('lowercase')}
                         text="Include Lowercase Letters"/>
        <CheckboxSetting checked={includeNumbers}
                         onChange={() => onSettingsChange('numbers')}
                         text="Include Numbers"/>
        <CheckboxSetting checked={includeSymbols}
                         onChange={() => onSettingsChange('symbols')}
                         text="Include Symbols"/>
      </div>
      <StrengthMeterSetting/>
      <button onClick={generatePassword}
              className="flex justify-center items-center gap-x-3 p-2 bg-orange-500 text-lg text-white tracking-widest rounded-sm hover:drop-shadow-lg">
        Generate
        <FaChevronRight className="text-xs"/>
      </button>
    </div>
  );
}

export default PasswordSettings;