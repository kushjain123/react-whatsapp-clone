import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
	flex: 1.6;
	background: #f6f7f8;
`;

const ProfileInfoDiv = styled.div`
	display: flex;
	flex-direction: row;
	background: #ededed;
	padding: 10px;
`;

const ProfileImage = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
`;

const SearchBox = styled.div`
	display: flex;
	background: #f6f6f6;
	padding: 10px;
`;

const SearchContainer = styled.div`
	display: flex;
	flex-direction: row;
	background: white;
	border-radius: 16px;
	width: 100%;
	padding: 5px 10px;
`;

const SearchIcon = styled.img`
	width: 28px;
	height: 28px;
`

const SearchInput = styled.input`
	width: 100%;
	outline: none;
	border: none;
	font-size: 15px;
`

const ContactItem = styled.div`
	display: flex;
	flex-direction: row;
	border-bottom: 1px solid #f2f2f2;
	background: white;
	cursor: pointer;
	padding: 15px 12px;
`

const ProfileIcon = styled(ProfileImage)`
	width: 38px;
	height: 38px;
`

const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 0px 12px;
`

const ContactName = styled.span`
	width: 100%;
	font-size: 16px;
	color: black;
`

const MessageText = styled.span`
	width: 100%;
	font-size: 14px;
	margin-top: 3px;
	color: rgba(0, 0, 0, 0.8);
`
const MessageTime = styled.span`
	font-size: 12px;
	margin-right: 10px;
	color: rgba(0, 0, 0, 0.45);
	white-space: nowrap;
`


const ContactComponent = () => {
	return (
		<ContactItem>
			<ProfileIcon src={"/profile/theindiandev.jpeg"}/>
			<ContactInfo>
				<ContactName>Ayush k</ContactName>
				<MessageText>Hey Man!</MessageText>
			</ContactInfo>
			<MessageTime>05:32 PM</MessageTime>
		</ContactItem>
	)
}
const ContactListComponent = () => {
	return (
		<Container>
			<ProfileInfoDiv>
				<ProfileImage src="/profile/theindiandev.jpeg"/>
			</ProfileInfoDiv>
			<SearchBox>
				<SearchContainer>
					<SearchIcon src={"/search-icon.svg"}/>
					<SearchInput placeholder='Search or start new chat'/>
				</SearchContainer>
			</SearchBox>
			<ContactComponent />
		</Container>
	)
}

export default ContactListComponent