export default async function Page({ params }) {
    throw new Error
    const slug = (await params).slug
    return <div>My Post: {slug}</div>
  }