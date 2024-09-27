import React from 'react'
import TopSection from '../../LT/TopSection'

const Profile = () => {
  return (
    <div>
      <TopSection
        labelList={[
          { title: "Home", path: "/landing-page" },
          { title: "Profile" },
        ]}
      />
    </div>
  )
}

export default Profile