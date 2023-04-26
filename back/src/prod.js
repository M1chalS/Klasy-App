import {back} from "./back.js";
import {front} from "./front.js";

back.listen(4000, () => {
    console.log('Backend listening on port 4000');
});

front.listen(4200, () => {
    console.log('Frontend listening on port 4200');
});