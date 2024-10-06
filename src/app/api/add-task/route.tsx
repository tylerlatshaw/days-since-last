import { NextResponse } from "next/server";
import { TaskType } from "@/lib/type-library";
import { documentClient } from "@/app/services/dynamo-client";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {

  const {
    UserId,
    TaskId,
    DisplayName,
    LastDate,
    Threshold1,
    Threshold2
  } = await request.json() as TaskType;

  const newTask = {
    UserId,
    TaskId,
    DisplayName,
    LastDate,
    Threshold1,
    Threshold2
  };

  try {
    const response = await documentClient.put({
      TableName: process.env.ENV_AWS_TABLE_NAME,
      Item: {
        "UserId": `${newTask.UserId}`,
        "TaskId": `${newTask.TaskId}`,
        "DisplayName": `${newTask.DisplayName}`,
        "LastDate": `${newTask.LastDate}`,
        "Threshold1": `${newTask.Threshold1}`,
        "Threshold2": `${newTask.Threshold2}`,
      }
    });

    if (response.$metadata.httpStatusCode === 200) {
      return NextResponse.json({
        status: "Ok",
        message: DisplayName + " successfully added!",
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