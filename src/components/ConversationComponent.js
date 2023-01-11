import React from 'react'
import styled from 'styled-components';
import { SearchContainer, SearchInput } from './ContactListComponent'
import { messagesList } from '../mockData'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: 3;
`

const ProfileHeader = styled.div`
	display: flex;
	flex-direction: row;
	background: #ededed;
	padding: 10px;
	align-items: center;
	gap: 10px;
`

const ProfileImage = styled.img`
	weight: 32px;
	height: 32px;
	border-radius: 50%;
`

const ChatBox = styled.div`
	display: flex;
	background: #f0f0f0;
	padding: 10px;
	align-items: center;
`

const EmojiImage = styled.img`
	weight: 28px;
	height: 28px;
	opacity: 0.4;
	cursor: pointer;
`

const MessageContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	background: #e5ddd6;
	overflow-y: auto;
`

const MessageDiv = styled.div`
	display: flex;
	justify-content: ${(props)=>(props.isYours ? "flex-end":"flex-start")};
	margin: 5px 15px;
`

const Message = styled.div`
	background: ${(props)=>(props.isYours ? "#daf8cd":"white")};
	max-width: 50%;
	color: #303030;
	padding: 8px 10px;
	font-size: 14px;
	border-radius: 4px;
`


const ConversationComponent = () => {
	return (
		<Container>
			<ProfileHeader>
				<ProfileImage src={'/profile/theindiandev.jpeg'} />
				Kushagra Jain
			</ProfileHeader>
			<MessageContainer>
				{messagesList.map((messageData)=>(
					<MessageDiv isYours={messageData.senderID===0}>
						<Message isYours={messageData.senderID===0}>{messageData.text}</Message>
					</MessageDiv>
				))}
			</MessageContainer>
			<ChatBox>
				<SearchContainer>
					<EmojiImage src={"/data.svg"}/>
					<SearchInput placeholder='Type a message'/>
				</SearchContainer>
			</ChatBox>
		</Container>
	)
}

export default ConversationComponent