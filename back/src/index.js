import {front} from "./front.js";
import {back} from "./back.js";

back.listen(4000, () => {
    console.log('Listening on port 4000');
});

front.listen(4444, () => {
    console.log('Listening on port 4444');
});