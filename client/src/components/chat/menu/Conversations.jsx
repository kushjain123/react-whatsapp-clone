import { useEffect, useState, useContext } from "react"
import { getUsers } from "../../../service/api";
import { Box, styled, Divider } from "@mui/material";
import Conversation from "./Conversation";
import { AccountContext } from "../../../context/AccountProvider";

const Component = styled(Box)`
    height: 81vh;
    overflow: overlay;
`

const StyledDivider = styled(Divider)`
    margin: 0 0 0 70px;
    background-color: #e9edf;
    opacity: 0.6;
`

const Conversations = ({ text }) => {

    const [ users, setUsers ] = useState([]);

    const { account, socket, setActiveUsers } = useContext(AccountContext);

    useEffect(()=>{
        const fetchData = async () => {
            let response = await getUsers();
            let filteredData = response.filter(user=>user.name.toLowerCase().includes(text.toLowerCase()));
            setUsers(filteredData);
        }
        fetchData();
    },[ text ])

    useEffect(()=>{
        socket.current.emit('addUser',account);
        socket.current.on('getUsers',users=>{
            setActiveUsers(users);
        });
    },[ account ])


    return (
        <Component>
            {
                users.map((user,index) => (
                    user.sub!== account.sub &&
                    <>
                        <Conversation user={user}/>
                        {
                            users.length !== (index + 1)  && <StyledDivider />
                        }
                    </>
                ))
            }
        </Component>
    )
}

export default Conversations