const products = [
	// Coffee
	{
		name: "Irish coffee",
		description: "Fragrant black coffee with Jameson Irish whiskey and whipped milk",
		price: 7.00,
		category: "coffee",
		image: "images/menu/coffee/coffee-1.jpg",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Cinnamon", "Syrup"]
	},
	{
		name: "Kahlua coffee",
		description: "Classic coffee with milk and Kahlua liqueur under a cap of frothed milk",
		price: 7.00,
		category: "coffee",
		image: "images/menu/coffee/coffee-2.jpg",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Cinnamon", "Syrup"]
	},
	{
		name: "Honey raf",
		description: "Espresso with frothed milk, cream and aromatic honey",
		price: 5.50,
		category: "coffee",
		image: "images/menu/coffee/coffee-3.jpg",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Cinnamon", "Syrup"]
	},
	{
		name: "Ice cappuccino",
		description: "Cappuccino with soft thick foam in summer version with ice",
		price: 5.00,
		category: "coffee",
		image: "images/menu/coffee/coffee-4.jpg",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Cinnamon", "Syrup"]
	},
	{
		name: "Espresso",
		description: "Classic black coffee",
		price: 4.50,
		category: "coffee",
		image: "images/menu/coffee/coffee-5.jpg",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Cinnamon", "Syrup"]
	},
	{
		name: "Latte",
		description: "Espresso coffee with the addition of steamed milk and dense milk foam",
		price: 5.50,
		category: "coffee",
		image: "images/menu/coffee/coffee-6.jpg",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Cinnamon", "Syrup"]
	},
	{
		name: "Latte macchiato",
		description: "Espresso with frothed milk and chocolate",
		price: 5.50,
		category: "coffee",
		image: "images/menu/coffee/coffee-7.jpg",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Cinnamon", "Syrup"]
	},
	{
		name: "Coffee with cognac",
		description: "Fragrant black coffee with cognac and whipped cream",
		price: 6.50,
		category: "coffee",
		image: "images/menu/coffee/coffee-8.jpg",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Cinnamon", "Syrup"]
	},

	// Tea
	{
		name: "Moroccan",
		description: "Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint",
		price: 4.50,
		category: "tea",
		image: "images/menu/tea/tea-1.png",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Lemon", "Syrup"]
	},
	{
		name: "Ginger",
		description: "Original black tea with fresh ginger, lemon and honey",
		price: 5.00,
		category: "tea",
		image: "images/menu/tea/tea-2.png",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Lemon", "Syrup"]
	},
	{
		name: "Cranberry",
		description: "Invigorating black tea with cranberry and honey",
		price: 5.00,
		category: "tea",
		image: "images/menu/tea/tea-3.png",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Lemon", "Syrup"]
	},
	{
		name: "Sea buckthorn",
		description: "Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon",
		price: 5.50,
		category: "tea",
		image: "images/menu/tea/tea-4.png",
		sizes: {
			s: "200 ml",
			m: "300 ml",
			l: "400 ml"
		},
		additives: ["Sugar", "Lemon", "Syrup"]
	},

	// Dessert
	{
		name: "Marble cheesecake",
		description: "Philadelphia cheese with lemon zest on a light sponge cake and red currant jam",
		price: 3.50,
		category: "dessert",
		image: "images/menu/dessert/dessert-1.png",
		sizes: {
			s: "50 g",
			m: "100 g",
			l: "200 g"
		},
		additives: ["Berries", "Nuts", "Jam"]
	},
	{
		name: "Red velvet",
		description: "Layer cake with cream cheese frosting",
		price: 4.00,
		category: "dessert",
		image: "images/menu/dessert/dessert-2.png",
		sizes: {
			s: "50 g",
			m: "100 g",
			l: "200 g"
		},
		additives: ["Berries", "Nuts", "Jam"]
	},
	{
		name: "Cheesecakes",
		description: "Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar",
		price: 4.50,
		category: "dessert",
		image: "images/menu/dessert/dessert-3.png",
		sizes: {
			s: "50 g",
			m: "100 g",
			l: "200 g"
		},
		additives: ["Berries", "Nuts", "Jam"]
	},
	{
		name: "Creme brulee",
		description: "Delicate creamy dessert in a caramel basket with wild berries",
		price: 4.00,
		category: "dessert",
		image: "images/menu/dessert/dessert-4.png",
		sizes: {
			s: "50 g",
			m: "100 g",
			l: "200 g"
		},
		additives: ["Berries", "Nuts", "Jam"]
	},
	{
		name: "Pancakes",
		description: "Tender pancakes with strawberry jam and fresh strawberries",
		price: 4.50,
		category: "dessert",
		image: "images/menu/dessert/dessert-5.png",
		sizes: {
			s: "50 g",
			m: "100 g",
			l: "200 g"
		},
		additives: ["Berries", "Nuts", "Jam"]
	},
	{
		name: "Honey cake",
		description: "Classic honey cake with delicate custard",
		price: 4.50,
		category: "dessert",
		image: "images/menu/dessert/dessert-6.png",
		sizes: {
			s: "50 g",
			m: "100 g",
			l: "200 g"
		},
		additives: ["Berries", "Nuts", "Jam"]
	},
	{
		name: "Chocolate cake",
		description: "Cake with hot chocolate filling and nuts with dried apricots",
		price: 5.50,
		category: "dessert",
		image: "images/menu/dessert/dessert-7.png",
		sizes: {
			s: "50 g",
			m: "100 g",
			l: "200 g"
		},
		additives: ["Berries", "Nuts", "Jam"]
	},
	{
		name: "Black forest",
		description: "A combination of thin sponge cake with cherry jam and light chocolate mousse",
		price: 6.50,
		category: "dessert",
		image: "images/menu/dessert/dessert-8.png",
		sizes: {
			s: "50 g",
			m: "100 g",
			l: "200 g"
		},
		additives: ["Berries", "Nuts", "Jam"]
	}
];