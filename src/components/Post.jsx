export default function Post(props) {
  const { post } = props;

  return (
    <div className="post">
      <div>
        <h4>{post.title}</h4>
        <p>By Jane Doe</p>
        <p>{post.body}</p>
      </div>
      <hr />
    </div>
  );
}
