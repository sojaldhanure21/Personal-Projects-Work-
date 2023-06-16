import Image from "next/image"
import Link from "next/link"

const EventsPage = ({data}) => {
  console.log("events_categories", data)
  return (<>
    <h1 >Event List</h1>
    <div>
      {data.map(events =>
        <div>
          <Link key={events.id} href={`/events/${events.id}`} passHref = {true}>
            <Image alt={events.title} width={300} height={300} src={events.image} />
            <h2>{events.title}</h2></Link>
        </div>
         )}
      
      

    </div>

  </>)
}

export default EventsPage

export async function getStaticProps() {
  const { events_categories} = await import('../../data/data.json')
  console.log("event_categories ", events_categories)
  return {
    props: {
      data: events_categories,
    }
  }
}


