import type { Request, Response } from "@tinyhttp/app";

export const responder = (req: Request, res: Response) => {
    try {

    } catch (exception) {
        res.json({erro: ""});
    }
};