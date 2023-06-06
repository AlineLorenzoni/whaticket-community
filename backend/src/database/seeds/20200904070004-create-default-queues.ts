import { QueryInterface } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.bulkInsert("Queues", [
            {
                name: "DÚVIDAS DE UTILIZAÇÃO",
                color: "#68bc00",
                greetingMessage: "Como podemos ajudá-lo? Digite sua dúvida e aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "ERRO RETORNADO PELA BASE",
                color: "#d33115",
                greetingMessage: "Como podemos ajudá-lo? Me conta qual erro esta retornando, em breve um de nossos atendentes ira lhe ajudar.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "ALTERAÇÃO PELO BANCO DE DADOS",
                color: "#fccb00",
                greetingMessage: "Como podemos ajudá-lo? Poderia me dar mais detalhes? Aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "PROBLEMAS NA ROTINA",
                color: "#f44e3b",
                greetingMessage: "Gostaria de ajudar você a solucionar esse problema. Poderia me dar mais detalhes? Aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "SOLICITAÇÃO",
                color: "#008b02",
                greetingMessage: "Poderia me dar mais detalhes referente a solicitação? Aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "RELATÓRIOS SYSRELAT",
                color: "#fcdc00",
                greetingMessage: "Você poderia me dar mais detalhes sobre o relatório? Aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "RELATÓRIO EXTERNO",
                color: "#fcc400",
                greetingMessage: "Você poderia me dar mais detalhes sobre o relatório? Aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "PROBLEMAS NO SERVIDOR",
                color: "#db3e00",
                greetingMessage: "Gostaria de ajudar você a solucionar esse problema. Poderia me dar mais detalhes? Aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "AJUDA AO CLIENTE - SUPORTE",
                color: "#a4dd00",
                greetingMessage: "Como podemos ajudá-lo? Digite sua dúvida e aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "TREINAMENTO",
                color: "#fb9e00",
                greetingMessage: "Olá, seja bem-vindo a Systema! Como podemos ajudá-lo? Digite sua dúvida e aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "OUTROS",
                color: "#68ccca",
                greetingMessage: "Como podemos ajudá-lo? Digite sua dúvida e aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                name: "COMERCIAL",
                color: "#009ce0",
                greetingMessage: "Como podemos ajudá-lo? Aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.bulkDelete("Queues", {});
    }
};