import React from "react";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export default function Textarea({
  label,
  placeholder,
  value,
  onChange,
  required,
  rows = 4,
  ...rest
}: TextareaProps) {
  return (
    <label className="block">
      <span className="block text-sm font-semibold mb-2">{label}</span>
      <textarea
        rows={rows}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-3 bg-white/10 border border-white/15 rounded-xl placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 outline-none resize-none"
        {...rest}
      />
    </label>
  );
}
