import { Index } from "../../../app/controllers/index/index.controller.js";
import { server } from "../../server/server.module.js";
import { renderAsync } from "../core/render.js";

const { app } = server
const index = new Index()

export function IndexRouter(url) {
    app.get(url, (req, res) => renderAsync(req, res, index.home))
}