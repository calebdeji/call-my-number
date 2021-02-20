import request from "api/request";
import { CallPayload, CallResponse } from "./types";

const call = async (payload: CallPayload): Promise<CallResponse> => {
  try {
    const url = `${process.env.REACT_APP_BASE_ENDPOINT}/setUpCall`;
    const response = await request(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw Error(response.statusText);
    }

    return response.json();
  } catch (error) {
    return {
      message: error.message,
      status: "failed",
    };
  }
};

const callService = { call };

export default callService;
