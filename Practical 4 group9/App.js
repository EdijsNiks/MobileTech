
import React from 'react';
import { FlatList } from 'react-native';
import Article from './src/Article';

const key = '27b41a8c8f8248bea9f14d5314464463';
const apiURL = `http://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=${key}`;

const getNews = async () => {
  let result = await fetch(apiURL).then((response) => response.json());
  return result.articles;
}

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { articles: [], refreshing: true };
    this.fetchNews = this.fetchNews.bind(this);
  }
  componentDidMount() {
    this.fetchNews();
   }

  fetchNews() {
    getNews()
      .then(articles => this.setState({ articles, refreshing: false }))
      .catch(() => this.setState({ refreshing: false }));
  }

  handleRefresh() {
    this.setState(
      {
        refreshing: true
    },
      () => this.fetchNews()
    );
  }

  render() {
    return (
      <FlatList
        data={this.state.articles}
        renderItem={({ item }) => <Article article={item} />}
        keyExtractor={item => item.url}
        refreshing={this.state.refreshing}
        onRefresh={this.handleRefresh.bind(this)}
      />
  );
  }
}