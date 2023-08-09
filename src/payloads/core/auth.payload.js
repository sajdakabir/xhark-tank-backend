import Joi from 'joi';

const LoginPayload=Joi.object({
    email:Joi.string().email().required(),
    password:Joi.string().required()
})

export{
    LoginPayload
}