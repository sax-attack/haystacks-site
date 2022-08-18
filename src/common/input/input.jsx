import React  from "react";
import classNames from "classnames";
import "./input.css";

const Input = ({
  placeholder,
  className,
  error,
  ...rest
}) => {
  return (
    <div className={classNames(["input", className])}>
      <input
        {...rest}
        placeholder={placeholder}
        className={classNames([
          "input-bg text-black w-full py-5 px-6 appearance-none border-0 outline-0 border-b",
          !!error && "input_invalid",
        ])}
      />

      <p className="text-sm absolute text-rose-500 mt-1">{error}</p>
    </div>
  );
};

export { Input };
