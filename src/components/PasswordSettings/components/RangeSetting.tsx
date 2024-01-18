import { useContext } from "react";
import { GeneratorContext } from "../../../Context";

function RangeSetting(props) {
  const {length, setLength} = useContext(GeneratorContext);

  return (
    <div >
      <div className="mb-1 flex justify-between items-center">
        <p>Character length</p>
        <span className="text-xl text-orange-500 font-bold">{length}</span>
      </div>
      <input type="range" value={length} onChange={(e)=>setLength(Number(e.target.value))} max={30} className="w-full"/>
    </div>
  );
}

export default RangeSetting;