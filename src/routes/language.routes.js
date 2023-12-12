import { Router } from "express";

const router=Router();

router.get("/", (request, response) => {
    response.send("Api Node.JS Express Mysql")
});

export default router;