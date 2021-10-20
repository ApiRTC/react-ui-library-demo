import { Session } from "@apizee/apirtc"
import { Whiteboard } from "@apizee/apizee-components-alpha"
import { Container } from "@mui/material"
import { Component } from "react"

interface IProps {
    conversation_name: string,
    session: Session
}

export class WhiteboardView extends Component<IProps> {

    join = () => {
        this.setState({validated: true})
    }

    componentWillUnmount = () => {
        //  Leave the room on unmount
        if(this.props.session.getWhiteboardClient()) this.props.session.getWhiteboardClient().leaveRoom()
    }

    render() {
        return (
            <Container>
                <Whiteboard canvasId="whiteboard" metadata={{
                    enterpriseId: this.props.session.getUserAgent().getEnterprise().getId(),
                    roomId: this.props.conversation_name,
                    userToken: this.props.session.getToken(),
                    keyStorage: `${this.props.conversation_name}-key`,
                    defaultTool: "void",
                    colors: ["red", "green", "blue", "yellow"],
                    cursorColor: "purple"
                }} />
            </Container>
        )
    }
}