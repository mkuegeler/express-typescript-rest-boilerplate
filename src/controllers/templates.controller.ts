import express from 'express';

class TemplatesController {
    
    async list(req: express.Request, res: express.Response) {
        // const templates = await TemplatesService.list(100, 0);
        // res.status(200).send(templates);
        res.status(200).send("list");
        
    }

    async getById(req: express.Request, res: express.Response) {
        // const template = await TemplatesService.readById(req.body.id);
        // res.status(200).send(template);
        res.status(200).send("getById");
    }

    async create(req: express.Request, res: express.Response) {
        // const templateId = await TemplatesService.create(req.body);
        // res.status(201).send({ id: templateId });
        // res.status(200).send("create");
        res.status(200).send(req.body);
    }

    async patch(req: express.Request, res: express.Response) {
        // await TemplatesService.patchById(req.body.id, req.body)
        // res.status(204).send();
        // res.status(200).send("patch");
        res.status(200).send(req.body);
    }

    async put(req: express.Request, res: express.Response) {
        // await TemplatesService.putById(req.body.id, req.body)
        // res.status(204).send();
        // res.status(200).send("put");
        res.status(200).send(req.body);
    }

    async remove(req: express.Request, res: express.Response) {
        // await TemplatesService.deleteById(req.body.id);
        // res.status(204).send();
        //  res.status(200).send("remove");
        res.status(200).send(req.body);
    }

}

export default new TemplatesController;