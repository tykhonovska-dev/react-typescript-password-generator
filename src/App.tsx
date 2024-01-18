import { GeneratorProvider } from './Context';
import Password from "./components/Password/Password";
import PasswordSettings from "./components/PasswordSettings/PasswordSettings";
import 'react-notifications/lib/notifications.css';

function App() {
  return (
    <GeneratorProvider>
      <div className="w-screen h-screen flex justify-center items-center bg-neutral-900">
        <div className="min-w-80 p-5">
          <h1 className="mb-5 text-xl font-medium text-zinc-500 text-center tracking-widest">Password Generator</h1>
          <Password/>
          <PasswordSettings/>
        </div>
      </div>
    </GeneratorProvider>
  );
}

export default App;
