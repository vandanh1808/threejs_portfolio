import { useState } from "react"

export const useToggle = (initialState = false) => {
    const [isOpen, setIsOpen] = useState(initialState);

    const handleOpen = () => setIsOpen(true);

    const handleClose = () => setIsOpen(false);

    const handleToggle = () => setIsOpen(prev => !prev);

    return {
        toggle: isOpen,
        onOpen: handleOpen,
        onClose: handleClose,
        onToggle: handleToggle
    }
}