import React from 'react'

const Home = () => {
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

      <div className="dash-content">
        <div className="overview">
          <div className="title">
            <i className="uil uil-tachometer-fast-alt"></i>
            <span className="text">Dashboard</span>
          </div>

          <div className="boxes">
            <div className="box box1">
              <i className="uil uil-thumbs-up"></i>
              <span className="text">Total Likes</span>
              <span className="number">50,120</span>
            </div>
            <div className="box box2">
              <i className="uil uil-comments"></i>
              <span className="text">Comments</span>
              <span className="number">20,120</span>
            </div>
            <div className="box box3">
              <i className="uil uil-share"></i>
              <span className="text">Total Share</span>
              <span className="number">10,120</span>
            </div>
          </div>
        </div>

        <div className="activity">
          <div className="title">
            <i className="uil uil-clock-three"></i>
            <span className="text">Recent Activity</span>
          </div>

          <div className="activity-data">
            <div className="data names">
              <span className="data-title">Name</span>
              <span className="data-list">Prem Shahi</span>
              <span className="data-list">Deepa Chand</span>
              <span className="data-list">Manisha Chand</span>
              <span className="data-list">Pratima Shahi</span>
              <span className="data-list">Man Shahi</span>
              <span className="data-list">Ganesh Chand</span>
              <span className="data-list">Bikash Chand</span>
            </div>
            <div className="data email">
              <span className="data-title">Email</span>
              <span className="data-list">premshahi@gmail.com</span>
              <span className="data-list">deepachand@gmail.com</span>
              <span className="data-list">prakashhai@gmail.com</span>
              <span className="data-list">manishachand@gmail.com</span>
              <span className="data-list">pratimashhai@gmail.com</span>
              <span className="data-list">manshahi@gmail.com</span>
              <span className="data-list">ganeshchand@gmail.com</span>
            </div>
            <div className="data joined">
              <span className="data-title">Joined</span>
              <span className="data-list">2022-02-12</span>
              <span className="data-list">2022-02-12</span>
              <span className="data-list">2022-02-13</span>
              <span className="data-list">2022-02-13</span>
              <span className="data-list">2022-02-14</span>
              <span className="data-list">2022-02-14</span>
              <span className="data-list">2022-02-15</span>
            </div>
            <div className="data type">
              <span className="data-title">Type</span>
              <span className="data-list">New</span>
              <span className="data-list">Member</span>
              <span className="data-list">Member</span>
              <span className="data-list">New</span>
              <span className="data-list">Member</span>
              <span className="data-list">New</span>
              <span className="data-list">Member</span>
            </div>
            <div className="data status">
              <span className="data-title">Status</span>
              <span className="data-list">Liked</span>
              <span className="data-list">Liked</span>
              <span className="data-list">Liked</span>
              <span className="data-list">Liked</span>
              <span className="data-list">Liked</span>
              <span className="data-list">Liked</span>
              <span className="data-list">Liked</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home