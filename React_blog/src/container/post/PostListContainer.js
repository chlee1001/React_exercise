import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getTrendingPosts, getMorePosts } from '../../store/modules/list';
import PostList from '../../components/testVelog/list/PostList2';

class PostListContainer extends Component {
  initialize = async () => {
    try {
      await this.props.getTrendingPosts();
    } catch (e) {
      console.log(e);
    }
  };
  componentDidMount() {
    this.initialize();
  }

  render() {
    const { posts } = this.props;
    return <PostList posts={posts} />;
  }
}

export default connect(
  ({ list }) => ({
    posts: list.posts
  }),
  {
    getTrendingPosts
  }
)(PostListContainer);