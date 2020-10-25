import React from "react";
import { connect } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import "./dashboard.css"
import { Switch } from "react-router-dom";
import ProtectedRoute from "../../utils/ProtectedRoutes";
import DashHome from "./DashHome";
import DashConfig from "../../views/dashconfig";
import DashProfile from "../../views/dashprofile";
import DashHelp from "../../views/dashhelp";
import DashFAQS from "../../views/dashfaqs";
// import DashHome from "./DashHome"
import { Link } from "react-router-dom";
import {
	DashboardTwoTone,
	AssignmentIndTwoTone,
	SettingsTwoTone,
	SubjectTwoTone,
	ContactSupportTwoTone,
} from "@material-ui/icons";
import logo from "../../assets/images/nzenn.png";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
	root: {
		display: "flex",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
	},
	drawer: {
		width: drawerWidth,
		flexShrink: 0,
	},
	drawerPaper: {
		width: drawerWidth,
	},
	drawerContainer: {
		overflow: "auto",
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
	},
}));

const ClippedDrawer = (props) => {
	const classes = useStyles();

	
	const handleLogout=()=>{
		localStorage.clear()
	}
	return (
		<div className="main_dashboard">
			
			<div className="main_navbar">
				<Link to="/">
					<img src={logo}	alt="logo" height="5%" width="200px" style={{ margin: "0 16px" }}/>
				</Link>
			</div>
			<div className="dashboard_body">
				<div className="sidebar">
				<div className={classes.drawerContainer}>
				<List>
					<ListItem button>
						<ListItemIcon>
							<DashboardTwoTone />
						</ListItemIcon>
						<Link className="sidebar_links" to="/dashboard/home">
							<ListItemText className="link_text" primary="Dashboard" />
						</Link>
					</ListItem>
					<Divider />
					Interface
					<ListItem button>
						<ListItemIcon>
							<AssignmentIndTwoTone />
						</ListItemIcon>
						<Link className="sidebar_links" to="/dashboard/configure">
							<ListItemText className="link_text" primary="Configure" />
						</Link>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<SettingsTwoTone />
						</ListItemIcon>
						<Link className="sidebar_links" to="/dashboard/settings">

						<ListItemText className="link_text" primary="Settings" />
						</Link>

					</ListItem>
					<Divider />
					Help
					<ListItem button>
						<ListItemIcon>
							<SubjectTwoTone />
						</ListItemIcon>
						<Link className="sidebar_links" to="/dashboard/help">
						<ListItemText className="link_text" primary="Help" />
						</Link>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ContactSupportTwoTone />
						</ListItemIcon>
						<Link className="sidebar_links" to="/dashboard/faqs">
						<ListItemText className="link_text" primary="FAQ" />
						</Link>
					</ListItem>
					<ListItem button>
						<ListItemIcon>
							<ContactSupportTwoTone />
						</ListItemIcon>
						<Link onClick={handleLogout} className="sidebar_links" to="/">
						<ListItemText className="link_text" primary="Logout" />
						</Link>
					</ListItem>
				</List>
				<Divider />
			</div>
				</div>

				<div className="pages">
					<Switch>
						<ProtectedRoute exact path="/dashboard/home" component={DashHome} />
						<ProtectedRoute exact path="/dashboard/help" component={DashHelp} />
						<ProtectedRoute exact path="/dashboard/configure" component={DashConfig} />
						<ProtectedRoute exact path="/dashboard/settings" component={DashProfile} />
						<ProtectedRoute exact path="/dashboard/faqs" component={DashFAQS} />
					</Switch>
				</div>
			</div>
			
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		user: state.user,
	};
};
const mapDispatchToProps = (dispatch) => {
	return {};
	// return { signup: (data, id) => dispatch(signupUser(data, id)) };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClippedDrawer);


