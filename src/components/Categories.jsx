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
    return (<div id="categories-list">
        {
            categories.map((category) => {
                return (
                    <span key={`category-${category}`} className="category">
                        {category}
                        </span>
                )
            })
        }
    </div>)
}