import { Component } from 'react';
import DataFetchingComponent from '../api/fetchDataApi';

type NameData = {
  searchName: string;
  submitName: string;
};

export class Search extends Component {
  state: NameData = {
    searchName: '',
    submitName: localStorage.getItem('name') || ('' as string),
  };

  componentDidMount(): void {
    this.setState({ submitName: localStorage.getItem('name') || '' });
  }

  submitSearch = (e) => {
    e.preventDefault();
    this.setState({
      submitName: this.state.searchName,
    });
    localStorage.setItem('name', this.state.searchName as string);
  };

  handleSearchChange = (e) => {
    this.setState({
      searchName: e.target.value,
    });
  };

  render() {
    console.log(`render ${this.state.submitName}`);

    return (
      <>
        <h1>Hello, Search{}!</h1>
        <form onSubmit={this.submitSearch}>
          <input
            value={this.state.searchName}
            onChange={this.handleSearchChange}
          />
          <input type="submit" />
        </form>
        <p>your input, {this.state.searchName}</p>
        <DataFetchingComponent query={this.state.submitName} />
      </>
    );
  }
}
