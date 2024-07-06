import { Component } from 'react';
import DataFetchingComponent from '../api/fetchDataApi';

type NameData = {
  searchName: string;
  submitName: string;
};

export class Search extends Component {
  state: NameData = {
    searchName: '',
    submitName: localStorage.getItem('name') || '',
  };

  componentDidMount() {
    this.setState({ submitName: localStorage.getItem('name') || '' });
    console.log('unmount');
  }

  /*   componentWillUnmount () {
    localStorage.setItem('name', this.state.searchName);
    console.log('unmount');
  } */

  submitSearch = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    this.setState({
      submitName: this.state.searchName,
    });
    console.log(`submit name ${this.state.submitName}`);
  };

  handleSearchChange = (e: { target: { value: string | null } }) => {
    this.setState({
      searchName: e.target.value,
    });
    localStorage.setItem('name', this.state.searchName);
    console.log(`the search name after change ${this.state.searchName}`);
  };

  render() {
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
