/** @format */
"use client";

import { useSigninMutation } from "@/app/_lib/features/slice/authSlice";
import { useFormik } from "formik";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useLayoutEffect } from "react";
import { signinSchema } from "@/app/_utils/validations/siginSchema";
import TextField from "../common/inputs/TextField";
import PasswordField from "../common/inputs/PasswordField";
import ErrorMessage from "../common/ErrorMessage";

export default function LoginForm({ isToken }: { isToken: boolean }) {
    const route = useRouter();

    useLayoutEffect(() => {
        if (isToken) {
            route.replace("/admin/dashboard");
        }
    }, [isToken]);

    const [signin, { isLoading, error, isError }] = useSigninMutation();
    const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
        useFormik({
            initialValues: {
                email: "",
                password: "",
            },
            validationSchema: signinSchema,
            onSubmit: async (value) => {
                try {
                    const response = await signin({
                        email: value.email,
                        password: value.password,
                    }).unwrap();
                    if (response.status === "success") {
                        toast.success("Access granted");

                        console.log("Function", isToken);
                        route.push("/");
                    }
                } catch (error) {
                    console.log(error);
                }
            },
        });
    return (
        <div className='max-w-[400px] mx-auto w-full  gap-4 rounded-md px-6 py-7 flex flex-col lg:gap-6 items-center shadow-md bg-white'>
            <h1 className='text-xl lg:text-2xl font-bold text-center text-primary'>
                Welcome Back!
            </h1>
            <form
                className='flex flex-col gap-2 w-full'
                onSubmit={handleSubmit}
            >
                <TextField
                    handleBlur={handleBlur}
                    error={errors.email!}
                    touched={touched.email!}
                    value={values.email}
                    name='email'
                    placeholder='example@soracert.com'
                    handleChange={handleChange}
                    label='Addresse Email'
                    type='email'
                />
                <PasswordField
                    handleBlur={handleBlur}
                    error={errors.password!}
                    touched={touched.password!}
                    value={values.password}
                    name='password'
                    placeholder='**********'
                    handleChange={handleChange}
                    label='Mot de passe'
                />
                <button
                    type='submit'
                    className='btn bg-primary text-white hover:bg-blue-950'
                >
                    {isLoading ? (
                        <span className='loading loading-spinner loading-sm'></span>
                    ) : (
                        "connexion"
                    )}
                </button>
                {isError && (
                    //@ts-ignore
                    <ErrorMessage text={error?.data?.error_message} />
                )}
            </form>
        </div>
    );
}
