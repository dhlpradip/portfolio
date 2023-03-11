const PText = ({children}) => {
    return ( 
        <div className="flex justify-center">
        <p className="text-2xl" style={{maxWidth:'500px'}}>
            {children}
        </p>
        </div>
     );
}
 
export default PText;