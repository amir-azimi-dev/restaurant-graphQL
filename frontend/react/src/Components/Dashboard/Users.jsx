import React from 'react'

const Users = () => {
  return (
<section className="dashboard">
      <div className="top">
        <i className="uil uil-bars sidebar-toggle"></i>

        <div className="search-box">
          <i className="uil uil-search"></i>
          <input type="text" placeholder="Search here..." />
        </div>

        <img src="images/profile.jpg" alt="" />
      </div>

      <div className="dash-content" style={{width: "100%"}}>
        <div className="overview">
          <div className="title">
            <i className="uil uil-tachometer-fast-alt"></i>
            <span className="text">Dashboard | users</span>
          </div>
        </div>

        <section className="container">
          <div className="table">
            <header className="table-header">
              <div>
                <span> Id </span>
              </div>
              <div>
                <span> username </span>
              </div>
              <div>
                <span> email </span>
              </div>
              <div>
                <span> role </span>
              </div>
              <div>
                <span> MODERATE </span>
              </div>
            </header>
            <main>
              <div className="table-row">
                <p className="id">#1</p>
                <p>rad_front</p>
                <p>ce01010101@gmail.com</p>
                <div className="flex center">
                  <p className="green-status">ADMIN</p>
                </div>
                <div className="flex center">
                  <button className="ui-button error">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                  <button className="ui-button primary">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
              <div className="table-row">
                <p className="id">#1</p>
                <p>peyman2dev</p>
                <p>peyman2dev@gmail.com</p>
                <div className="flex center">
                  <p className="yellow-status">USER</p>
                </div>
                <div className="flex center">
                  <button className="ui-button error">
                    <i className="fa-solid fa-trash-can"></i>
                  </button>
                  <button className="ui-button primary">
                    <i className="fa-solid fa-pen-to-square"></i>
                  </button>
                </div>
              </div>
            </main>
            <footer className="flex end">
              <div className="pagination flex">
                <div className="pagination-count">
                  <span>1 - 10</span>
                  <span>of 8,300</span>
                </div>
                <div className="flex">
                  <button>
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <button>
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
            </footer>
          </div>
        </section>
      </div>
    </section>
  )
}

export default Users