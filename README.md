# Project Setup

First create `.env` file, which should have your
DB connection URL, for eg:

```toml
DATABASE_URL=postgresql://postgres:test@0.0.0.0:5432/postgres
```

Start a Postgres instance

```sh
docker run -it --rm --name test-postgres -p 5432:5432 -e POSTGRES_PASSWORD=test postgre
```

Now start the server:

```sh
> yarn install
> yarn dev:api
> node ./dist-server/app.js

```

Running the above command throws, and error:

```sh
>  node ./dist-server/app.js

(node:37118) UnhandledPromiseRejectionWarning: tsc-repro/server/models/room.ts:1
import { Entity, PrimaryColumn, Column } from "typeorm";
^^^^^^

SyntaxError: Cannot use import statement outside a module
    at wrapSafe (internal/modules/cjs/loader.js:979:16)
    at Module._compile (internal/modules/cjs/loader.js:1027:27)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Module.require (internal/modules/cjs/loader.js:952:19)
    at require (internal/modules/cjs/helpers.js:88:18)
    at tsc-repro/node_modules/typeorm/util/DirectoryExportedClassesLoader.js:42:39
    at Array.map (<anonymous>)
    at Object.importClassesFromDirectories (tsc-repro/node_modules/typeorm/util/DirectoryExportedClassesLoader.js:42:10)
(Use `node --trace-warnings ...` to show where the warning was created)
(node:37118) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). To terminate the node process on unhandled promise rejection, use the CLI flag `--unhandled-rejections=strict` (see https://nodejs.org/api/cli.html#cli_unhandled_rejections_mode). (rejection id: 1)
(node:37118) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.
```
