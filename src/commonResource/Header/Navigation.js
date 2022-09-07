import React from "react";
import { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
class Navigation extends Component {
  render() {
    return (
      <Container>
        <Nav className="nav-justified w-100 nav-fill">
          <Nav.Link href={this.props.linkUrl}>
            {this.props.linkName}
            <img src={this.props.linkImage} alt="" />
          </Nav.Link>
        </Nav>
      </Container>
    );
  };
}
export default Navigation