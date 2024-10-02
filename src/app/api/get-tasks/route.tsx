import { NextResponse } from "next/server";
import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";
import Papa from "papaparse";
import { TaskType } from "@/app/lib/type-library";

export const dynamic = "force-dynamic";

export async function GET() {
    try {
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

        await Promise.all([
            sendResponse.Body?.transformToString()
                .then((responseText: string) => {
                    const data = Papa.parse(responseText, {
                        header: true
                    });
                    dataset.push(data.data as unknown as TaskType);
                })
        ]);

        // Remove outer array
        const zeroIndex = dataset[0] as unknown as TaskType[];

        return NextResponse.json(zeroIndex);
    } catch (error) {
        console.error("Error fetching data from S3: ", error);
        return new NextResponse("Error fetching data from S3");
    }
}