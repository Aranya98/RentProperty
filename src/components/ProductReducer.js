import { createSlice } from "@reduxjs/toolkit"

const productList = {
    items: {},
    index: 0,
    item: [
        {
            id: 1,
            price: 2500,
            priceType: "month",
            img: "https://media.istockphoto.com/photos/for-rent-sign-outside-house-picture-id1311737046",
            area: "Kolkata",
            propertyType: "house",
            date: "2022-11-07",
            favourite: false
        },
        {
            id: 2,
            price: 3800,
            priceType: "month",
            img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ5uMHZviPa53Yps9uaLI8XLfTqCV2jmFQ0vcwzecm&s",
            area: "Kolkata",
            propertyType: "house",
            date: "2022-11-09",
            favourite: false
        },
        {
            id: 3,
            price: 3500,
            priceType: "month",
            img: "https://thumbs.dreamstime.com/b/classic-house-flower-garden-751996.jpg",
            area: "Kolkata",
            propertyType: "house",
            date: "2022-11-10",
            favourite: false
        },
        {
            id: 4,
            price: 3200,
            priceType: "month",
            img: "https://thumbs.dreamstime.com/z/beautiful-exterior-home-pictures-new-home-design-images-modern-best-house-design-images-best-house-images-images-latest-172194515.jpg",
            area: "Kolkata",
            propertyType: "house",
            date: "2022-11-12",
            favourite: false
        },
        {
            id: 5,
            price: 4500,
            priceType: "month",
            img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8M3x8fGVufDB8fHx8&w=1000&q=80",
            area: "Kolkata",
            propertyType: "house",
            date: "2022-11-14",
            favourite: false
        },
        {
            id: 6,
            price: 5500,
            priceType: "month",
            img: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=600",
            area: "Kolkata",
            propertyType: "flat",
            date: "2022-11-06",
            favourite: false
        },
        {
            id: 7,
            price: 6800,
            priceType: "month",
            img: "https://images.pexels.com/photos/2102587/pexels-photo-2102587.jpeg?auto=compress&cs=tinysrgb&w=600",
            area: "Mumbai",
            propertyType: "house",
            date: "2022-11-07",
            favourite: false
        },
        {
            id: 8,
            price: 5300,
            priceType: "month",
            img: "https://media.gettyimages.com/photos/large-multicondos-building-blocks-with-bicycles-lane-picture-id1174752803?s=612x612",
            area: "Mumbai",
            propertyType: "flat",
            date: "2022-11-10",
            favourite: false
        },
        {
            id: 9,
            price: 3000,
            priceType: "month",
            img: "https://5.imimg.com/data5/UU/NB/QJ/ANDROID-92035713/1572882152419-jpg-500x500.jpg",
            area: "Mumbai",
            propertyType: "flat",
            date: "2022-11-11",
            favourite: false
        },
        {
            id: 10,
            price: 5500,
            priceType: "month",
            img: "https://media.istockphoto.com/photos/europe-modern-complex-of-residential-buildings-picture-id1165384568?b=1&k=20&m=1165384568&s=612x612&w=0&h=PJJK6i7kHn2VOJlapFHlm1Cb-8W6-QS8h4jarMswK0I=",
            area: "Mumbai",
            propertyType: "flat",
            date: "2022-11-13",
            favourite: false
        },
        {
            id: 11,
            price: 5000,
            priceType: "month",
            img: "https://images.adsttc.com/media/images/61b1/016a/f91c/810c/6900/000f/large_jpg/Art-Moderne-House-Style.jpg?1638990167",
            area: "Mumbai",
            propertyType: "house",
            date: "2022-11-17",
            favourite: false
        },
        {
            id: 12,
            price: 700,
            priceType: "month",
            img: "https://i.pinimg.com/550x/fc/07/40/fc0740d7c26d93974e117cb88a81bc36.jpg",
            area: "Mumbai",
            propertyType: "house",
            date: "2022-11-08",
            favourite: false
        }
    ],
    favItem: []

}

const productSlice = createSlice({
    name: "product",
    initialState: productList,
    reducers: {
        addItem(state, action) {
            state.favItem.push(action.payload)
        },
        removeItem(state, action) {
            state.favItem.splice(action.payload.id, 1)
        },
        changeFavValue(state, actions) {
            state.item.filter((obj) => obj.id === actions.payload.id)[0].favourite = actions.payload.value;
            console.log(actions.payload)
        }

    }
})

export const { addItem, removeItem, changeFavValue } = productSlice.actions
export default productSlice.reducer