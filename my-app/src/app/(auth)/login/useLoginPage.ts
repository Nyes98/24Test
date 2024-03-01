import { useState } from 'react';

interface LoginPageState {
    loginId: string;
    loginPassword: string;
}

const useLoginPage = () => {
    const [loginFormData, setLoginFormData] = useState<LoginPageState>({
        loginId: '',
        loginPassword: '',
    });

    const handleLoginChange = (key: keyof LoginPageState, value: string) => {
        setLoginFormData((prevData) => ({ ...prevData, [key]: value }));
        console.log('Logging Changing:', loginFormData);
    };

    const handleLogin = () => {
        console.log('Logging in with:', loginFormData);
    };

    return {
        loginFormData,
        handleLoginChange,
        handleLogin,
    };
};

export default useLoginPage;
