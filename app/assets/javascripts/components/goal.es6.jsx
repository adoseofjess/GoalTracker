class Goal extends React.Component {
	constructor(props) {
	  super(props);
		this.handleClick = this.handleClick.bind(this);	
	}

	handleClick (e) {
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

<div className="container">
	<div className="row">	
    <div>Title: {this.props.title}</div>
	</div>
	<div className="row">	
		<a href="#" onClick={this.handleClick}>Delete Goal</a>
	</div>
	<div className="row">
  	<div className="col-md-1">.col-md-6</div>
  	<div className="col-md-1">.col-md-6</div>
  	<div className="col-md-1">.col-md-6</div>
  	<div className="col-md-1">.col-md-6</div>
  	<div className="col-md-1">.col-md-6</div>
  	<div className="col-md-1">.col-md-6</div>
  	<div className="col-md-1">.col-md-6</div>
	</div>
</div>      
			</div>
    );
  }
}

Goal.propTypes = {
  title: React.PropTypes.string,
	id: React.PropTypes.number
};
