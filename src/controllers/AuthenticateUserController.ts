import { Request, Response } from 'express';
import { AuthenticateUseService } from '../services/AuthenticateUseService';

class AuthenticateUserController {
    async handler(request: Request, response: Response){
        const { code } = request.body;
        const service = new AuthenticateUseService();
        try {
            const result = await service.execute(code);
            return response.json(result);
        } catch (err) {
            return response.json({ error: err })
        }    
    }
}

export { AuthenticateUserController };