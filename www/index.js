var _natural = Immutable.Range();//natural numbers (inifinite sequence)
var it = _natural.values(); //iterator of the sequence

var Timer = React.createClass({
  getInitialState: function() {
    return {tickValue: it.next().value}; //iterator next
  },
  tick: function() {
    this.setState({tickValue: it.next().value}); //iterator next
  },
  componentDidMount: function() {
    this.interval = setInterval(this.tick, 0);// tick 0
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      <div>Value: {this.state.tickValue}</div>
    );
  }
});

React.render(<Timer />, document.body);  //bind logic and hardware
