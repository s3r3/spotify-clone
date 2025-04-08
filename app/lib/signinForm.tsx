"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";

const FormSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email"),
  password: z
    .string()
    .min(1, "Password is required")
    .min(8, "Password must have more than 8 characters"),
});

const SignInForm = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    await new Promise((resolve) => {
      setTimeout(resolve, 1000); // Simulate a delay
    });
    console.log(values);
  };

  return (
    <div className="max-w-md mx-auto p-8 border rounded">
      <h2 className="text-lg font-bold mb-4">Sign in</h2>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex flex-col">
          <label className="text-sm mb-2">Email</label>
          <input
            type="email"
            placeholder="mail@example.com"
            className="py-2 px-4 border rounded shadow-sm focus:ring focus:outline-none"
            {...form.register("email")}
          />
          <p className="text-red-500 text-sm">
            {form.formState.errors.email?.message}
          </p>
        </div>
        <div className="flex flex-col">
          <label className="text-sm mb-2">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            className="py-2 px-4 border rounded shadow-sm focus:ring focus:outline-none"
            {...form.register("password")}
          />
          <p className="text-red-500 text-sm">
            {form.formState.errors.password?.message}
          </p>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign in
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-2">
        or{" "}
        <button
          type="button"
          className="w-full bg-red-500 text-white py-2 rounded"
        >
          Sign up with Google
        </button>
      </p>
      <p className="text-center text-sm text-gray-600 mt-2">
        If you don't have an account, please{" "}
        <Link className="text-blue-500 hover:underline" href="/sign-up">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignInForm;
