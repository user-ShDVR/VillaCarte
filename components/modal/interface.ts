import React, {ReactNode} from "react";

export default interface IModalProps {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
    allowScroll: () => void;
}
