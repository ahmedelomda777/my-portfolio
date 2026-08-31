'use client'
import { useForm } from "react-hook-form";
import Separative from "../ui/separative";
export default function Contact() {
  const {register}= useForm()
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
