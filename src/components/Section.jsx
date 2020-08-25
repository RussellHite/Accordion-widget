/* eslint-disable react/no-unescaped-entities */
import { Component, createElement } from "react";
//import PropTypes from "prop-types";

const classes = {
    active: "active",
    inactive: "inactive"
};
/*const accordionImages = {
    active: {this.props.expandImg.value.uri},
    inactive: {this.props.collapseImg.value.uri}
};*/
export class Section extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        };
        this.toggle = this.toggle.bind(this);

        //this.contentRef = React.createRef();
    }
    toggle() {
        this.setState({
            active: !this.state.active
        });
    }
    render() {
        const expand = this.props.expandImg;
        const collapse = this.props.collapseImg;
        const stateStyle = this.state.active ? classes.active : classes.inactive;
        //const stateImages = this.state.active ? this.props.expandImg.value.uri : this.props.collapseImg.value.uri;
        //console.log(expandImg, collapseImg.value.uri);
        return (
            <div className={stateStyle + " accordion-panel"}>
                <button onClick={this.toggle}>
                    <p>{this.props.label}</p>
                    <img className="closed" src={expand.value.uri} />
                    <img  className="open" src={collapse.value.uri} />
                </button>
                <div ref={this.contentRef} className="section">
                    {this.props.content}
                </div>
            </div>
        );
    }
}
