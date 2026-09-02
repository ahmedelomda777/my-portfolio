"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import {contact} from "@/data/data"
export default function Contact() {
  const inputClass =
    "bg-input p-4 rounded-xl w-80 focus:outline focus:outline-accent text-accent placeholder:text-primary-text placeholder:opacity-70 ";
  const schema = z.object({
    name: z.string().min(2, { message: "please enter your name" }),
    email: z.email({ message: "email is incorrect" }),
    message: z.string().min(2, { message: "please enter your message" }),
  });
  type FormValidate = z.infer<typeof schema>;
  const {
    register,
    formState: { isSubmitting,isSubmitSuccessful ,errors },
    handleSubmit,
    
  } = useForm({
    resolver: zodResolver(schema),
  });
  const onSubmit: SubmitHandler<FormValidate> = async (data) => {
    try {
      const res = await fetch("/api/email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (!res.ok) {
        console.error("Failed to send message:", result);
        return;
      }
      console.log("Sent successfully:", result);
    } catch (err) {
      console.error("Network error:", err);
    }
  };
  return (
    <div className="w-full">
      <h3 className="section-title">contact with me</h3>
      <div className="flex m-auto w-4/5 justify-evenly">
        <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col">
            <label htmlFor="name" className="capitalize text-xl">
              name
            </label>
            <input
              id="name"
              {...register("name")}
              className={`${inputClass} ${errors.name ? "focus:outline-none border border-red-500" : ""} `}
              autoComplete="off"
              spellCheck="false"
              type="text"
              placeholder="Enter your name"
            />
            {errors.name && (
              <p className="text-red-500 mt-2">{errors.name.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="capitalize text-xl">
              email
            </label>
            <input
              id="email"
              {...register("email")}
              className={`${inputClass} ${errors.email ? "focus:outline-none border border-red-500" : ""}`}
              autoComplete="off"
              spellCheck="false"
              type="email"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 mt-2">{errors.email.message}</p>
            )}
          </div>
          <div className="flex flex-col">
            <label htmlFor="message" className="capitalize text-xl">
              message
            </label>
            <textarea
              id="message"
              {...register("message")}
              spellCheck="false"
              className={`${inputClass} ${errors.message ? "focus:outline-none border border-red-500" : ""} overflow-scroll scrollbar-none resize-none `}
              placeholder="Enter your message"
            />
            {errors.message && (
              <p className="text-red-500 mt-2">{errors.message.message}</p>
            )}
          </div>
          <Button 
          className={`w-30 m-auto cursor-pointer`}
          disabled={isSubmitting} type="submit">
            {isSubmitting ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              "Send"
            )}
          </Button>
          {isSubmitSuccessful && isSubmitSuccessful?<h5 className="capitalize text-green-300 text-shadow-[0px_0px_5px_var(--accent)] text-center">the message has been sent successfully.</h5>:null}
        </form>
        <div className="flex flex-col gap-5">
          {contact.map((c)=>{
            return(
             <div className="flex items-center gap-5 hover:bg-muted hover:-translate-y-3 hover:shadow-[0px_0px_15px_1px_#72efdd] selection:bg-secondary hover:text-white duration-500 p-5 rounded-full" key={c.title}>
              <div>
                <c.icon className="h-10 w-10"/>
              </div>
              <div className="flex flex-col ">
                <h4 className="capitalize">{c.title}</h4>
                <p className={`${c.title==="location"?"capitalize":""}`}>{c.content}</p>
              </div>
             </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}
