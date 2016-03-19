class Goal extends React.Component {
	constructor(props) {
	  super(props);
		this.handleClick = this.handleClick.bind(this);	
	}

	handleClick (e) {
		console.log("click");
		e.preventDefault();
		$.ajax({
		  url: "/goals/" + this.props.id + ".json",
			type: "DELETE",
			data: {"goal": {"id": this.props.id}},
			success: function(data) {console.log('success');},
			error: function(xhr, status, err) {console.log(err);}
		})
	}

  render () {
    return (
      <div>
        <div>Title: {this.props.title}</div>
				<a href="#" onClick={this.handleClick}>Delete Goal</a>
      </div>
    );
  }
}

Goal.propTypes = {
  title: React.PropTypes.string,
	id: React.PropTypes.number
};
