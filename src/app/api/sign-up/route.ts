import dbConnect from "@/lib/dbConnect";
import UserModel from "@/models/User.model";

export async function POST(request: Request) {
  try {
    await dbConnect();
    const { username, password, email } = await request.json();

    UserModel.findOne({username, isVerified: true})
  } catch (error) {
    console.error("Error registering user", error);
    return Response.json(
      {
        success: false,
        message: "Error registering user",
      },
      {
        status: 500,
      },
    );
  }
}
