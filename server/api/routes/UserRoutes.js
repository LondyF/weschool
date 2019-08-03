import { Router } from "express";
import UserService from "../../services/UserService"
const route = Router();

export default (app) => {
    const UserServiceInstance = new UserService();

    app.use(route);

    route.get('/me', (req, res) => {
        res.send(UserServiceInstance.getUser())
    })
}   