import React from 'react';
import Item from './item.js';


import { Button, Input, Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';

import './index.css';

class Peoples extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [
				{
					name: 'Adam',
					surname: 'Kowalski'
				},
				{
					name: 'Jakub',
					surname: 'Nowak'
				},
				{
					name: 'Mateusz',
					surname: 'Nowakowski'
				}
			],

			newName: '',
			newSurname: '',
			errorMessane: ''
		};
	}

	addItem = (e) => {
		e.preventDefault();
		let { list, newName, newSurname } = this.state;

		if (newName === '' || newSurname === '') {
			this.setState({
				errorMessane: 'Uzupełnij pola!'
			});
		} else {
			list.push({
				name: this.state.newName,
				surname: this.state.newSurname
			});

			this.setState({
				list: list,
				newName: '',
				newSurname: '',
				errorMessane: ''
			});
		}
	};

	deleteItem = (itemNr) => {
		let list = this.state.list;

		list = list.filter((i) => {
			return i !== list[itemNr];
		});

		this.setState({
			list
		});
	};

	updateItem = (itemNr, updatedName, updatedSurname) => {
		let list = this.state.list;

		list[itemNr] = {
			name: updatedName,
			surname: updatedSurname
		};

		this.setState({
			list
		});
	};

	handleNewNameChange = (e) => {
		this.setState({
			newName: e.target.value
		});
	};

	handleNewSurnameChange = (e) => {
		this.setState({
			newSurname: e.target.value
		});
	};

	render() {
		const { list, newName, newSurname, errorMessane } = this.state;
		const { deleteItem, addItem, updateItem, handleNewNameChange, handleNewSurnameChange } = this;

		return (
			<div className='Peoples'>
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Surname</th>
							<th>Options</th>
						</tr>
					</thead>
					<tbody>
						{list.map((i, key) => (
							<Item
								name={i.name}
								surname={i.surname}
								nr={key}
								deleteItem={deleteItem}
								updateItem={updateItem}
								key={key}
							/>
						))}
					</tbody>
				</table>
				<form>
					<Input type="text" value={newName} placeholder="Name" onChange={handleNewNameChange} />{' '}
					<Input type="text" value={newSurname} placeholder="Surname" onChange={handleNewSurnameChange} />{' '}
					<Button type="primary" onClick={addItem}>
						ADD <CheckOutlined className='trash-bin--green' />
					</Button>
					<br />
					<Typography.Text type="danger">{errorMessane}</Typography.Text>
				</form>
			</div>
		);
	}
}

export default Peoples;
