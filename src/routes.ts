import { Router } from "express";

const router = Router();

router.get("/healthcheck", (request, response) => {
  return response.status(200).json({ message: "Service is online" });
});

export { router };
