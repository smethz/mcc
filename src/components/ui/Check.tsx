import React, { type ChangeEvent } from "react";

interface CheckProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  checked: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function Check({
  label,
  checked,
  onChange,
  ...rest
}: CheckProps) {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="w-5 h-5 rounded border-white/20 bg-white/10 focus:ring-2 focus:ring-purple-500"
        {...rest}
      />
      <span>{label}</span>
    </label>
  );
}
