import "reflect-metadata";
import * as Koa from 'koa';
import * as koaBody from 'koa-bodyparser';
import * as Router from '@koa/router';
import * as cors from '@koa/cors';
import { config } from "dotenv";

import { Connection, Repository } from "typeorm";
import { Room } from "./models/room";
import { initDB } from "./initialize-db";

interface ModifiedKoaContext extends Koa.Context {
  connection: Connection
};

config();
const app = new Koa();

const router = new Router({
  prefix: "/v1",
});

// @ts-ignore
router.get("/test", (ctx: ModifiedKoaContext, next) => {
  const { amount } = ctx.request.body;
  const roomRepo = ctx.connection.getRepository(Room);
  console.log(">>>>>> Working, Hello World");
  ctx.body = {
    body: "Hello World"
  };
  return next();
});

app.use(koaBody({}));
app.use(cors());
app.use(router.routes());
app.use(router.allowedMethods());

(async () => {
  const _PORT = process.env.PORT || 5001;
  app.context.connection = await initDB();
  app.listen(_PORT, function listening() {
    console.log('Listening on %d', _PORT);
  });
})();

