import socketIOClient from "socket.io-client";

export const WS = "https://peerjs-server-n04e.onrender.com";
export const ws = socketIOClient(WS);
