import app  from "./app";
import { environment }  from '../environments/environment';

let PORT = environment.port || 3000;

app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
})