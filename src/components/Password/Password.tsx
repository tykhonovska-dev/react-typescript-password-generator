import { useContext } from "react";
import { GeneratorContext } from "../../Context";
import { FaRegCopy } from "react-icons/fa";

function Password(props) {
  const { password, onCopyToClipboard } = useContext(GeneratorContext);

  return (
    <div className="mb-5 flex justify-between items-center p-4 bg-neutral-500 rounded-sm">
      <p className="text-l font-bold text-neutral-700 tracking-wide">{password ? password : 'Generate first...'}</p>
      <button onClick={onCopyToClipboard}
              disabled={!password}
              className="text-orange-500 hover:drop-shadow-lg">
        <FaRegCopy className={password ? '' : 'opacity-50 cursor-not-allowed'}/>
      </button>
    </div>
  );
}

export default Password;