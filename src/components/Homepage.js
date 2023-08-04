import React, {useState} from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import "../styles/App.css"

function Homepage () {
    const [currentPage, setCurrentPage] = useState("Home");

    const renderPage = () => {
      if (currentPage === "Home") {
        return <Home className="fade-in"/>;
      }
      if (currentPage === "About") {
        return <About className="fade-in"/>;
      }
      if (currentPage === "Projects") {
        return <Projects className="fade-in"/>;
      }
    }

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
          <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
          <main>
          {renderPage()}
          </main>
          <Footer/>
        </div>
    );
}

export default Homepage;