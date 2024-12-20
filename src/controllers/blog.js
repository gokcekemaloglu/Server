"use strict"

const Blog = require("../models/blog")

module.exports = {
    list: async(req, res) => {
        /* 
            #swagger.tags = ["Blogs"]
            #swagger.summary = "List Blogs"
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
        res.status(200).send({
            error: false,
            result
        })
    },
    create: async(req, res) => {
        /* 
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Create Blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref:"#/definitions/Blog"
                }
            }
        */
        res.status(201).send({
            error: false,
            result
        })
    },
    read: async(req, res) => {
        /* 
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Read Blog"
        */
        res.status(200).send({
            error: false,
            result
        })
    },
    update: async(req, res) => {
        /* 
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Update Blog"
            #swagger.parameters['body'] = {
                in: 'body',
                required: true,
                schema: {
                    $ref:"#/definitions/Blog"
                }
            }
        */
        res.status(202).send({
            error: false,
            result
        })
    },
    delete: async(req, res) => {
        /* 
            #swagger.tags = ["Blogs"]
            #swagger.summary = "Delete Blog"
        */
        res.status(204).send({
            error: false,
            result
        })
    },
}