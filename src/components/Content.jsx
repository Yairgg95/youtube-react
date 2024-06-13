import Categories from "./Categories"
import Video from "./Video"

export default function Content() {

    const videos = [
        { image: "https://i.ytimg.com/vi/eZS7AKfVKls/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKyBbpzrkmc-3MV4x9ODb8tngK1Q",
            title:"Páginas para Encontrar Trabajo",
            channel: "midulive 1",
        },
        { image: "https://i.ytimg.com/vi/CdX02ruaCGk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjcdi9ECHyJQFUfTao7HWoWebe9g",
            title:"Novedades Apple",
            channel: "midulive 2",
        },
        { image: "https://i.ytimg.com/vi/CKddU9wi4rk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsJRvehI28A_lsIGyZERMWGCa_sA",
            title:"Perfumes Zara",
            channel: "midulive 3",
        },
        { image: "https://i.ytimg.com/vi/eZS7AKfVKls/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKyBbpzrkmc-3MV4x9ODb8tngK1Q",
            title:"Como instalar Linux",
            channel: "midulive 4",
        },
        { image: "https://i.ytimg.com/vi/CKddU9wi4rk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsJRvehI28A_lsIGyZERMWGCa_sA",
            title:"Perfumes buenos y economicos",
            channel: "midulive 5",
        },
        { image: "https://i.ytimg.com/vi/CdX02ruaCGk/hqdefault.jpg?sqp=-oaymwEcCOADEI4CSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDjcdi9ECHyJQFUfTao7HWoWebe9g",
            title:"Novedades Apple",
            channel: "midulive 2",
        },
        { image: "https://i.ytimg.com/vi/CKddU9wi4rk/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAsJRvehI28A_lsIGyZERMWGCa_sA",
            title:"Perfumes Zara",
            channel: "midulive 3",
        },
        { image: "https://i.ytimg.com/vi/eZS7AKfVKls/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCKyBbpzrkmc-3MV4x9ODb8tngK1Q",
            title:"Como instalar Linux",
        },
    ];

    return (
        <section id="content">
        <Categories />
        <section id="videos">
            {videos.map((video) => {
                    return ( 
                    <Video 
                        key={`video-${video.title}`} // estos de abajo son los props
                        image= {video.image}
                        title={video.title}
                        channel={video.channel} 
                        />
                    );
                })}
        </section>
        </section>
    )
}