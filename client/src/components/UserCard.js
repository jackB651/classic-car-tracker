function UserCard({user}){
    return(
        <div>
          <h2>user: {user.id}</h2>
          <h3>{user.username}</h3>
        </div>
    )
}

export default UserCard;