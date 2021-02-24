import { defaults, error } from '@pnotify/core';
import '@pnotify/core/dist/Material.css';
import '@pnotify/core/dist/PNotify.css';


function errorNotification() {
     defaults.icons = 'material';
     defaults.styling = 'material';
     
     return error({
       text:
         'Sorry, no results are found! Please enter a good request!',
     });
}

export default errorNotification