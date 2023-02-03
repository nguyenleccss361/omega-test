import React from "react";
import "./DetailPost.scss";

export default class DetailPost extends React.Component {
	onClose = e => {
		this.props.onClose && this.props.onClose(e);
	};
	render() {
		if (!this.props.show) {
			return null;
		}
		return (
			<div class="modal" id="modal">
				<h2>Detail post</h2>
				<div class="content">{this.props.children}</div>
				<div class="actions">
					<button class="toggle-button" onClick={this.onClose}>
						Close
					</button>
				</div>
			</div>
		);
	}
}
