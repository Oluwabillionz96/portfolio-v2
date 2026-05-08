"use client";
import Link from "next/link";
import { FieldGroup } from "./ui/field";
import z from "zod";
import { useForm } from "react-hook-form";
import ControlledInput from "./ui/controlled-input";
import { Button } from "./ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

export const formSchema = z.object({
  fullName: z
    .string()
    .min(3, "Name must be at least 3 characters.")
    .max(50, "Name must be at most 50 characters"),
  email: z.email("Invalid email address."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(300, "Message must be at most 300 characters."),
});

type Status = { type: "success" | "error"; message: string } | null;

const ContactSection = () => {
  const [status, setStatus] = useState<Status>(null);

  const {
    control,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm<z.infer<typeof formSchema>>({
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(data),
      });
      const result = await res.json();
      if (result.success) {
        reset();
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon.",
        });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (e) {
      setStatus({
        type: "error",
        message: "Something went wrong. Please try again or email me directly.",
      });
    }

    // Auto-dismiss after 5 seconds
    setTimeout(() => setStatus(null), 5000);
  };
  return (
    <section
      id="contact"
      className="lg:py-40 px-8 flex-col md:flex-row flex gap-14 md:gap-8"
    >
      <section className="lg:space-y-8 space-y-4 ">
        <h2 className="lg:text-6xl sm:text-4xl text-xl font-bold font-space uppercase">
          Initiate Collaboration
        </h2>
        <p className="lg:text-xl sm:text-lg font-sans">
          Feel free to reach out if you are looking for a developer, have a
          question, or just want to connect.
        </p>
        <div className="lg:space-y-4 space-y-2">
          <p className="text-xs font-bold font-space uppercase">Direct Mail</p>
          <Link
            href={"mailto:goodluckreuben96@gmail.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium lg:text-lg  underline sm:text-base text-sm font-space uppercase hover:underline decoration-2 decoration-black"
          >
            goodluckreuben96@gmail.com
          </Link>
        </div>
      </section>
      <div className="relative w-full">
        <div className="border-2 w-full lg:hidden -top-4 -right-4 h-full absolute border-black" />
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full border-2 p-2 border-black z-25 relative bg-white "
        >
          <FieldGroup>
            <ControlledInput
              control={control}
              name={"fullName"}
              id={"full-name"}
              label={"Full Name"}
            />
            <ControlledInput
              control={control}
              name={"email"}
              id={"email"}
              label={"Email"}
            />
            <ControlledInput
              control={control}
              name={"message"}
              id={"message"}
              label={"Message"}
              type="textarea"
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="lg:py-8 py-5 rounded-none font-medium lg:text-3xl disabled:cursor-not-allowed disabled:opacity-50 text-xl font-space uppercase"
            >
              {isSubmitting ? "Sending..." : "Send Transmission"}
            </Button>

            {/* Status feedback */}
            {status && (
              <div
                className={`py-4 px-6 text-sm font-space font-bold uppercase tracking-wider border-2 transition-all duration-300 ${
                  status.type === "success"
                    ? "bg-black text-white border-black"
                    : "bg-white text-red-600 border-red-600"
                }`}
              >
                {status.message}
              </div>
            )}
          </FieldGroup>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
