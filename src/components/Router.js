import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";
import Settings from "./Settings";

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact path="/" render={(props) => <App {...props}/>} />
			<Route exact path="/settings" render={(props) => <Settings {...props}/>} />
			<Route component={NotFound} />
		</Switch>
	</BrowserRouter>
);

export default Router;
