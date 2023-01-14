type ButtonProps = {
    text: string;
    handleClick:  (event: React.MouseEvent<HTMLElement>) => void;
    className?:string;
}


export default function Button({text, handleClick, className}:ButtonProps) {
    return <button onClick={handleClick} className={className}>{text}</button> 
}
    
