import Image from "next/image";
import ServerImage from "./ServerImage";

export default function SuperImage(props) {
    /** @type string */
    let src = props.src;
    if (src.startsWith("$")) return <ServerImage {...props} />
    return <Image {...props} src={require('../../public/images/' + src)} />;
    
}