"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
// import { useMutation } from "@apollo/client"; // Uncomment when you integrate mutation
// import { LOGIN_USER } from "@/graphql/mutations"; // Replace with actual path

// Validation schema
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  // GraphQL Mutation (mock for now)
  // const [loginUser] = useMutation(LOGIN_USER);

  const onSubmit = async (data: LoginFormData) => {
    try {
      // Mock response (replace with actual mutation)
      const response = {
        data: {
          login: {
            token: "mock-jwt-token-123",
            user: {
              id: "1",
              email: data.email,
            },
          },
        },
      };

      // Store JWT in localStorage
      localStorage.setItem("token", response.data.login.token);

      toast.success("Login successful!");
      console.log("User logged in:", response.data.login.user);
    } catch (error) {
      toast.error("Login failed.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-20 p-6 border rounded-md shadow-sm bg-white">
      <h2 className="text-2xl font-semibold mb-6 text-center text-black">Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-black">
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            type="email"
            {...register("email")}
            className="mt-1 w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium">Password</label>
          <input
            type="password"
            {...register("password")}
            className="mt-1 w-full border px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
        >
          Login
        </button>
      </form>
    </div>
  );
}
