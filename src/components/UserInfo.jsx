function UserInfo(props){
	return (
		<div className="userInfo">
			<img alt={`${props.userName} profile.`}/>
			<h1>{props.userName}</h1>
		</div>
	);
}

export default UserInfo