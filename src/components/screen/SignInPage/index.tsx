import React from "react";
import { NavigationInjectedProps } from "react-navigation";
import { withNavigation } from "react-navigation";
import SignInForm from "./components/SignInForm";

type Props = {

} & NavigationInjectedProps;

class SignInPage extends React.Component<Props> {
    render() {
        return(
            <SignInForm/>
        );
    }
}

export default withNavigation(SignInPage);
