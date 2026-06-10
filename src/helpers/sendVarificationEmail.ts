import resend from "@/lib/resend";
import VerificationEmail from "../../emails/verificationEmail";
import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
  email: string,
  username: string,
  verifyCode: string,
): Promise<ApiResponse> {
  try {
    await resend.emails.send({
        from: 'onboarding@send.dev',
        to: email,
        subject: 'Mystry Message | Verification Code',
        react: VerificationEmail({username,otp: verifyCode})
    })
    return {
      success: true,
      message: "Verification email send successfuly",
    };
  } catch (error) {
    console.error("error sending verification email", error);
    return {
      success: false,
      message: "Failed to send verification email",
    };
  }
}
