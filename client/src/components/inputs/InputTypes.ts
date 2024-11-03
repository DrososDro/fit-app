import { UseFormRegisterReturn } from "react-hook-form";

export interface InputTypes {
  name: string;
  register: UseFormRegisterReturn;
  type: "text" | "password";
  placeholder: string;
  required?: boolean;
  error?: string;
}
