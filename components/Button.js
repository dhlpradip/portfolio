import Link from "next/link";

const Button = ({
    btnText = 'test', btnLink='/', outline=false, blank=false
}) => {
    const style ={
        marginTop: '2rem',
          fontSize: '2.2rem',
          backgroundColor: 
            outline ? 'transperant' : 'gray',
          padding: "0.7em 2em",
          border:` 2px solid gray`,
          borderRadius: "8px",
          display: "inline-block",
          color: outline ? 'gray' : 'black'
          }
    return ( 
        <>
        <Link href={btnLink ? btnLink :'/'} style={style} className={outline ? "bg-transparent" : 'bg-gray:600'} target={blank && "_blank"}>
        {btnText}
      </Link>
        </>
     );
}
 
export default Button;