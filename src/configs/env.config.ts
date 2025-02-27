import { ConfigModuleOptions } from "@nestjs/config";
import * as Joi from "joi";

export const ENV_CONFIG: ConfigModuleOptions = {
    isGlobal: true,
    envFilePath: ['.env'],
    ignoreEnvFile: false,
    validationSchema: Joi.object({
        PORT: Joi.number().required(),
        TIMEOUT: Joi.number().required(),
        BASE_PATH: Joi.string().required(),
    })

}