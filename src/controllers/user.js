"use strict"

const passwordEncrypt = require("../helpers/passwordEncrypt")
const User = require("../models/user")
const jwt = require("jsonwebtoken")

module.exports = {
    list: async(req, res) => {
        /* 
            #swagger.tags = ["Users"]
            #swagger.summary = "List Users"
            #swagger.description = `
                You can use <u>filter[] & search[] & sort[] & page & limit</u> queries with endpoint.
                <ul> Examples:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=asc&sort[field2]=desc</b></li>
                    <li>URL/?<b>limit=10&page=1</b></li>
                </ul>
            `
        */

        const data = await res.getModelList(User)
        res.status(200).send({
            error: false,
            details: await res.getModelListDetails(User),
            data
        })
    },
    create: async(req, res) => {
        /* 
            #swagger.tags = ["Users"]
            #swagger.summary = "Create User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "firstName": "test",
                    "lastName": "test",
                }
            }
        */
        const user = await User.create(req.body)

        // SIMPLE TOKEN

        const tokenData = await Token.create({
            userId: user._id,
            token: passwordEncrypt(user._id + Date.now())
        })

        // JWT

        // Access Token
        const accessData = {
            _id: user._id,
            username: user.username,
            email: user.email,
            isActive: user.isActive,
            isAdmin: user.isAdmin
        }
        // Convert to JWT
        const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, {expiresIn: "1d"})

        // Refresh Token

        const refreshData = {
            _id: user._id,
            password: user.password
        }

        // Convert to JWT
        const refreshToken = jwt.sign(refreshData, process.env.REFRESH_KEY, {expiresIn: "3d"})

        res.status(200).send({
            error: false,
            token: tokenData.token,
            bearer: {
                access: accessToken,
                refresh: refreshToken
            },
            user
        })
    },
    read: async(req, res) => {
        /* 
            #swagger.tags = ["Users"]
            #swagger.summary = "Read User"
        */
        res.status(200).send({
            error: false,
            result
        })
    },
    update: async(req, res) => {
        /* 
            #swagger.tags = ["Users"]
            #swagger.summary = "Update User"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    "username": "test",
                    "password": "1234",
                    "email": "test@site.com",
                    "firstName": "test",
                    "lastName": "test",
                }
            }
        */
        res.status(200).send({
            error: false,
            result
        })
    },
    delete: async(req, res) => {
        /* 
            #swagger.tags = ["Users"]
            #swagger.summary = "Delete User"
        */
        res.status(200).send({
            error: false,
            result
        })
    },
}