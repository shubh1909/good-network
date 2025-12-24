"use client";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { toast } from "sonner";
import { set, z } from "zod";
import axios from "axios";

const formSchema = z
  .object({
    username: z.string().min(1, "Username is required"),
    email: z
      .string()
      .email("Invalid email address")
      .regex(/^[\w.-]+@[\w.-]+\.\w+$/, "Invalid email format"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z
      .string()
      .min(6, "Confirm Password must be at least 6 characters"),
    dob: z.string().min(1, "Date of Birth is required"),
  })
  .refine(
    (data: { password: string; confirmPassword: string }) =>
      data.password === data.confirmPassword,
    { message: "Passwords do not match", path: ["confirmPassword"] }
  );
const Page = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const res = await axios.post("/api/user/create-user", {
        name: data.username,
        email: data.email,
        password: data.password,
        dob: data.dob,
      });
      console.log(res);
      if (res.status === 200) {
        toast.success("Account created successfully!");
        router.push("/sign-in");
      }
    } catch (error) {
      console.error("Error creating account:", error);
      toast.error("Failed to create account. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#D67BFF] via-[#E8A5FF] to-[#F0D0FF] flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white drop-shadow-lg mb-2">
            Create your account to start making a difference!
          </h1>
        </div>

        {/* Form Container */}
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <FormProvider {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">
                      Full Name
                    </FormLabel>
                    <FormControl>
                      <input
                        placeholder="Enter your full name"
                        {...field}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D67BFF] focus:ring-2 focus:ring-[#D67BFF]/20 transition-all duration-200 outline-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">
                      Email Address
                    </FormLabel>
                    <FormControl>
                      <input
                        placeholder="Enter your email"
                        {...field}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D67BFF] focus:ring-2 focus:ring-[#D67BFF]/20 transition-all duration-200 outline-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="dob"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">
                      Date of Birth
                    </FormLabel>
                    <FormControl>
                      <input
                        type="date"
                        {...field}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D67BFF] focus:ring-2 focus:ring-[#D67BFF]/20 transition-all duration-200 outline-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">
                      Password
                    </FormLabel>
                    <FormControl>
                      <input
                        type="password"
                        placeholder="Create a password"
                        {...field}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D67BFF] focus:ring-2 focus:ring-[#D67BFF]/20 transition-all duration-200 outline-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-gray-700 font-semibold">
                      Confirm Password
                    </FormLabel>
                    <FormControl>
                      <input
                        type="password"
                        placeholder="Confirm your password"
                        {...field}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#D67BFF] focus:ring-2 focus:ring-[#D67BFF]/20 transition-all duration-200 outline-none"
                      />
                    </FormControl>
                    <FormMessage className="text-red-500 text-sm" />
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-[#D67BFF] to-[#B845FF] hover:from-[#B845FF] hover:to-[#A030FF] text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></div>
                    Creating Account...
                  </div>
                ) : (
                  "Create Account"
                )}
              </Button>
            </form>
          </FormProvider>

          <div className="mt-8 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#D67BFF] hover:text-[#B845FF] font-semibold transition-colors duration-200"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8">
          <p className="text-white/70 text-sm">
            By creating an account, you agree to our Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
};
export default Page;
