import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";


const client = new DynamoDBClient({
    region: process.env.ENV_AWS_REGION,
    credentials: {
        accessKeyId: process.env.ENV_AWS_ACCESS_KEY_ID!,
        secretAccessKey: process.env.ENV_AWS_SECRET_ACCESS_KEY!,
    }
});

export const documentClient = DynamoDBDocument.from(client);
