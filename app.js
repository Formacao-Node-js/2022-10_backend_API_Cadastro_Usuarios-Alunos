import dotenv from "dotenv";
dotenv.config();

import { resolve } from "path";
import "./src/database";

import cors from "cors";
import helmet from "helmet";
import express from "express";
import userRoutes from "./src/routes/userRoutes";
import alunoRoutes from "./src/routes/alunoRoutes";
import tokenRoutes from "./src/routes/tokenRoutes";
import photoRoutes from "./src/routes/photoRoutes";

export class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve("uploads")));
  }

  routes() {
    this.app.use("/users", userRoutes);
    this.app.use("/alunos", alunoRoutes);
    this.app.use("/auth", tokenRoutes);
    this.app.use("/photos", photoRoutes);
  }
}

export default new App().app;
