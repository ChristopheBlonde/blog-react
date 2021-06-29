import "../navigationBar/navigation.css";

const Navigation = (props) => {
  return (
    <nav>
      <div>
        <a href="">{props.link1}</a>
        <a href="">{props.link2}</a>
        <a href="">{props.link3}</a>
      </div>

      <a href="">{props.link4}</a>
    </nav>
  );
};

export default Navigation;
