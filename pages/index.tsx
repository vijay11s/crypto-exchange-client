import { Inter } from "next/font/google";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import CoinList from "@/components/CoinList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // const socket = io("http://localhost:3001");
  const [val, setVal] = useState(0);

  // useEffect(() => {
  //   socket.on("connect", () => {
  //     const engine = socket.io.engine;

  //     console.log(engine.transport.name, "ENGINE NAME");
  //     console.log("connected");
  //     console.log(socket.id); // x8WIv7-mJelg7on_ALbx

  //     engine.once("upgrade", () => {
  //       // called when the transport is upgraded (i.e. from HTTP long-polling to WebSocket)
  //       console.log(engine.transport.name); // in most cases, prints "websocket"
  //     });
  //   });
  //   socket.on("message", (data) => {
  //     console.log("Received message:", data);
  //     setVal(data);
  //     // Do something with the received message
  //   });
  // }, []);

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <CoinList targetCurrency="USD" />
    </main>
  );
}
