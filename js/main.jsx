// class HelloWorld extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Hello World!</h1>
//         <h1>Panos M!</h1>
//       </div>
//     )
//   }
// }


class ProfileLink extends React.Component {
  render() {
    return (
      <div>
        <a href={this.props.url}
           title={this.props.label}
           data-object-id="123"
           style={{fontSize: "30px"}}>
          {this.props.label}!!
        </a>
        <br/>
        <label htmlFor="name">Name</label>
        <input type="text" id="name"/>
      </div>
    )
  }
}

ReactDOM.render(
  <ProfileLink url="https://www.google.com" label="a link to profile"/>,
  document.getElementById('content')
)