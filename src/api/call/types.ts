export interface CallPayload {
  time: number;
  phone_number: string;
}

export interface CallResponse {
  status: "success" | "failed";
  message: string;
}
