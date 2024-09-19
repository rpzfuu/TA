import { useToast } from "vue-toastification";

const Toast = {
    showError: function (message: string) {
        const toast = useToast();
        toast.error(message, {
            closeOnClick: true,
            showCloseButtonOnHover: false,
            closeButton: false,
        });
    },
    showSuccess: function (message: string) {
        const toast = useToast();
        toast.success(message, {
            closeOnClick: true,
            showCloseButtonOnHover: false,
            closeButton: false,
        });
    },
    showInfo: function (message: string) {
        const toast = useToast();
        toast.info(message, {
            closeOnClick: true,
            showCloseButtonOnHover: false,
            closeButton: false,
        });
    },
    showWarning: function (message: string) {
        const toast = useToast();
        toast.warning(message, {
            closeOnClick: true,
            showCloseButtonOnHover: false,
            closeButton: false,
        });
    },
};

export default Toast;
