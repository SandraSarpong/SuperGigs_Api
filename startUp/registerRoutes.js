import express from "express";
import userRoute from "../routes/user.route.js";
import gigRoute from "../routes/gig.route.js";
import orderRoute from "../routes/order.route.js";
import conversationRoute from "../routes/conversation.route.js";
import messageRoute from "../routes/conversation.route.js";
import reviewRoute from "../routes/review.route.js";
import authRoute from "../routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler } from "../middleware/errorHandler.js";

export const setUpRoutes = (app) => {
  app.use(express.json());
  app.use(cors({
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': 'http://supergigs.reglonow.org',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false,
    credentials: true
  }));
  app.use(express.json());
  app.use(cookieParser());
  app.use(express.urlencoded({ extended: true }));
  app.use("/api/auth", authRoute);
  app.use("/api/users", userRoute);
  app.use("/api/gigs", gigRoute);
  app.use("/api/orders", orderRoute);
  app.use("/api/conversations", conversationRoute);
  app.use("/api/messages", messageRoute);
  app.use("/api/reviews", reviewRoute);
  app.use(errorHandler);
};
