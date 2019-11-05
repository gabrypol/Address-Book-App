import React, { Component } from "react";
import Loading from "./Loading";
import UsersList from "./UsersList";
import Search from "./Search";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
	getRandomUsers,
	setEndUsersResquest,
	setIsLoading,
	setRequestSent
} from "../actions/users";

class App extends Component {
	componentDidMount() {
		this.requestUsers();
	}

	requestUsers() {
		this.props.getRandomUsers();
	}

	sendUsersRequest() {
		if (this.props.requestSent) {
			return;
		}
		this.props.setRequestSent(true);
		setTimeout(this.requestUsers.bind(this), 2000);
	}

	handleScroll() {
		const max_users = 1000;
		const wrapper = document.querySelector(".wrapper");
		const scrollTop = wrapper && wrapper.scrollTop;
		const scrollHeight = wrapper && wrapper.scrollHeight;
		const clientHeight = window.innerHeight;
		const scrolledToBottom =
			Math.ceil(scrollTop + clientHeight) >= scrollHeight;
		if (scrolledToBottom) {
			if (this.props.users.length === max_users) {
				// end of contact list
				this.props.setEndUsersResquest(true);
			} else {
				// request the next 50 users
				this.sendUsersRequest();
			}
		}
	}

	render() {
		if (this.props.isLoading) {
			return <Loading />;
		}
		return (
			<div className="wrapper" onScroll={this.handleScroll.bind(this)}>
				<Search users={this.props.users} />
				<Link to="/settings" className="settings-link">
					Settings
				</Link>
				<div className="users-wrapper">
					<UsersList list={this.props.users} />
				</div>
				<div
					className={
						this.props.requestSent
							? "loading-users show"
							: "loading-users hidden"
					}
				>
					Loading
				</div>
				<div
					className={
						this.props.endUsersRequest ? "end-users show" : "end-users hidden"
					}
				>
					End of users catalog
				</div>
			</div>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	users: user.users,
	isLoading: user.isLoading,
	requestSent: user.requestSent,
	endUsersRequest: user.endUsersRequest
});

export default connect(
	mapStateToProps,
	{
		getRandomUsers,
		setEndUsersResquest,
		setIsLoading,
		setRequestSent
	}
)(App);
