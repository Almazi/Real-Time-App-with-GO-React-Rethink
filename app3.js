class Channel extends React.Component{
  render(){
    return(
      <li>{this.props.name}</li>
    )
  }
}

ReactDOM.render(<Channel name='Harcore Support'/>, document.getElementById('app'));
