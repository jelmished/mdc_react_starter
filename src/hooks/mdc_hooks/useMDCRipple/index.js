// importing useEffect hook from react
// useEffect hook will be used within our custom react hook
import { useEffect } from "react";

// importing MDCRipple from material design components
// MDCRipple effect will be used inside react's useEffect hook
import { MDCRipple } from '@material/ripple';

// exporting useMDCRipple custom react hook function
export default function useMDCRipple() {
    // return useEffect hook which instantiates the MDCRipple effect
    return useEffect(() => {
        // instantiate a new MDCRipple effect on elements with query selector ".foo-button".
        const ripple = new MDCRipple(document.querySelector('.foo-button'));
    });
}