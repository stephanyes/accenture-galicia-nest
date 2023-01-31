import { registerAs } from "@nestjs/config";
import * as PACKAGE_JSON from "../../package.json";

export default registerAs('config', () => {
    return {
        project: {
            name: PACKAGE_JSON.name,
            version: PACKAGE_JSON.version
        },
        server: {
            isProd: process.env.NODE_PROD === "production",
            port: parseInt(process.env.PORT, 10) || 8888,
            corsEnable: process.env.CORSE_ENABLE.toLocaleLowerCase() === "true",
            corsOptions: {
                origin: `http://localhost:${parseInt(process.env.port, 10) || 8888}`,
                methods: "GET, POST, PUT, PATCH",
                allowedHeaders: "Content-Type, Authorization,Access-Control-Allow-Origin, id_channel, session_id",
                credentials: true
            }
        },
        database: {
            uri: process.env.DATABASE_URI || "http://localhost:8888?username=stephanyes&password=123456"
        },
        validationPipes: {
            validatorPackage: require('class-validator'),
            whitelist: true,
            transformerPackage: require('class-transformer'),
            transform: true,
            forbidNonWhitelisted: true,
            forbidUnknownValues: true,
            transformOptions: {
                enableImplicitConversion: true
            }
        }
    }
})