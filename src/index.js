import ReactDOM from "react-dom";
import App from "./App";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { setupInterceptor } from "./shared/setupInterceptor";

setupInterceptor( axios );

ReactDOM.render( <App />, document.getElementById( 'root' ) );
