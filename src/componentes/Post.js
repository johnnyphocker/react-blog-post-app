import React, {Component} from 'react';


class Post extends Component {

	render() {
		return(
			<div>
				<h3>{this.props.post.titulo}</h3>
				<p>{this.props.post.contenido}</p>
				<hr />
			</div>
		)
	}

}

export default Post;




