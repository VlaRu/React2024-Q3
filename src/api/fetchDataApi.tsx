import { Component } from 'react';
import Cards, { pokemonType } from '../components/Card/Cards';

export const URL = `https://api.pokemontcg.io/v2/cards/`;

type DataFetchingProps = {
  query: string;
};

type DataFetchingState = {
  pokemonData: pokemonType[];
};

export default class DataFetchingComponent extends Component<
  DataFetchingProps,
  DataFetchingState
> {
  state = {
    pokemonData: [],
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
    const queryString = query ? `?q=name:${query}` : '';
    fetch(`${URL}${queryString}`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ pokemonData: data.data });
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { pokemonData } = this.state;

    return <Cards data={pokemonData} />;
  }
}
