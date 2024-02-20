
import { Map, PlayerStatistics, PlayerTrophies, ProfileHeader, TrainingTime } from '../../Sections'
import { MainContainer } from '../../Components'
import './Profile.css'





const Profile = () => {
  return (
    <>
      <div className="Profile-Page">
        <MainContainer>
          <ProfileHeader />
          <PlayerStatistics />
          <PlayerTrophies />
          <TrainingTime />
          <Map />
        </MainContainer>
      </div>
    </>
  )
}

export default Profile