import { createContext, useContext, useState } from 'react';

const mobileMenuContext = createContext();

export function useMobileMenuContext() {
    return useContext(mobileMenuContext);
}

export function MobileMenuProvider({ children }) {
    const [mobileMenuVisibility, setMobileMenuVisibility] = useState(false);

    return (
        <mobileMenuContext.Provider
            value={{
                setMobileMenuVisibility,mobileMenuVisibility
            }}
        >
            {children}
        </mobileMenuContext.Provider>
    );
}
