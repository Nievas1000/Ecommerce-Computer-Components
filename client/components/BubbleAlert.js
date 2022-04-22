
const BubbleAlert = ({value}) =>{
    const cantidad = value
    const getNumber = n =>{
        if(!n){return ''}
        return n > 9 ? '9+' : n;
    }
        return(
            <span className="bubbleAlert">
                {getNumber(cantidad)}
            </span>
    )
}

export default BubbleAlert;