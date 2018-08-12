import React, {Component} from 'react';

import Post from './Post';

class Posts extends Component {

	render() {

		return (
			<div>

				<h1>Mis posts</h1>
				{Object.keys(this.props.posts).map(post => (
					<Post
						key={post}
						post={this.props.posts[post]}
					/>
				))}
				

			</div>
		)


	}

}



export default Posts;