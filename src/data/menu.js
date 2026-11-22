import { unsplash } from './restaurant'

export const signatureDishes = [
    {
        id: 1, name: 'Dum Handi Gosht', price: 895, tag: "Chef's Recommendation",
        description: 'Slow-sealed Kashmiri lamb, whole spices and browned onion, opened at the table.',
        image: unsplash('photo-1545247181-516773cae754', 1000),
    },
    {
        id: 2, name: 'Smoked Butter Chicken', price: 695, tag: 'House Classic',
        description: 'Charred tandoori chicken in a velvety tomato-butter gravy finished with kasuri methi.',
        image: unsplash('photo-1603894584373-5ac82b2ae398', 600),
    },
    {
        id: 3, name: 'Hyderabadi Dum Biryani', price: 745, tag: 'Signature',
        description: 'Aged basmati layered with saffron, mint and marinated meat, sealed and steamed.',
        image: unsplash('photo-1563379091339-03b21ab4a4f8', 600),
    },
    {
        id: 4, name: 'Malai Paneer Tikka', price: 545, tag: 'Vegetarian',
        description: 'Cottage cheese marinated in cream and cardamom, blistered in the clay oven.',
        image: unsplash('photo-1567188040759-fb8a883dc6d8', 600),
    },
    {
        id: 5, name: 'Black Dal Saffron', price: 445, tag: 'Slow-Cooked',
        description: 'Overnight-simmered black lentils, white butter and a thread of saffron cream.',
        image: unsplash('photo-1546833999-b9f581a1996d', 600),
    },
    {
        id: 6, name: 'Warm Gulab Jamun', price: 325, tag: 'Dessert',
        description: 'Khoya dumplings in rose-cardamom syrup with pistachio and cold rabri.',
        image: unsplash('photo-1571877227200-a0d98ea607e9', 600),
    },
]

export const formatINR = (n) => `₹${n.toLocaleString('en-IN')}`