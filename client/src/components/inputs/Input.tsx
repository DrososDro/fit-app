import { InputTypes } from "./InputTypes";

export default function Input({
  name,
  register,
  type,
  placeholder,
  error,
  required = true,
}: InputTypes) {
  return (
    <div className="group relative z-0 w-full py-4">
      <input
        {...register}
        type={type}
        name={name}
        id={name}
        className="peer block w-full appearance-none border-0 border-b-2 border-neutral-500 bg-transparent text-lg focus:border-blue-500 focus:outline-none focus:ring-0"
        placeholder=""
        required={required}
      />
      <label
        htmlFor={name}
        className="text-md absolute top-2 -z-10 origin-[0] -translate-y-4 scale-75 transform uppercase duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:start-0 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-medium peer-focus:text-blue-600 rtl:peer-focus:translate-x-1/4"
      >
        {placeholder}
      </label>
      {error && (
        <p className="text-wrap whitespace-pre-line py-2 text-sm font-semibold capitalize text-red-700">
          {error}
        </p>
      )}
    </div>
  );
}
