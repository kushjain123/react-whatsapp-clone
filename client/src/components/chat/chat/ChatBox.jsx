import { useContext, useEffect } from "react";
import { Box } from "@mui/material";
import ChatHeader from "./ChatHeader";
import Messages from "./Messages";
import { AccountContext } from "../../../context/AccountProvider";

const ChatBox = () => {
  const { person, account } = useContext(AccountContext);

  useEffect(() => {
    const getConversationDetails = async () => {
      let data = await getConversation({ senderId: account.sub, receiverId: person.sub });
  }
  getConversationDetails();

  },[])
  return (
    <Box style={{height: '75%'}}>
      <ChatHeader person={person} />
      <Messages person={person} />
    </Box>
  )
}

export default ChatBox