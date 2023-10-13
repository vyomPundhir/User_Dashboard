import React from 'react'

const Sidebar = () => {
  return (
    <section className="sidebar">

      <div className="top">

        <div className="head">
          Board.
        </div>

        <div className="items">

          <div className="item">
            <img src="" alt="" />
            <span>Dashboard</span>
          </div>

          <div className="item">
          <img src="" alt="" />
            <span>Transactions</span>
          </div>

          <div className="item">
            <img src="" alt="" />
            <span>Schedules</span>
          </div>

          <div className="item">
            <img src="" alt="" />
            <span>Users</span>
          </div>

          <div className="item">
            <img src="" alt="" />
            <span>Settings</span>
          </div>

        </div>

      </div>

      <div className="bot">
        <div>Help</div>
        <div>Contact Us</div>
      </div>

    </section>
  )
}

export default Sidebar