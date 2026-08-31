'use client'
import { useForm } from "react-hook-form";
import * as zod from "zod";
import Separative from "../ui/separative";
export default function Contact() {
  const {register,handleSubmit}= useForm()
  return (
    <form>
      <label>
        Fist Name
      </label>
      <input {...register}/>
      <Separative/>
    </form>
  )
}
