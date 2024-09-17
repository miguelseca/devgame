import { NEW_MESSAGE } from "./types";
import { v4 as uuid } from "uuid";

export const newMessage = (text: any) => {

    return {
        type: NEW_MESSAGE,
        item: { id: uuid(), text, timestamp: Date.now()}

    }

}