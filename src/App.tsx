import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import MainPage from "#pages/MainPage";
import TvPage from "#pages/TvPage";
import MovieDetailPage from "#pages/MovieDetail";
import TvDetailPage from "#pages/TvDetail";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<MainPage />} />
				<Route path="/tv" element={<TvPage />} />
				<Route path="/movie/:id" element={<MovieDetailPage />} />
				<Route path="/tv/:id" element={<TvDetailPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
