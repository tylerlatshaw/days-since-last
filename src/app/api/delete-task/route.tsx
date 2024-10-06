import { NextResponse } from "next/server";
import { documentClient } from "@/app/services/dynamo-client";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {

  const {
    UserId,
    TaskId
  } = await request.json();

  try {
    const response = await documentClient.delete({
      TableName: process.env.ENV_AWS_TABLE_NAME,
      Key: {
        "UserId": `${UserId}`,
        "TaskId": `${TaskId}`,
      }
    });

    if (response.$metadata.httpStatusCode === 200) {
      return NextResponse.json({
        status: "Ok",
        message: "Task successfully deleted!",
      });
    } else {
      return NextResponse.json({
        status: "Error",
        message: "An error occurred. Please try again.",
      });
    }
  } catch (error) {
    console.error("Error fetching data from AWS: ", error);
    return NextResponse.json({
      status: "Error",
      message: "An error occurred. Please try again.",
    });
  }
}