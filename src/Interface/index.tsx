export interface Button {
    btnClass: string, 
    btnText: string,
    onClick: () => void,
}

export interface AuthInteface {
    clientId: string;
    clientSecret: string;
}