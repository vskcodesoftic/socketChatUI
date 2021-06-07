import React, { useState } from 'react'

const MainContext = React.createContext()

const MainProvider = ({ children }) => {
    const [name, setName] = useState('')
    const [room, setRoom] = useState('trade')
    const [notificationId ,SetNotificationId ] = useState('')

    return (
        <MainContext.Provider value={{ name, room, notificationId ,setName, setRoom ,SetNotificationId}}>
            {children}
        </MainContext.Provider>
    )
}

export { MainContext, MainProvider } 