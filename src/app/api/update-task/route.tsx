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

  const data = {
    UserId,
    TaskId,
    DisplayName,
    LastDate,
    Threshold1,
    Threshold2
  };

  try {
    await documentClient.update({
      TableName: process.env.ENV_AWS_TABLE_NAME,
      Key: {
        "UserId": `${UserId}`,
        "TaskId": `${TaskId}`,
      },
      UpdateExpression:
        "set #a_DisplayName = :v_DisplayName, #a_LastDate = :v_LastDate, #a_Threshold1 = :v_Threshold1, #a_Threshold2 = :v_Threshold2",
      ExpressionAttributeNames: {
        "#a_DisplayName": "DisplayName",
        "#a_LastDate": "LastDate",
        "#a_Threshold1": "Threshold1",
        "#a_Threshold2": "Threshold2",
      },
      ExpressionAttributeValues: {
        ":v_DisplayName": `${data.DisplayName}`,
        ":v_LastDate": `${data.LastDate}`,
        ":v_Threshold1": `${data.Threshold1}`,
        ":v_Threshold2": `${data.Threshold2}`,
      },
      ReturnValues: "ALL_NEW"
    });

    return NextResponse.json({
      status: "Ok",
      message: DisplayName + " successfully updated!",
    });

  } catch (error) {
    console.error("Error fetching data from AWS: ", error);
    return new NextResponse("Error fetching data from AWS");
  }
}