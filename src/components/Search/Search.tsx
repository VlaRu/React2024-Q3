import { Component } from 'react';
import DataFetchingComponent from '../../api/fetchDataApi';
import './Search.css';

type NameData = {
  searchName: string;
  submitName: string;
};

export class Search extends Component<Record<string, never>, NameData> {
  constructor(props: Record<string, never>) {
    super(props);
    const localState = localStorage.getItem('name') || '';
    this.state = {
      searchName: localState || '',
      submitName: localState || ('' as string),
    };
  }

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
        <DataFetchingComponent
          query={this.state.submitName.replace(/\s+/g, '')}
        />
      </>
    );
  }
}
