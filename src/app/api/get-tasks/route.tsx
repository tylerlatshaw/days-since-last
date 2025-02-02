import { NextResponse } from "next/server";
import { documentClient } from "@/app/services/dynamo-client";

export const dynamic = "force-dynamic";

type ResponseType = {
    UserId: string
}

export async function POST(request: Request) {

    const {
        UserId
    } = await request.json() as ResponseType;

    try {
        const response = await documentClient.query({
            TableName: process.env.ENV_AWS_TABLE_NAME,
            KeyConditionExpression: "UserId = :partitionKey",
            ExpressionAttributeValues: {
                ":partitionKey": `${UserId}`
            },
        });

        return NextResponse.json(response.Items?.sort((a, b) => a.DisplayName.localeCompare(b.DisplayName)));
    } catch (error) {
        console.error("Error fetching data from AWS: ", error);
        return new NextResponse("Error fetching data from AWS");
    }
}