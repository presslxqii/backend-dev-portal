import {Express} from "express";
import promClient = require("prom-client");
import {requestWatch, reset} from "./mw";

const pkg = require("../../package.json");

export function init(app: Express) {
    promClient.register.setDefaultLabels({
        fes: pkg.name,
        version: pkg.version
    });
    promClient.collectDefaultMetrics();
    app.get("/metrics", (req, res) => {
        res.end(promClient.register.metrics());
        reset();
    });
    app.use(requestWatch);
}
