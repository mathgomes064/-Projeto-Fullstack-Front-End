import { IUserCreate } from "../user";

export interface IComment{
    User: IUserCreate,
    created_at: Date,
    description: string
}