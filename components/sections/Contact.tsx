"use client";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "../ui/button";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { contact } from "@/data/data";
import { motion } from "motion/react";
import { fields } from "@/data/data";
export default function Contact() {
;
  const inputClass =
    "bg-input p-4 rounded-xl w-60 lg:w-80 focus:outline focus:outline-accent text-accent placeholder:text-sm lg:placeholder:text-base placeholder:text-primary-text placeholder:opacity-70 ";
  const schema = z.object({
    name: z.string().min(2, { message: "please enter your name" }),
    email: z.email({ message: "email is incorrect" }),
    message: z.string().min(2, { message: "please enter your message" }),
  });
  type FormValidate = z.infer<typeof schema>;
  const {
    register,
    formState: { isSubmitting, isSubmitSuccessful, errors },
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
      <div className="grid grid-cols-1 mt-5 md:grid-cols-2 m-auto w-3/5 gap-5">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true, amount: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col gap-5">
          {contact.map((c) => {
            return (
              <div
                className="flex items-center gap-5 hover:bg-muted hover:-translate-y-3 hover:shadow-[0px_0px_15px_1px_#72efdd] selection:bg-secondary hover:text-white duration-500 p-5 rounded-full"
                key={c.title}>
                <div>
                  <c.icon className="h-6 w-6 lg:h-10 lg:w-10" />
                </div>
                <div className="flex flex-col ">
                  <h4 className="capitalize text-sm lg:text-lg">{c.title}</h4>
                  <p
                    className={`text-xs lg:text-base ${c.title === "location" ? "capitalize" : ""}`}>
                    {c.content}
                  </p>
                </div>
              </div>
            );
          })}
        </motion.div>

        <motion.form
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="flex flex-col items-center gap-5"
          onSubmit={handleSubmit(onSubmit)}>
          {fields.map((field) => (
            <div key={field.name} className="flex flex-col">
              <label htmlFor={field.name} className="capitalize text-sm md:text-lg lg:text-xl">
                {field.name}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  id={field.name}
                  {...register(field.name)}
                  spellCheck={false}
                  className={`${inputClass} ${
                    errors[field.name]
                      ? "focus:outline-none border border-red-500"
                      : ""
                  } overflow-scroll scrollbar-none resize-none`}
                  placeholder={field.placeholder}
                />
              ) : (
                <input
                  id={field.name}
                  {...register(field.name)}
                  className={`${inputClass} ${
                    errors[field.name]
                      ? "focus:outline-none border border-red-500"
                      : ""
                  }`}
                  autoComplete="off"
                  spellCheck={false}
                  type={field.type}
                  placeholder={field.placeholder}
                />
              )}

              {errors[field.name] && (
                <p className="mt-2 text-red-500">
                  {errors[field.name]?.message}
                </p>
              )}
            </div>
          ))}
          <Button
            className={`w-30 m-auto cursor-pointer`}
            disabled={isSubmitting}
            type="submit">
            {isSubmitting ? (
              <AiOutlineLoading3Quarters className="animate-spin" />
            ) : (
              "Send"
            )}
          </Button>
          {isSubmitSuccessful && isSubmitSuccessful ? (
            <h5 className="capitalize text-green-300 text-shadow-[0px_0px_5px_var(--accent)] text-center">
              the message has been sent successfully.
            </h5>
          ) : null}
        </motion.form>
      </div>
    </div>
  );
}
