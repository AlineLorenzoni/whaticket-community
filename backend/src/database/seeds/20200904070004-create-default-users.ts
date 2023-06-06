import { QueryInterface } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.bulkInsert("Users", [
            {
                name: "Administrador",
                email: "admin@whaticket.com",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "admin",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Aline Lorenzoni - Systema LTDA",
                email: "aline.lorenzoni@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "admin",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Camila Kugelmeyer - Systema LTDA",
                email: "camila.delai@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Daniele Camargo - Systema LTDA",
                email: "daniele@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Eduardo Gaio - Systema LTDA",
                email: "eduardo@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Francisca Morais - Systema LTDA",
                email: "francisca@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Gabriel Guarezi - Systema LTDA",
                email: "gabriel@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "João Henrique - Systema LTDA",
                email: "joao@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Laura Baggio - Systema LTDA",
                email: "laura@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Leocadia Baggio - Systema LTDA",
                email: "leocadia@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Leonardo Sandi - Systema LTDA",
                email: "leonardo@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Leonardo Uberti - Systema LTDA",
                email: "leonardo.uberti@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Luiz Fernando Pelisser - Systema LTDA",
                email: "fernando@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "admin",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Mateus Piovezan - Systema LTDA",
                email: "mateus@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Rosane Gotardo - Systema LTDA",
                email: "rosane@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "admin",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "Vanderlei Cavassin - Systema LTDA",
                email: "vanderlei.cavassin@systemaonline.com.br",
                passwordHash: "$2a$08$WqlkKqTuTNuixFoCCFdBBOyz0HRB1GbrLP16LKqPhgibP5ayP3NAW",
                profile: "user",
                tokenVersion: 0,
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.bulkDelete("Users", {});
    }
};
