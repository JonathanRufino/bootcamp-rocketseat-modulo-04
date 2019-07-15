import React, { Component } from 'react';

import TechItem from './TechItem';

class TechList extends Component {
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native',
    ],
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  }

  handleSubmit = e => {
    e.preventDefault();

    this.setState(previousState => ({
      techs: [...previousState.techs, previousState.newTech],
      newTech: '',
    }));
  }

  handleDelete = tech => {
    this.setState(previousState => ({
      techs: previousState.techs.filter(t => t !== tech),
    }));
  }

  render() {
    const { techs, newTech } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <ul>
          {techs.map(tech => (
            <TechItem
              key={tech}
              tech={tech}
              onDelete={() => this.handleDelete(tech)}
            />
          ))}
        </ul>
        <input
          type='text'
          onChange={this.handleInputChange}
          value={newTech}
        />
        <button type="submit">Enviar</button>
      </form>
    );
  }
}

export default TechList;
