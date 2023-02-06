import { Box, styled, InputBase } from "@mui/material";
import { Mic, AttachFile, EmojiEmotionsOutlined } from "@mui/icons-material";
import { useState } from "react";

const Container = styled(Box)`
    height: 55px;
    background: #ededed;
    display: flex;
    width: 100%;
    align-items: center;
    padding: 0 15px;
    & > * {
        margin: 5px;
        color: #919191;
    }
`
const Search = styled(Box)`
    background-color: #FFFFFF;
    border-radius: 18px;
    width: calc(94% - 100px);
`

const ClipIcon = styled(AttachFile)`
    transform: rotate(40deg)
`

const InputField = styled(InputBase)`
    width: 100%;
    padding: 20px;
    height: 20px;
    padding-left: 25px;
    font-size: 14px;
`

const Footer = () => {
    
    const [ text, setText ] = useState('');
  return (
    <Container>
        <EmojiEmotionsOutlined />
        <ClipIcon />
        <Search>
            <InputField placeholder="Type a message"
                onChange={(e)=>e.target.value}
            />
        </Search>
        <Mic />
    </Container>
  )
}

export default Footer