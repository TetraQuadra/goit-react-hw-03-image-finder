import React, { Component } from "react";

class Button extends Component {
    render() {
        const { loadMore } = this.props;

        return (
            <button className="Button" onClick={loadMore}>
                Load More
            </button>
        );
    }
}

export default Button;
