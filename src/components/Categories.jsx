export default function Categories() {
    const categories = [
        "All",
        "Music",
        "Gamming",
        "code",
        "Programming",
        "Life Style",
        "Sports",
    ]
    return (<div className="flex gap-4">
        {
            categories.map((category) => {
                return (
                    <span key={`category-${category}`} className="py-2 px-4 rounded-[20px] bg-[#282828]">
                        {category}
                        </span>
                )
            })
        }
    </div>)
}