import axios from "axios";

export const chat = async (requestBodyArray) => { 
    return await axios.post(
        `http://localhost:8080/interactions?${requestBodyArray}`
    );
}

export const fetchMsgs = async (alumniAndStudent)=> {
    return await axios.get(
        `http://localhost:8080/fetchMsg?${alumniAndStudent}`
    );
}