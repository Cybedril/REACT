import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import HeaderAbout from "./components/HeaderAbout/HeaderAbout";
import HeaderLiving from "./components/HeaderLiving/HeaderLiving";
import HeaderOutdoors from "./components/HeaderOutdoors/HeaderOutdoors";
import HeaderKitchen from "./components/HeaderKitchen/HeaderKitchen";
import HeaderContact from "./components/HeaderContact/HeaderContact";
import ArticleCard from "./components/ArticleCard/ArticleCard";
import ArticleCardV2 from "./components/ArticleCard/ArticleCardV2";
import ArticleCardV3 from "./components/ArticleCard/ArticleCardV3";
import ArticleCardV4 from "./components/ArticleCard/ArticleCardV4";
import ArticleCardV5 from "./components/ArticleCard/ArticleCardV5";
import Pagination from "./components/Pagination/Pagination";
import Pagination2 from "./components/Pagination2/Pagination2";
import SearchBar from "./components/SearchBar/SearchBar";
import LogoSection from "./components/LogoSection/LogoSection";
import RecentPosts from "./components/RecentPosts/RecentPosts";
import WorkingSince from "./components/WorkingSince/WorkingSince";
import Tags from "./components/Tags/Tags";
import Footer from "./components/Footer/Footer";
import Footer2 from "./components/Footer2/Footer2";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "./components/Header/Header.css";
import "./components/HeaderAbout/HeaderAbout.css";
import "./components/HeaderLiving/HeaderLiving.css";
import "./components/HeaderKitchen/HeaderKitchen.css";
import "./components/HeaderOutdoors/HeaderOutdoors.css";
import "./components/HeaderContact/HeaderContact.css";
import "./components/ArticleCard/ArticleCard.css";
import "./components/Pagination/Pagination.css";
import "./components/SearchBar/SearchBar.css";
import "./components/RecentPosts/RecentPosts.css";
import "./components/Tags/Tags.css";
import "./components/Footer/Footer.css";
import "./components/Footer2/Footer2.css";
import "./components/LogoSection/LogoSection.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <ArticleCard />
              <ArticleCardV2 />
              <ArticleCardV3 />
              <ArticleCardV4 />
              <ArticleCardV5 />
              <Pagination />
              <SearchBar />
              <RecentPosts />
              <Tags />
              <Footer />
            </>
          }
          Route
          path="/Outdoors"
          element={
            <>
              <HeaderOutdoors />
              <ArticleCard />
              <ArticleCardV2 />
              <ArticleCardV3 />
              <ArticleCardV4 />
              <ArticleCardV5 />
              <SearchBar />
              <RecentPosts />
              <Tags />
              <Footer />
            </>
          }
        />

        <Route
          path="/Kitchen"
          element={
            <>
              <HeaderKitchen />
              <ArticleCard />
              <ArticleCardV2 />
              <ArticleCardV3 />
              <ArticleCardV4 />
              <ArticleCardV5 />
              <SearchBar />
              <RecentPosts />
              <Tags />
              <Footer />
            </>
          }
        />

        <Route
          path="/Contact"
          element={
            <>
              <HeaderContact />
              <Footer2 />
            </>
          }
        />
      </Routes>
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
