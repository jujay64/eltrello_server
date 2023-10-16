import { Request } from "express";
import { UserDocument } from './user.interface';
import { BoardDocument } from "./board.interface";
export interface ExpressRequestInterface
    extends Request{
    user?: UserDocument;
    board?: BoardDocument;
}