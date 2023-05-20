import Image from "next/image";

export default function ServerImage(props) {
    /** @type string */
    let src = props.src;
    if (!src) return <img {...props}/>
    if (src.startsWith("$")) src = src.substring(1);
    src = (props.type || 'images') + '/' + src;
    src = 'http://176.57.68.130:2956/api/' + src;
    return <img {...props} src={src}/>
}