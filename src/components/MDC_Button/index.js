import React from "react";
import custom_react_hooks from "../../hooks";

export default function MDC_Button() {
    custom_react_hooks.mdc_hooks.useMDCRipple();
    return (
        <button className="foo-button mdc-button">
            Button
        </button>
    );
}