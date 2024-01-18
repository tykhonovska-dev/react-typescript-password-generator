import { useContext } from "react";
import { GeneratorContext } from "../../../Context";

function StrengthMeterSetting(props) {
  const { strengthCount } = useContext(GeneratorContext);

  return (
    <div className="flex justify-between items-center">
      <p className="font-bold tracking-widest">STRENGTH</p>
      <div className="flex gap-x-1">
        <div className={`w-2 h-3.5 ${strengthCount >= 1 ? 'bg-green-500' : 'bg-zinc-300'} cursor-pointer`}/>
        <div className={`w-2 h-3.5 ${strengthCount >= 2 ? 'bg-yellow-500' : 'bg-zinc-300'} cursor-pointer`}/>
        <div className={`w-2 h-3.5 ${strengthCount >= 3 ? 'bg-orange-500' : 'bg-zinc-300'} cursor-pointer`}/>
        <div className={`w-2 h-3.5 ${strengthCount >= 4 ? 'bg-red-500' : 'bg-zinc-300'} cursor-pointer`}/>
      </div>
    </div>
  );
}

export default StrengthMeterSetting;