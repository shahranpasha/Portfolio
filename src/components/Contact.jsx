import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    };
    try {
      await axios.post("https://getform.io/f/ayvvkrgb", userInfo);
      toast.success("Your message has been sent");
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16 bg-black text-white"
      >
        <h1 className="text-3xl font-bold mb-4 text-center">CONTACT ME</h1>
        <div className="text-center">Fill out the form below to contact me:</div>
        <div className=" flex flex-col items-center justify-center mt-5">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-slate-900 w-96 px-8 py-6 rounded-xl"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-300">FullName</label>
              <input
                {...register("name", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
                id="name"
                name="name"
                type="text"
                placeholder="Enter your fullname"
              />
              {errors.name && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-300">Email Address</label>
              <input
                {...register("email", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
                id="email"
                name="email"
                type="text"
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-300">Message</label>
              <textarea
                {...register("message", { required: true })}
                className="shadow rounded-lg appearance-none border py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-gray-800"
                id="message"
                name="message"
                type="text"
                placeholder="Enter your Query"
              />
              {errors.message && <span className="text-red-500 text-sm">This field is required</span>}
            </div>
            <button
              type="submit"
              className="bg-blue-950 text-white rounded-xl px-3 py-2 hover:bg-gray-700 duration-300"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;