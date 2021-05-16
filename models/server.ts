
import express,{Application} from 'express';
import Empresarouter from '../routes/empresa';
import cors  from 'cors';
import db from '../db/connection';
class Server {
    
    private app: Application;
    private port: string;
    private apiPaths = {
        empresa : '/api/empresas'
    }

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnection();
        this.middlewares();
        this.routes();
 
    }

    async dbConnection (){
        try {
            await db.authenticate();
            console.log("Database online");
            
            
        } catch (error) {
            throw new Error(error);
        }
    }

    middlewares(){
        this.app.use(cors());

        this.app.use(express.json());

    }

    routes(){
        this.app.use(this.apiPaths.empresa, Empresarouter)
    }

    listen(){
        this.app.listen(  this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
            
        } )
    }
}

export default Server;