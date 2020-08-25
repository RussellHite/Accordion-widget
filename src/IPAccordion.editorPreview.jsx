import { Component, createElement } from "react";
//import { HelloWorldSample } from "./components/HelloWorldSample";

export class preview extends Component {
    render() {
        const { components } = this.props;
        return <div>{components}</div>;
    }
}

export function getPreviewCss() {
    return require("./ui/Accordion.css");
}
