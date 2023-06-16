import Image from "next/image"
import Link from "next/link"

const Page = ({data}) => {
    console.log(data)
    return (<div> 
        <Image src = {data.image}  width = {1000} height = {500} />
        <h1> {data.title}</h1>
        <p> {data.description}</p></div>
                    )
}

export default Page

export async function getStaticPaths() {
    const data = await import('../../../data/data.json')
    const allEvents = data.allEvents
    console.log(allEvents)
    const allPaths = allEvents.map((path) => {
        return {
            params: {
                cat: path.city,
                id: path.id,
            }
        }
    })
    return { paths: allPaths, fallback: false }
} 

export async function getStaticProps (context){
    
    const {allEvents} = await import('../../../data/data.json')
    const id = context?.params.id
    const event = allEvents.find (ev => ev.id === id)
    console .log(event)
    return {
        props : { data : event}
    }
}