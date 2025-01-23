const User = (props) => {
  const { firstName, lastName, title } = props.user;
  return (
    <section id="user">
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{title}</p>
    </section>
  );
};

export default User;
