import ReactDOM from 'react-dom';

export default function Modal(props:any)
{
    
    function generateModal()
    {
        const value= document.getElementById('msg-root')
        return value ? ReactDOM.createPortal(
            props.children,
            value
           ) : <></>

    }
    return generateModal()
}