import type { ButtonDataLocation, CommonHeroProps, LocationsCardProps, SectionHeaderProps, TapS } from "../interfaces";

export const contactPageHeroData : CommonHeroProps = {
    title: "Get in Touch with Estatein",
    text: "Welcome to Estatein's Contact Us page. We're here to assist you with any inquiries, requests, or feedback you may have. Whether you're looking to buy or sell a property, explore investment opportunities, or simply want to connect, we're just a message away. Reach out to us, and let's start a conversation.",
}

// Location Section
export const LocationsHeaderData: SectionHeaderProps = {
    title: "Discover Our Office Locations",
    text: "Estatein is here to serve you across multiple locations. Whether you're looking to meet our team, discuss real estate opportunities, or simply drop by for a chat, we have offices conveniently located to serve your needs. Explore the categories below to find the Estatein office nearest to you",
};
export const locationsCardsData:LocationsCardProps[]=[
    {
        id: 1,
        title : "Main Headquarters",
        H3:"123 Estatein Plaza, City Center, Metropolis",
        text:"Our main headquarters serve as the heart of Estatein. Located in the bustling city center, this is where our core team of experts operates, driving the excellence and innovation that define us.",
        category:"International"
    },
    {
        id: 2,
        title : "Regional Offices",
        H3:"456 Urban Avenue, Downtown District, Metropolis",
        text:"Estatein's presence extends to multiple regions, each with its own dynamic real estate landscape. Discover our regional offices, staffed by local experts who understand the nuances of their respective markets.",
        category:"Regional"
    }
]
export const buttonDataLocation:ButtonDataLocation[]=[
    {
        Img:"/public/assets/icons/email.svg",
        text:"info@estatein.com"
    },
    {
        Img:"/public/assets/icons/Phone.svg",
        text:"+1 (123) 456-7890"
    },
    {
        Img:"/public/assets/icons/Location.svg",
        text:"Metropolis"
    }
]
export const TAps:TapS[]=[
    {
        id:1,
        tap:"All"
    },
    {
        id:2,
        tap:"Regional"
    },{
        id:3,
        tap:"International"
    }
]