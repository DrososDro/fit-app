import { useForm } from "react-hook-form";
import Input from "../../../components/inputs/Input";
import { LoginType, RegisterType } from "../types/authTypes";
import { emailValidaitor } from "../../../utils/regExp";
import { useMutation } from "@tanstack/react-query";
import { loginUser } from "../services/authServices";
import { useNavigate } from "@tanstack/react-router";

//TODO: term and contitions
//
export default function LoginReg({ isRegister = false }) {
  const navigate = useNavigate();
  console.log("register", isRegister);
  const { mutate, error } = useMutation({
    mutationFn: loginUser,
  });
  function submitHandler(data: LoginType | RegisterType) {
    mutate(data);
  }
  function loginRegisterClick() {
    if (isRegister) {
      navigate({ to: "/login" });
    } else {
      navigate({ to: "/register" });
    }
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<RegisterType>({});
  return (
    <div className="h-dvh flex flex-col items-center justify-center gap-2">
      <h2 className="mb-4 text-3xl font-bold uppercase text-orange-500 md:text-4xl">
        Weclome to fit Logger
      </h2>
      <p className="text-xl font-bold capitalize">
        {isRegister ? "Register" : "Login"}
      </p>
      <form
        onSubmit={handleSubmit(submitHandler)}
        className="flex flex-col items-center justify-center gap-2 md:w-5/12"
      >
        {isRegister && (
          <>
            <div className="w-full gap-4 md:flex">
              <Input
                name="first_name"
                error={errors.first_name?.message}
                placeholder="name"
                register={register("first_name", {
                  pattern: {
                    value: /[a-z]+/,
                    message: "name contains only letters",
                  },
                })}
                type="text"
              />
              <Input
                name="last_name"
                type="text"
                register={register("last_name", {
                  pattern: {
                    value: /[a-z]+/,
                    message: "surname contains only letters",
                  },
                })}
                placeholder="surname"
                error={errors.last_name?.message}
              />
            </div>
            <Input
              type="text"
              name="username"
              placeholder="username"
              error={errors.username?.message}
              register={register("username", {
                pattern: {
                  value: /^[\d\w.@-]+$/,
                  message: "username can contains leter numbers (_-.)",
                },
              })}
            />
          </>
        )}
        <Input
          name="email"
          error={errors.email?.message}
          register={register(
            "email",
            isRegister
              ? {
                  pattern: {
                    value: emailValidaitor,
                    message: "example user.name@domain.com or any or co.uk",
                  },
                }
              : {},
          )}
          type="text"
          placeholder="email"
        />
        <Input
          placeholder="password"
          error={errors.password?.message}
          name="password"
          type="password"
          register={register(
            "password",
            isRegister
              ? {
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
                    message:
                      "password should have at least a letter\na cappital Leter\none number\none symbol(@$!%*#?&)",
                  },
                }
              : {},
          )}
        />
        {isRegister && (
          <>
            <Input
              register={register("re_password", {
                validate: (value: string) => {
                  if (watch("password") !== value) {
                    return "Passwords do not match";
                  }
                },
              })}
              name="re_password"
              type="password"
              error={errors.re_password?.message}
              placeholder="confirm password"
            />
            {/* <div>
              <input type="checkbox" />
              <label> accept term and conditions</label>
            </div> */}
          </>
        )}
        {error && (
          <div className="text-xl font-bold text-red-600">{error?.message}</div>
        )}
        <div className="flex w-full items-center justify-between">
          <button
            type="submit"
            className="rounded-md bg-orange-600 px-4 py-1 font-semibold uppercase text-neutral-950 duration-300 hover:bg-orange-500"
          >
            {isRegister ? "create acount" : "Login"}
          </button>
          <button
            type="button"
            className="rounded-md px-4 uppercase text-orange-500 hover:text-orange-600 hover:outline"
            onClick={loginRegisterClick}
          >
            {isRegister ? "login" : "register"}
          </button>
        </div>
      </form>
    </div>
  );
}
