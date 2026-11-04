export interface AgoraTokenData {
  token: string;
  uid: string | number;
  channel: string;
}

export interface AgoraTokenResponse {
  status: boolean;
  message: string;
  data: AgoraTokenData;
}
