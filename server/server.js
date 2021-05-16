const fastify = require('fastify')({ logger: true });
const fs = require('fs');

fastify.post('/', async (request, reply) => {
    console.log('\n','-------------------------------------------');
   console.log(request.body);
    console.log('-------------------------------------------', '\n');
    fs.writeFile(
        'testFile.txt',
        `Матрица: ${request.body.matrix} \n Сумма строк c 1й до последней соответсвенно ${request.body.rowSum}`,
        (err) => {
        if(err) throw err;
    });
    return { fileStatus: 'OK' }
})

fastify.get('/get-file', function (request, reply) {
    fs.readFile('testFile.txt', (err, fileBuffer) => {
        reply.send(err || fileBuffer)
    })
})

const start = async () => {
    try {
        await fastify.listen(3000)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()
//https://habr.com/ru/company/ruvds/blog/452566/