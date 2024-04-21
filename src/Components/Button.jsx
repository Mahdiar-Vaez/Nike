import React from "react";

export default function Button({
  label,
  iconUrl,
  backgroundColor,
  textColor,
  borderColor,
}) {
  return (
    <button
      className={`border rounded-full flex justify-center items-center gap-2 px-7 py-4 text-lg leading-none ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor} `
          : " bg-coral-red text-white "
      }`}
    >
      {label}
      {iconUrl && (
        <img
          className="ml-2 rounded-full w-5 h-5"
          src={iconUrl}
          alt="arrow right icon"
        />
      )}
    </button>
  );
}
