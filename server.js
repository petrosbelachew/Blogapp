import mongoose from "mongoose";

import express from "express";
import { dbConnection } from "./src/config/db.js";
import { appview } from "./src/app.js";

// Main express app setups
appview();
//Connect to MongoDB

// db connection funcion call
dbConnection();
