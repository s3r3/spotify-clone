import { Icon } from "@iconify/react";
import React from "react";
import { signIn } from "@/auth";
export default function Login() {
  return(
  <div className="p-20 flex flex-col gap-6">
    {/* Header */}
    <h1 className="w-[380px] font-bold text-[31px]">
      We Play Music You Enjoy It Deal
    </h1>

    {/* Google Login Button */}
    <form
      action={async function handleSignIn() {
        "use server";
        await signIn("google");
      }}
    >
      <button
        className="w-[360px] h-[50px] rounded-full bg-black text-white flex items-center justify-center gap-3 "
        type="submit"
      >
        <div className="bg-white w-[24px] h-[24px] rounded-full flex items-center justify-center">
          <Icon icon="logos:google-icon" />
        </div>
        <span className="font-bold">Login with Google</span>
      </button>
    </form>

    {/* Separator */}
    <div className="w-[360px] h-[1px] bg-gray-300 border relative flex justify-center">
      <p className="absolute bottom-[-12px] bg-white w-30 flex items-center justify-center">
        Or use Email
      </p>
    </div>
  </div>
  )
}
