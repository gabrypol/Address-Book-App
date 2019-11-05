import React, { Component } from "react";

class UserDetailModal extends Component {
	hideUserDetails = event => {
		const user_email = event.currentTarget.getAttribute("data-value");
		const user_detail = document.getElementById("user_" + user_email);
		user_detail.classList.add("hidden");
	};
	render() {
		const {
			name,
			login,
			email,
			location,
			cell,
			phone
		} = this.props.details;
		const full_name = name.first + " " + name.last;
		return (
			<div className="user-info-modal hidden" id={"user_" + email}>
				<div className="user-info-modal-main">
					<div className="user-info-modal-details">
						<p className="name">
							<span>Name: </span>
							{full_name}
						</p>
						<p className="username">
							<span>username:</span>
							{login.username}
						</p>
						<p className="email">
							<span>email:</span>
							{email}
						</p>
						<p className="location">
							<span>Street:</span>
							{location.street.name + ' ' + location.street.number}
						</p>
						<p className="location">
							<span>City:</span>
							{location.postcode} {location.city}
						</p>
						<p className="location">
							<span>State:</span>
							{location.state}
						</p>
						<p className="phone">
							<span>Phone number:</span>
							{phone}
						</p>
						<p className="cell">
							<span>Cell number:</span>
							{cell}
						</p>
					</div>
					<div
						className="user-info-actions"
						onClick={this.hideUserDetails}
						data-value={email}
					>
						<span className="user-info-btn">x</span>
					</div>
				</div>
			</div>
		);
	}
}

export default UserDetailModal;
