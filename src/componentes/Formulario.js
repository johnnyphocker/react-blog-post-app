import React, {Component} from 'react';

class Formulario extends Component {

	titulo = React.createRef();
	contenido = React.createRef();

	crearPost = (e) => {
		e.preventDefault();

		const post = {
			titulo: this.titulo.current.value,
			contenido: this.contenido.current.value
		}

		this.props.agregarPost(post);

		e.currentTarget.reset();
	}

	render() {
		return (
			<form onSubmit={this.crearPost}>
				<h2>Postea lo que quieras</h2>
				<label>Título</label>
				<input ref={this.titulo} className="form-control" type="text" placeholder="Título" /><br />
				<label>Contenido</label>
				<textarea ref={this.contenido} className="form-control" cols="20" rows="10"></textarea><br />
				<input className="btn btn-outline-danger" type="submit" value="Enviar" />
			</form>
		)
	}

}

export default Formulario;