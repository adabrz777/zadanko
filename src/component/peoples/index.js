import React from 'react';
import Item from './item.js';

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
					surname: 'Iksiński'
				}
			],

			newName: '',
			newSurname: ''
		};
	}

	addItem = (e) => {
		e.preventDefault();

		let list = this.state.list;

		list.push({
			name: this.state.newName,
			surname: this.state.newSurname
		});

		this.setState({
			list
		});
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
		const { list, newName, newSurname } = this.state;
		const { deleteItem, addItem, updateItem, handleNewNameChange, handleNewSurnameChange } = this;

		return (
			<div>
				<table>
                    <thead>
                    <tr>
						<th>Imię</th>
						<th>Nazwisko</th>
						<th>Opcje</th>
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

				<form onSubmit={addItem}>
					Imię: <input type="text" value={newName} placeholder="imię" onChange={handleNewNameChange} />
					<br />
					nazwisko:{' '}
					<input type="text" value={newSurname} placeholder="nazwisko" onChange={handleNewSurnameChange} />
					<br />
					<input type="submit" value="DODAJ" />
				</form>
			</div>
		);
	}
}

export default Peoples;
