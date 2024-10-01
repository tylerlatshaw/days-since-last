import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand, GetObjectCommand } from "@aws-sdk/client-s3";
import { TaskType } from "@/app/lib/type-library";
import { json2csv } from "json-2-csv";
import Papa from "papaparse";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {

  const {
    TaskId
  } = await request.json();

  try {
    // Get existing file
    const dataset: TaskType[] = [];

    const client = new S3Client({
      region: process.env.ENV_AWS_REGION,
      credentials: {
        accessKeyId: process.env.ENV_AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.ENV_AWS_SECRET_ACCESS_KEY!,
      }
    });

    const getCommand = new GetObjectCommand({
      Bucket: process.env.ENV_AWS_BUCKET_NAME!,
      Key: process.env.ENV_AWS_DIRECTORY! + "task-data.csv"
    });

    const sendResponse = await client.send(getCommand);
    await sendResponse.Body?.transformToString()
      .then(responseText => {
        const data = Papa.parse(responseText, {
          header: true
        });
        dataset.push(data.data as unknown as TaskType);
      });

    // Remove outer array
    const zeroIndex = dataset[0] as unknown as TaskType[];

    // Remove row to be deleted
    const updatedData = zeroIndex.filter((task) => {
      return task.TaskId !== TaskId;
    });

    // Put new file
    const csv = json2csv(updatedData);

    const putCommand = new PutObjectCommand({
      Bucket: process.env.ENV_AWS_BUCKET_NAME!,
      Key: process.env.ENV_AWS_DIRECTORY! + "task-data.csv",
      Body: csv
    });

    await client.send(putCommand);

    return NextResponse.json({
      status: "Ok",
      message: "Task successfully deleted!",
    });

  } catch (error) {
    console.error("Error fetching data from S3: ", error);
    return NextResponse.json({
      status: "Error",
      message: "An error occurred. Please try again.",
    });
  }
}