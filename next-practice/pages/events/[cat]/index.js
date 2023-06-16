import Image from "next/image"
import Link from "next/link"

const EventsCatPage = ({ data , pageName} ) => {
    console.log("data",pageName)
    return ( <div>
        <h1> Event in {pageName} </h1>
        { data.map((ev) => {
            return( 
                <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref = {true}>
                <Image alt={ev.title} width={300} height={300} src={ev.image} />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
                </Link>)
        })

        }
    </div>
        )
}

export default EventsCatPage

export async function getStaticPaths() {
    const { events_categories } = await import('../../../data/data.json')
    const allPath = events_categories.map((paths) => {
        return {

            params: {
                cat: paths.id.toString()
            }
        }

    }


    )
    console.log(allPath)
    return {
        paths: allPath,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const id = context?.params.cat
    const { allEvents } = await import('../../../data/data.json')
    const data = allEvents.filter(ev => ev.city.toLowerCase() === id)
    console.log(data)
    return { props: { data , pageName : id} }
}