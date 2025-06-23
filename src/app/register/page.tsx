"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";

// Schema validation using Zod
const schema = z
  .object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type RegisterFormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: RegisterFormData) => {
    console.log("Submitted Data:", data);
    toast.success("Registration successful (mock)!");
    // You can trigger a GraphQL mutation here
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-md shadow-sm bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Confirm Password</label>
          <input
            type="password"
            {...register("confirmPassword")}
            className="mt-1 w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Register
        </button>
      </form>
    </div>
  );
}
