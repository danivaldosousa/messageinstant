import { Router } from "express";
import { AuthenticateUserController } from "./controllers/AuthenticateUserController";
import { CreateMessageControler } from "./controllers/CreateMessageControler";
import { GetLast3MessagesControler } from "./controllers/GetLast3MessagesControler";
import { ProfileUserControler } from "./controllers/ProfileUserControler";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const router = Router();

router.post("/authenticate", new AuthenticateUserController().handler);

router.post('/messages', ensureAuthenticated, new CreateMessageControler().handler);

router.get('/messages/last3', new GetLast3MessagesControler().handler);

router.get('/profile', ensureAuthenticated, new ProfileUserControler().handler)

export { router }; 