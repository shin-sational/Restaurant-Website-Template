"use client";
import React from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { CustomInput } from "@/components/common/atoms/CustomInput";
import { CustomTextArea } from "@/components/common/atoms/CustomTextArea";
import { CustomButton } from "@/components/common/atoms/CustomButton";
import { VALIDATION_MESSAGES } from "@/config/validationMessage";

const ContactFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: VALIDATION_MESSAGES.en.firstName.min })
    .max(50, { message: VALIDATION_MESSAGES.en.firstName.max }),
  lastName: z
    .string()
    .min(2, { message: VALIDATION_MESSAGES.en.lastName.min })
    .max(50, { message: VALIDATION_MESSAGES.en.lastName.max }),
  email: z.string().email({ message: VALIDATION_MESSAGES.en.email }),
  message: z
    .string()
    .min(10, { message: VALIDATION_MESSAGES.en.message.min })
    .max(500, { message: VALIDATION_MESSAGES.en.message.max }),
});
const ContactForm = () => {
  const contactForm = useForm<z.infer<typeof ContactFormSchema>>({
    resolver: zodResolver(ContactFormSchema),
  });

  function onSubmit(values: z.infer<typeof ContactFormSchema>) {
    console.log(values, "values");
  }

  return (
    <Form {...contactForm}>
      <form
        onSubmit={contactForm.handleSubmit(onSubmit)}
        className="flex flex-col items-center gap-7"
      >
        <FormField
          control={contactForm.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CustomInput placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CustomInput placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CustomInput placeholder="Your Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={contactForm.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <CustomTextArea placeholder="Message" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <CustomButton className="w-fit">Submit</CustomButton>
      </form>
    </Form>
  );
};

export default ContactForm;
