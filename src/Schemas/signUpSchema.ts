import { z } from "zod";

export const signUpSchema = z.object({
  username: z
    .string()
    .min(2, { message: "UserName must be atleast 2 character" })
    .max(20, { message: "UserName must be no more than 20 characters" })
    .regex(/^[a-zA-Z0-9]+$/, {
      message: "Username must not contain special character",
    }),

  email: z.email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "password must be at least 6 characters" }),
});

