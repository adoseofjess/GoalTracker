class GoalForm extends React.Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.state = {title: ''};
	}

	handleChange(e) {
		this.setState({title: e.target.value});
	}

	handleSubmit(e) {
		$.ajax({
			url: "/goals/create.json",
			type: "POST",
			data: {"goal": {"title": this.state.title, "user_id": this.props.userId}},
			dataType: "json",
			success: function(data) {console.log('success');},
			error: function(xhr, status, err) {console.log(err);}
		});
	}

	render () {
		return (
      <div>
				<form className="testForm" onSubmit={this.handleSubmit}>
					Title:
					<input type="text" placeholder="title" value={this.state.title} onChange={this.handleChange}></input>
					<input type="submit" value="submit"></input>
				</form>
      </div>
    );
  }
}

GoalForm.propTypes = {
  title: React.PropTypes.string,
	userId: React.PropTypes.number
};
