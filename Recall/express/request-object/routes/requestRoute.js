import express from "express";
import {
  adddata,
  getdatabynumber,
  getdataByQuery,
  getdataByheaders
} from "../controller/requestController.js";

const requestRouter = express.Router();

/*
    BASE URL:
    http://localhost:5000/api/request
*/

/*
1️⃣ BODY (POST)
POST http://localhost:5000/api/request/createdata
*/
requestRouter.post("/createdata", adddata);


/*
2️⃣ PARAMS (GET)
GET http://localhost:5000/api/request/getdatabyNumber/100000
*/
requestRouter.get("/getdatabyNumber/:useridbynumber", getdatabynumber);


/*
3️⃣ QUERY (GET)
GET http://localhost:5000/api/request/getdatabyquery?name=Karthik&age=22
*/
requestRouter.get("/getdatabyquery", getdataByQuery);


/*
4️⃣ HEADERS (GET)
GET http://localhost:5000/api/request/headers
*/
requestRouter.get("/headers", getdataByheaders);


export default requestRouter;
