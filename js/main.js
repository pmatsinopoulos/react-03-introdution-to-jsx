class HelloWorld extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Hello World!"
      ),
      React.createElement(
        "h1",
        null,
        "Panos M!"
      )
    );
  }
}

class ProfileLink extends React.Component {
  render() {
    return React.createElement(
      "a",
      { href: this.props.url, title: this.props.label },
      this.props.label,
      "!!!"
    );
  }
}

ReactDOM.render(React.createElement(ProfileLink, { url: "https://www.google.com", label: "a link to profile" }), document.getElementById('content'));
