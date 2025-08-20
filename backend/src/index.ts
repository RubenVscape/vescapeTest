import 'reflect-metadata'

require("dotenv").config()
import { createExpressServer, RoutingControllersOptions } from 'routing-controllers';
import { connectDB } from './config/db';
import { authorizationChecker, currentUserChecker } from './auth/authorizationChecker';
const port = process.env.PORT || "3002";

 connectDB();

 const routingControllersOptions: RoutingControllersOptions = {
    routePrefix: "/api",
    controllers: [`${__dirname}/controller/*.controller.*`],
    validation:true, 
    classTransformer: true,
    cors: true,
    defaultErrorHandler:true,
    authorizationChecker,
    currentUserChecker
 };

const app = createExpressServer(routingControllersOptions);
app.listen(port, () => {
    console.log("[Server] running at http://localhost:" + port)
})

export default app;