import styled from 'styled-components';
import NavLink from '../app/NavLink.js';

export const Formular = styled.form`
	height: 100%;
	padding: 20px;
	display: grid;
	grid-template-rows: 1fr 3fr 1fr 1fr;
`;

export const Textarea = styled.textarea`
	border: 1px solid #ddd;
	font-size: 1rem;
	padding-left: 5px;
	font-style: italic;
`;

export const Input = styled.input`
	border: 1px solid #ddd;
	font-size: 1rem;
	margin-bottom: 10px;
	padding-left: 5px;
	font-style: italic;
	height: 45px;
`;

export const Label = styled.label`
	margin-bottom: 5px;
	color: #33050a;
	display: grid;
`;

export const Button = styled.button`
	background: linear-gradient(135deg, #562323, #4c4a58);
	padding: 5px;
	color: white;
	font-family: 'Dancing Script', cursive;
	font-size: 2rem;
	text-align: center;
`;

export const Title = styled.h4`
	font-family: 'Dancing Script', cursive;
	font-size: 1.8em;
	margin: 0;
`;

export const DomainTag = styled.li`
	margin: 5px 10px;
	background: linear-gradient(135deg, #322356, #43579c);
	border-radius: 15px;
	box-shadow: -2px 3px 3px 0 #ccc;
	color: white;
	padding: 10px;
`;

export const DomainList = styled.ul`
	display: flex;
`;

export const RouteLink = styled(NavLink)`
	color: #170444;
	font-size: 2em;
	text-align: right;
	font-family: 'Dancing Script', cursive;

	&:hover {
		text-decoration: none;
	}
`;
