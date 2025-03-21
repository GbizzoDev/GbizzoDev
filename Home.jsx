
import React from "react";
import { Link } from "react-router-dom";
import './Home.css'; 

function Home() {
    return (
        <div className="home-container">
            <header className="header">
                <h1 className="title">Build a Free Library Management System</h1>
                <p className="subtitle">Create your library system with no credit card required. Explore our premium plans.</p>
                <button className="cta-button">Create My Own Library Now</button>
            </header>

            <section className="get-started">
                <h2 className="get-started-title">Get Started</h2>
                <p className="get-started-description">Join us today to streamline your library management!</p>
                <Link to='/home1'  className="get-started-button btn">Get Started</Link>
            </section>
  
        <section className="plans">
            <h2 className="plans-title">Manage Your Library</h2>
            <div className="button-group">
                <Link to='/InsertBook' className="btn btn-info mx-2">📚 Add Book</Link>
                <Link to='/InsertMember' className="btn btn-info mx-2">👥 Add Member</Link>
                <Link to='/InsertBorrowing' className="btn btn-info mx-2">🔄 Borrow a Book</Link>
                <Link to='/Report' className="btn btn-info mx-2">📊 View Report</Link>
                <Link to='/' className="btn logout btn-danger">🚪 Logout</Link>
            </div>
        </section>
   

            <footer className="footer">
                <p>© 2025 Library Management System</p>
            </footer>
        </div>
    );
}

export default Home;