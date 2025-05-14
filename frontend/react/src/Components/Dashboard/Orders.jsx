import React from 'react'

const Orders = () => {
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
          <span className="text">Dashboard | orders</span>
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
              <span> Product </span>
            </div>
            <div>
              <span> Status </span>
            </div>
            <div>
              <span> Price </span>
            </div>
            <div>
              <span> MODERATE </span>
            </div>
          </header>
          <main>
            <div className="table-row">
              <p className="id">#1</p>
              <p>Mr. amin saeedi</p>
              <div className="flex center">
                <a to="" className="link"> Pizza Tanoori (2x) </a>
              </div>
              <div className="flex center">
                <p className="green-status">On going..</p>
              </div>
              <div className="flex center">
                <p className="price">299.99T</p>
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
              <p>Peyman Ahmadi</p>
              <div className="flex center">
                <a to="" className="link"> Bandari  (2x) </a>
              </div>
              <div className="flex center">
                <p className="yellow-status">Pending..</p>
              </div>
              <div className="flex center">
                <p className="price">4,999.99T</p>
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

export default Orders