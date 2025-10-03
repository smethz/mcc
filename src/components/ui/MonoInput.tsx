import React from "react";

interface MonoInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function MonoInput({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  required,
  ...rest
}: MonoInputProps) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold mb-2">{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none font-mono text-sm"
        {...rest}
      />
    </label>
  );
}
