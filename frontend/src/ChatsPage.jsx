
import { PrettyChatWindow } from 'react-chat-engine-pretty'

// Defining a new component named `ChatsPage`
const ChatsPage = (props) => {

    // Rendering the `PrettyChatWindow` component to display the chat window.
    // `projectId` prop is the ID of the chat project to which the user belongs.
    // `username` prop is the username of the user.
    // `secret` prop is the secret key of the user.
    // `style` prop is used to set the height of the chat window to 100%.
    return (
        <div style={{height: '100vh'}}>
            <PrettyChatWindow
                projectId='f452d5c3-6af8-475d-85b4-3bab0001f7b7'
                username= {props.user.username}
                secret={props.user.secret}
                style={{height: '100%'}}
            />
        </div>
    ) 
}

// Exporting the `ChatsPage` component so that it can be used in other parts of the application
export default ChatsPage