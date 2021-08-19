import {store as RNCStore} from "react-notifications-component";

const notification = {
    add: function (type, title, message) {
        RNCStore.addNotification({
            title,
            message,
            type: type,
            insert: "top",
            container: "top-right",
            animationIn: ["animate__animated", "animate__fadeIn"],
            animationOut: ["animate__animated", "animate__fadeOut"],
            dismiss: {
                duration: 5000,
                onScreen: true
            }
        });
    }
}

export default notification;