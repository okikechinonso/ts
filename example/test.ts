import fastify, { FastifyRequest, FastifyReply } from "fastify";
import fs from 'fs';

const app = fastify({ logger: true });
const port = 4000;

app.get("/keys", async (request: FastifyRequest, reply: FastifyReply) => {
    let privateKey = fs.readFileSync('keys/private.jwk');

    return reply.code(200).send(privateKey);
});

app.listen(port, (err, address) => {
    if (err) {
        app.log.error(err);
        process.exit(1);
    }
    app.log.info(`server listening on ${address}`);
});
