import { Component } from 'react';
import DataFetchingComponent from '../../api/fetchDataApi';
import './Search.css';

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

  submitSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    this.setState({
      submitName: this.state.searchName,
    });
    localStorage.setItem('name', this.state.searchName as string);
  };

  handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    this.setState({
      searchName: e.target.value,
    });
  };

  render() {
    return (
      <>
        <h1>Hello, its a list of Pokemon Card!</h1>
        <form
          onSubmit={this.submitSearch}
          className="form-search"
        >
          <input
            placeholder="Search..."
            value={this.state.searchName}
            onChange={this.handleSearchChange}
            className="input-search"
          />
          <input
            type="submit"
            value="submit"
            className="submit-search-btn"
          />
        </form>
        <DataFetchingComponent query={this.state.submitName} />
      </>
    );
  }
}
