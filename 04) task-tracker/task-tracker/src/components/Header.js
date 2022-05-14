const Header = (props) => {
  return (
    <header>{props.title}</header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

export default Header