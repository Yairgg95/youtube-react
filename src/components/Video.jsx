import clsx from "clsx";

export default function Video({ image, title, channel }) {

    // if(!channel) {
    //     return (
    //         <article>
    //             <p>Incompleto</p>
    //         </article>
    //     );
    // }
   // const articleClassnames = 'video-card' + (channel === 'midulive 1' ? " special" : ""); si se ocupa esta el .join(" ") no es necesario 

    // let articleClassnames = ['video-card']

    // if (channel === 'midulive 1') {
    //     articleClassnames.push('special')
    // }


    return (
    <article className={clsx('video-card otra', { 
        // special: channel === 'midulive 1', 
        'special red': channel === 'midulive 1',
        })}>
        <img src={image} alt="" />
        <footer>
            {
                channel && (<img src={`https://api.dicebear.com/8.x/notionists/svg?seed=${channel}`} alt="" />)
            }
            {
                !channel && (<span>🤷🏽‍♂️</span>)
            }
            {/* {channel ? (<img src={`https://api.dicebear.com/8.x/notionists/svg?seed=${channel}`} alt="" />) : (<span>🤷🏽‍♂️</span>)} */}
            <p className="video-card-title">{title}</p>
            <p className="video-card-channel">{channel || "UNKNOWN"}</p>
        </footer>
    </article>
    );
}

// Segunda opcion
// export default function Video(props) {
//     return (
//     <article className="video-card">
//         <img src={props.image} alt="" />
//         <footer>
//             <img src="" alt="" />
//             <p>{props.title}</p>
//             <p>{props.channel}</p>
//         </footer>
//     </article>
//     );
// }