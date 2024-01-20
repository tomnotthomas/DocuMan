import StatusOfDocuments from "../Models/status-of-documents-model.js"
import { Request, Response, NextFunction} from "express";
import { IStatus } from "../types/model-types.js";


const getAllDocuments= async function(req : Request, res : Response, next : NextFunction) {
  try{
  const allDocuments : Array<IStatus> = await StatusOfDocuments.find({});
  res.status(201).send(allDocuments);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).send(err);
  }
}


export default getAllDocuments