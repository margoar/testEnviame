
import express,{Application} from 'express';
import Empresarouter from '../routes/empresa';
class Server {
    
    private app: Application;
    private port: string;
    private apiPaths = {
        empresas : '/api/empresas'
    }

    constructor(){

        this.app = express();
        this.port = process.env.PORT || '8000';
        this.routes();
    }

    routes(){
        this.app.use(this.apiPaths.empresas, Empresarouter)
    }

    listen(){
        this.app.listen(  this.port, () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
            
        } )
    }
}

export default Server;