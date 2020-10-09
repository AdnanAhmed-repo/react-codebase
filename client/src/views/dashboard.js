import React from "react";
import { Route } from "react-router-dom";
import DDashboard from "../components/sections/dashboard";
import { Switch } from "react-router-dom";
import AppRoute from "../utils/AppRoute";
import DashHome from "../components/sections/DashHome";
// import DashConfig from "./dashconfig";
import DashProfile from "./dashprofile";
import DashHelp from "./dashhelp";
import DashFAQS from "./dashfaqs";
class Dashboard extends React.Component {
	render() {
		return (
			<>
				<DDashboard className="illustration-section-01" />
				<Switch>
					<Route exact path="/dashboard/dashhome" component={DashHome} />
					<AppRoute exact path="/dashhelp" component={DashHelp} />
					{/* <AppRoute exact path="/dashboard/configure" component={DashConfig} /> */}
					<AppRoute exact path="/dashsettings" component={DashProfile} />
					<AppRoute exact path="/dashfaqs" component={DashFAQS} />
				</Switch>
			</>
		);
	}
}

export default Dashboard;
