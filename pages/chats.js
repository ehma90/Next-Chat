import React, {useState, useContext, useEffect} from "react";
import { Context } from "../context";
import { useRouter } from "next/dist/client/router";
import dynamic from "next/dynamic"

const ChatEngine = dynamic(() => {
  import("react-chat-engine").then((module) => module.ChatEngine)
})
const MessageFormSocial = dynamic(() => {
  import("react-chat-engine").then((module) => module.MessageFormSocial)
})

export default function Chats() {
  return <div className="background">chats</div>;
}
