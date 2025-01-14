const User = (props) => {
  const { firstName, lastName, title } = props.user;
  return (
    <div id="user" data-testid="user">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{title}</p>
    </div>
  );
};

export default User;
