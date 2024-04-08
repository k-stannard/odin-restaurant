function firstLoad() {
    const content = document.getElementById('content')

    const data = [
        { tag: 'h1', id: 'title', text: "Hazel's Kitty Cafe"},
        { tag: 'h2', id: 'welcome', text: "Welcome to Hazel's Kitty Cafe!"},
        { tag: 'p', id: 'about', text: "At Hazel's Kitty Cafe, we believe in creating a purr-fect haven for both humans and feline friends alike. Nestled in the heart of Whiskerville, our cozy cafe offers a unique experience where you can enjoy delicious refreshments while surrounded by the playful antics of our adorable rescue cats."},
        { tag: 'p', id: 'menu', text: "Indulge your taste buds with our delectable selection of beverages and treats. Whether you're in the mood for a comforting cup of coffee, a refreshing iced tea, or a sweet pastry, we have something to satisfy every craving. Sit back, relax, and enjoy your favorite refreshments in the company of our charming cats."},
        { tag: 'p', id: 'visit', text: "Ready to experience the magic of Hazel's Kitty Cafe? Stop by our location in Whiskerville and immerse yourself in a world of whiskers and purrs. Whether you're a seasoned cat lover or simply looking for a cozy spot to unwind, we can't wait to welcome you with open paws."},
        { tag: 'p', id: 'contact', text: "Have a question or want to learn more about Hazel's Kitty Cafe? We're here to help! Reach out to us via phone or email, or stop by our location during business hours. Our friendly staff members are always happy to assist you."}
    ]

    data.forEach(item => {
        const container = document.createElement('div')
        container.classList.add('container')

        const subheader = document.createElement('h3')
        subheader.textContent = item.id
        subheader.classList.add('subheader')
    
        const element = document.createElement(item.tag)
        element.textContent = item.text
        element.setAttribute("id", item.id)

        if(item.tag === 'p') { container.appendChild(subheader) }
        container.appendChild(element)

        content.appendChild(container)
    })
}

export default firstLoad