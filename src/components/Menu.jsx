export default function Menu() {
// list rendering el value key={} solo aplica en renderización de listas
const menuItems = [
    { icon: '🏠', text: 'Home'},
    { icon: '🩳', text: 'Shorts'},
    { icon: '⏰', text: 'Subscriptions'},
    { icon: '🤩', text: 'Favs'}   
];

    return (
        <aside className="col-start-1 col-end-2 pr-4">
            {menuItems.map((item) => {
                return(
                    <div key={`menu-item-${item.text}`} className="p-4 rounded-[20px] flex gap-2 items-center hover:bg-[#282828]">
                        <span>{item.icon}</span>
                        <span>{item.text}</span>
                    </div>
                );
            })}
        </aside>
    );
}