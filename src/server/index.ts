import Koa from "koa";
import appRoot from "app-root-path";
import dotenv from "dotenv";
import Application from "./Application";
import website from "./routes/website";
import tracker from "./routes/tracker";
import db from "./service/Db";

dotenv.config();

(async () => {
  const pathToViews = appRoot + "/src/server/views";
  const dbConnection = await db(
    process.env.MONGO_INITDB_ROOT_USERNAME,
    process.env.MONGO_INITDB_ROOT_PASSWORD,
    process.env.MONGO_DB_NAME
  );

  new Application(new Koa(), website, pathToViews).run(
    process.env.WEBSITE_PORT,
    "website"
  );
  new Application(new Koa(), tracker, pathToViews, dbConnection).run(
    process.env.TRACKER_PORT,
    "tracker"
  );
})();
