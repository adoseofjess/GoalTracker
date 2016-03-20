class Calendar extends React.Component {
	constructor(props) {
		super(props);
		this.render = this.render.bind(this);
	}

	componentDidMount () {
		d3.select(".calendar").append("svg").attr("width", 50).attr("height", 50).append("circle").attr("cx", 25).attr("cy", 25).attr("r", 25).style("fill", "purple");
	}

  render () {
		var milestones = this.props.milestones.map((milestone, i) => 
			<div key={i}>
				Date: {milestone.date}
				Completed: {milestone.completed}
			  Description: {milestone.description}</div>
		);
    return <div className="calendar">
			Milestones: 
			{milestones}
		</div>;
  }
}

Calendar.propTypes = {
	milestones: React.PropTypes.array
};
