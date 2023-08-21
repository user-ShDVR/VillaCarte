export default interface IButtonCircle {
    children: React.ReactNode;
    type: 'button' | 'submit' | 'reset';
    bgColor: string;
    borderColor: string;
    color: string;
}
