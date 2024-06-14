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
    <article className={clsx('flex flex-col gap-2', { 
        // special: channel === 'midulive 1', 
        'border border-red-500': channel === 'midulive 1',
        })}>
        <img className="w-full rounded-[10px] object-cover" src={image} alt="" />
        <footer className="grid gap-2 grid-cols[2rem_1fr]">
            {
                channel && (<img className="col-start-1 col-end-2 w-8 h-8 rounded-full" src={`https://api.dicebear.com/8.x/notionists/svg?seed=${channel}`} alt="" />)
            }
            {
                !channel && (<span>🤷🏽‍♂️</span>)
            }
            {/* {channel ? (<img src={`https://api.dicebear.com/8.x/notionists/svg?seed=${channel}`} alt="" />) : (<span>🤷🏽‍♂️</span>)} */}
            <p className="col-start-2 col-end-3">{title}</p>
            <p className="col-start-2 col-end-3">{channel || "UNKNOWN"}</p>
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