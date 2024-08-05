import { TIMEOUT } from "dns";
import * as Joi from "joi";

export const configEnvironments: Record<string, any> = {
    cache: false,
    isGlobal: true,
    envFilePath: ['.env'],
    validationSchema: Joi.object({
        PORT: Joi.number().required(),
        TIMEOUT: Joi.number().required(),
        BASE_PATH: Joi.string().required(),
    })
}