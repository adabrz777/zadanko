import React, { useState } from 'react';

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
					<input
						type="button"
						value="EDIT"
						onClick={() => {
							setUpdating(true);
						}}
					/>

					<input
						type="button"
						value="DEL"
						onClick={() => {
							props.deleteItem(props.nr);
						}}
					/>
				</td>
			</tr>
		);
	else
		return (
			<tr>
				<td>
					Imię:{' '}
					<input
						type="text"
						onChange={(e) => {
							setName(e.target.value);
						}}
					/>
				</td>
				<td>
					Nazwisko:{' '}
					<input
						type="text"
						onChange={(e) => {
							setSurname(e.target.value);
						}}
					/>
				</td>
				<td>
					<input
						type="button"
						value="DONE"
						onClick={() => {
							setUpdating(false);
							props.updateItem(props.nr, name, surname);
						}}
					/>
				</td>
			</tr>
		);
};

export default Item;
