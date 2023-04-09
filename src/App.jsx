import React from "react";
import { Routes, Route, Link, useRoutes, NavLink } from "react-router-dom";

// Pages
import Home from "./Pages/Home";
import BookList from "./Pages/BookList";
import Book from "./Pages/Book";
import NewBook from "./Pages/NewBook";

// styles
import "./App.css";
import NotFound from "./Pages/NotFound";

// Link properties to know
// 1. replace
// 2. reloadDocument
// 3. Link vs NavLink

// Useful but rarely used
// Navigate

const App = () => {
  // let element = useRoutes([
  //   {
  //     path: "/",
  //     element: <Home />,
  //   },
  //   {
  //     path: "/books",
  //     element: <BookList />,
  //     chldren: [
  //       // {
  //       //   index: true,
  //       //   element: <BookList />,
  //       // },
  //       {
  //         path: ":id",
  //         element: <Book />,
  //       },
  //       {
  //         path: "new",
  //         element: <NewBook />,
  //       },
  //     ],
  //   },
  //   {
  //     path: "*",
  //     element: <NotFound />,
  //   },
  // ]);

  return (
    <div className="app">
      <nav>
        <ul>
          <li>
            {/* By default NavLink has .active className*/}
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : {};
              }}
              to="/"
            >
              {({ isActive }) => {
                return isActive ? "Active Home" : "Home";
              }}
            </NavLink>
          </li>
          <li>
            <NavLink to="/books">Books</NavLink>
          </li>
        </ul>
      </nav>
      {/* {element} */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books">
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
