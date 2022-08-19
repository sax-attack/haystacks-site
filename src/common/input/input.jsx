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
          "relative input-bg text-black w-full py-5 font-extralight px-6 appearance-none border-0 outline-0 border-b",
          !!error && "input__error",
        ])}
      />

      <p className="error-text absolute text-sm text-danger mt-1">{error}</p>
    </div>
  );
};

export { Input };
