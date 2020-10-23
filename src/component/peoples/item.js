import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { EditFilled, DeleteFilled, CheckCircleFilled } from '@ant-design/icons';

const Item = (props) => {
	const [ name, setName ] = useState(props.name);
	const [ surname, setSurname ] = useState(props.surname);
	const [ updating, setUpdating ] = useState(false);

	if (!updating)
		return (
			<tr>
				<td>{name}</td>
				<td>{surname}</td>
				<td>
					<Button
						onClick={() => {
							setUpdating(true);
						}}
					>EDIT <EditFilled /></Button>

					<Button
						onClick={() => { props.deleteItem(props.nr) }}
                        danger
					>DEL <DeleteFilled /></Button>
				</td>
			</tr>
		);
	else
		return (
			<tr>
				<td>
					<Input
						type="text"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</td>
				<td>
					<Input
						type="text"
						onChange={(e) => {
							setSurname(e.target.value);
						}}
					/>
				</td>
				<td>
					<Button
						onClick={() => {
							setUpdating(false);
							props.updateItem(props.nr, name, surname);
						}}
					>DONE <CheckCircleFilled /></Button>
				</td>
			</tr>
		);
};

export default Item;
