import Image from "next/image";

export default function SuperImage(props) {
    /** @type string */
    let src = props.src;
    if (!src.startsWith("$"))  {
        return <Image {...props} src={require('../public/images/' + src)} />;
    }
    src = src.substring(1);
    src = 'http://176.57.68.130:2956/api/images/' + src;
    return <img {...props} src={src}/>
}