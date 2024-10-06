import { NextResponse } from "next/server";
import { documentClient } from "@/app/services/dynamo-client";

export const dynamic = "force-dynamic";

type ResponseType = {
    UserId: string
    TaskId?: string
}

export async function POST(request: Request) {

    const {
        UserId,
        TaskId
    } = await request.json() as ResponseType;

    try {
        const response = await documentClient.query({
            TableName: process.env.ENV_AWS_TABLE_NAME,
            KeyConditionExpression: "UserId = :partitionKey AND TaskId = :sortKey",
            ExpressionAttributeValues: {
                ":partitionKey": `${UserId}`,
                ":sortKey": `${TaskId}`
            }
        });

        return NextResponse.json(response.Items);
    } catch (error) {
        console.error("Error fetching data from AWS: ", error);
        return new NextResponse("Error fetching data from AWS");
    }
}