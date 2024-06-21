import { NextRequest, NextResponse } from 'next/server';

const swaggerDocument = {
    openapi: "3.0.0",
    info: {
        title: "Sample API",
        version: "1.0.0"
    },
    paths: {
        "/api/hello": {
            get: {
                summary: "Hello World",
                responses: {
                    "200": {
                        description: "A friendly greeting",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: {
                                        message: {
                                            type: "string",
                                            example: "Hello, world!"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
};

export const POST = async (req: NextRequest, res: NextResponse) => {
    return NextResponse.json(swaggerDocument);
};


