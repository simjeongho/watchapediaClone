import React, { Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "#pages/MainPage";
import TvPage from "#pages/TvPage";
import MovieDetailPage from "#pages/MovieDetail";
import TvDetailPage from "#pages/TvDetail";
import WatchaLayout from "#components/layout";
const App = () => {
	return (
		<BrowserRouter>
			<WatchaLayout>
				<Suspense fallback={null}>
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/tv" element={<TvPage />} />
						<Route path="/movie/:id" element={<MovieDetailPage />} />
						<Route path="/tv/:id" element={<TvDetailPage />} />
					</Routes>
				</Suspense>
			</WatchaLayout>
		</BrowserRouter>
	);
};

export default App;
