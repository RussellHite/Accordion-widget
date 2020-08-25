/* eslint-disable no-unused-vars */
import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

// eslint-disable-next-line sort-imports
import { Section } from "./components/Section";
// eslint-disable-next-line sort-imports
import "./ui/Accordion.css";

class Accordion extends Component {
    constructor() {
        super();
        this.state = {
            active: false
        };
    }
    toggleAll() {}
    render() {
        const components = this.props.objectList;
        const sectionContainer = components.map(section => (
            // eslint-disable-next-line react/jsx-key
            <Section {...section}></Section>
        ));
        return <div className={this.props.class}>{sectionContainer}</div>;
    }
}

export default hot(Accordion);
