import * as Joi from "joi";

export const CENV: Record<string, any> = {
    cache: false,
    isGlobal: true,
    envFilePath: ['.env'],
    validationSchema: Joi.object({
        port: Joi.number().required(),
        base_path: Joi.string().required(),
    })
}