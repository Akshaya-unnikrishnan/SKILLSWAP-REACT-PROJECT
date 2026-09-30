import React, { useEffect, useState } from "react"
import { FaBell } from "react-icons/fa"
import { getAllNotificationsAPI } from "../services/allApi"

function Notification() {

  const [notifications, setNotifications] = useState([])

  const loggedInUser = JSON.parse(
    localStorage.getItem("loggedInUser")
  )

  const getNotifications = async () => {
    try {
      const response = await getAllNotificationsAPI()

      const userNotifications = response.data.filter(
        (notification) =>
          notification.userId === loggedInUser?.id
      )

      setNotifications(userNotifications)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    getNotifications()
  }, [])

  const unreadCount = notifications.filter(
    (notification) => notification.read === false
  ).length

  return (
    <div className="dropdown">

      <button
        className="btn text-light position-relative"
        data-bs-toggle="dropdown"
      >
        <FaBell size={20} />

        {unreadCount > 0 && (
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {unreadCount}
          </span>
        )}
      </button>

      <ul
        className="dropdown-menu dropdown-menu-end"
        style={{ minWidth: "300px" }}
      >

        <li>
          <h6 className="dropdown-header">
            Notifications
          </h6>
        </li>

        {notifications.length === 0 ? (
          <li>
            <p className="text-center text-muted p-2 mb-0">
              No notifications
            </p>
          </li>
        ) : (
          notifications.map((notification) => (
            <li key={notification.id}>
              <div className="dropdown-item">
                {notification.message}
              </div>
            </li>
          ))
        )}

      </ul>

    </div>
  )
}

export default Notification