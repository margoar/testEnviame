
import express,{Application} from 'express';
import Empresarouter from '../routes/empresa';
import cors  from 'cors';
import db from '../db/connection';
import Deliveryrouter from '../routes/delivery';
import Empleadorouter from '../routes/empleado';
import Palindromorouter from '../routes/palindromo';
import Fibonaccirouter from '../routes/fibonacci';
class Server {
    
    private app: Application;
    private port: string;
    private apiPaths = {
        empresa : '/api/empresas',
        delivery: '/api/delivery',
        empleado: '/api/empleado',
        palindromo: '/api/palindromo',
        fibonacci: '/api/fibonacci'
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
        this.app.use(this.apiPaths.empresa, Empresarouter);
        this.app.use(this.apiPaths.delivery, Deliveryrouter);
        this.app.use(this.apiPaths.empleado, Empleadorouter);
        this.app.use(this.apiPaths.palindromo, Palindromorouter);
        this.app.use(this.apiPaths.fibonacci, Fibonaccirouter);        
    }

    listen(){
        this.app.listen(  this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
            
        } )
    }
}

export default Server;