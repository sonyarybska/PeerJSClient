import socketIOClient from "socket.io-client";

export const WS = "https://peerjs-server-test.onrender.com/";
export const ws = socketIOClient(WS);
