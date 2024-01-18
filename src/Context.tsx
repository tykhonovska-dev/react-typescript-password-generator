import React, { createContext, useEffect, useState } from "react";
import { NotificationManager } from "react-notifications";

interface GeneratorProviderProps {
  children: React.ReactNode,
}

interface GeneratorContextValue {
  password: string,
  generatePassword: () => void,
  onCopyToClipboard: () => void,
  length: number,
  setLength: (number) => void,
  includeUppercase: boolean,
  includeLowercase: boolean,
  includeNumbers: boolean,
  includeSymbols: boolean,
  onSettingsChange: (type: string) => void,
  strengthCount: number
}

export const GeneratorContext = createContext<GeneratorContextValue>({} as GeneratorContextValue);

export const GeneratorProvider: React.FC<GeneratorProviderProps> = ({ children }) => {
  const [password, setPassword] = useState('');
  const [length, setLength] = useState(0);
  const [includeUppercase, setIncludeUppercase] = useState(false);
  const [includeLowercase, setIncludeLowercase] = useState(false);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [strengthCount, setStrengthCount] = useState(0);

  const onSettingsChange = (type) => {
    if (type === 'uppercase') {
      setIncludeUppercase(!includeUppercase);
    }
    if (type === 'lowercase') {
      setIncludeLowercase(!includeLowercase);
    }
    if (type === 'numbers') {
      setIncludeNumbers(!includeNumbers);
    }
    if (type === 'symbols') {
      setIncludeSymbols(!includeSymbols);
    }
  }


  useEffect(() => {
    const calculateStrength = () => {
      const selectedOptions = [includeUppercase, includeLowercase, includeNumbers, includeSymbols];

      let count = 0;
      selectedOptions.forEach(option => option ? count++ : count);

      setStrengthCount(count);
    };

    calculateStrength();
  }, [includeUppercase, includeLowercase, includeNumbers, includeSymbols]);

  const generatePassword = () => {
    if (length === 0) {
      NotificationManager.error('Set the length');
      return;
    }

    if (strengthCount === 0) {
      NotificationManager.error('Choose password options');
      return;
    }

    const characters = [
      includeUppercase ? 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' : '',
      includeLowercase ? 'abcdefghijklmnopqrstuvwxyz' : '',
      includeNumbers ? '0123456789' : '',
      includeSymbols ? '!@#$%^&*()_+' : '',
    ].join('');

    let newPassword = '';

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      newPassword += characters.charAt(randomIndex);
    }

    setPassword(newPassword);
  }

  const onCopyToClipboard = async () => {
    try {
      if (password) {
        await navigator.clipboard.writeText(password);
        NotificationManager.success('Copied to clipboard');
      }
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  }

  return (
    <GeneratorContext.Provider value={{
      password,
      generatePassword,
      onCopyToClipboard,
      length,
      setLength,
      includeUppercase,
      includeLowercase,
      includeNumbers,
      includeSymbols,
      onSettingsChange,
      strengthCount
    }}>
      {children}
    </GeneratorContext.Provider>
  )
}