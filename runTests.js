const axios = require('axios');

const fetchJoke = async () => {
    const url = "https://official-joke-api.appspot.com/random_joke";
    
    try {
        const start = Date.now();
        const response = await axios.get(url);
        const duration = Date.now() - start;
        
        console.log(`Response time: ${duration}ms`);
        const joke = response.data;
        
        if (joke.type && joke.setup && joke.punchline && joke.id) {
            console.log("Joke fetched successfully:", joke);
        } else {
            console.log("Erro: Falta um ou mais campos obrigatórios na resposta.");
        }
    } catch (error) {
        console.error("Erro na requisição:", error.message);
    }
};

const simulateUsers = async () => {
    const promises = [];
    
    for (let i = 0; i < 10; i++) {
        promises.push(fetchJoke());
    }
    
    await Promise.all(promises);
    console.log("Todos os usuários completaram as requisições.");
};

simulateUsers();
