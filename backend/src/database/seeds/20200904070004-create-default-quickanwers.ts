import { QueryInterface } from "sequelize";

module.exports = {
    up: (queryInterface: QueryInterface) => {
        return queryInterface.bulkInsert("QuickAnswers", [
            {
                shortcut: "ola",
                message: "Olá, seja bem-vindo a Systema! Como podemos ajudá-lo? Digite sua dúvida e aguarde que nossos atendentes já iram lhe atender.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "ola",
                message: "Olá, tudo bem? Em que posso ajudar?",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "bemvindo",
                message: "Bem vindo a Systema! O que eu posso fazer por você hoje?",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "ola",
                message: "Olá! Tudo bem? Assim que houver alguém disponível enviaremos uma resposta por aqui.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "aguarde",
                message: "Aguarde um momento, estamos verificando...",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "aguarde",
                message: "Estou resolvendo seu problema, aguarde...",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "protocolo",
                message: "Vou te ajudar, você pode me informar o número do protocolo?",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "tchau",
                message: "Muito obrigado pelo seu contato.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "tchau",
                message: "Agradecemos o seu contato e desejamos um ótimo dia!",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "tchau",
                message: "Espero ter te ajudado, até mais.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "tchau",
                message: "Muito obrigado(a) pelo seu contato. Caso tenha alguma outra dúvida, não hesite em entrar em contato novamente.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "tchau",
                message: "Agradecemos o contato, e lembre-se pode entrar em contato conosco sempre que precisar, estaremos a sua disposição!",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "tchau",
                message: "Até mais, obrigada por entrar em contato com a Systema.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "tchau",
                message: "Obrigada pelo seu contato! Até a próxima.",
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                shortcut: "tchau",
                message: "Posso ajudar você em algo mais? Se não, agradeço pelo contato!",
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },
    down: (queryInterface: QueryInterface) => {
        return queryInterface.bulkDelete("QuickAnswers", {});
    }
};