import Joi from 'joi';

const LoginPayload=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})

const RegisterPayload=Joi.object({
    name:Joi.string().required(),
    organizationName:Joi.string().optional(),
    email:Joi.string().email().required(),
    password:Joi.string().required(),
    role:Joi.string().required()
})

export{
    LoginPayload,
    RegisterPayload
}