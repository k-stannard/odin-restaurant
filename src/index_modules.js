function homepage() {
    const content = document.getElementById('content')

    const data = [
        { tag: 'h2', id: 'welcome', text: "Welcome to Hazel's Kitty Cafe!" },
        { tag: 'p', id: 'about', text: "At Hazel's Kitty Cafe, we believe in creating a purr-fect haven for both humans and feline friends alike. Nestled in the heart of Whiskerville, our cozy cafe offers a unique experience where you can enjoy delicious refreshments while surrounded by the playful antics of our adorable rescue cats." },
        { tag: 'p', id: 'menu', text: "Indulge your taste buds with our delectable selection of beverages and treats. Whether you're in the mood for a comforting cup of coffee, a refreshing iced tea, or a sweet pastry, we have something to satisfy every craving. Sit back, relax, and enjoy your favorite refreshments in the company of our charming cats." },
        { tag: 'p', id: 'visit', text: "Ready to experience the magic of Hazel's Kitty Cafe? Stop by our location in Whiskerville and immerse yourself in a world of whiskers and purrs. Whether you're a seasoned cat lover or simply looking for a cozy spot to unwind, we can't wait to welcome you with open paws." },
        { tag: 'p', id: 'contact', text: "Have a question or want to learn more about Hazel's Kitty Cafe? We're here to help! Reach out to us via phone or email, or stop by our location during business hours. Our friendly staff members are always happy to assist you." }
    ]

    createTitle(content, "Hazel's Kitty Cafe", "home-cat")

    data.forEach(item => {
        const container = document.createElement('div')
        container.classList.add('container')

        const subheader = document.createElement('h3')
        subheader.textContent = capitalize(item.id)
    
        const element = document.createElement(item.tag)
        element.textContent = item.text
        element.setAttribute("id", item.id)

        if(item.tag === 'p') { container.appendChild(subheader) }
        container.appendChild(element)

        content.appendChild(container)
    })
}

function menu() {
    const content = document.getElementById('content')

    const data = [
        { tag: 'p', id: "beverages", text: "Beverages", items: [
            { name: "Catpuccino", description: "A creamy espresso drink with a playful twist of cat-shaped foam art. - $4.50" },
            { name: "Paw-some Hot Chocolate", description: "Rich and indulgent hot chocolate served with a marshmallow cat paw on top. - $4.75 " },
            { name: "Meowcha Latte", description: "A purr-fect blend of matcha green tea and steamed milk, topped with a sprinkle of catnip. - $5.00" },
            { name: "Kitty Kisses Tea", description: "A soothing herbal tea blend infused with hints of catnip and lavender. - $3.50" }
        ]},
        { tag: 'p', id: "pastries", text: "Pastries", items: [
            { name: "Purrfect Croissants", description: "Flaky croissants filled with your choice of chocolate, almond, or ham and cheese. - $3.25"},
            { name: "Catnip Cookies", description: "Homemade cookies infused with catnip for a delightful treat for both humans and cats. - $2.75"},
            { name: "Whisker Whirl Cupcakes:", description: "Moist cupcakes topped with fluffy buttercream frosting and decorated with edible sugar whiskers. - $3.50"},
        ]},
        { tag: 'p', id: "specialty", text: "Specialty Drinks", items: [
            { name: "Feline Fizz", description: "A refreshing sparkling lemonade with a splash of raspberry syrup, served over ice. - $4.00" },
            { name: "Kitty Concoction", description: "Our signature mocktail made with coconut water, pineapple juice, and a dash of grenadine, garnished with a cherry on top. - $5.25" },
            { name: "Whisker Wobble Smoothie", description: "A healthy blend of spinach, banana, and mango, with a sprinkle of chia seeds for added crunch. - $5.50" },
            { name: "Catnip Cooler", description: "A revitalizing blend of cucumber, mint, and lime, served as a chilled beverage. - $4.75" }
        ] },
    ]

    createTitle(content, "Menu", "menu-cat")

    data.forEach(element => {
        const container = document.createElement('div')
        container.classList.add('container')

        const subheader = document.createElement('h3')
        subheader.textContent = element.text

        const list = document.createElement('ul')

        element.items.forEach(item => {
            const listItem = document.createElement('li')
            listItem.textContent = `${item.name} - ${item.description}`
            list.appendChild(listItem)
        })
        
        container.appendChild(subheader)
        container.appendChild(list)
        content.appendChild(container)
    })
}

function contact() {
    const content = document.getElementById('content')

    const data = [
        { id: "location", header: "Location:", text: "Hazel's Kitty Cafe\n321 Purrington Ct\nWhiskerville, Catifornia, 99999" },
        { id: "phone", header: "Phone:", text: "1-800-PURR-NOW" },
        { id: "email", header: "Email:", text: "info@hazelskittycafe.com" },
        { id: "hours", header: "Hours of Operation:", text: `Mon-Fri: 9:00 AM - 6:00 PM\nSat-Sun: 9:00 AM - 8:00 PM` },
    ]

    createTitle(content, "Contact Us", "contact-cat")

    data.forEach(item => {
        const container = document.createElement('div')
        container.classList.add('container')

        const header = document.createElement('h3')
        header.textContent = item.header

        const element = document.createElement('p')
        element.textContent = item.text
        element.style.whiteSpace = "pre"

        container.appendChild(header)
        container.appendChild(element)
        content.appendChild(container)
    })
}

function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1)
}

function createTitle(content, title, imgClass) {
    const headerContainer = document.createElement('div')
    headerContainer.setAttribute("id", "title")
    
    const header = document.createElement('h1')
    header.textContent = title
    
    const imgLeft = document.createElement('img')
    const imgRight = document.createElement('img')
    imgLeft.classList.add("cat-left", imgClass)
    imgRight.classList.add("cat-right", imgClass)

    headerContainer.appendChild(imgLeft)
    headerContainer.appendChild(header)
    headerContainer.appendChild(imgRight)
    content.appendChild(headerContainer)
}

export { homepage, menu, contact }