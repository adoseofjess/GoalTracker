class Goal extends React.Component {
  render () {
    return (
      <div>
        <div>Title: {this.props.title}</div>
      </div>
    );
  }
}

Goal.propTypes = {
  title: React.PropTypes.string
};
