import { Component } from 'react';
import Cards, { pokemonType } from '../components/Card/Cards';
import spinner from './../assets/Spinner.svg';

export const URL = `https://api.pokemontcg.io/v2/cards/?page=1&pageSize=16&`;

type DataFetchingProps = {
  query: string;
};

type DataFetchingState = {
  pokemonData: pokemonType[];
  isFetching: boolean;
};

export default class DataFetchingComponent extends Component<
  DataFetchingProps,
  DataFetchingState
> {
  state = {
    pokemonData: [],
    isFetching: false,
  };

  componentDidMount() {
    this.fetchData(this.props.query);
  }

  componentDidUpdate(prevProps: DataFetchingProps) {
    if (prevProps.query !== this.props.query) {
      this.fetchData(this.props.query);
    }
  }

  fetchData(query: string) {
    this.setState({ isFetching: true });
    const queryString = query ? `q=name:${query}*` : '';
    fetch(`${URL}${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ isFetching: false });
        this.setState({ pokemonData: data.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        this.setState({ isFetching: true });
      });
  }

  render() {
    const { pokemonData, isFetching } = this.state;

    return (
      <div>
        {isFetching ? (
          <img
            src={spinner}
            alt="Loading..."
          />
        ) : (
          <Cards data={pokemonData} />
        )}
      </div>
    );
  }
}
