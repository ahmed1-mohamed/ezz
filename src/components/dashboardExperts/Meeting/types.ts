import { IRemoteVideoTrack, IRemoteAudioTrack } from "agora-rtc-sdk-ng";

export interface RemoteUser {
  uid: string | number;
  videoTrack?: IRemoteVideoTrack;
  audioTrack?: IRemoteAudioTrack;
  hasVideo: boolean;
  hasAudio: boolean;
}