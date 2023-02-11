import { Box, styled } from "@mui/material";
import Footer from "./Footer";
import { AccountContext } from "../../../context/AccountProvider";
import { useContext, useState, useEffect } from "react";
import { getMessages, newMessage } from "../../../service/api";
import Message from "./Message";


const Wrapper = styled(Box)`
    background-image: url(${'https://user-images.githubusercontent.com/15075759/28719144-86dc0f70-73b1-11e7-911d-60d70fcded21.png'});
    background-size: 50%;
`

const Component = styled(Box)`
    height: 82vh;
    overflow-y: scroll;
`

const Messages = ({ person, conversation }) => {

  const [value, setValue] = useState('');
  const [messages, setMessages] = useState([]);
  const { account } = useContext(AccountContext);

  useEffect(()=>{
    const getMessageDetails = async () => {
      let data = await getMessages(conversation._id);
      setMessages(data);
    }
    conversation._id && getMessageDetails();
  }, [person._id, conversation._id])

  const senderText = async (e)=> {
    const code = e.keycode || e.which;
    if(code===13) {
      let message = {
        senderId: account.sub,
        receiverId: person.sub,
        conversationId: conversation._id,
        type: 'text',
        text: value
      }

      await newMessage(message);
      setValue('');
    }
  }
  return (
    <Wrapper>
        <Component>
          {
            messages && messages.map(message=>(
              <Message message={message} />
            ))
          }

        </Component>
        <Footer
          senderText={senderText}
          setValue={setValue}
          value={value}
        />
    </Wrapper>
  )
}

export default Messages