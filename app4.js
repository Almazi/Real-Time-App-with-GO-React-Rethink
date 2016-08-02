class Channel extends React.Component{
  onClick(){
    console.log('How can I help you?', this.props.name)
  }
  render(){
    return(
      <li onClick={this.onClick.bind(this)}>{this.props.name}</li>
    )
  }
}

ReactDOM.render(<Channel name='Harcore Support'/>, document.getElementById('app'));
