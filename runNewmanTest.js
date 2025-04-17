const newman = require('newman'); 

const collectionPath = './tests/Test Cases.postman_collection.json';

newman.run({
    collection: require(collectionPath),
    iterationCount: 100,
    reporters: ['cli', 'html'],
    reporter: {
        html: {
            export: './report.html' 
        }
    }
}, function (err, summary) {
    if (err) { 
        console.error('Erro ao executar os testes:', err); 
    } else {
        console.log('Testes executados com sucesso!');
        console.log('Resumo dos testes:', summary.run.stats);
    }
});
