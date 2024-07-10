import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./store/store.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
	Dashboard,
	Students,
	Assignments,
	Practice,
	Room,
	Login,
	Contest,
	Register,
	Problem,
	SubmissionPage,
} from "./pages/index.ts";
import Logout from "./components/Logout.tsx";
import App from "./App.tsx";
import "./index.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/dashboard",
				element: <Dashboard />,
			},
			{
				path: "/students",
				element: <Students />,
			},
			{
				path: "/room",
				element: <Room />,
			},
			{
				path: "/submissions",
				element: <SubmissionPage />,
			},
			{
				path: "/assignment",
				element: <Assignments />,
			},
			{
				path: "/practice",
				element: <Practice />,
			},
			{
				path: "/problem/:problemId",
				element: <Problem />,
			},
			{
				path: "/contest",
				element: <Contest />,
			},
			{
				path: "/auth/login",
				element: <Login />,
			},
			{
				path: "/auth/register",
				element: <Register />,
			},
			{
				path: "/auth/logout",
				element: <Logout />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	</React.StrictMode>,
);
