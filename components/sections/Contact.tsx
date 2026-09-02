"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Separative from "../ui/separative";
import { Button } from "../ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { refresh } from "next/cache";

export default function Contact() {
  const inputClass = "bg-card p-3 rounded-xl w-80 focus:outline focus:outline-accent text-accent placeholder:text-primary-text placeholder:opacity-70 ";
  const schema = z.object({
    name: z.string().min(2, { message: "please enter your name" }),
    email: z.email({ message: "email is incorrect" }),
    message: z.string().min(2, { message: "please enter your message" }),
  });
  type FormValidate = z.infer<typeof schema>;
  const {
    register,
    formState: { isSubmitting, errors },
    handleSubmit,
  } = useForm({
    resolver: zodResolver(schema),
    values: {
      name: "",
      email: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<FormValidate> = async (data) => {
   try{
    const res= await fetch ("/api/email",{
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
   }) 
    const result = await res.json();

     if (!res.ok) {
      console.error("Failed to send message:", result);
      return;
    }
     console.log("Sent successfully:", result);
  }
     catch(err) {
    console.error("Network error:", err);
  }
};
  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col">
        <label htmlFor="name" className="capitalize">
          name
        </label>
        <input
          id="name"
          {...register("name")}
          className={`${inputClass} ${errors.name? "focus:outline-none border border-red-500":""} `}
           autoComplete="off"
           spellCheck="false"
          type="text"
          placeholder="Enter your name"
        />
        {errors.name && <p className="text-red-500 mt-2">{errors.name.message}</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="email" className="capitalize">
          email
        </label>
        <input
          id="email"
          {...register("email")}
          className={`${inputClass} ${errors.email? "focus:outline-none border border-red-500":""}`}
          autoComplete="off"
           spellCheck="false"
          type="email"
          placeholder="Enter your email"
        />
        {errors.email && <p className="text-red-500 mt-2">{errors.email.message}</p>}
      </div>
      <div className="flex flex-col">
        <label htmlFor="message" className="capitalize">
          message
        </label>
        <textarea
          id="message"
          {...register("message")}
          spellCheck="false"
          className={`${inputClass} ${errors.message? "focus:outline-none border border-red-500":""} overflow-scroll scrollbar-none resize-none `}
          placeholder="Enter your message"
        />
        {errors.message && (
          <p className="text-red-500 mt-2">{errors.message.message}</p>
        )}
      </div>
      <Button disabled={isSubmitting} type="submit">
        {isSubmitting ? (
          <AiOutlineLoading3Quarters className="animate-spin" />
        ) : (
          "send"
        )}
      </Button>
    </form>
  );
}
