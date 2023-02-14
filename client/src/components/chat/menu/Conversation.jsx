import { Box, Typography, styled  } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { AccountContext } from "../../../context/AccountProvider";
import { UserContext } from "../../../context/UserProvider";
import { setConversation, getConversation } from "../../../service/api";
import { formatDate } from "../../../utils/common-utils";
import { emptyProfilePicture } from "../../../constants/data";

const Component = styled(Box)`
  display: flex;
  height: 45px;
  padding: 13px 0;
  cursor: pointer;
`

const Image = styled('img')({
  width: 50,
  height: 50,
  borderRadius: '50%',
  padding: '0 14px',
  objectFit: 'cover'
})

const Container = styled(Box)`
  display: flex;
`

const Timestamp = styled(Typography)`
  font-size: 12px;
  margin-left:auto;
  color:#00000099;
  margin-right:20px;

`

const Text = styled(Typography)`
  font-size: 14px;
  color:rgba(0,0,0,0.6);
  display: block;
`

const Conversation = ({ user }) => {

  const url = user.picture || emptyProfilePicture;

  const { setPerson } = useContext(UserContext);
  const { account, newMessageFlag }  = useContext(AccountContext);

  const [message,setMessage] = useState({});

  useEffect(() => {
    const getConversationMessage = async() => {
        const data = await getConversation({ senderId: account.sub, receiverId: user.sub });
        setMessage({ text: data?.message, timestamp: data?.updatedAt });
    }
    getConversationMessage();
}, [newMessageFlag]);

  const getUser = async () => {
    setPerson(user);
    await setConversation({ senderId: account.sub, receiverId: user.sub })
  }
  return (
    <Component onClick={()=>getUser()}>
      <Box>
        <Image src={url} alt="display picture" />
      </Box>
      <Box style={{width:'100%'}}>
        <Container>
          <Typography>{user.name}</Typography>
          {
            message?.text && <Timestamp>{formatDate(message?.timestamp)}</Timestamp>
          }
        </Container>
        <Box>
          <Text>{message?.text?.includes('localhost')?'media':message.text}</Text>
        </Box>
      </Box>
    </Component>
  )
}

export default Conversation