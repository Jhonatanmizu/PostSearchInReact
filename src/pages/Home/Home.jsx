import { Component } from "react";

import "./Home.css";
import Posts from "../../components/Posts";
import { loadPosts } from "../../utils/load-posts";
import Button from "../../components/Button";
import Input from "../../components/Input";

class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postPerPage: 53,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postPerPage),
      allPosts: postsAndPhotos,
    });
  };
  loadMorePosts = () => {
    const { page, postPerPage, posts, allPosts } = this.state;
    const nextPage = page + postPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postPerPage);
    posts.push(...nextPosts);
    this.setState({
      posts,
      page: nextPage,
    });
  };
  handleSearch = (e) => {
    const value = e.target.value;
    const { allPosts } = this.state;
    allPosts.filter((value) => value);
    this.setState({ searchValue: value });
  };
  render() {
    const { posts, postPerPage, page, allPosts, searchValue } = this.state;
    const noMorePosts = page + postPerPage >= allPosts.length ? true : false;
    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;
    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && (
            <div>
              <h1>Searched posts: {searchValue}</h1>
            </div>
          )}
          <Input searchValue={searchValue} handleSearch={this.handleSearch} />
        </div>
        {filteredPosts.length === 0 && (
          <p className="no-more-posts">
            Não foi encontrado nenhum post correspondente =(
          </p>
        )}
        {filteredPosts && <Posts posts={filteredPosts} />}
        <div className="buttonContainer">
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              text="More Posts"
              onClick={this.loadMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
export default Home;
