const { test } = require("@jest/globals")
const {Project, Task, User} = require("../models")
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database("../database.sqlite");

describe('Task objects', () => {
    test('have a title', async () => {
        const testTask = await Task.create({
            title: "title",
            description: "description",
            column: 1,
        })
        expect(testTask.title).toBe('title')
    })
    test('have a description', async () => {
        const testTask = await Task.create({
            title: "title",
            description: "description",
            column: 1,
        })
        expect(testTask.description).toBe('description')
    })
})

describe('Project objects', () => {
    test('have a name', async () => {
        const testProject = await Project.create({
            name: "name",
            summary: "summary",
        })
        expect(testProject.name).toBe('name')
    })
    test('have a summary', async () => {
        const testProject = await Project.create({
            name: "name",
            summary: "summary",
        })
        expect(testProject.summary).toBe('summary')
    })
})
