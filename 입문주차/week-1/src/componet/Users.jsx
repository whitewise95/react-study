const User = ({ user, removeUsersHandler }) => {
    console.log(user);
    return (
        <>
            <div
                key={user.id}
                className='square-style'>{user.age} - {user.name}
            </div>
            <Button functionValue={() => removeUsersHandler(user.id)}>삭제</Button>
        </>);
}

export default User;