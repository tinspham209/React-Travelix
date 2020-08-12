import React, { Suspense } from "react";
import Header from "./component/Header/header";

import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./component/UI/NotFound";
import "./App.css";

const Home = React.lazy(() => import("./containers/Home"));
const About = React.lazy(() => import("./containers/About"));

function App() {
	return (
		<div>
			<Suspense fallback={<div>Loading...</div>}>
				<BrowserRouter>
					<Header />
					<Switch>
						<Redirect exact from="/" to="/home" />

						<Route path="/home" component={Home} />
						<Route path="/about" component={About} />
						<Route component={NotFound} />
					</Switch>
				</BrowserRouter>
			</Suspense>
		</div>
	);
}

export default App;
