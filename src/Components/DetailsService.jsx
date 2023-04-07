import axios from "axios";
import relativeURLConstant from "./relativeUrlConstant";

export const chat = async (studentName,alumniName,message,msgDate) => {
    return await axios.put(
        relativeURLConstant.BACKEND_SERVER_URL +
        relativeURLConstant.INTERACTION +
        studentName + alumniName + message + msgDate
    );
}